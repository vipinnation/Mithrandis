import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>

            <footer className="bg-gray-100">
                <div className="flex flex-wrap justify-between px-16 pt-8 pb-4 m-px-4">

                    <div className="w-1/4 m-w-96">
                        <h2 className="text-2xl font-bold py-2">Mithrandis</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, aperiam corrupti? Consequatur
                            illo
                            delectus nihil eum quam atque voluptatem, ducimus unde velit, assumenda reiciendis.</p>
                    </div>

                    <div className="text-left m-mt-1">
                        <h3 className="text-2xl font-bold py-2">Quick Links</h3>
                        <div className="px-2"> <NavLink exact to="/" className="hover:text-gray-800 ">Home</NavLink></div>
                        <div className="px-2"> <NavLink exact to="/about" className="hover:text-gray-800 ">About</NavLink></div>
                        <div className="px-2"> <NavLink exact to="/privacy" className="hover:text-gray-800 ">Privacy</NavLink></div>

                    </div>
                    <div className='m-mt-1'>
                        <h3 className="text-2xl font-bold py-2">Resource</h3>
                        <div className="px-2"> <NavLink exact to="/about" className="hover:text-gray-800 ">Support</NavLink></div>
                        <div className="px-2"> <NavLink exact to="/contact" className="hover:text-gray-800 ">Contact</NavLink></div>
                        <div className="px-2"><NavLink exact to="/t&c" className="hover:text-gray-800 ">Terms & Condition</NavLink></div>

                    </div>


                    <div className='m-mt-1'>
                        <h3 className="text-2xl font-bold py-2"> Newsletter</h3>
                        <form action="" method="post">
                            <input type="text" className="w-full py-5 px-6 bg-white text-black rounded-full border-none"
                                placeholder="Enter Email" />

                            <button type="submit" className="bg-gray-500 px-4 py-1 rounded-lg float-right my-4 text-white hover:bg-gray-200 hover:text-black hover:font-bold">Subscribe</button>

                        </form>
                    </div>

                </div>
                <div className="line mx-4 my-1 bg-black border"></div>


                <div className="">
                    <div className="container mx-auto  py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 Mithranis </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start float-left	">
                            <a target='_blank' href="https://www.facebook.com/inkiyachotiya" className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>

                            <a target='_blank' href="https://www.instagram.com/hirola.in/" className="ml-3 text-gray-500 ">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </span>

                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
