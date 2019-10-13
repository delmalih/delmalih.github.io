// React
import React from 'react';

// Local
import Navbar from './navbar/';
import BigBackground from './bigBackground/';
import WorkingExp from './workingExp/';
import Skills from './skills/';
import Education from './education/';
import Achievements from './achievements/';
import Footer from './footer/';

const Home = () => (
    <div>
        <BigBackground />
        <WorkingExp />
        <Skills />
        <Education />
        <Achievements />
        <Footer />
        <Navbar />
    </div>
)

export default Home;
