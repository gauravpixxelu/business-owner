import React from 'react';
import Carousel from 'react-multi-carousel';
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
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
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
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


function BusinessOwner() {
    return (
        <div className="business-owner-page">

            {/* Banner Section Starts */}

            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner-content">
                                <h1>Business Growth Blueprint</h1>
                                <p>Diagnose, Forecast and structure how to take your business to the next level.</p>
                                <h3>Gap analysis at No Charge</h3>
                                <h5>Only 15€ for the full report.</h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/banner-img.png" alt="" />
                                <img className="gdxo" src="images/banner-img-bg.png" alt="" />
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
                    <div className="curve-text">
                        <p>Schedule a meeting and see how RED3SIXTY will help you through a guided tour.</p>
                        <a href="#" className="custom-btn"><span>Book Now</span></a>
                    </div>
                </div>
            </section>

            {/* Curve Section Ends */}


            {/* About Section Starts */}

            <section className="about-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-block-content">
                                <h4 className="small-hdn">ABOUT RED3SIXTY</h4>
                                <h2 className="hdng">Whether you manage or own a small or large business the platform will accurately predict your ability to succeed</h2>
                                <p className="hdng-16">The Business Builder framework is designed to accurately determine at what stage your business is at present while at the same time highlighting critical areas to focus on to ensure your business grows and succeeds in the long term.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-block-image">
                                <img src="images/about-sec.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section Ends */}


            {/* Logo Slder Section Ends */}

            <section className="logo-carousel">
                <div className="container">
                <h2 class="sec-hdng">Excellent <img src="icons/stars.png" alt="" /> 4.12 Based On 1258 Reviews</h2>
                    <Carousel responsive={testimonial} infinite={true}>
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
                        <div className="col-md-6">
                            <div className="points-video">
                                <video autoplay="autoplay" class="myVideo" muted="muted">
                                    <source src="https://youtu.be/WOuoVRFaB4g" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="points-content ">
                                <ul className="site-ul">
                                    <li><img src="icons/check.svg" alt="" />Gain Insights into 10 building blocks aimed at growing your business</li>
                                    <li><img src="icons/check.svg" alt="" />Improve product and service profitability</li>
                                    <li><img src="icons/check.svg" alt="" />Increase your market share and improve customer targeting</li>
                                    <li><img src="icons/check.svg" alt="" />Increase referrals, more up and cross-sell opportunities</li>
                                    <li><img src="icons/check.svg" alt="" />Increase marketing and sales leads</li>
                                    <li><img src="icons/check.svg" alt="" />Sales performance improvement resulting in increased conversion</li>
                                    <li><img src="icons/check.svg" alt="" />Increase employee engagement and better succession planning</li>
                                    <li><img src="icons/check.svg" alt="" />Compliance with best practice governance framework</li>
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
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Platform Demo</h2>
                                <p className="hdng-16">In this call, we will show you how easy it is to use the platform to scale and grow your consulting or coaching business. The platform is designed to help you generate revenue from day one! No need to commit and no sales pitch!</p>
                                <a href="#" class="custom-btn"><span>Book Now</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/platform-img1.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <img className="vector gd" src="images/right-arrow.png" alt="" />
                    </div>

                    <div className="row platform-2">
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/platform-img2.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Earning Potential</h2>
                                <p className="hdng-16">In this call, we will take you through the process of calculating what revenue you can earn from day one. We will show you the products and services you get access to help your customers grow their businesses. Book now and start earning consulting or coaching revenue the next day!</p>
                                <a href="#" class="custom-btn"><span>Book Now</span></a>
                            </div>
                        </div>
                        <img className="vector dg" src="images/left-arrow.png" alt="" />
                    </div>

                    <div className="row platform-3">
                        <div className="col-md-6">
                            <div className="platform-txt">
                                <h4 className="small-hdn">ENTERPRISE GROWTH PLATFORM</h4>
                                <h2 className="hdng">Opportunity Review</h2>
                                <p className="hdng-16">In this call, we take you through the entire process step by step. From registering on the platform, training, and delivering your first consulting or coaching engagement. We will show you the cost of the platform, what you can earn and how to deliver.</p>
                                <a href="#" class="custom-btn"><span>Book Now</span></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-image">
                                <img className="abxo" src="images/platform-img3.png" alt="" />
                                <img className="gdxo" src="images/circle-shape.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Section Ends */}

            {/* Logo Slder Section Ends */}

            <section className="logo-carousel">
                <div className="container">
                    <Carousel responsive={responsive} infinite={true}>
                        <img src="images/logo-1.jpg" alt="" />
                        <img src="images/logo-2.jpg" alt="" />
                        <img src="images/logo-3.jpg" alt="" />
                        <img src="images/logo-4.jpg" alt="" />
                        <img src="images/logo-5.jpg" alt="" />
                        <img src="images/logo-6.jpg" alt="" />
                    </Carousel>
                </div>
            </section>
            {/* Logo Slder Section Ends */}

            {/* Book Demo Section Starts */}

            <section className="book-block">
                <div className="container">
                    <div className="consulting-hdngs">
                        <h2 className="sec-hdng">Book your consultation today.</h2>
                        <p className="hdng-16">One of our trusted advisors will contact you to assist you with completing the diagnostic and reviewing the results at no cost</p>
                    </div>
                    <p className="hdng-16 text-center"><b>Our promise: </b>We will NEVER share your personal information and will under no circumstances try and sell you services you do not require or want</p>
                </div>
            </section>

            {/* Book Demo Section Ends */}


        </div>

    )
}


export default BusinessOwner