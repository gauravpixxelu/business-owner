import React from 'react';
import { useEffect } from 'react';
import Web_Logo2 from '../assets/images/logo-2.png';
import Linkedin from '../assets/icons/linkedin.png';
import Web_Logo1 from '../assets/images/logo-1.png';
import Web_Logo3 from '../assets/images/logo-3.png';
import Web_Logo4 from '../assets/images/logo-4.png';
import Web_Logo5 from '../assets/images/logo-5.png';
import Person2 from '../assets/images/person-2.jpg';
import Person1 from '../assets/images/person-1.jpg';
import Person3 from '../assets/images/person-3.jpg';
import Person4 from '../assets/images/person-4.jpg';
import Person5 from '../assets/images/person-5.jpg';
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
                        <div className="col-md-4" data-aos="fade-up">
                            <div className="text-block-impli">
                                <div className="text-block-top">
                                    <h5 className="hdng-h5">Build 2 Grow</h5>
                                </div>
                                <div className="text-block-middle">
                                    <div className="text-block-middle-image">
                                        <img src={Person4} alt="Person1" />
                                        <div className="logo-op">
                                            <img src={Web_Logo4} alt="Web_Logo2" />
                                        </div>
                                    </div>
                                    <div className="text-block-middle-links">
                                        <div className="person-about">
                                            <h5>Hans V Rensburg</h5>
                                            <p><NavLink to="mailto:info@build2grow.com">info@build2grow.com</NavLink></p>
                                            <p><NavLink to="tel:(+27)0792395607">(+27)0792395607</NavLink></p>
                                        </div>
                                        <ul>
                                            <li><NavLink to="https://www.linkedin.com/company/build2grow-business-advisors/about/" target="_blank "><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                                            <li><NavLink to="https://www.build2grow.com" target="_blank" rel="noreferrer">www.build2grow.com</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-block-bottom">
                                    <p className="hdng-18">Pretoria, South Africa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="text-block-impli">
                                <div className="text-block-top">
                                    <h5 className="hdng-h5">At Accounting</h5>
                                </div>
                                <div className="text-block-middle">
                                    <div className="text-block-middle-image">
                                        <img src={Person5} alt="Person2" />
                                        <div className="logo-op">
                                            <img src={Web_Logo5} alt="Web_Logo1" />
                                        </div>
                                    </div>
                                    <div className="text-block-middle-links">
                                        <div className="person-about">
                                            <h5>Rianie Taljaard</h5>
                                            <p><NavLink to="mailto:rianie@ataccounting.co.za">rianie@ataccounting.co.za</NavLink></p>
                                            <p><NavLink to="tel:(+27)0828964864">(+27)0828964864</NavLink></p>
                                        </div>
                                        <ul>
                                            <li><NavLink to="https://www.linkedin.com/in/rianie-taljaard-72895372/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                                            <li><NavLink to="https://www.ataccounting.co.za" target="_blank" rel="noreferrer">www.ataccounting.co.za</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-block-bottom">
                                    <p className="hdng-18">Johannesburg, South Africa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="text-block-impli">
                                <div className="text-block-top">
                                    <h5 className="hdng-h5">Cobus Visser Viking</h5>
                                </div>
                                <div className="text-block-middle">
                                    <div className="text-block-middle-image">
                                        <img src={Person1} alt="Person2" />
                                        <div className="logo-op">
                                            <img src={Web_Logo2} alt="Web_Logo2" />
                                        </div>
                                    </div>
                                    <div className="text-block-middle-links">
                                        <div className="person-about">
                                            <h5>Cobus Visser</h5>
                                            <p><NavLink to="mailto:info@cobusvisser.com">info@cobusvisser.com</NavLink></p>
                                            <p><NavLink to="tel:(+27)0824642372">(+27)0824642372</NavLink></p>
                                        </div>
                                        <ul>
                                            <li><NavLink to="https://www.linkedin.com/company/cobusvisser" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                                            <li><NavLink to="https:/www.cobusvisser.myclickfunnels.com" target="_blank" rel="noreferrer">www.cobusvisser.myclickfunnels.com</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-block-bottom">
                                    <p className="hdng-18">Johannesburg, South Africa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="text-block-impli">
                                <div className="text-block-top">
                                    <h5 className="hdng-h5">One-Intent</h5>
                                </div>
                                <div className="text-block-middle">
                                    <div className="text-block-middle-image">
                                        <img src={Person2} alt="Person2" />
                                        <div className="logo-op">
                                            <img src={Web_Logo1} alt="Web_Logo1" />
                                        </div>
                                    </div>
                                    <div className="text-block-middle-links">
                                        <div className="person-about">
                                            <h5>Christo Olwagen</h5>
                                            <p><NavLink to="mailto:christo@one-intent.co.za">christo@one-intent.co.za</NavLink></p>
                                            <p><NavLink to="tel:(+27)0836290428">(+27)0836290428</NavLink></p>
                                        </div>
                                        <ul>
                                            <li><NavLink to="https://www.linkedin.com/in/olwagen" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                                            <li><NavLink to="https://www.one-intent.co.za" target="_blank" rel="noreferrer">www.one-intent.co.za</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-block-bottom">
                                    <p className="hdng-18">Bryanston, South Africa</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4" data-aos="fade-up">
                            <div className="text-block-impli">
                                <div className="text-block-top">
                                    <h5 className="hdng-h5">GWI Global</h5>
                                </div>
                                <div className="text-block-middle">
                                    <div className="text-block-middle-image">
                                        <img src={Person3} alt="Person2" />
                                        <div className="logo-op">
                                            <img src={Web_Logo3} alt="Web_Logo1" />
                                        </div>
                                    </div>
                                    <div className="text-block-middle-links">
                                        <div className="person-about">
                                            <h5>Grant Lintnaar</h5>
                                            <p><NavLink to="mailto:grantlintnaar7@gmail.com">grantlintnaar7@gmail.com</NavLink></p>
                                            <p><NavLink to="tel:(+27)0729940700">(+27)0729940700</NavLink></p>
                                        </div>
                                        <ul>
                                            <li><NavLink to="https://www.linkedin.com/in/grant-lintnaar-20573217/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin" /></NavLink></li>
                                            <li><NavLink to="https://www.gwiglobal.co.za" target="_blank" rel="noreferrer">www.gwiglobal.co.za</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-block-bottom">
                                    <p className="hdng-18">Kimberley, South Africa</p>
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