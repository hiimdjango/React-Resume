import React from 'react';

const header = ( props ) => (
    <>
        {/* Header
   ================================================== */}
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */}
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Hello World</h1>
                    <h1 style={{fontSize:'3rem'}}>I'm {props.data.name}.</h1>
                    <h3>I'm a {props.data.location} based <span>{props.data.roles.role1}</span> and <span>{props.data.roles.role2}</span>. Let's <a className="smoothscroll" href="#about">start scrolling </a>
                    and learn more <a className="smoothscroll" href="#about"> about me</a>.</h3>
                    <hr />
                    <ul className="social">
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.socialMedia.facebook}><i className="fa fa-facebook" /></a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.socialMedia.linkedIn}><i className="fa fa-linkedin" /></a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.socialMedia.instagram}><i className="fa fa-instagram" /></a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.socialMedia.gitHub}><i className="fa fa-github" /></a></li>
                    </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
        </header> {/* Header End */}

    </>
);

export default header;