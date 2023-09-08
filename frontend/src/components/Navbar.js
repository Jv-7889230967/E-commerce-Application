import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import "./Navbar.css";

const Navbar = () => {
    const userData = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="navbar">
            <div className="links">
                <Link style={{ marginRight: '80vw' }} to="/shop">Shop</Link>
               <div className="details">
               <p>name:{userData.name}</p>
               </div>
                <Link to='/cart'><ShoppingCart size={30} /></Link>
            </div>
        </div>
    )
}

export default Navbar;
