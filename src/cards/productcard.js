import React from 'react';
import { Link } from "react-router-dom";

// import all components


// import all modules


// import all data
import { AllProductData } from "./productdata";


// import all styles
import "./productcard.css";


function ProductCard (props) {

    const productData = AllProductData();

    return (
        <>
            {
                productData.slice(props.startpoint, props.endpoint).map((item, index) => (

                    <div className="product--card" key={ index }>

                        <section className="card--header">
                            <span className="card--title"> { item.title } </span>
                            <span className="card--percentage"> -{ item.maxOffer }% </span>
                        </section>

                        <section className="card--image">
                            <img src={ item.imageUrl } alt="card_image" />
                        </section>

                        <section className="card--body">
                            <span className="item--category"> { item.category } </span>
                            <span className="new--price"> €{ item.priceNew } </span>
                        </section>

                        <section className="card--body">
                            <span className="item--model"> { item.description } </span>
                        </section>

                        <section className="card--footer">
                            <Link to = "">
                                <button className="card--btn" type="submit"> Product </button>
                            </Link>
                        </section>

                    </div>

                ))
            }
        </>
    );

}

export default ProductCard;
