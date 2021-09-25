import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Item.css';

const Item = (props) => {
    // console.log(props);
    const {name,img,address,profession,salary} = props.item;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
       <div>
            <div className='single-item-modify'>
           <div>
           <img className='img-size' src={img} alt="" />
            <h4>Name : {name}</h4>
            <p>Profession : {profession}</p>
            <p>Address : {address}</p>
            <p>Salary : {salary}</p>
            <button onClick={() => props.handleAddtocart(props.item)} className='add-to-cart-btn'>{element} Add to Cart</button>
           </div>
        </div>
       </div>
    );
};

export default Item;