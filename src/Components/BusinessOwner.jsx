import React from 'react';
import Popup from './Popup';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Banner_Img_Bg from '../assets/images/banner-img-bg.png';
import About_Sec from '../assets/images/about-sec.png';
import Stars from '../assets/icons/stars.png';
import Check from '../assets/icons/check.svg';
import Image1 from '../assets/images/image1.png';
import Circle_Shape from '../assets/images/circle-shape.png';
import Right_Arrow from '../assets/images/right-arrow.png';
import Left_Arrow from '../assets/images/left-arrow.png';
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';
import Carousel_Logo1 from '../assets/images/logo-1.jpg';
import Carousel_Logo2 from '../assets/images/logo-2.jpg';
import Carousel_Logo3 from '../assets/images/logo-3.jpg';
import Carousel_Logo4 from '../assets/images/logo-4.jpg';
import Carousel_Logo5 from '../assets/images/logo-5.jpg';
import Carousel_Logo6 from '../assets/images/logo-6.jpg';
import Carousel_Logo7 from '../assets/images/logo-7.jpg';
import Carousel_Logo8 from '../assets/images/logo-8.jpg';
import Carousel from 'react-multi-carousel';
import ContactForm from './ContactForm';


import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};


const testimonial = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function BusinessOwner() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (

        
        <div className="business-owner-page">

            {/* Banner Section Starts */}

            <section className="banner">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-content">
                                <h1>Business Growth Blueprint</h1>
                                <p>Diagnose, Forecast and structure how to take your business to the next level.</p>
                                <h3>Gap analysis at No Charge</h3>
                                <h5>Only 15€ for the full report.</h5>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="banner-image">
                                <Popup />
                                <img className="gdxo" src={Banner_Img_Bg} alt="Banner_Img_Bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Banner Section Ends */}

            {/* Curve Section Starts */}

            <section className="curve">
                <div className="container">
                    <div className="curve-content"></div>
                    <div className="curve-text" data-aos="fade-up">
                        <p>Schedule a meeting and see how RED3SIXTY will help you through a guided tour.</p>
                        <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                    </div>
                </div>
            </section>

            {/* Curve Section Ends */}


            {/* About Section Starts */}

            <section className="about-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="about-block-content">
                                <h4 className="small-hdn">ABOUT RED3SIXTY</h4>
                                <h2 className="hdng">Whether you manage or own a small or large business the platform will accurately predict your ability to succeed</h2>
                                <p className="hdng-16">The Business Builder framework is designed to accurately determine at what stage your business is at present while at the same time highlighting critical areas to focus on to ensure your business grows and succeeds in the long term.</p>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="about-block-image">
                                <img src={About_Sec} alt="About_Sec" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section Ends */}


            {/* Logo Slder Section Ends */}

            <section className="logo-carousel">
                <div className="container" >
                <h2 className="sec-hdng" data-aos="fade-up">Excellent <img src={Stars} alt="Stars" /> 4.12 Based On 1258 Reviews</h2>
                    <Carousel responsive={testimonial} infinite={true} data-aos="fade-up">
                        <div className="testimonial-txt">
                        <h5 className="hdng-h5">Kethani</h5>
                        <p className="hdng-16">Verified Customer</p>
                        <p className="hdng-18">Very happy it helping me to improve the business operations</p>
                        </div>

                        <div className="testimonial-txt">
                        <h5 className="hdng-h5">John</h5>
                        <p className="hdng-16">Verified Customer</p>
                        <p className="hdng-18">Loving applying the knowledge to the business on a daily basis</p>
                        </div>

                        <div className="testimonial-txt">
                        <h5 className="hdng-h5">Faith</h5>
                        <p className="hdng-16">Verified Customer</p>
                        <p className="hdng-18">Catalysed a lot of things to think about and implement!</p>
                        </div>

                        <div className="testimonial-txt">
                        <h5 className="hdng-h5">Virginia</h5>
                        <p className="hdng-16">Verified Customer</p>
                        <p className="hdng-18">Challenging the way, the business is conducted. Helping with customer negotiations</p>
                        </div>
                    </Carousel>
                </div>
            </section>
            {/* Logo Slder Section Ends */}


            {/* Video Section Starts */}

            <section className="home-points">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="points-video">
                                <iframe width="100%" height="350" autoplay="autoplay" muted="muted" src="https://www.youtube.com/embed/WOuoVRFaB4g" title="YouTube video player" frameborder="0" ></iframe>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="points-content ">
                                <ul className="site-ul">
                                    <li><img src={Check} alt="Check" />Gain Insights into 10 building blocks aimed at growing your business</li>
                                    <li><img src={Check} alt="Check" />Improve product and service profitability</li>
                                    <li><img src={Check} alt="Check" />Increase your market share and improve customer targeting</li>
                                    <li><img src={Check} alt="Check" />Increase referrals, more up and cross-sell opportunities</li>
                                    <li><img src={Check} alt="Check" />Increase marketing and sales leads</li>
                                    <li><img src={Check} alt="Check" />Sales performance improvement resulting in increased conversion</li>
                                    <li><img src={Check} alt="Check" />Increase employee engagement and better succession planning</li>
                                    <li><img src={Check} alt="Check" />Compliance with best practice governance framework</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section Ends */}


            {/* Consulting Section Starts */}

            <section className="platform-block">
                <div className="container">
                    <div className="row platform-1">
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h2 className="hdng">You get a 10 Page Business Diagnostic Report showing you where you need to focus</h2>
                                <p className="hdng-16">The Business Builder uses an algorithm developed by incorporating the lessons and insights gained from working with 1000s of business owners over the last 15 years.</p>
                                <p className="hdng-16">By applying the results you will be able to drastically increase your chance of building a sustainable business in the shortest time.</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <a href="/pdf/business-builder.pdf" className="custom-btn-2" download><span>Download Example</span></a>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo" src={Image1} alt="Image1" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <img className="vector gd" src={Right_Arrow} alt="Right_Arrow" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6" data-aos="fade-right">
                            <div className="banner-image">
                                <img className="abxo" src={Image2} alt="Image2" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left">
                            <div className="platform-txt">
                                <h2 className="hdng">We apply a structured engagement model including both online consultation and online diagnostic gap analysis. We focus on:</h2>
                                <p className="hdng-16">1. Increased revenue generation capability & improved profit margins</p>
                                <p className="hdng-16">2. On critical business growth areas while at the same time areas that needs attention</p>
                                <p className="hdng-16">3. Ensure governance compliance and return on investment for shareholders</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="https://youtu.be/WOuoVRFaB4g" className="custom-btn-2" target="_blank"><span>Watch Video</span></NavLink>
                            </div>
                        </div>
                        <img className="vector dg" src={Left_Arrow} alt="Left_Arrow" />
                    </div>

                    <div className="row platform-3">
                        <div className="col-md-6">
                            <div className="platform-txt" data-aos="fade-left">
                                <h2 className="hdng">Business Valuation</h2>
                                <p className="hdng-16">We will provide you with a detailed valuation and strategic analysis to assist you and your customer with building a successful and scalable business.</p>
                                <p className="hdng-16">Based on their Analysis Score we are able to calculate the value of their business today and then estimate the value that you can add by working together on the development.</p>
                                <NavLink to="https://youtu.be/qKywLbJRfx8" className="custom-btn" target="_blank"><span>Watch Demo</span></NavLink>
                                <NavLink to="https://youtu.be/WOuoVRFaB4g" className="custom-btn-2" target="_blank"><span>Watch Video</span></NavLink>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image" data-aos="fade-right">
                                <img className="abxo" src={Image3} alt="Image3" />
                                <img className="gdxo" src={Circle_Shape} alt="Circle_Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Section Ends */}

            {/* Logo Slder Section Ends */}

            <section className="logo-carousel">
                <div className="container">
                <h2 className="sec-hdng" data-aos="fade-up">Customers Worked With</h2>
                    <Carousel responsive={responsive} infinite={true} data-aos="fade-up">
                        <img src={Carousel_Logo1} alt="Carousel_Logo1" />
                        <img src={Carousel_Logo2} alt="Carousel_Logo2" />
                        <img src={Carousel_Logo3} alt="Carousel_Logo3" />
                        <img src={Carousel_Logo4} alt="Carousel_Logo4" />
                        <img src={Carousel_Logo5} alt="Carousel_Logo5" />
                        <img src={Carousel_Logo6} alt="Carousel_Logo6" />
                        <img src={Carousel_Logo7} alt="Carousel_Logo7" />
                        <img src={Carousel_Logo8} alt="Carousel_Logo8" />
                    </Carousel>
                </div>
            </section>
            {/* Logo Slder Section Ends */}

            {/* Book Demo Section Starts */}

            <section className="book-block">
                <div className="container">
                    <div className="consulting-hdngs" data-aos="fade-up">
                        <h2 className="sec-hdng">Book your consultation today.</h2>
                        <p className="hdng-16">One of our trusted advisors will contact you to assist you with completing the diagnostic and reviewing the results at no cost</p>
                    </div>
                    <ContactForm />
                    <p className="hdng-16 text-center" data-aos="fade-up"><b>Our promise: </b>We will NEVER share your personal information and will under no circumstances try and sell you services you do not require or want</p>
                </div>
            </section>

            {/* Book Demo Section Ends */}


        </div>

    )
}


export default BusinessOwner