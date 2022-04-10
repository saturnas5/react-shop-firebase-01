import React, {useContext} from "react";
import './Header.scss'
import {Link} from "react-router-dom";
import {Context as AuthContext} from "../../context/AuthContext";

const Header = () => {
    const {state, signout} = useContext(AuthContext);

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
                {
                    state.token
                        ? <div className='option' onClick={() => signout()}>SIGN OUT</div>
                        : <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header;