import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogBoxes = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}all-blogs-list-business-owner`);
      const data = await response.json();
      setBlogs(data.data);
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog-block">
      <div className="container">
        <div className="row">
          {blogs.map(blog => (
            <div className="col-md-4" data-aos="fade-up" key={blog.id}>
              <div className="blog-box">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-cnt">
                  <p className="date-txt">{blog.created_at}</p>
                  <h2><Link to={`/blogs/${blog.slug}`}>{blog.title}</Link></h2>
                  <p className="hdng-16" dangerouslySetInnerHTML={{ __html: blog.short_description }} />
                  <Link className="read-btn" to={`/blogs/${blog.slug}`}>Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogBoxes;
