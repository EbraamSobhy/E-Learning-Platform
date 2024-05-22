import React from "react";
import './home.css';
import Button from 'react-bootstrap/Button';
import BgVideo from './BgVideo.mp4';

function Home() {
    return (
        <div className='main'>
            <video src={BgVideo} autoPlay loop muted />
            <style type="text/css">
            {`
                .btn-flat {
                    background-color: blue;
                    color: white;
                    height: 100px;
                    width: 190px;
                }

                .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 30px;
                }

                .btn-flat:hover {
                    background-color: royalBlue;
                    color: black;
                    font-weight: 500;
                    border-color: blue;
                    border-style: solid;
                    border-width: 3px;
                }
            `}
            </style>
            <div className="content">
                <p>High Quality Technology</p>
                <p>Courses and Videos</p>
                <p className="courses">Web Development | Mobile Application | Cyber Security</p>
                <br />
                <div className="button">
                    <Button variant="flat" size="xxl">
                        Let's Start
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;
