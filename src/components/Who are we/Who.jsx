import React from "react";
import './who.css';
import who from './who.avif';

function Who() {
    return(
        <div className="who">
            <h1 className="title">Who Are We ? <span><img src={who} alt="description" style={{ width: '50px', height: '50px', borderRadius: '30%' }} /></span></h1>
            <br />
            <p className="introduction">We are Passion Tech, your premier e-learning platform dedicated to programming, software development and web designing. At Passion Tech, we are passionate about empowering learners of all levels with the skills and knowledge they need to succeed in the tech industry. Our mission is to provide high-quality, accessible, and comprehensive educational resources to help you master programming languages, software development tools, and industry best practices.</p>
        </div>
    )
}

export default Who;