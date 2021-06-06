import React from 'react'
import "./style.css";
import InForProduct from "./InForProduct";
import Comment from "./Comment/index";

function DetailProduct() {
    return (
        <div className="container-detail-products">
            <div className="group-detail">
                <div className="link-group">
                    <a href="#">Trang chủ</a>
                    <a href="#">Adidas</a>
                    <a href="#">Adidas Stan Smith</a>
                    <span>Stan Smith</span>
                </div>
                <InForProduct />
                <Comment />
            </div>
        </div>
    )
}

export default DetailProduct
