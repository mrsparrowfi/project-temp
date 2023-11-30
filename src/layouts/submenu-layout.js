import React, { useState } from 'react';
//import { Link } from "react-router-dom";


// import all styles
import "../assets/css/layout-component.css";

// import all images
import IconLogo from "../assets/images/logo/oriyo.png";


function Tshirts (props) {

    const data = props.product;
    const header = props.title;
    const design = props.design;
    const [getDesign, setGetDesign] = useState('All');

    const filterProductItem = getDesign !== 'All' ? data.filter((items) => items.dID === getDesign) : data;

    const handleCategoryClick = (getDesignID) => {
        setGetDesign(getDesignID);
    }


    return (

        <section id="app--container" className="app--container">
            <div id="header--content" className="header--content">
                <h4> Oriyostyles </h4>
                <div className="line--separator line--first"></div>
                <h2> { header } </h2>
                <div className="line--separator line--second"></div>
                <div className='category--items'>
                    <div className="flex--space"></div>
                    <h6 onClick={() => handleCategoryClick('All')}> All </h6>
                    {
                        design.map((item, index) => (
                            <h6 
                                key={ item.dID } 
                                className={ index === design.length - 1 ? 
                                    'remove--border' : 
                                    (index === 0) ? 'first--child--border' : 'add--border' 
                                } 
                                onClick={() => handleCategoryClick( item.dID )}
                            >
                                { item.designTitle }
                            </h6>
                        ))
                    }
                    <div className="flex--space"></div>
                </div>
            </div>

            <div className='card--container'>
                <div className="flex--space"></div>
                <div className="card--holder">
                    {
                        (filterProductItem.length === 0) ? 
                            (
                                <div className='card--blank'>
                                    <h2> { getDesign } </h2>
                                    <div>
                                        <img src={ IconLogo } alt='icon--logo'/>
                                    </div>
                                    <span> We didn't find requested item <br /> in our list </span>
                                    <div className='try--again'> Try again </div>
                                </div>
                            ) : 
                            (
                                filterProductItem.map((item) => {
                                    return (
                                        <div className="product--card" key={ item.itemID }>
                                            <section className="card--header">
                                                <span className="card--title"> { item.productTitle } </span>
                                                <span className="card--percentage"> -{ item.maxOffer }% </span>
                                            </section>
                                            <section className="card--image">
                                                <img src={ item.imageUrl } alt="card_image" />
                                            </section>
                                            <section className="card--body">
                                                <span className="item--category"> { item.categoryTitle } </span>
                                                <span className="new--price"> €{ item.priceNew } </span>
                                            </section>
                                            <section className="card--body">
                                                <span className="item--model"> { item.productDescription } </span>
                                            </section>
                                            <section className="card--footer">
                                                <a href={ item.productUrl } target='_blank' rel='noreferrer'>
                                                    <button className="card--btn" type="submit"> Browse Item </button>
                                                </a>
                                            </section>
                                        </div>
                                    );
                                }
                            )
                        )
                    }
                </div>
                <div className="flex--space"></div>
            </div>
        </section>

    );

}

export default Tshirts;
