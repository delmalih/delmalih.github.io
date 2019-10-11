// React
import React from 'react';

/** EDUCATION **/

const edu_centrale = {
  title: "CentraleSupelec - Master of Engineering",
  date: "2016 - 2020",
  description: (
    <div>
      <span>CentraleSupelec is a prestigious Engineering School, member of France’s Grandes Ecoles, based on a highly selective admission process.</span><br />
      <br />
      <ul>
        <li><b>Business & Management :</b> Business management, Business finance, Leadership, Business game, Business creation</li>
        <li><b>Maths :</b> Analysis, Probabilities, Statistics, Partial differential equations</li>
        <li><b>Computer science :</b> Algorithms, Software development (Python), Software development and Object-oriented programming (Java), Machine learning, Digital communications and Networks</li>
        <li><b>Physics :</b> Quantum and statistical physics, Applied thermodynamics</li>
        <li><b>Engineering :</b> Complex systems engineering, Embedded systems</li>
        <li><b>Other :</b> Law, Economy, Philosophy of Sciences, Epistemology, Life sciences</li>
      </ul>
    </div>
  ),
};

const edu_janson = {
  title: "Lycée Janson de Sailly - Advanced post Baccalaureate courses in Math and Physics",
  date: "Sep. 14 - Jun. 16",
  description: <span>Two intensive years of scientific course to prepare the selective entrance exams for the top engineering schools in France.</span>,
};

const edu_enh = {
  title: "Lycée ENH",
  date: "2014",
  description: (
    <div>
      <span>Baccalaureate scientific series.</span><br />
      <span>Grade B/Honors.</span><br />
    </div>
  ),
};

/** WOKR EXPERIENCE **/

const work_yoobic = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fyoobic.png?alt=media&token=dfc18df7-443b-41f7-a882-8f94d468d1f3",
  title: "Data Scientist Intern @ Yoobic",
  date: "Sep 2018 - Present",
  description: (
    <div>
      <span>Yoobic is a mobile productivity solution helping brands communicate more effectively with retail stores in order to improve the in-store shopping experience and increase revenue.</span>
      <ul>
        <li>Object detection: Detection of multiple small objects, physically close on an image</li>
        <li>Transfer learning: Training and evaluation of a neural network using tensorflow</li>
        <li>Image processing: Perspective correction, detecting clusters of objects, compliance checking</li>
      </ul>
      <span><b>Techs: </b>Python, Tensorflow, Deep Learning Networks (Faster-RCNN, Mask-RCNN, YoloV2), Gcloud Machines, Image processing, OpenCV</span>
    </div>
  ),
};

const work_pdl = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fpdl.png?alt=media&token=dd076c57-faba-40e3-9216-a7259d7a28f2",
  title: "Software Engineer @ ParisDigitalLab",
  date: "Jan 2018 - Jul 2018",
  description: (
    <div>
      <span>ParisDigitalLab in an open innovation training device to enable students to become proficient in various technologies through the realization of real-world projects.</span><br />
      <br />
      <span>ParisDigitalLab is a community of makers:</span><br />
      <ul>
        <li>Working on real-world projects for large and small organizations</li>
        <li>Agile prototyping</li>
        <li>Creating tech-oriented disruptive innovations</li>
        <li>Producing prototypes reinventing the end-user experience</li>
        <li>Reflecting on lean start-up methodology</li>
      </ul>
    </div>
  ),
};

const work_accorhotels = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Faccorhotels.png?alt=media&token=ff71a92c-ebba-49a7-ba7e-948d5845a8e1",
  title: "Software Engineer - IoT Project @ AccorHotels Group",
  date: "Feb 2018 - Apr 2018",
  description: (
    <div>
      <ul>
        <li>Worldwide leader in Hospitality and services – Over 250.000 women and men in nearly 4200 AccorHotels addresses look after thousands of guests every day in 95 countries</li>
        <li>Design and development of an IoT security device from scratch, to protect staff from sexual harassment in hotels</li>
        <li>Sending and backing up warnings and alerts when the staff member notifies a danger</li>
      </ul>
      <span><b>Techs: </b>LoraWAN, Arduino, RFID/NFC, Node.js, ReactJS, Firebase</span>
    </div>
  ),
};

