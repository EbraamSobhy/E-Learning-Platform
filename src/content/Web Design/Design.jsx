import React, { useEffect } from "react";
import './design.css';
import Footer from "../../components/Footer/Footer";

function Tutorials() {
    useEffect(() => {
        document.title = "Front-End";
    }, []);

    return (
        <div className="tutorials">
            <h1 className="tutorials-title">UI/UX Web Design Course</h1>
            <br />
            <Footer />
        </div>
    );
}

export default Tutorials;
