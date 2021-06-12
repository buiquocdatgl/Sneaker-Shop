import React from 'react'
import Slider from "react-slick";
import anh1 from "../../../image/anh1.jpg"
import anh5 from "../../../image/anh5.jpg";
import anh2 from "../../../image/anh2.jpg";
import anh3 from "../../../image/anh3.jpg";
import "./style.css";

function Banner() {

    const photos = [
        {
          banner: anh5, 
        },
        {
          banner: anh3,
        },
        {
          banner: anh2,
        },
        {
          banner: anh1,
        },
    ];

    const settings = {
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 550,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div className="ground-banner">
            <div className="list-banner">
                <Slider {...settings} className="list-item-banner">
                    {photos.map((photo ,i) =>(
                        <div className="items-banner" key ={i}>
                             <img src={photo.banner}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Banner
