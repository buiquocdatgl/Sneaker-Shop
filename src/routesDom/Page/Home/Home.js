import React from 'react'
import Banner from '../../../components/homePage/Banner/index'
import Trademark from '../../../components/homePage/Trademark/index'
import ProductsType from '../../../components/homePage/ProductsType/index'
import SliderHome from '../../../components/homePage/Slider/index'
import LatestProduct from '../../../components/homePage/LastestProduct/index'


function Home() {
    return (
        <div>
            <div className="home">
                <Banner />
                <Trademark />
                <ProductsType />
                <SliderHome />
                <LatestProduct/>
            </div>
        </div>
    )
}

export default Home
