import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}all-blogs-list-business-owner`
      );
      const data = await response.json();
      setBlogs(data.data);
    };

    fetchPopularPosts();
  }, []);

  return (
    <div className="blog-sidebar">
      
      <h2 className="hdng">Popular Posts</h2>
      <ul>
        {blogs.slice(0, 5).map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
            <span>{blog.created_at}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSidebar;