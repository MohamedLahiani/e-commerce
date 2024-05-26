import React from 'react';
import './BlogsPage.css';
import blogImage1 from '../assets/blog1.jpg'; // Adjust path as necessary
import blogImage2 from '../assets/blog2.jpg'; // Adjust path as necessary
import blogImage3 from '../assets/blog3.jpg'; // Adjust path as necessary

const blogs = [
    {
        title: 'The Best Way To Select Good High-End Cosmetic Products',
        author: 'by Gfyiso',
        date: 'March 23, 2024',
        image: blogImage1,
    },
    {
        title: 'Perfect Way To Find Your Lip Combo For Everyday Lip Makeup',
        author: 'by Gfyiso',
        date: 'March 23, 2024',
        image: blogImage2,
    },
    {
        title: 'Morning beauty routine: our main rules',
        author: 'by Gfyiso',
        date: 'March 23, 2024',
        image: blogImage3,
    },
];

function BlogPage() {
    return (
        <div className="blog-page">
            <div className="blog-header">
                <h1>From Our Blog</h1>
                <p>Our bundles were designed to conveniently package your tanning essentials while saving you money.</p>
            </div>
            <div className="blogs-grid">
                {blogs.map((blog, idx) => (
                    <div key={idx} className="blog-card">
                        <img src={blog.image} alt={blog.title} />
                        <h2>{blog.title}</h2>
                        <p>{blog.author} | {blog.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogPage;
