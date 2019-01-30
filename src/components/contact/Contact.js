import React from 'react';

const contact = (props) => (
    <section id="contact">
        <div className="row section-head">
            <div className="two columns header-col">
                <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                <p className="lead">
                    Feel free to contact me if you have questions regarding anything or if you're interested in hiring me or simply just want to get in touch!
                </p>
            </div>
        </div>
        <div className="row">
            <div className="eight columns">
            {/* form */}
                <form  method="post" id="contactForm" name="contactForm">
                    <fieldset>
                    <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" defaultValue="" size={35} id="contactName" name="contactName" />
                    </div>
                    <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" defaultValue="" size={35} id="contactEmail" name="contactEmail" />
                    </div>
                    <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" defaultValue="" size={35} id="contactSubject" name="contactSubject" />
                    </div>
                    <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                    </div>
                    <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                        <img alt='loader' src="images/loader.gif" />
                        </span>
                    </div>
                    </fieldset>
                </form> {/* Form End */}
                {/* contact-warning */}
                <div id="message-warning"> There was an error sending the message! Try again shortly.</div>
                {/* contact-success */}
                <div id="message-success">
                    <i className="fa fa-check" />Your message was sent, thank you!<br />
                </div>
                </div>
                <aside className="four columns footer-widgets">
                <div className="widget widget_contact">
                    <h4>Address and Phone</h4>
                    <p className="address">
                    {props.data.name}<br />
                    {props.data.address.line1} <br />
                    {props.data.address.line2}<br />
                    <span>{props.data.phone}</span>
                    </p>
                </div>
            </aside>
        </div>
    </section> 

);

export default contact;