import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img className='logo' src={logo} alt='I am' />
                <nav>
                    <a href='/shop'>Shop</a>
                    <a href='/shop'>Order Review</a>
                    <a href='/shop'>Manage Inventory Here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;
