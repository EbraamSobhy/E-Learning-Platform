import React, { useEffect } from "react";
import './mobile.css';
import Footer from "../../components/Footer/Footer";
import Course from './course.jpg';

function Tutorials() {
    useEffect(() => {
        document.title = "Mobile Application";
    }, []);

    return (
        <div className="m">
            <h1 className="m-title">Mobile Application Development Course</h1>
            <div className="flex flex-col items-center">
                <div className="max-w-lg mt-10 rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={Course} alt="Course" />
                    <div className="px-8 py-6">
                        <div className="font-bold text-2xl mb-4 text-center">Mobile Application Development</div>
                        <p className="text-gray-700 text-lg">
                            This course provides an in-depth overview of mobile application development, covering both native and cross-platform development frameworks such as <br /> React Native and Flutter. Whether you are a beginner or looking to enhance your skills, this course is designed to help you build responsive and dynamic mobile applications.
                        </p>
                    </div>
                    <div className="px-8 pt-4 pb-6">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React Native</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flutter</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Swift</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Kotlin</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Java</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mobile Development</span>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer />
        </div>
    );
}

export default Tutorials;
