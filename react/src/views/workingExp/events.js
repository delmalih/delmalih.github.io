// React
import React from 'react';

const work_yoobic = {
    title: "Research Data Scientist Intern @ Yoobic",
    date: "Sep 2018 - Aug 2019 (1 year)",
    description: (
        <div>
            <span>Yoobic is a mobile productivity solution helping brands communicate more effectively with retail stores in order to improve the in-store shopping experience and increase revenue.</span>
            <ul>
                <li>Object detection: Detection of multiple small objects, physically close on an image,on retail stores images - Faster RCNN algorithm reaching 95% mAP</li>
                <li>Segmentation: Shelves Detection on retail stores images - U-Net algorithm reaching 98% accuracy</li>
                <li>One shot learning: Image classification using one image per category - Triplet Network reaching 90% accuracy at inference time</li>
                <li>Image processing: Perspective correction and image stitching algorithms</li>
                <span><b>Techs: </b>Python, Tensorflow, Keras, OpenCV, Pytorch, GCP Machines</span>
            </ul>
        </div>
    ),
};

const work_pdl = {
    title: "Software Engineer @ ParisDigitalLab",
    date: "Jan 2018 - Jul 2018 (7 months)",
    description: (
      <div>
        <span>ParisDigitalLab in an open innovation training device to enable students to become proficient in various technologies through the realization of real-world projects.</span>
        <div style={{marginTop: "10px"}}>
            <span>Project #1: <b>Iot Project</b> @ AccorHotels Group</span>
            <ul>
                <li>Worldwide leader in Hospitality and services – Over 250.000 women and men in nearly 4200 AccorHotels addresses look after thousands of guests every day in 95 countries</li>
                <li>Design and development of an IoT security device from scratch, to protect staff from sexual harassment in hotels</li>
                <li>Sending and backing up warnings and alerts when the staff member notifies a danger</li>
                <span><b>Techs: </b>LoraWAN, Arduino, RFID/NFC, Node.js, ReactJS</span>
            </ul>
        </div>
        <div>
            <span>Project #2: <b>Chatbot Project</b> @ InterimCo</span>
            <ul>
                <li>French interim employment agency</li>
                <li>Development of a recruitment chatbot that pre-qualifies candidates using Messenger</li>
                <li>Development of an admin dashboard to follow and control chatbot&#39;s actions</li>
                <span><b>Techs: </b>Python, Flask, Dialogflow, Node.js, ReactJS</span>
            </ul>
        </div>
        <div>
            <span>Project #3: <b>Data Science Project</b> @ RATP Group</span>
            <ul>
                <li>State-owned public transport operator in Paris</li>
                <li>Development of a software for anomaly detection from given daily logs on a subway line</li>
                <li>Unsupervised pattern recognition in unstructured log-data</li>
                <span><b>Techs: </b>Python, Tensorflow, Keras, LSTMs, Pandas, Flask, ReactJS</span>
            </ul>
        </div>
      </div>
    ),
};

const work_lsdj = {
    title: "Web & Mobile developer @ Le Silence Des Justes",
    date: "Nov 2017 - Feb 2018 (4 months)",
    description: (
      <div>
            <ul>
                <li>Le Silence Des Justes is a non-profit organization that helps children with autism.</li>
                <li>Development of a mobile application for the collection of donations.</li>
                <li>Links on <a href="https://itunes.apple.com/us/app/sdjavenir/id1445104995?mt=8">AppStore</a> and <a href="https://play.google.com/store/apps/details?id=com.sdj.tsedaka&hl=en">PlayStore</a></li>
                <span><b>Techs: </b>React Native, PHP, Firebase</span><br />
            </ul>
      </div>
    ),
};

const work_valeo = {
    title: "Data Scientist Intern @ Valeo Group",
    date: "Jun 2017 - Jul 2017 (2 months)",
    description: (
      <div>
            <ul>
                <li>Valeo is a multinational automotive supplier providing a wide range of products to auto manufacturers and after markets.</li>
                <li>Focus adjustment algorithm on infrared camera</li>
                <li>Development of an embedded facial recognition algorithm</li>
                <span><b>Techs: </b>Python, Tensorflow, OpenCV, Siamese Networks</span><br />
            </ul>
      </div>
    ),
};

const work_cc = {
    title: "Full Stack developer @ ConduiteCenter",
    date: "Jan 2017 - Jan 2018 (1 year)",
    description: (
      <div>
            <ul>
                <li>Full stack development of the website <a href='http://my.conduitecenter.fr/' rel="noopener noreferrer" target='_blank'>http://my.conduitecenter.fr</a> for the ConduiteCenter company, the online driving School.</li>
                <li>Scheduling courses - Online payments - Automatic invoices and contracts</li>
                <span><b>Techs: </b>ReactJS, Node.js, Firebase, Docker, GCP Machines</span>
            </ul>
      </div>
    ), 
};

export default [
    work_yoobic,
    work_pdl,
    work_lsdj,
    work_valeo,
    work_cc,
];