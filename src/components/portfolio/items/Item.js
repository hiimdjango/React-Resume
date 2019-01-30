import React from 'react';

const item = ( props ) => (
    <div className="columns portfolio-item">
        <div className="item-wrap">
            <a href={props.id}>
                <img alt='item' src={props.img} />
                <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h5>{props.title}</h5>
                    </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
            </a>
        </div>
    </div>
);

export default item;