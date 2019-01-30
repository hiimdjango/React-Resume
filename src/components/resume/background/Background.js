import React from 'react';

const background = ( props ) => (
    <>
        <div className="row item">
                <div className="twelve columns">
                <h3>{props.title}</h3>
                <p className="info">{props.name} <span>•</span> <em className="date">{props.date}</em></p>
                <p>
                    {props.children}
                </p>
            </div>
        </div>
    </>
);

export default background;