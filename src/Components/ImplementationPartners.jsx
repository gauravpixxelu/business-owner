import React from 'react';
import { useEffect } from 'react';
import Web_Logo2 from '../assets/images/logo-2.png';
import Linkedin from '../assets/icons/linkedin.png';
import Web_Logo1 from '../assets/images/logo-1.png';
import Person2 from '../assets/images/person-2.jpg';
import Person1 from '../assets/images/person-1.jpg';
import { NavLink } from "react-router-dom";

function ImplementationPartners() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        
        <div className="implementation-partners-page">


            {/* Banner Section Starts */}

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content" data-aos="fade-right">
                                <h1>Implementation Partners</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section Ends */}


            {/* Impliment Section Starts */}

            <section className="id-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="text-block-impli">
                                <div className="text-block-top">
                                    <h5 className="hdng-h5">Cobusvisser</h5>
                                </div>
                                <div className="text-block-middle">
                                    <div className="text-block-middle-links">
                                        <img src={Web_Logo2} alt="Web_Logo2" />
                                        <ul>
                                            <li><NavLink to="https://www.linkedin.com/company/cobusvisser" target="_blank "><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                                            <li><NavLink to="https://www.oneintent.co" target="_blank">www.oneintent.com</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="text-block-middle-image">
                                        <img src={Person1} alt="Person1" />
                                    </div>
                                </div>
                                <div className="text-block-bottom">
                                    <p className="hdng-18">Johannesburg, South Africa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6" data-aos="fade-right">
                            <div className="text-block-impli">
                                <div className="text-block-top">
                                    <h5 className="hdng-h5">Oneintent</h5>
                                </div>
                                <div className="text-block-middle">
                                    <div className="text-block-middle-links">
                                        <img src={Web_Logo1} alt="Web_Logo1" />
                                        <ul>
                                            <li><NavLink to="https://www.linkedin.com/in/olwagen" target="_blank"><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                                            <li><NavLink to="https://www.cobusvisser.com" target="_blank">www.cobusvisser.com</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="text-block-middle-image">
                                        <img src={Person2} alt="Person2" />
                                    </div>
                                </div>
                                <div className="text-block-bottom">
                                    <p className="hdng-18">Johannesburg, South Africa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impliment Section Ends */}


        </div>

    )
}


export default ImplementationPartners