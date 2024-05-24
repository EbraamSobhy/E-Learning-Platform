import React, { useEffect } from "react";
import './backend.css';
import Footer from "../../components/Footer/Footer";
import Course from './course.jpg';

function Frontend() {
    useEffect(() => {
        document.title = "Back-End";
    }, []);

    return (
        <div className="Backend">
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <div className="flex flex-col items-center">
                <div className="max-w-lg mt-10 text-white rounded overflow-hidden shadow-lg bg-black">
                    <img className="w-full" src={Course} alt="Course" />
                    <div className="px-8 py-6">
                        <div className="font-bold text-2xl mb-4 text-center">ASP.NET Back-End Web Development</div>
                        <p className="text-white text-lg">
                            This course provides an in-depth overview of <br />back-end web development, covering server-side programming with ASP.NET, database integration, and API development. Whether you are a beginner or looking to enhance your skills, this course is designed to help you build robust and scalable web applications.
                        </p>
                    </div>
                    <div className="px-8 pt-4 pb-6">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ASP.NET</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#C#</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SQL</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Entity Framework</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web API</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MVC</span>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer />
        </div>
    );
}

export default Frontend;
