import React from 'react';
import { Link } from "react-router-dom";
import emptyCartImg from '../../../assets/img/empty-cart.png';


const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
        <h2>
            Cart is empty 
            <span>😕</span>
        </h2>
        <p>
            You probably forgot to order pizza.<br />
            To order a pizza, you should go to the homepage.
        </p>
        <img src={emptyCartImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
            <span>Back to the homepage</span>
        </Link>
    </div>
)

export default CartEmpty