import React from 'react'

const Questionaire = ({ handleAnswer, currentIndex , data: { question, correct_answer, answers, category } }) => {
    return (
        <div>
            <div className='w-1/2 mx-auto bg-gray-100 p-8 m-w-96'>

                <div>
                    <h2 className='py-4'>Quiz Mode</h2>
                    <span>Category : {category}</span>
                    <div>
                        <div className='flex py-2'>
                            <span className='mx-1'>Ques. {currentIndex + 1} </span>
                            <h3 dangerouslySetInnerHTML={{ __html: question }} />
                        </div>
                        <ol className='px-4'>
                            {answers.map(answer => <li className='my-4 '>
                                <span onClick={() => handleAnswer(answer)} className='bg-white px-4 m-px-1 py-1 my-4 rounded-lg optionButton cursor-pointer' dangerouslySetInnerHTML={{ __html: answer }} />
                            </li>)}



                        </ol>
                    </div>
                    {/* <div className='my-8'>
                        <button type='button' className='p-1 bg-red-200 mx-2 rounded-lg px-2 hover:bg-red-400 hover:text-white'>Previous</button>
                        <button type='button' className='p-1 bg-green-400 mx-2 rounded-lg px-2 hover:bg-green-800 hover:text-white'>Next</button>
                        <button type='button' className='p-1 bg-red-400 mx-2 rounded-lg px-2 hover:bg-red-800 hover:text-white'>Quit</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Questionaire
