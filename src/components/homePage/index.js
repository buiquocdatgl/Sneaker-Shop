import React from 'react'
import Banner from './Banner/index'
import Trademark from './Trademark/index';
import ProductsType from './ProductsType/index';

function HomePage() {
    return (
        <div className="group-home">
            <div className="home">
                <Banner />
                <Trademark />
                <ProductsType />
            </div>
        </div>
    )
}

export default HomePage
