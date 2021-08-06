import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import HandleScore from './HandleScore'
import Questionaire from './Questionaire'


const QuizQuestion = () => {

    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [numberOfQuestionAttemped, setNumberOfQuestionAttemped] = useState(0)
    const [numberofWrongAnswered, setNumberOfWrongAnswered] = useState(0)
    const [wrongAnsweredQuestion, setWrongAnsweredQuestion] = useState([])
    const [rightAnsweredQuestion, setRightAnsweredQuestion] = useState([])


    const API_URL = "https://opentdb.com/api.php?amount=10&category=18&type=multiple"

    useEffect(() => {

        axios.get(API_URL).then(res => {
            const mcq = res.data.results.map((question) => ({
                ...question,
                answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
            }))
            setQuestions(mcq)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const handleAnswer = (answer) => {
        if (answer === questions[currentIndex].correct_answer) {
            setScore(score + 1)
            let rightAnswer = {
                question: questions[currentIndex].question,
                inputAnswer: answer,
                correct_answer: questions[currentIndex].correct_answer
            }

            setRightAnsweredQuestion(rightAnsweredQuestion => [...rightAnsweredQuestion, rightAnswer])
        }

        if (answer !== questions[currentIndex].correct_answer) {
            setNumberOfWrongAnswered(numberofWrongAnswered + 1)


            let response = {
                question: questions[currentIndex].question,
                inputAnswer: answer,
                correct_answer: questions[currentIndex].correct_answer
            }

            setWrongAnsweredQuestion(wrongAnsweredQuestion => [...wrongAnsweredQuestion, response]);

        }
        setCurrentIndex(currentIndex + 1)
        setNumberOfQuestionAttemped(numberOfQuestionAttemped + 1)

    }
    return (

        <div>
            <Helmet>
                <title>Quiz Question - Mithrandis</title>
            </Helmet>

            <div className="services_area pt-120">
                <div className='pb-4'>
                    {questions.length ? (<div>
                        {currentIndex >= questions.length ? (
                            <div><HandleScore score={score} numberOfQuestionAttemped={numberOfQuestionAttemped} numberofWrongAnswered={numberofWrongAnswered}
                                wrongAnsweredQuestion={wrongAnsweredQuestion} rightAnsweredQuestion={rightAnsweredQuestion} /></div>
                        ) : <Questionaire handleAnswer={handleAnswer} data={questions[currentIndex]} currentIndex={currentIndex} />}
                    </div>) : (<div className='flex items-center justify-center py-8'>
                        <h2 className='text-2xl font-bold'>Loading ...</h2>
                    </div>)}
                </div>
            </div>

        </div>
    )
}

export default QuizQuestion
