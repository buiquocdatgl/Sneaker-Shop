import React from 'react'
import Banner from './Banner/index'
import Trademark from './Trademark/index';
import ProductsType from './ProductsType/index';
import SliderHome from './Slider/index';
import LatestProduct from './LastestProduct/index';
import { useNewContexts } from '../../contexts/contexts';

function HomePage() {
    const {addidas} = useNewContexts()
    console.log(addidas)
    const addToCart = (user, item) => {
        // kiếm user.cart, add item vào cart của user
        
    }
    return (
        <div className="group-home">
            <button></button>
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
