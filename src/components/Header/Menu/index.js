import React from 'react';
import './style.css';
import MenuUser from './MenuUser/index';

function Menu() {

    const onClickCloseMenu = () => {
        document.querySelector('.ground-menu').classList.remove('open');
    }

    return (
        <div className="ground-menu">
            <div className="nav-toggle">
                <i className="fa fa-times" onClick={ onClickCloseMenu }/>
            </div>
            <MenuUser />
        </div>
    )
}

export default Menu
