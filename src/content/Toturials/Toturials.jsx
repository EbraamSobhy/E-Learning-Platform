import React, { useState } from "react";
import './tutorials.css';

function Tutorials() {
    useState(() => {
        document.title = "Tutorials";
    }, []);

    return (
        <div className="tutorials">
            <h1 className="tutorials-title">Tutorials</h1>
        </div>
    );
}

export default Tutorials;
