// achievements.js
import React from 'react';

// Local
import Truncate from './components/truncate.component';

const achievements = [
    {
        title: "Breast Cancer Detection",
        imageSrc: "images/achievements/breastCancer.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <Truncate lines={1}>
                    ONGOING
                </Truncate>
            </div>
        ),
    },
    {
        title: "One-Shot Object Detector",
        imageSrc: "images/achievements/oneshot.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <Truncate lines={1}>
                    Categorical accuracy: 90%
                </Truncate>
            </div>
        ),
    },
    {
        title: "Horizontal Image Stitching",
        imageSrc: "images/achievements/stitch.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: (
            <div style={{width: '100%'}}>
                <b>Results :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
    },
    {
        title: "Shelves Detector",
        imageSrc: "images/achievements/shelvesDetect.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <Truncate lines={1}>
                    Pixel accuracy: 98%
                </Truncate>
            </div>
        ),
    },
    {
        title: "Unsupervised Anomaly Detection",
        imageSrc: "images/achievements/anomaly-detection.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                    <span>Development of a software for anomaly detection from given daily logs on a subway line</span>
                    <br /><br />
                    <span>Unsupervised pattern recognition in unstructured log-data</span>
                </Truncate>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <Truncate lines={1}>
                    <ul>
                        <li>LSTM Top-5 Accuracy: 99.94 %</li>
                        <li>Turnkey software for future anomaly detection</li>
                    </ul>
                </Truncate>
            </div>
        ),
    },
    {
        title: "Recruitment Chatbot",
        imageSrc: "images/achievements/chatbot.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "IoT Security Device",
        imageSrc: "images/achievements/iot.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "LSDJ Mobile App",
        imageSrc: "images/achievements/lsdj.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "How Many Shares ?",
        imageSrc: "images/achievements/howmanyshares.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "Digit Recognition Challenge",
        imageSrc: "images/achievements/digitreco.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "Dogs vs Cats Challenge",
        imageSrc: "images/achievements/dogscats.jpg",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "ConduiteCenter Website",
        imageSrc: "images/achievements/conduitecenter.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "Netflix - Recommendation algorithm",
        imageSrc: "images/achievements/netflix.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "Smart Motorized Stroller",
        imageSrc: "images/achievements/stroller.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                    <span>Creation of a motorized stroller that does not need to be pushed</span>
                    <br /><br />
                    <span>The stroller follows the person automatically without contact</span>
                </Truncate>
            </div>
        ),
        results: "TODO",
    },
    {
        title: "Graphing Calculator Programs",
        imageSrc: "images/achievements/tinspire.png",
        content: (
            <div>
                <b>Description :</b><br />
                <Truncate lines={1}>
                </Truncate>
            </div>
        ),        
        results: "TODO",
    },
];

export default achievements;