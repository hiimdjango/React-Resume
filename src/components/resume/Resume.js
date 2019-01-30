import React from 'react';
import Backgrounds from './background/Backgrounds';
import Skills from './skills/Skills';

const resume = ( props ) => (
    
    <section id="resume">
        <Backgrounds education={props.data.educationBackground} work={props.data.workBackground} /> 
        <Skills skills={props.data.skills} />     
    </section>
);

export default resume;