import React from 'react';

const footer = (props) => (
    <footer>
        <div className="row">
            <div className="twelve columns">
                <ul className="social-links">
                    <li><a rel="noopener noreferrer" target="_blank" href={props.data.socialMedia.facebook}><i className="fa fa-facebook" /></a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href={props.data.socialMedia.linkedIn}><i className="fa fa-linkedin" /></a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href={props.data.socialMedia.instagram}><i className="fa fa-instagram" /></a></li>
                    <li><a rel="noopener noreferrer" target="_blank" href={props.data.socialMedia.gitHub}><i className="fa fa-github" /></a></li>
                </ul>
                <ul className="copyright">
                    <li>© Copyright 2014 CeeVee</li>
                    <li>Template by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
    </footer>

);

export default footer;