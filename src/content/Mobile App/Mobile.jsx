import React, { useEffect } from "react";
import './mobile.css';
import Footer from "../../components/Footer/Footer";

function Tutorials() {
    useEffect(() => {
        document.title = "Front-End";
    }, []);

    return (
        <div className="tutorials">
            <h1 className="tutorials-title">Mobile Application Development Course</h1>
            <br />
            <Footer />
        </div>
    );
}

export default Tutorials;
