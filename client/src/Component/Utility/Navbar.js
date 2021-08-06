import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import '../../assets/css/file.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)


    const showMobileNavbar = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <div>
                <div className="loader">
                    <div className="ytp-spinner">
                        <div className="ytp-spinner-container">
                            <div className="ytp-spinner-rotator">
                                <div className="ytp-spinner-left">
                                    <div className="ytp-spinner-circle"></div>
                                </div>
                                <div className="ytp-spinner-right">
                                    <div className="ytp-spinner-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="header_area">
                <div className="navbar-area bg-white">
                    <div className="container relative">
                        <div className="row items-center">
                            <div className="w-full">
                                <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                                    <NavLink className="navbar-brand mr-5" exact to='/'>
                                        <img src={logo} alt="Logo" />
                                    </NavLink>
                                    <button className="block navbar-toggler focus:outline-none lg:hidden" type="button" onClick={showMobileNavbar}>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>

                                    <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                                        <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                            <li className="nav-item ml-5 lg:ml-11">
                                                <NavLink className="page-scroll  " exact to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item ml-5 lg:ml-11">
                                                <NavLink className="page-scroll" exact to="/about">About</NavLink>
                                            </li>
                                        </ul>
                                    </div>


                                </nav>
                                {toggle ? (
                                    <div id=''>
                                        <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                            <li className="nav-item ml-5 lg:ml-11">
                                                <NavLink className="page-scroll  " exact to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item ml-5 lg:ml-11">
                                                <NavLink className="page-scroll" exact to="/about">About</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Navbar
