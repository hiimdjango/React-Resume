import React from 'react';

const about = ( props ) => (
    <>
        <section id="about">
            <div className="row">
                <div className="three columns">
                <img className="profile-pic" src={props.data.profilePic} alt='profile-pic' />
                </div>
                <div className="nine columns main-col">
                <h2>About Me</h2>
                <p>I'm a young Web Developer recently graduated, I love coding and especially in JavaScript, I enjoy creating user interfaces
                    with <span style={{fontWeight:"bold"}}>React.js</span>, I'm also a very positive person who love socializing, teamwork is my strengh
                    since I've been playing teamsports for a big while now. I'm active in many soccer teams and leagues here in Montreal. I'm looking forward
                    to getting the best Canadian experience and to knowing new people and share my knowledge but also learn from the developer community.
                </p>
                <div className="row">
                    <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <span>{props.data.name}</span><br />
                        <span>{props.data.address.line1}<br />
                        {props.data.address.line2}
                        </span><br />
                        <span>{props.data.phone}</span><br />
                        <span>{props.data.email}</span>
                    </p>
                    </div>
                    <div className="columns download">
                    <p>
                        <a rel="noopener noreferrer" target="_blank" href={props.data.resume} className="button"><i className="fa fa-download" />Download Resume</a>
                    </p>
                    </div>
                </div> {/* end row */}
                </div> {/* end .main-col */}
            </div>
        </section> {/* About Section End*/}

    </>
);

export default about;