import React from 'react';
import Item from './items/Item';
import Modal from './items/Modal';

const portfolio = (props) => {
    //Load Modals from props
    const modals = props.data.portfolio.map((item,i) => {
        return <Modal 
        details={item.details}
        tags={item.tags}
        img={item.modalImg}
        title={item.title}
        id={"modal"+i}
        key={i}>{item.description}</Modal>
    });

    //Load Items from props
    const items = props.data.portfolio.map((item,i) => {
        return <Item img={item.img} title={item.title} id={"#modal"+i} key={'item'+i} />
    });

    return(
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out Some of My Works.</h1>
                    {/* portfolio-wrapper */}
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {items}
                    </div> {/* portfolio-wrapper end */}
                    {modals}
                </div> {/* twelve columns end */}
            </div> {/* row End */}
        </section>
)};

export default portfolio;