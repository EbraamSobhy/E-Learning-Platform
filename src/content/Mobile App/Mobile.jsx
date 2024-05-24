import React, { useEffect } from "react";
import './mobile.css';
import Footer from "../../components/Footer/Footer";

function Tutorials() {
    useEffect(() => {
        document.title = "Mobile Application";
    }, []);

    return (
        <div className="m">
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <h1 className="m-title">Mobile Application Development Course</h1>
            <br />
            <Footer />
        </div>
    );
}

export default Tutorials;
