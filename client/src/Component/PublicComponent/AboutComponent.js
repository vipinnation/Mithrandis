import React from 'react'
import { Helmet } from 'react-helmet'

const AboutComponent = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About - Mithrandis</title>
 
            </Helmet>
            <section class="services_area pt-120" id="about">
                <div class="container">
                    <div class="row justify-center">
                        <div class="w-full lg:w-1/2">
                            <div class="section_title text-center pb-6">
                                <h5 class="sub_title">About</h5>
                                <h4 class="main_title">Work Process</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-center">
                        <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                            <div class="single_services text-center mt-8 mx-3">
                                <div class="services_icon">
                                    <i class="lni lni-write"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                        <path class="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                                    </svg>
                                </div>
                                <div class="services_content mt-5">
                                    <h3 class="services_title text-black font-semibold text-xl md:text-3xl">Research</h3>
                                    <p class="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                            <div class="single_services text-center mt-8 mx-3">
                                <div class="services_icon">
                                    <i class="lni lni-bulb"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                        <path class="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                                    </svg>
                                </div>
                                <div class="services_content mt-5">
                                    <h3 class="services_title text-black font-semibold text-xl md:text-3xl">Prototype</h3>
                                    <p class="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                            <div class="single_services text-center mt-8 mx-3">
                                <div class="services_icon">
                                    <i class="lni lni-checkmark-circle"></i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                        <path class="services_shape" id="Polygon_12" data-name="Polygon 12" d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z" />
                                    </svg>
                                </div>
                                <div class="services_content mt-5">
                                    <h3 class="services_title text-black font-semibold text-xl md:text-3xl">Build</h3>
                                    <p class="mt-4">Lorem ipsum dolor sit amet, consetetur sadi aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="why" class="about_area pt-120 relative">
                <div class="about_image flex items-end justify-end">
                    <div class="image lg:pr-13">
                        <img src="assets/images/about.svg" alt="about" />
                    </div>
                </div>
                <div class="container">
                    <div class="row justify-end">
                        <div class="w-full lg:w-1/2">
                            <div class="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
                                <div class="section_title pb-9">
                                    <h5 class="sub_title">Why Choose Us</h5>
                                    <h4 class="main_title">Your Goal is Our Achievement</h4>
                                </div>
                                <p>Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergren, no sea takimata sanctus. </p>
                                <ul class="about_list pt-3">
                                    <li class="flex mt-5">
                                        <div class="about_check">
                                            <i class="lni lni-checkmark-circle"></i>
                                        </div>
                                        <div class="about_list_content pl-5 pr-2">
                                            <p>Vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                        </div>
                                    </li>
                                    <li class="flex mt-5">
                                        <div class="about_check">
                                            <i class="lni lni-checkmark-circle"></i>
                                        </div>
                                        <div class="about_list_content pl-5 pr-2">
                                            <p>At vero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                        </div>
                                    </li>
                                    <li class="flex mt-5">
                                        <div class="about_check">
                                            <i class="lni lni-checkmark-circle"></i>
                                        </div>
                                        <div class="about_list_content pl-5 pr-2">
                                            <p>Dvero eos et accusam et justo duo dolores et rebum. Stet clita kasd gubergrenv</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" class="team_area bg-gray pt-120 pb-120">
                <div class="container">
                    <div class="row justify-center">
                        <div class="w-full lg:w-1/2">
                            <div class="section_title text-center pb-6">
                                <h5 class="sub_title">Team</h5>
                                <h4 class="main_title">Meet Our Team Members</h4>
                            </div>
                        </div>
                    </div>
                    <div class="team-wrapper relative">
                        <div class="row team_active">
                            <div class="w-full lg:w-4/12">
                                <div class="single_team_item mx-auto">
                                    <div class="single_team mx-3">
                                        <div class="team_image relative">
                                            <img src="assets/images/team-1.jpg" alt="team" class="w-full" />
                                            <ul class="social absolute top-4 right-8">
                                                <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                                <li><a href="#"><i class="lni lni-twitter-filled"></i></a></li>
                                                <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="team_content py-5 px-8 relative">
                                            <h4 class="team_name text-xl md:text-2xl"><a href="#" class="text-black group-hover:text-white">Chris Dave</a></h4>
                                            <p class="mt-2 transition-all duration-300 group-hover:text-white">Founder and CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12">
                                <div class="single_team_item mx-auto">
                                    <div class="single_team mx-3">
                                        <div class="team_image relative">
                                            <img src="assets/images/team-3.jpg" alt="team" class="w-full" />
                                            <ul class="social absolute top-4 right-8">
                                                <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                                <li><a href="#"><i class="lni lni-twitter-filled"></i></a></li>
                                                <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="team_content py-5 px-8 relative">
                                            <h4 class="team_name text-xl md:text-2xl"><a href="#" class="text-black group-hover:text-white">Sarah Doe</a></h4>
                                            <p class="mt-2 transition-all duration-300 group-hover:text-white">UI Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12">
                                <div class="single_team_item mx-auto">
                                    <div class="single_team mx-3">
                                        <div class="team_image relative">
                                            <img src="assets/images/team-5.jpg" alt="team" class="w-full" />
                                            <ul class="social absolute top-4 right-8">
                                                <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                                <li><a href="#"><i class="lni lni-twitter-filled"></i></a></li>
                                                <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="team_content py-5 px-8 relative">
                                            <h4 class="team_name text-xl md:text-2xl"><a href="#" class="text-black group-hover:text-white">Rob Hope</a></h4>
                                            <p class="mt-2 transition-all duration-300 group-hover:text-white">Dr. Software Engineer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-4/12">
                                <div class="single_team_item mx-auto">
                                    <div class="single_team mx-3">
                                        <div class="team_image relative">
                                            <img src="assets/images/team-2.jpg" alt="team" class="w-full" />
                                            <ul class="social absolute top-4 right-8">
                                                <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
                                                <li><a href="#"><i class="lni lni-twitter-filled"></i></a></li>
                                                <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="team_content py-5 px-8 relative">
                                            <h4 class="team_name text-xl md:text-2xl"><a href="#" class="text-black group-hover:text-white">Micheal Jordan</a></h4>
                                            <p class="mt-2 transition-all duration-300 group-hover:text-white">Business Development Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact_area relative pt-18 pb-120">
                <div class="contact_image flex items-center justify-end">
                    <div class="image lg:pr-13">
                        <img src="assets/images/contact.svg" alt="about" />
                    </div>
                </div>

                <div class="container">
                    <div class="row justify-end">
                        <div class="w-full lg:w-1/2">
                            <div class="contact_wrapper mt-11">
                                <div class="section_title pb-4">
                                    <h5 class="sub_title">Contact</h5>
                                    <h4 class="main_title">Get In Touch</h4>
                                    <p>Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                </div>

                                <div class="contact_form">
                                    <form id="contact-form" action="assets/php/contact.php" method="POST">
                                        <div class="row">
                                            <div class="w-full md:w-1/2">
                                                <div class="mx-3">
                                                    <div class="single_form mt-8">
                                                        <input name="name" id="name" type="text" placeholder="Name" class="w-full rounded-md py-4 px-6 border border-solid border-body-color" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-full md:w-1/2">
                                                <div class="mx-3">
                                                    <div class="single_form mt-8">
                                                        <input name="email" id="email" type="email" placeholder="Email" class="w-full rounded-md py-4 px-6 border border-solid border-body-color" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-full">
                                                <div class="mx-3">
                                                    <div class="single_form mt-8">
                                                        <textarea name="message" id="message" placeholder="Message" rows="5" class="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="form-message mx-3"></p>
                                            <div class="w-full">
                                                <div class="mx-3">
                                                    <div class="single_form mt-8">
                                                        <button type="submit" class="main-btn contact-btn">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default AboutComponent
