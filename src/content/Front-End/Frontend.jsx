import React, { useEffect } from "react";
import './frontend.css';
import Footer from "../../components/Footer/Footer";

function Frontend() {
    useEffect(() => {
        document.title = "Front-End";
    }, []);

    return (
        <div className="tutorials">
            <h1 className="frontend-title">Front-End Web Development Course</h1>
            <h1 className="frontend-title">Front-End Web Development Course</h1>
            <h1 className="frontend-title">Front-End Web Development Course</h1><h1 className="frontend-title">Front-End Web Development Course</h1>
            <h1 className="frontend-title">Front-End Web Development Course</h1>
            <h1 className="frontend-title">Front-End Web Development Course</h1>
            <h1 className="frontend-title">Front-End Web Development Course</h1>
            <h1 className="frontend-title">Front-End Web Development Course</h1>
            <h1 className="frontend-title">Front-End Web Development Course</h1>
            <h1 className="frontend-title">Front-End Web Development Course</h1>
            <br />
            <Footer />
        </div>
    );
}

export default Frontend;
