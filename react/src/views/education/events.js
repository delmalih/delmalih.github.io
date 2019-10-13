// React
import React from 'react';

const edu_centrale = {
    title: "MSc in Artificial Intelligence @ CentraleSupelec",
    date: "2016 - 2020",
    description: (
        <ul>
            <li><b>Mathematics :</b> Statistics, Probabilites, Large Scale Optimization, Game Theory</li>
            <li><b>Data Science :</b> Machine Learning, Deep Learning, AI, Reinforcement learning, NLP</li>
            <li><b>Software Engineering :</b> Software development & OOP (Python & Java)</li>
        </ul>
    ),
};

const edu_janson = {
    title: "Intensive Courses @ Lycée Janson de Sailly",
    date: "2014 - 2016",
    description: <span>Two intensive years of scientific course to prepare the selective entrance exams for the top engineering schools in France.</span>,
};

export default [
    edu_centrale,
    edu_janson,
];