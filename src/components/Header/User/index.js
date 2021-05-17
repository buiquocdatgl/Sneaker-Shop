import React, { useState } from 'react'
import "./style.css";

function User() {

    const [open, setOpen] = useState(false);

    return (
        <div className="ground-user">
            <a href="#" className="items-login">đăng nhập</a>
            <div className="main-user">
                <div className="profile-login">
                    <div className="login">
                        <i style={{ display: "none" }} className="fa fa-user btn-show-login" onClick={() =>setOpen(!open)}/>
                        <div className={open ? 'show-login open' : 'show-login'}>
                            <i className="fa fa-long-arrow-left btn-close-login"  onClick={() =>setOpen(!open)}/>
                            <a href="#" className="item-login btn-close-login">đăng nhập</a>
                            <a href="#" className="item-login btn-close-login">đăng ký</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