const work_interimco = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Finterimco.jpg?alt=media&token=eea2f3f1-776d-4740-86f9-825795eccfdb",
  title: "Software Engineer - Chatbot Project @ InterimCo",
  date: "Apr 2018 - May 2018",
  description: (
    <div>
      <ul>
        <li>French interim employment agency</li>
        <li>Development of a recruitment chatbot that pre-qualifies candidates using Messenger</li>
        <li>Development of an admin dashboard to follow and control chatbot&#39;s actions</li>
      </ul>
      <span><b>Techs: </b>Python, Flask, Dialogflow, Node.js, ReactJS, Firebase, Elasticsearch</span>
    </div>
  ),
};

const work_ratp = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fratp.png?alt=media&token=70fa90cc-7b03-4447-989c-9084efc9c4ba",
  title: "Data Scientist - Machine Learning Project @ RATP Group",
  date: "May 2018 - Jul 2018",
  description: (
    <div>
      <ul>
        <li>State-owned public transport operator in Paris</li>
        <li>Development of a software for anomaly detection from given daily logs on a subway line</li>
        <li>Unsupervised pattern recognition in unstructured log-data</li>
      </ul>
      <span><b>Techs: </b>Python, Flask, Scikit-Learn, Keras, Pandas, ReactJS, Electron</span>
    </div>
  ),
};

const work_lsdj = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Flsdj.png?alt=media&token=a2b2681c-fc54-4485-bdc2-6da77b7e459e",
  title: "Web & Mobile developer @ Le Silence Des Justes",
  date: "Nov 2017 - Feb 2018",
  description: (
    <div>
      <ul>
        <li>Le Silence Des Justes is a non-profit organization that helps children with autism.</li>
        <li>Development of a mobile application for the collection of donations.</li>
      </ul>
      <span><b>Techs: </b>React Native, PHP, Firebase</span><br />
    </div>
  ),
};

const work_cs = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fcs.png?alt=media&token=a38fb302-2c85-486e-a87c-add48ff61374",
  title: "Data scientist @ CentraleSupelec",
  date: "Nov 2017 - Jan 2018",
  description: (
    <div>
      <ul>
        <li>Prediction of the number of shares an article will get on social media, from the article&#039;s topic, length, day of publication, and many other features.</li>
        <li>Kaggle-in-class challenge.</li>
        <li>Student project.</li>
      </ul>
      <span><b>Techs: </b>Python, Scikit Learn, Pandas, Numpy</span><br />
      <span><b>Links: </b><a href='https://www.kaggle.com/c/how-many-shares' rel="noopener noreferrer" target='_blank'>kaggle.com/c/how-many-shares</a></span><br />
    </div>
  ),
};

const work_valeo = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fvaleo.png?alt=media&token=28cdc7b7-2296-48be-850d-3187fcceaaa2",
  title: "Engineer & Data scientist @ Valeo",
  date: "Jun 2017 - Jul 2017",
  description: (
    <div>
      <ul>
        <li>Valeo is a multinational automotive supplier providing a wide range of products to auto manufacturers and after markets.</li>
        <li>Automated camera calibration</li>
        <li>Facial recognition by machine learning programs</li>
      </ul>
      <span><b>Techs: </b>Python, OpenCV, Numpy</span><br />
    </div>
  ),
};

const work_cc = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/tech%20experiences%2Fconduitecenter.png?alt=media&token=3b2e7ac8-a280-4fb1-bd9a-66a5d5f2855d",
  title: "Full Stack developer @ ConduiteCenter",
  date: "Jan 2017 - Jan 2018",
  description: (
    <div>
      <ul>
        <li>Full stack development of the website <a href='http://my.conduitecenter.fr/' rel="noopener noreferrer" target='_blank'>http://my.conduitecenter.fr</a> for the ConduiteCenter company, the online driving School.</li>
        <li>Student management throughout France.</li>
        <li>Scheduling courses depending on the availability of instructors and students.</li>
        <li>Ability to pay for packages online.</li>
        <li>Editing invoices and automatic contracts.</li>
        <li>Management of the company&#039;s cash flow from the website.</li>
      </ul>
      <span><b>Techs: </b>ReactJS, Node.js, Firebase, Docker, Gcloud VM (PHP and MySQL for V1)</span><br />
    </div>
  ), 
};

/** ACHIEVEMENTS **/

