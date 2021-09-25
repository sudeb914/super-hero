import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const item of cart){
        total = total + item.salary;
    }
    return (
        <div>
            <h3>Cart Quantity : {props.cart.length}</h3>
            <p>Name: 
            {
                cart.map(singleProduct => singleProduct.name)
            }
            </p>
            <p>Total : {total}</p>
            <button className='add-to-cart-btn'>Read More</button>
            
            
        </div>
    );
};

export default Cart;