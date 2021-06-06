import React from 'react'
import Banner from './Banner/index'
import Trademark from './Trademark/index';
import ProductsType from './ProductsType/index';
import SliderHome from './Slider/index';
import LatestProduct from './LastestProduct/index';

function HomePage() {
    return (
        <div className="group-home">
            <div className="home">
                <Banner />
                <Trademark />
                <ProductsType />
                <SliderHome />
                <LatestProduct />
            </div>
        </div>
    )
}

export default HomePage
