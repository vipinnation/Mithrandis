import React from 'react'
import { NavLink } from 'react-router-dom'
import headerSVG from '../../assets/images/header-image.svg'
import { Helmet } from 'react-helmet'
import shape1 from '../../assets/images/shape/shape-1.svg'
import shape2 from '../../assets/images/shape/shape-2.svg'
import shape3 from '../../assets/images/shape/shape-3.svg'
import shape4 from '../../assets/images/shape/shape-4.svg'

const HomeComponent = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Mithrandis</title>

            </Helmet>
            <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">
                <div className="hero_shape shape_1">
                    <img src={shape1} alt="shape" />
                </div>
                <div className="hero_shape shape_2">
                    <img src={shape2} alt="shape" />
                </div>
                <div className="hero_shape shape_3">
                    <img src={shape3} alt="shape" />
                </div>
                <div className="hero_shape shape_4">
                    <img src={shape4} alt="shape" />
                </div>
                <div className="hero_shape shape_6">
                    <img src={shape1} alt="shape" />
                </div>
                <div className="hero_shape shape_7">
                    <img src={shape4} alt="shape" />
                </div>
                <div className="hero_shape shape_8">
                    <img src={shape3} alt="shape" />
                </div>
                <div className="hero_shape shape_9">
                    <img src={shape2} alt="shape" />
                </div>
                <div className="hero_shape shape_10">
                    <img src={shape4} alt="shape" />
                </div>
                <div className="hero_shape shape_11">
                    <img src={shape2} alt="shape" />
                </div>
                <div className="hero_shape shape_12">
                    <img src={shape2} alt="shape" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="w-full lg:w-1/2">
                            <div className="header_hero_content pt-150 lg:pt-0">
                                <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">Take Your First<span className="text-theme-color mx-2">Quiz</span></h2>
                                <p className="mt-8 lg:mr-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                <div className="hero_btn mt-10">
                                    <NavLink className="main-btn" exact to="/quiz/instruction">Get Started</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_shape hidden lg:block"></div>

                <div className="header_image flex items-center">
                    <div className="image 2xl:pl-25">
                        <img src={headerSVG} alt="Header Image" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomeComponent
