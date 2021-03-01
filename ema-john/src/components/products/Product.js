import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>only {stock} pieces left in stock</small></p>
                <button 
                onClick ={() =>props.handleAddProduct(props.product)}
                className="main-button"><FontAwesomeIcon icon={faShoppingCart} />add to cart
                </button>

            </div>
        </div>
    );
};

export default Product;