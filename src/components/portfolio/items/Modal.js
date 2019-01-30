import React from 'react';

const modal = ( props ) => (
    <div id={props.id} className="popup-modal mfp-hide">
                    <img alt='' className="scale-with-grid" src={props.img} />
                    <div className="description-box">
                        <h4>{props.title}</h4>
                        <p>{props.children}</p>
                        <span className="categories"><i className="fa fa-tag" />{props.tags}</span>
                    </div>
                    <div className="link-box">
                        <a rel="noopener noreferrer" target="_blank" href={props.details}>Details</a>
                        <a className="popup-modal-dismiss">Close</a>
                    </div>
                </div>
);

export default modal;