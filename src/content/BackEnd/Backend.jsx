import React, { useEffect } from "react";
import './backend.css';
import Footer from "../../components/Footer/Footer";


function Tutorials() {
    useEffect(() => {
        document.title = "Back-End";
    }, []);
    return (
        <div className="tutorials1">
            <h1 className="tutorials-title">Back-End Web Development Course</h1>
            <Footer />
        </div>
    );
}

export default Tutorials;
