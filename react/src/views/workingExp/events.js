// React
import React from 'react';
import { Button } from 'reactstrap';
import Fa from 'react-fontawesome';

const work_yoobic = {
    title: "Research Data Scientist Intern @ Yoobic",
    date: "Sep 2018 - Aug 2019 (1 year)",
    imageSrc: "images/experience/yoobic.png",
    location: "Tel Aviv, IS & Paris, FR",
    badges: ["Object detection", "Segmentation", "One shot learning", "Image processing"],
    description: (
        <div>
            <span>Yoobic is a mobile productivity solution helping brands communicate more effectively with retail stores in order to improve the in-store shopping experience and increase revenue.</span>
            <ul>
                <li><b>Object detection:</b> Detection of multiple small objects, physically close on an image,on retail stores images - Faster RCNN algorithm reaching 95% mAP</li>
                <li><b>Segmentation:</b> Shelves Detection on retail stores images - U-Net algorithm reaching 98% accuracy</li>
                <li><b>One shot learning:</b> Image classification using one image per category - Triplet Network reaching 90% accuracy at inference time</li>
                <li><b>Image processing:</b> Perspective correction and image stitching algorithms</li>
            </ul>
            <span><b>Techs:</b> Python, Tensorflow, Keras, OpenCV, Pytorch, GCP Machines</span>
        </div>
    ),
};

const work_pdl = {
    title: "Software Engineer @ ParisDigitalLab",
    date: "Jan 2018 - Jul 2018 (7 months)",
    imageSrc: "images/experience/pdl.png",
    location: "Paris, FR",
    badges: ["Software Engineering", "IoT", "Chatbots", "Anomaly detection"],
    description: (
      <div>
        <span>ParisDigitalLab in an open innovation training device to enable students to become proficient in various technologies through the realization of 3 real-world projects :</span><br />
        <br />
        <ul>
            <li>Project #1: <b>IoT Security Device</b> @ AccorHotels Group </li>
            <li>Project #2: <b>Recruitment Chatbot</b> @ InterimCo </li>
            <li>Project #3: <b>Unsupervised Anomaly Detection</b> @ RATP Group </li>
        </ul>
      </div>
    ),
};

const work_accorhotels = {
    title: "IoT Project @ AccorHotels Group",
    date: "Feb 2018 - Apr 2018 (2.5 months)",
    imageSrc: "images/experience/accorhotels.png",
    location: "Paris, FR",
    badges: ["IoT", "Security device", "LoraWAN", "Arduino", "RFID/NFC"],
    description: (
      <div>
        <ul>
            <li>Worldwide leader in Hospitality and services – Over 250.000 women and men in nearly 4200 AccorHotels addresses look after thousands of guests every day in 95 countries</li>
            <li>Design and development of an IoT security device from scratch, to protect staff from sexual harassment in hotels</li>
            <li>Sending and backing up warnings and alerts when the staff member notifies a danger</li>
        </ul>
        <span><b>Techs: </b>LoraWAN, Arduino, RFID/NFC, Node.js, ReactJS</span>
      </div>
    ),
};

const work_interimco = {
    title: "Chatbot Project @ InterimCo",
    date: "Apr 2018 - May 2018 (2 months)",
    imageSrc: "images/experience/interimco.jpg",
    location: "Paris, FR",
    badges: ["Chatbot", "Recruitment", "Dialogflow"],
    description: (
      <div>
        <ul>
            <li>French interim employment agency</li>
            <li>Development of a recruitment chatbot that pre-qualifies candidates using Messenger</li>
            <li>Development of an admin dashboard to follow and control chatbot&#39;s actions</li>
        </ul>
        <span><b>Techs: </b>Python, Flask, Dialogflow, Node.js, ReactJS</span>
      </div>
    ),
};

const work_ratp = {
    title: "Data Science Project @ RATP Group",
    date: "May 2018 - Jul 2018 (2.5 months)",
    imageSrc: "images/experience/ratp.png",
    location: "Paris, FR",
    badges: ["Unsupervised Learning", "LSTMs", "Anomaly detection", "Subway line data"],
    description: (
      <div>
        <ul>
            <li>State-owned public transport operator in Paris</li>
            <li>Development of a software for anomaly detection from given daily logs on a subway line</li>
            <li>Unsupervised pattern recognition in unstructured log-data</li>
        </ul>
        <span><b>Techs: </b>Python, Tensorflow, Keras, LSTMs, Pandas, Flask, ReactJS</span>
      </div>
    ),
};

const work_lsdj = {
    title: "Web & Mobile developer @ Le Silence Des Justes",
    date: "Nov 2017 - Feb 2018 (4 months)",
    imageSrc: "images/experience/lsdj.png",
    location: "Paris, FR",
    badges: ["Website", "Mobile App", "Non-profit organization"],
    description: (
      <div>
            <ul>
                <li>Le Silence Des Justes is a non-profit organization that helps children with autism.</li>
                <li>Development of a mobile application for the collection of donations.</li>
            </ul>
            <span><b>Techs: </b>React Native, PHP, Firebase</span><br />
            <br />
            <Button
                outline color='info'
                onClick={() => window.open("https://itunes.apple.com/us/app/sdjavenir/id1445104995?mt=8", '_blank')}
            >
                <Fa name='apple' />{' '}
                <span>AppStore</span>
            </Button>{' '}
            <Button
                outline color='info'
                onClick={() => window.open("https://play.google.com/store/apps/details?id=com.sdj.tsedaka&hl=en", '_blank')}
            >
                <Fa name='google' />{' '}
                <span>PlayStore</span>
            </Button>
      </div>
    ),
};

const work_valeo = {
    title: "Data Scientist Intern @ Valeo Group",
    date: "Jun 2017 - Jul 2017 (2 months)",
    location: "Paris, FR",
    imageSrc: "images/experience/valeo.png",
    badges: ["Automotive", "Face recognition", "Siamese Networks"],
    description: (
      <div>
            <ul>
                <li>Valeo is a multinational automotive supplier providing a wide range of products to auto manufacturers and after markets.</li>
                <li>Focus adjustment algorithm on infrared camera</li>
                <li>Development of an embedded facial recognition algorithm</li>
            </ul>
            <span><b>Techs: </b>Python, Tensorflow, OpenCV, Siamese Networks</span><br />
      </div>
    ),
};

const work_cc = {
    title: "Full Stack developer @ ConduiteCenter",
    date: "Jan 2017 - Jan 2018 (1 year)",
    imageSrc: "images/experience/conduitecenter.png",
    location: "Paris, FR",
    badges: ["Full Stack Dev", "Website", "Online driving school"],
    description: (
      <div>
            <ul>
                <li>Full stack development of the website <a href='http://my.conduitecenter.fr/' rel="noopener noreferrer" target='_blank'>http://my.conduitecenter.fr</a> for the ConduiteCenter company, the online driving School.</li>
                <li>Scheduling courses - Online payments - Automatic invoices and contracts</li>
            </ul>
            <span><b>Techs: </b>ReactJS, Node.js, Firebase, Docker, GCP Machines</span><br />
            <br />
            <Button
                outline color='info'
                onClick={() => window.open("http://my.conduitecenter.fr/", '_blank')}
            >
                <Fa name='globe' />{' '}
                <span>Website</span>
            </Button>{' '}
      </div>
    ), 
};

export default [
    work_yoobic,
    work_pdl,
    work_accorhotels,
    work_interimco,
    work_ratp,
    work_lsdj,
    work_valeo,
    work_cc,
];