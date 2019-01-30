import React from 'react';
import Background from './Background';

const backgrounds = ( props ) => {
    //Returning Background Components from data stored in resumeData.js
    const education = props.education.map((item,i) => {
        return <Background key={item.date + i} title={item.universityName} name={item.degreesName} date={item.date}>{item.description}</Background>
    })
    const work = props.work.map((item,i) => {
        return <Background key={item.date + i} title={item.company} name={item.role} date={item.date}>{item.description}</Background>
    })
    

    return(
        <>
            {/* Education
            ----------------------------------------------- */}
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    {education}
                </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
            ----------------------------------------------- */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {work}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
        </>
)};

export default backgrounds;