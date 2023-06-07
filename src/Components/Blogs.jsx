import React from 'react';
import { useEffect } from 'react';
import ContactForm from './ContactForm';
import BlogBoxes from './BlogBoxes';
import Breadcrumb from './Breadcrumb';

function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog-page">


      <Breadcrumb />

      {/* Blogs Starts */}

      <BlogBoxes />

      {/* Blogs Ends */}


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


export default Blogs