import React from 'react';
import { useState, useEffect } from 'react';
import StarRatings from "react-star-ratings";
import './style.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Card (){

    useEffect(() => {
        AOS.init({
            duration : 1100
        });
    }, []);

    const [products, setProducts] = useState([
        {
            name: 'Vans UA Classic Slip  On 98',
            rating: 0,
            imgurl:'vans slip on checkerboard 98.jpg',
            price: '2.700.000',
        },
        {
            name: 'Vans Anaheim Factory Style 73 DX',
            rating: 0,
            imgurl:'Vans Anaheim Factory Style 73 DX.jpg',
            price: '2.300.000',
        },
        {
            name: 'Vans Anaheim Factor',
            rating: 0,
            imgurl:'Vans Anaheim Factory.jpg',
            price: '2.300.000',
        },
        {
            name: 'Vans Old Skool 36 Dx Anaheim Factory',
            rating: 0,
            imgurl:'Vans Old Skool 36 Dx Anaheim Factory - Vn0a38g2pxc.jpg',
            price: '2.200.000',
        },
        {
            name: 'Vans Old Skool 36 Dx Anaheim Factory',
            rating: 0,
            imgurl:'Vans Old Skool 36 Dx Anaheim Factory - Vn0a38g2oak.jpg',
            price: '2.200.000',
        },
        {
            name: 'vans slip on checkerboard 98',
            rating: 0,
            imgurl:'vans slip on checkerboard 98.jpg',
            price: '1.900.000',
        },
        {
            name: 'Vans Anaheim Factory Style 73 DX',
            rating: 0,
            imgurl:'vans anaheim factory sid dx - vn0a4btxul1.jpg',
            price: '2.300.000',
        },
        {
            name: 'Vans Anaheim Factory Sid Dx',
            rating: 0,
            imgurl:'Vans Anaheim Factory Sid Dx - Vn0a4btxul4.jpg',
            price: '2.300.000',
        },
        {
            name: 'Vans Anaheim Factor',
            rating: 0,
            imgurl:'Vans Anaheim Factory.jpg',
            price: '2.300.000',
        },
        {
            name: 'Vans Anaheim Factory Style 73 DX',
            rating: 0,
            imgurl:'Vans Anaheim Factory Style 73 DX.jpg',
            price: '2.300.000',
        },
        {
            name: 'vans ua era 95 dx anaheim factory',
            rating: 0,
            imgurl:'vans ua era 95 dx anaheim factory - vn0a2rr1tio.jpg',
            price: '2.100.000',
        },
        {
            name: 'vans ua sk8-hi 38 dx anaheim factory',
            rating: 0,
            imgurl:'vans ua sk8-hi 38 dx anaheim factory - vn0a38gftio.jpg',
            price: '2.400.000',
        },
        {
            name: 'vans ua sk8-hi 38 dx anaheim factory',
            rating: 0,
            imgurl:'vans ua sk8-hi 38 dx anaheim factory  vn0a38gftip.jpg',
            price: '2.200.000',
        },
        {
            name: 'vans ua old skool 36 dx anaheim factory',
            rating: 0,
            imgurl:'vans ua old skool 36 dx anaheim factory  vn0a38g2mr4.jpg',
            price: '2.200.000',
        },
        {
            name: 'Vans UA Classic Slip  On 98',
            rating: 0,
            imgurl:'vans slip on checkerboard 98.jpg',
            price: '2.700.000',
        },
        {
            name: 'vans ua old skool 36 dx anaheim factory skulls',
            rating: 0,
            imgurl:'vans ua old skool 36 dx anaheim factory skulls   vn0a38g2x7y.jpg',
            price: '2.300.000',
        },
        {
            name: 'vans ua era 95 dx anaheim factory skulls',
            rating: 0,
            imgurl:'vans ua era 95 dx anaheim factory skulls  vn0a2rr1x7.jpg',
            price: '2.100.000',
        },
        {
            name: 'vans ua sk8-hi 38 dx anaheim factory',
            rating: 0,
            imgurl:'vans ua sk8-hi 38 dx anaheim factory  vn0a38gftip.jpg',
            price: '2.200.000',
        },
        {
            name: 'Vans Anaheim Factory Sid Dx',
            rating: 0,
            imgurl:'Vans Anaheim Factory Sid Dx - Vn0a4btxul4.jpg',
            price: '2.300.000',
        },
        {
            name: 'Vans Old Skool 36 Dx Anaheim Factory',
            rating: 0,
            imgurl:'Vans Old Skool 36 Dx Anaheim Factory - Vn0a38g2pxc.jpg',
            price: '2.200.000',
        },
    ])

    return(
        <>
            {products.map((item, i) =>(
                <div className="item-products-list" data-aos={"zoom-in-up"} key = {i}>
                    <a href="#">
                        <div className="ig-products-list">
                            <img src={require(`../../../image/vans/${item.imgurl}`).default} alt="" />
                        </div>
                        <div className="name-products-list">
                            <p>{item.name}</p>
                        </div>
                        <div className="price-products-list">
                            <div className="group-price">
                                <span>{item.price} <u>đ</u> </span>
                            </div>
                        </div>
                        <div className="group-start-review">
                            <StarRatings
                                numberOfStars={5}
                                rating={item.rating}
                                name='rating'
                                starDimension="16px"
                                starRatedColor="#fed330"
                                starHoverColor="#fed330"
                                starEmptyColor="white"
                            />
                            <p>chưa có đánh giá</p>
                        </div>
                    </a>
            </div>
            ))}
        </>
    )
}
function LatestProduct() {
    
    return (
        <>
            <div className="group-list-Products">
                <h3>SẢN PHẨM MỚI NHẤT</h3>
                <div className="list-Products">
                    <Card />
                </div>
            </div>
        </>
    )
}

export default LatestProduct
