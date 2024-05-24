import React, { useEffect } from "react";
import './frontend.css';
import Footer from "../../components/Footer/Footer";
import Course from './course.webp';

function Frontend() {
    useEffect(() => {
        document.title = "Front-End";
    }, []);

    return (
        <div className="f">
            <h1 className="f-title">Front-End Web Development Course</h1>
            <div className="f flex flex-col items-center">
                <div className="max-w-lg mt-10 rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={Course} alt="Course" />
                    <div className="px-8 py-6">
                        <div className="font-bold text-2xl mb-4 text-center">React JS Front-End Web Development</div>
                        <p className="text-gray-700 text-lg">
                            This course provides an in-depth overview of <br />front-end web development, covering HTML, CSS, JavaScript, and popular frameworks such as React JS. Whether you are a beginner or looking to enhance your skills, this course is designed to help you build responsive and dynamic websites.
                        </p>
                    </div>
                    <div className="px-8 pt-4 pb-6">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Bootstrap 5</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind CSS</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React JS</span>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer />
        </div>
    );
}

export default Frontend;
