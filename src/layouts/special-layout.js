import React, { useState } from 'react';
//import { Link } from "react-router-dom";

// import all components


// import all modules


// import all styles
import "../assets/css/layout-component.css";


function LayoutComponent (props) {

    const data = props.product;
    const header = props.title;
    const category = props.category();
    const itemsPerRow = props.interval;
    const [displayItems, setDisplayItems] = useState(itemsPerRow);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filterProductItem = selectedCategory !== 'All' ? data.filter((items) => items.category === selectedCategory) : data;

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setDisplayItems(itemsPerRow);
    }

    const handleDisplayMoreItemsOnClick = () => {
        setDisplayItems(preDisplayItems => preDisplayItems + itemsPerRow + 1);
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
                        category.map((item, index) => (
                            <h6 
                                key={ item.cid } 
                                className={ index === category.length - 1 ? 
                                    'remove--border' : 
                                    (index === 0) ? 'first--child--border' : 'add--border' 
                                } 
                                onClick={() => handleCategoryClick( item.catTitle )}
                            >
                                { item.catTitle }
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" fill="blue" className="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                                    </svg><br />
                                    <h2> Opps !!! </h2>
                                    <span> Item is not available </span><br />
                                    <span> Try again </span>
                                </div>
                            ) : 
                            (
                                filterProductItem.slice(0, displayItems).map((item) => {
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

                    {
                        displayItems < filterProductItem.length && (
                            <>
                                <div 
                                    className = "button--card"
                                    onClick = { handleDisplayMoreItemsOnClick }
                                >
                                    <i className="bi bi-plus-lg"></i>
                                    <div className="btn--text"> Click More </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className="flex--space"></div>
            </div>
        </section>

    );

}

export default LayoutComponent;
