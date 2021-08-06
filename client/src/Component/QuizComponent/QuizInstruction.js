import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
const QuizInstruction = () => {
    return (
        <div>
            <Helmet>
                <title>Quiz Instruction - Mithrandis</title>
            </Helmet>

            <div className="services_area pt-120">

                <div className='w-1/2 mx-auto m-w-80 '>
                    <div className='text-center'>
                        <h1 className='text-black text-2xl'>Before Starting Quiz</h1>
                        <p>Read this Carefully Before Starting Quiz</p>
                    </div>

                    <div className='py-4'>
                        <ul className='list-style-dot' >
                            <li >The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
                            <li>Each game consists of 15 questions.</li>
                            <li>Every question contains 4 options</li>
                            <li>Select the option which best answers the question by clicking (or selecting) it.</li>
                            <li>Using a hint by clicking the icon will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many hints as possible on a single question.</li>
                            <li>Feel free to quit (or retire from) the game at any time. In that case your score will be revealed afterwards.</li>
                            <li>The timer starts as soon as the game loads.</li>
                            <li> Let's do this if you think you've got what it takes?</li>
                        </ul>
                    </div>
                    <div className='bg-gray py-4'>
                        <NavLink exact to='/' >
                            <button type='button' className='mx-4 outBtn'>Take Me Back</button>
                        </NavLink>
                        <NavLink exact to='/play'>
                            <button type='button' className='mx-4 startBtn'>Start</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizInstruction
