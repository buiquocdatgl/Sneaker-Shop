import React from 'react'
import { Badge } from 'antd';
import './style.css'
import { useNewContexts } from '../../../../contexts/contexts';

function Cart() {

    const {google_login, currentUser} = useNewContexts()
    return (
        <div className="ground-card">
            <div className="main-card">
                <div className="card-user">
                    <Badge count={currentUser.cart ? currentUser.cart.length : 0} showZero>
                        <a href="#" className="head-example">
                            <i className="fa fa-shopping-cart" />
                        </a>
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Cart
