import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i=0; i<cart.length; i++)
    {
        const product = cart[i];
        total = total+ product.price;
    }
    let shipping = 12.99;
    if (total> 35)
    shipping =0;
    else if(total>15)
    shipping = 4.99;

    
    return (
        <div>
            <h3>order summery</h3>
            <p>Items ordered: {cart.length} </p>
            <p><small>shipping cost : {shipping}</small></p>
            <p>total price : {total + shipping}</p>
        </div>
    );
};

export default Cart;