// achievements.js
import React from 'react';

// Local
import posterBreastCancerPDF from './posterBreastCancer.pdf';
import RLSnakeGame from './RLSnakeGame.pdf';
import oneShotClassification from './oneShotClassification.pdf';
import wsiSegmentation from './wsiSegmentation.pdf';

const achievements = [
    {
        title: "Whole Slide Images Segmentation",
        imageSrc: "images/achievements/wsiSegmentation.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Segmentation of Colony tissue whole slide images using Patch UNet.</span><br />
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    Dice Score = 86.18% <br />
                    IoU Score = 77.09% <br />
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open(wsiSegmentation, "_blank")}>[PAPER]</a>{" "}
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open("https://github.com/delmalih/WSI-Segmentation-Patch", "_blank")}>[GITHUB]</a>{" "}
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open("https://www.youtube.com/watch?v=SAZHsepdNuk&feature=youtu.be", "_blank")}>[PRESENTATION]</a>
                </div>
            </div>
        ),
    },
    {
        title: "Reinforcement Learning - Snake Game",
        imageSrc: "images/achievements/RLSnakeGame.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Training an AI player, using reinforcement learning, to play the snake game.</span><br />
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    An AI Player able to beat human performance at snake game. <br />
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open(RLSnakeGame, "_blank")}>[PAPER]</a>{" "}
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open("https://github.com/delmalih/Snake-DeepRL", "_blank")}>[GITHUB]</a>
                </div>
            </div>
        ),
    },
    {
        title: "Breast Cancer Detection",
        imageSrc: "images/achievements/breastCancer.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Breast cancer detection algorithm on a small dataset of mammograms (~300 images).</span><br />
                    <span>Benchmark of Faster-RCNN, RetinaNet and FCOS algorithms.</span><br />
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    mAP = 97.5% <br />
                    F5-Score = 98.5% <br />
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open(posterBreastCancerPDF, "_blank")}>[POSTER]</a>{" "}
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open("https://github.com/delmalih/MIAS-mammography-obj-detection", "_blank")}>[GITHUB]</a>{" "}
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open("https://medium.com/analytics-vidhya/breast-cancer-detection-benchmarking-3-sota-networks-767991a77521", "_blank")}>[MEDIUM]</a>
                </div>
            </div>
        ),
    },
    {
        title: "Machine Learning by Stanford University",
        imageSrc: "images/achievements/stanford.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>The CS229 course on machine learning by Stanford University on Coursera.</span><br />
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    Course <a href="https://www.coursera.org/account/accomplishments/certificate/5ESK7HAM48SE" target="_blank" rel="noopener noreferrer">certificate</a>
                </div>
            </div>
        )
    },
    {
        title: <span>Deep Learning Specialization by <a href="https://www.deeplearning.ai/" target="_blank" rel="noopener noreferrer">deeplearning.ai</a></span>,
        imageSrc: "images/achievements/deeplearning-ai.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Through five interconnected courses, learners develop a profound knowledge of the hottest AI algorithms, mastering deep learning from its foundations (neural networks) to its industry applications (Computer Vision, Natural Language Processing, Speech Recognition, etc.).</span><br />
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    Course <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/9JG5RVYFBVGM" target="_blank" rel="noopener noreferrer">certificate</a>
                </div>
            </div>
        )
    },
    {
        title: "Predicting buying behavior of users",
        imageSrc: "images/achievements/virtuo.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Customers clustering for behaviour analysis - Using Some feature processing, PCA and KMeans.</span><br />
                    <span>Predicting if a prospect will become a good customer, a bad one or will remain a prospect.</span><br />
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    <b>ONGOING</b>
                </div>
            </div>
        ),
    },
    {
        title: "One-Shot Object Detector",
        imageSrc: "images/achievements/oneshot.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Development of an algorithm that could classify images having only one sample per category.</span><br />
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    Categorical accuracy: 90% <br />
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open(oneShotClassification, "_blank")}>[PAPER]</a>{" "}
                    <a href="#" rel="noopener noreferrer" onClick={() => window.open("https://github.com/delmalih/one_shot_classification_and_detection", "_blank")}>[GITHUB]</a>
                </div>
            </div>
        ),
    },
    {
        title: "Horizontal Image Stitching",
        imageSrc: "images/achievements/stitch.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Development of an algorithm that could create a panorama from pictures of an aisle of a retail store without distorting the extremities.</span><br />
                    <span>The standard panorama algorithm of our smartphones could not work because of the distortion.</span>
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    Horizontal stitching algorithm for up to 50 images
                </div>
            </div>
        ),
    },
    {
        title: "Shelves Detector",
        imageSrc: "images/achievements/shelvesDetect.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Development of an algorithm that could detect shelves on retail store images.</span><br />
                    <span>It draws a mask of 0-1 pixels (1's for the pixels belonging to a shelf)</span>
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    Pixel accuracy: 98%
                </div>
            </div>
        ),
    },
    {
        title: "Unsupervised Anomaly Detection",
        imageSrc: "images/achievements/anomaly-detection.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Development of a software for anomaly detection from given daily logs on a subway line</span><br />
                    <span>Unsupervised pattern recognition in unstructured log-data</span>
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    <span>• LSTM Top-5 Accuracy: 99.94 %</span><br />
                    <span>• Turnkey software for future anomaly detection</span><br />
                </div>
            </div>
        ),
    },
    {
        title: "Recruitment Chatbot",
        imageSrc: "images/achievements/chatbot.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Development of a recruitment chatbot that pre-qualifies candidates using Messenger & Telegram</span><br />
                    <span>Development of an admin dashboard to follow and control chatbot's actions</span>
                </div>
            </div>
        ),
    },
    {
        title: "IoT Security Device",
        imageSrc: "images/achievements/iot.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Design and developed of an IoT security device from scratch, to protect staff from sexual harassment in hotels</span><br />
                    <span>Sending and backing up warnings and alerts when the staff member notifies a danger</span>
                </div>
            </div>
        ),
    },
    {
        title: "LSDJ Mobile App",
        imageSrc: "images/achievements/lsdj.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Le Silence Des Justes is a non-profit organization that helps children with autism</span><br />
                    <span>Development of a mobile application for the collection of donations for the Le Silence Des Justes association</span>
                </div>
            </div>
        )
    },
    {
        title: "How Many Shares ?",
        imageSrc: "images/achievements/howmanyshares.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Prediction of the number of shares an article will get on social media, from the article's topic, length, day of publication, and many other features</span><br />
                    <span><b>Kaggle project:</b> <a href="https://www.kaggle.com/c/how-many-shares" target="_blank" rel="noopener noreferrer">kaggle.com/c/how-many-shares</a></span>
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    RMSLE (Root Mean Squared Logarithmic Error): 0.89
                </div>
            </div>
        ),
    },
    {
        title: "Digit Recognition Challenge",
        imageSrc: "images/achievements/digitreco.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Classification of digits algorithm trained on a dataset of tens of thousands of handwritten images.</span><br />
                    <span><b>Kaggle project:</b> <a href="https://www.kaggle.com/c/digit-recognizer" target="_blank" rel="noopener noreferrer">kaggle.com/c/digit-recognizer</a></span>
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    Categorical Accuracy: 99%
                </div>
            </div>
        ),
    },
    {
        title: "Dogs vs Cats Challenge",
        imageSrc: "images/achievements/dogscats.jpg",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Classification algorithm that determines whether images contain either a dog or a cat.</span><br />
                    <span><b>Kaggle project:</b> <a href="https://www.kaggle.com/c/dogs-vs-cats" target="_blank" rel="noopener noreferrer">kaggle.com/c/dogs-vs-cats</a></span>
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    Categorical Accuracy: 91%
                </div>
            </div>
        ),
    },
    {
        title: "ConduiteCenter Website",
        imageSrc: "images/achievements/conduitecenter.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Full stack development of the website <a href="http://my.conduitecenter.fr" rel="noopener noreferrer" target="_blank">http://my.conduitecenter.fr</a> for the ConduiteCenter company, the online driving School.</span><br />
                    <span>• Scheduling courses depending on the availability of instructors and student.</span><br />
                    <span>• Ability to pay for packages online.</span><br />
                    <span>• Editing invoices and automatic contracts.</span><br />
                    <span>• Management of the company's cash flow from the website.</span>
                </div>
            </div>
        ),
    },
    {
        title: "Netflix - Recommendation algorithm",
        imageSrc: "images/achievements/netflix.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Movie recommendation algorithm trained on a database of notes that Netflix users (more than 2.5 million users) gave to films (18000 films).</span>
                </div>
            </div>
        ),
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    <span>RMSE (Root Mean Squared Error): 0.1</span>
                </div>
            </div>
        ),
    },
    {
        title: "Smart Motorized Stroller",
        imageSrc: "images/achievements/stroller.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Creation of a motorized stroller that does not need to be pushed.</span><br />
                    <span>The stroller follows the person automatically without contact.</span>
                </div>
            </div>
        ),
    },
    {
        title: "Graphing Calculator Programs",
        imageSrc: "images/achievements/tinspire.png",
        content: (
            <div>
                <b>Description :</b><br />
                <div>
                    <span>Development of many applications for the TI-Nspire - a graphic calculator developed by Texas Instruments.</span><br />
                    <span>Programs designed to help baccalaureate students solving exercises.</span>
                </div>
            </div>
        ),        
        results: (
            <div>
                <b>Results :</b><br />
                <div>
                    <span>About 150.000 downloads</span>
                </div>
            </div>
        ),
    },
];

export default achievements;