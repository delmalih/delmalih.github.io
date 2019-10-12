// React requirement
import React from 'react';

// Style
import {
    Sidebar,
    ProgressContainer,
    ProgressBar,
    Badge,
} from './style';

const scrollFunc = elm_id => {
    const elm = document.getElementById(elm_id);
    window.scroll({
        top: elm.offsetTop - 60,
        left: 0,
        behavior: 'smooth',
    });
}

const SideBar = () => (
    <Sidebar id="Sidebar">
        <ProgressContainer>
            <Badge onClick={() => scrollFunc("Home")} id="SidebarBadgeHome">Home</Badge>
            <Badge onClick={() => scrollFunc("WorkingExp")} id="SidebarBadgeWorkingExp">Experience</Badge>
            <Badge onClick={() => scrollFunc("Skills")} id="SidebarBadgeSkills">Skills</Badge>
            <Badge onClick={() => scrollFunc("Education")} id="SidebarBadgeEducation">Education</Badge>
            <Badge onClick={() => scrollFunc("Achievements")} id="SidebarBadgeAchievements">Achievements</Badge>
            <Badge onClick={() => scrollFunc("QuickBio")} id="SidebarBadgeQuickBio">Infos</Badge>
            <ProgressBar id="SidebarProgress" />
        </ProgressContainer>
    </Sidebar>
);

export default SideBar;