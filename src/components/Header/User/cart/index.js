import React from 'react'
import { Badge } from 'antd';
import './style.css'

function index() {
    return (
        <div className="ground-card">
            <div className="main-card">
                <div className="card-user">
                    <Badge count={0} showZero>
                        <a href="#" className="head-example">
                            <i className="fa fa-shopping-cart" />
                        </a>
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default index
