// src/components/TestimonialPage.jsx
import React from 'react';
import './TestimonialPage.css';
import profile1 from '../assets/profile1.jpg'; // Adjust path as necessary
import profile2 from '../assets/profile2.jpg'; // Adjust path as necessary
import profile3 from '../assets/profile3.jpg'; // Adjust path as necessary

function TestimonialPage() {
    return (
        <div className="testimonial-page">
            <div className="testimonial-header">
                <h1>Testimonial</h1>
                <p className="description">Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
            </div>
            <div className="testimonials-grid">
                <div className="testimonial-card item-a">
                    <p>
                        Great tags, Millie has got used to it, nothing like the old tin tags of years gone by.
                        Light weight and great colours available.
                    </p>
                    <div className="profile">
                        <img src={profile1} alt="Zack Chapman" />
                        <div>
                            <h3>Zack Chapman</h3>
                            <p>Head Of Risk</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card item-b">
                    <p>
                        Amazing product. The results are so transformative in texture and my face feels plump and healthy. Highly recommend!
                    </p>
                    <div className="profile">
                        <img src={profile2} alt="Harika" />
                        <div>
                            <h3>Harika</h3>
                            <p>Senior Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card item-c">
                    <p>
                        I'm in love with Luchiana's products! The quality is amazing and the prices are unbeatable.
                        I've tried everything from their skincare line to their lipsticks.
                    </p>
                    <div className="profile">
                        <img src={profile3} alt="John Crawford" />
                        <div>
                            <h3>John Crawford</h3>
                            <p>Co-worker</p>
                        </div>
                    </div>
                </div>
                <div className="community-card item-d">
                    <h2>Explore Our Community</h2>
                    <button className="join-community">Join Community</button>
                </div>
            </div>
        </div>
    );
}

export default TestimonialPage;
