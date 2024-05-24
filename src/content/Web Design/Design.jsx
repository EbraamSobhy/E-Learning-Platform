import React, { useEffect } from "react";
import './design.css';
import Footer from "../../components/Footer/Footer";
import Course from './course.jpg';

function Tutorials() {
    useEffect(() => {
        document.title = "Web Design";
    }, []);

    return (
        <div className="w">
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <div className="flex flex-col items-center">
                <div className="max-w-lg mt-10 rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={Course} alt="Course" />
                    <div className="px-8 py-6">
                        <div className="font-bold text-2xl mb-4 text-center">UI/UX Web Design</div>
                        <p className="text-gray-700 text-lg">
                            This course provides an in-depth overview of UI/UX design principles, covering user research, wireframing, prototyping, and user interface design using tools such as Figma and Adobe XD. Whether you are a beginner or looking to enhance your skills, this course is designed to help you create user-friendly and visually appealing web interfaces.
                        </p>
                    </div>
                    <div className="px-8 pt-4 pb-6">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#UI Design</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#UX Design</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Figma</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Adobe XD</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Wireframing</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Prototyping</span>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer />
        </div>
    );
}

export default Tutorials;
