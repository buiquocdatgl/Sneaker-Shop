import React from 'react';
import Slider from "react-slick";
import './style.css';
import StarRatings from "react-star-ratings";
import { useState, useEffect } from 'react';
import con from '../../../image/converse/chuck 70 sunflower high top.jpg'
import settings from './style';
import AOS from "aos";
import "aos/dist/aos.css";

const pumalink = '../../../image/converse'

function SliderHome() {

    useEffect(() => {
        AOS.init({
            duration : 1100
        });
    }, []);

    const [items, setItems] = useState([
        {
            name: 'chuck 70 high top renew 2',
            rating: 0,
            imgurl:'chuck 70 sunflower high top.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'Chuck 70 Vintage Canvas Hi',
            rating: 0,
            imgurl:'Chuck 70 Vintage Canvas Hi.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'Chuck 70 Vintage Canvas low',
            rating: 0,
            imgurl:'chuck 70 vintage canvas low.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'Chuck 70 Vintage Canvas low 2',
            rating: 0,
            imgurl:'chuck 70 vintage canvas low 2.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'chuck 70 parchment hi top',
            rating: 0,
            imgurl:'chuck 70 parchment hi top.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'chuck 70 high top renew',
            rating: 0,
            imgurl:'chuck 70 high top renew.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'chuck 70 low top renew',
            rating: 0,
            imgurl:'chuck 70 low top renew 3.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'chuck taylor all star high top renew',
            rating: 0,
            imgurl:'chuck taylor all star high top renew.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'renew chuck taylor all star high top ',
            rating: 0,
            imgurl:'renew chuck taylor all star high top 2.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'renew chuck taylor all star high top',
            rating: 0,
            imgurl:'renew chuck taylor all star high top.jpg',
            price: '2.000.000',
            estimate:'chưa có đánh giá'
        },
    ])


    return (
        <>
            <div className="group-silder">
                <h3>KHUYẾN MÃI HOT NHẤT</h3>
                <div className="silder">
                    <Slider {...settings}>
                        {items.map((item) =>(
                            <div className="iteml-silder" data-aos={"zoom-in-up"}>
                                <a href="#">
                                    <div className="ig-silder">
                                        <img src={require(`../../../image/converse/${item.imgurl}`).default} alt="" />
                                    </div>
                                    <div className="name-silder">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="price-sidler">
                                        <span> {item.price} <u>đ</u></span>
                                    </div>
                                    <div class="group-start-review">
                                        <StarRatings
                                            numberOfStars={5}
                                            rating={item.rating}
                                            name='rating'
                                            starDimension="16px"
                                            starRatedColor="#fed330"
                                            starHoverColor="#fed330"
                                            starEmptyColor="white"
                                        />
                                        <p>{item.estimate}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SliderHome