const achievement_unsupervisedAnomalyDetection = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fanomaly-detection.png?alt=media&token=dd5e786d-411a-43d9-9b77-3bb029964e2b",
  title: "Unsupervised Anomaly Detection",
  description: (
    <ul>
      <li>AI Project - RATP Group – State-owned public transport operator in Paris</li>
      <li>Development of a software for anomaly detection from given daily logs on a subway line</li>
      <li>Unsupervised pattern recognition in unstructured log-data</li>
      <b>Techs:</b> Python, Flask, Scikit-Learn, Keras, Pandas, ReactJS, Electron
    </ul>
  ),
};

const achievement_recruitmentChatbot = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fchatbot.png?alt=media&token=2a2dcd78-6d03-49ee-80ea-a6aaa173380f",
  title: "Recruitment Chatbot",
  description: (
    <ul>
      <li>Chatbot Project - InterimCo – French interim employment agency</li>
      <li>Development of a recruitment chatbot that pre-qualifies candidates using Messenger & Telegram</li>
      <li>Development of an admin dashboard to follow and control chatbot&#30;s actions</li>
      <b>Techs:</b> Python, Flask, Dialogflow, Node.js, ReactJS, Firebase, Elasticsearch
    </ul>
  ),
};

const achievement_iotDevice = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fiot.png?alt=media&token=77ac086b-36c6-425b-a8a7-243979b16e38",
  title: "IoT Security Device",
  description: (
    <ul>
      <li>AccorHotels Group – Worldwide leader in Hospitality and services – Over 250.000 women and men in nearly 4200 AccorHotels addresses look after thousands of guests every day in 95 countries</li>
      <li>Design and developed of an IoT security device from scratch, to protect staff from sexual harassment in hotels</li>
      <li>Sending and backing up warnings and alerts when the staff member notifies a danger</li>
      <b>Techs:</b> LoraWAN, Arduino, RFID/NFC, Node.js, ReactJS, Firebase
    </ul>
  ),
};

const achievement_lsdj = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Flsdj.png?alt=media&token=16c3d7be-a586-4513-bf69-41b5954534f1",
  title: "LSDJ - ReactNative App",
  description: (
    <div>
      <ul>
        <li>Le Silence Des Justes is a non-profit organization that helps children with autism</li>
        <li>Development of a mobile application for the collection of donations for the Le Silence Des Justes association</li>
        <b>Techs:</b> React Native, Firebase, PHP
      </ul>
      <b><a href='https://play.google.com/store/apps/details?id=com.sdjavenir' rel="noopener noreferrer" target='_blank'>See project</a></b>
    </div>
  ),
};

const achievement_netflix = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fnetflix.png?alt=media&token=b6e257aa-8eb4-4f06-86be-f7240f2fa751",
  title: "Netflix - Recommendation algorithm",
  description: (
    <ul>
      <li>Given the database of notes that Netflix users (more than 2.5 million users) gave to films (18000 films), this project is the realization of a machine learning algorithm to recommend 10 movies to a given user</li>
      <li>No library used, all coded from scratch</li>
      <li>kNN (k-Nearest Neighbours) algorithm</li>
      <li>RMSE (Root Mean Squared Error) = 0.1</li>
      <b>Techs:</b> C
    </ul>
  ),
};

const achievement_kaggle = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fkaggle.png?alt=media&token=079f1f17-0eb1-4eff-b05a-14110c01ffa7",
  title: "How Many Shares ?",
  description: (
    <div>
      <ul>
        <li>Prediction of the number of shares an article will get on social media, from the article&#39;s topic, length, day of publication, and many other features</li>
        <li>Kaggle-in-class challenge</li>
        <b>Techs:</b> Python, Scikit Learn
      </ul>
      <b><a href='https://www.kaggle.com/c/how-many-shares' rel="noopener noreferrer" target='_blank'>See project</a></b>
    </div>
  ),
};

const achievement_simergy = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fsimergy.png?alt=media&token=acb9b269-7eaf-4b2e-b7ef-176d0a2ee293",
  title: "SimErgy",
  description: (
    <ul>
      <li>Development of a simulator of an Emergy Department using Java</li>
      <li>Time optimization algorithms</li>
      <li>KPI (Key Performance Indicator) optimizations</li>
      <li>Development of a CLI (Command-Line Interface) and a GUI (Graphical User Interface)</li>
      <b>Techs:</b> Java
    </ul>
  ),
};

