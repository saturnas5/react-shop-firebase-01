import React from "react";
import './Header.scss'
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <Link to='/' className='logo-container'>
                <span className='logo'>Logo</span>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;