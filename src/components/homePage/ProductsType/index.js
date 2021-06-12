import React from 'react'
import { useState, useEffect } from 'react';
import StarRatings from "react-star-ratings";
import './style.css';
import AOS from "aos";
import "aos/dist/aos.css";


function Card(){

    useEffect(() => {
        AOS.init({
            duration : 1100
        });
    }, []);

    const [products, setProducts] = useState([
        {
            name: 'puma x first mile lqdcell shatter',
            rating: 5,
            type: 'puma rsx',
            imgurl:'Puma Bari Mule Black.jpg',
            price: '3.415.000',
            estimate:'3 đánh giá'
        },
        {
            name: 'puma nova 2 plein air',
            rating: 3,
            type: 'puma rsx',
            imgurl: 'puma carina lift.jpg',
            price: '2.275.000',
            estimate:'1 đánh giá'
        },
        {
            name: 'puma cell venom',
            rating: 0,
            type: 'puma rsx',
            imgurl: 'puma cell venom.jpg',
            price: '2.430.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'puma nova 2 plein air',
            rating: 0,
            type: 'puma rsx',
            imgurl: 'Puma Defy Mid Metal.jpg',
            price: '2.989.000',
            estimate:'chưa có đánh giá'
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma mule.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma rs x3 plas tech mist green.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma rsx color theory.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma rsx hard drive.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma rsx metallic.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma rsx reinvention.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma rsx softcase.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma rsx winter glimmer.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma rsx3 plas tech.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma skye stripe.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma style rider play on.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma thunder fashion 2.0.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx',
            imgurl: 'puma thunder spectra.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx puzzle',
            imgurl: 'puma rsx puzzle 2.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx puzzle',
            imgurl: 'puma rsx puzzle.jpg',
            price: '3.415.000',
        },
        {
            name: 'puma nova 2 plein air',
            rating: 5,
            type: 'puma rsx puzzle',
            imgurl: 'puma x mtv rsx tracks bold.jpg',
            price: '3.415.000',
        }
    ])
    return(
        <>
            {products.map((item , i)=> (
                <div className="item-products-type" data-aos={"zoom-in-up"} key={i}>
                    <a href="#">
                        <div className="ig-products-type">
                            {/* <img src={require(`${pumalink}${item.type}/${item.imgurl}`).default} alt="" /> */}
                            <img src={require(`../../../image/puma/${item.type}/${item.imgurl}`).default} alt="" />
                        </div>
                        <div className="name-products-type">
                            <p>{item.name}</p>
                        </div>
                    </a>
                    <div className="price-products-type">
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
                        <p>{item.estimate}</p>
                    </div>
                </div>
            ))}
        </>
        
    )
}


function ProductsType() {
    
    return (
        <>
            <div className="group-products-type">
                <h3> DÀNH RIÊNG CHO BẠN</h3>
                <div className="products-type">
                    <Card />
                </div>
            </div>
        </>
    )
}

export default ProductsType
