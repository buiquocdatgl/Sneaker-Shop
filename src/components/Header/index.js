import React from 'react'
import './style.css';
import logo from '../../image/logo.png';
import Search from './Search/index'
import Cart from './User/cart/index'
import User from './User/index'


function Header() {

    const onClickOpenMenu = () => {
        document.querySelector('.ground-menu').classList.add('open');
        document.querySelector('body').classList.add('active');
    }

    return (
        <>
            <button className="scrollTop">
                <i className="fa fa-angle-up"></i>
            </button>
            <div className="ground-header">
                <div className="main-header">
                    <div className="main-item-logo">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <Search />
                    <div style={{ 'display': 'none' }} className="totle-menu">
                        <i className="fa fa-bars" onClick={onClickOpenMenu} />
                    </div>
                    <Cart />
                    <User />
                </div>
            </div>
        </>
    )
}

export default Header
