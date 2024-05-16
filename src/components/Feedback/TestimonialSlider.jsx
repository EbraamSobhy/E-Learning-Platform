import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonialSlider.css';
import boy from './boy.jpg';
import boy1 from './boy1.jpg';
import girl from './girl.jpg';
import girl1 from './girl1.jpg';

const testimonials = [
    {
        name: "Richard",
        occupation: "Home Depot Worker/Student",
        testimonial: "I like learning new languages and doing the assignments. I was used to Passion.Tech telling me what to do and was easy, here I can think for myself.",
        image: boy
    },
    {
        name: "Mark",
        occupation: "Software Developer",
        testimonial: "Passion.Tech helped me transition from a different career to software development smoothly.",
        image: boy1
    },
    {
        name: "Jane",
        occupation: "Software Developer",
        testimonial: "Passion.Tech helped me transition from a different career to software development smoothly.",
        image: girl
    },
    {
        name: "Ava",
        occupation: "Software Developer",
        testimonial: "Passion.Tech helped me transition from a different career to software development smoothly.",
        image: girl1
    },
];

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div className="testimonial-slider">
            <h1 className='members'>What Members Are Saying</h1>
            <br /><br />
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <div className="testimonial-content">
                            <p className="testimonial-text">"{testimonial.testimonial}"</p>
                            <p className="testimonial-name">{testimonial.name}</p>
                            <p className="testimonial-occupation">{testimonial.occupation}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialSlider;
