import React from 'react'

const HandleScore = (props) => {
    return (
        <div className="services_area  ">
            <div className='w-1/2 mx-auto m-w-96'>
                <div className='text-center'>
                    <h2 className='  text-2xl font-bold'>Scoreboard</h2>
                    <span>For More Quiz , Login</span>
                </div>

                <div className='py-4'>
                    <span>Your Score is {props.score}</span> <br />
                    <span>Number of Question Attemped  {props.numberOfQuestionAttemped} out of 10</span> <br />
                    <span>Wrong Answer  {props.numberofWrongAnswered} </span><br />
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Right Answer given</h3>
                    {props.rightAnsweredQuestion.map(que => <div className='py-2'>
                        <p>Question :   <span dangerouslySetInnerHTML={{ __html: que.question }}></span></p>
                        <p>Correct Answer : {que.correct_answer}</p>
                        <p>Your Answer : {que.inputAnswer}</p>

                    </div>)}
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Wrong Answer given</h3>
                    {props.wrongAnsweredQuestion.map(que => <div className='py-2'>
                        <p>Question :   <span dangerouslySetInnerHTML={{ __html: que.question }}></span></p>
                        <p>Correct Answer : {que.correct_answer}</p>
                        <p>Your Answer : {que.inputAnswer}</p>

                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default HandleScore
