import React, { useEffect } from "react";
import './design.css';
import Footer from "../../components/Footer/Footer";

function Tutorials() {
    useEffect(() => {
        document.title = "Web Design";
    }, []);

    return (
        <div className="w">
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <h1 className="w-title">UI/UX Web Design Course</h1>
            <br />
            <Footer />
        </div>
    );
}

export default Tutorials;
