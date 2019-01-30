import React from 'react';

const skills = ( props ) => {
    
    const skillList = props.skills.map((item,index) => {
        return <li key={index}><span style={{width:item.percentage}} className="bar-expand skill " /><em>{item.name}</em></li>
    });

    return(
     
        <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <p>I Could do a long detailled list with every skill or technology I master but it's going to be very long! You can still see
                    the detailed one on my downloadable Resume but here's the {props.skills.length} major {props.skills.length > 1 ? <span>skills</span> : <span>skill</span>} I have.
                </p>
                <div className="bars">
                    <ul className="skills">
                        {skillList}
                    </ul>
                </div>{/* end skill-bars */}
            </div> {/* main-col end */}
        </div>
    
)};

export default skills;