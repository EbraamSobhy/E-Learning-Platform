import React, { useEffect } from "react";
import './backend.css';
import Footer from "../../components/Footer/Footer";

function Frontend() {
    useEffect(() => {
        document.title = "Back-End";
    }, []);

    return (
        <div className="Backend">
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <h1 className="backend-title">Back-End Web Development Course</h1>
            <br />
            <Footer />
        </div>
    );
}

export default Frontend;