const achievement_netsim = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fnetsim.png?alt=media&token=a5f4a005-8a9d-4658-9053-4a02a8d47d9d",
  title: "NetSim",
  description: (
    <ul>
      <li>Synchronous communications scheduling</li>
      <li>Distributed system</li>
      <li>Algorithms on graphs (Dsatur / Welsh-Powell)</li>
      <li>Python OOP</li>
      <li>VTK & DIMACS files</li>
      <b>Techs:</b> Python
    </ul>
  ),
};

const achievement_conduitecenter = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fconduitecenter.png?alt=media&token=51214c74-cc04-4109-9f00-23da88982cdc",
  title: "ConduiteCenter Website",
  description: (
    <div>
      <ul>

        <li>Full stack development of the website <a href="http://my.conduitecenter.fr" rel="noopener noreferrer" target="_blank">http://my.conduitecenter.fr</a> for the ConduiteCenter company, the online driving School</li>
        <li>Student management throughout France</li>
        <li>Scheduling courses depending on the availability of instructors and student</li>
        <li>Ability to pay for packages online</li>
        <li>Editing invoices and automatic contracts</li>
        <li>Management of the company&#39;s cash flow from the website</li>
        <b>Techs: </b>ReactJS, Node.js, Firebase, Docker, Gcloud VM (PHP and MySQL for V1)
      </ul>
      <b><a href='http://my.conduitecenter.fr/' rel="noopener noreferrer" target='_blank'>See project</a></b>
    </div>
  ),
};

const achievement_stroller = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Fstroller.png?alt=media&token=b7db5b3d-946b-42e5-9545-00546b2e2ae9",
  title: "Motorized Stroller",
  description: (
    <ul>
      <li>Creation of a motorized stroller that does not need to be pushed</li>
      <li>The stroller follows the person automatically without contact</li>
      <b>Techs:</b> Arduino, DC Motor, Ultrasonic
    </ul>
  ),
};

const achievement_tinspire = {
  imgSrc: "https://firebasestorage.googleapis.com/v0/b/myresume-5ad6c.appspot.com/o/achievements%2Ftinspire.png?alt=media&token=7181a209-f9c7-4358-a290-9d5e93fcc95c",
  title: "Graphing Calculator Programs",
  description: (
    <div>
      <ul>
        <li>Development of many applications for the TI-Nspire - a graphic calculator developed by Texas Instruments</li>
        <li>Maths and Physics Programs</li>
        <li>Programs designed to help baccalaureate students solving exercises</li>
        <li>About 150.000 downloads</li>
        <b>Techs:</b> TI-Nspire Graphic Calculator, TI-Basic language, Lua
      </ul>
      <b><a href='https://tiplanet.org/forum/archives_list.php?ref=12527&author=1&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BXRRzyBnmQuqsZYkehLA4Rw%3D%3D#files' rel="noopener noreferrer" target='_blank'>See project</a></b>
    </div>
  ),
};

/* EXPORT */

export default {
  title: "My Resume",
  view0: "Quick bio",
  view1: "Skills",
  view2: "Tech experiences",
  view3: "Achievements",
  view4: "Education",
  location: "Paris, France",
  mail: "david.el-malih@student.ecp.fr",
  phone: "(+33) 06 50 12 98 56",
  languageTitle: "Languages",
  fr: "French - Native",
  en: "English - Full professional proficiency",
  is: "Hebrew - Limited working proficiency",
  ar: "Arabic - Elementary proficiency",
  skills: {
    ml: "Data science / Machine Learning",
    webMobileDev: "Web/Mobile development",
    project: "Project management",
    softDev: "Software development",
    IoT: "IoT skills",
  },
  experience: [
    work_yoobic,
    work_pdl,
    work_accorhotels,
    work_interimco,
    work_ratp,
    work_lsdj,
    work_cs,
    work_valeo,
    work_cc,
  ],
  achievements: [
    achievement_unsupervisedAnomalyDetection,
    achievement_recruitmentChatbot,
    achievement_iotDevice,
    achievement_lsdj,
    achievement_netflix,
    achievement_kaggle,
    achievement_simergy,
    achievement_netsim,
    achievement_conduitecenter,
    achievement_stroller,
    achievement_tinspire,
  ],
  education: [
    edu_centrale,
    edu_janson,
    edu_enh,
  ],
};