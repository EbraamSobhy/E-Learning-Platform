import React, { useEffect } from "react";
import './tutorials.css';

function Tutorials() {
    useEffect(() => {
        document.title = "Tutorials";
    }, []);

    const videoCategories = {
        "Front-End Development": [
            'https://www.youtube.com/embed/sBws8MSXN7A',
            'https://www.youtube.com/embed/1Rs2ND1ryYc',
            'https://www.youtube.com/embed/W6NZfCO5SIk',
            'https://www.youtube.com/embed/pQN-pnXPaVg'
        ],
        "Back-End Development": [
            'https://www.youtube.com/embed/fBNz5xF-Kx4',
            'https://www.youtube.com/embed/F5mRW0jo-U4',
            'https://www.youtube.com/embed/tN6oJu2DqCM?si=nKlZIerdzoSVdtj7',
            'https://www.youtube.com/embed/7S_tz1z_5bA'
        ],
        "Mobile App Development": [
            'https://www.youtube.com/embed/x0uinJvhNxI',
            'https://www.youtube.com/embed/0-S5a0eXPoc',
            'https://www.youtube.com/embed/F9UC9DY-vIU',
            'https://www.youtube.com/embed/comQ1-x2a1Q'
        ],
        "Cyber Security": [
            'https://www.youtube.com/embed/inWWhr5tnEA?si=GtRYeLTvVoxDzXCo',
            'https://www.youtube.com/embed/KZ93C-CroAA?si=tKeOuyc1UZz38mAO',
            'https://www.youtube.com/embed/JbEPJv7Ybcs?si=aKREIR5I5mTyh2yQ',
            'https://www.youtube.com/embed/lb1Dw0elw0Q?si=vLUzKMyLSuDiYJ8k'
        ]
    };

    return (
        <div className="tutorials">
            <h1 className="tutorials-title">Tutorials</h1>
            {Object.keys(videoCategories).map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <h2 className={category === "Front-End Development", "Back-End Development" , "Mobile App Development" ? "highlight-title" : ""}>{category}</h2>
                    <div className="video-grid">
                        {videoCategories[category].map((src, index) => (
                            <iframe
                                key={index}
                                width="100%"
                                height="auto"
                                src={src}
                                title={`${category} Video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tutorials;
