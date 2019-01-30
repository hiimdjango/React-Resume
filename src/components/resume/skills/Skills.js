import React from 'react';

const skills = ( props ) => {
    
    const skillList = props.skills.map((item,index) => {
        return <li><span style={{width:item.percentage}} className="bar-expand skill " /><em>{item.name}</em></li>
    });

    return(
     
        <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
                <p>I Could do a long detailled list with every skill or technology I master but it's going to be very long! You can still see
                    the detailled one on my CV but here's the {props.skills.length} major skill I have.
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