import React from 'react'

import { useNewContexts } from '../../contexts/contexts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Home from '../../routesDom/Page/Home/Home';
import ProductResult from '../../routesDom/Page/ProductResult/ProductResult';

function HomePage() {
    const {addidas} = useNewContexts()
    console.log(addidas)
    const addToCart = (user, item) => {
        // kiếm user.cart, add item vào cart của user
    }
    return (
        <div className="group-home">
    
            <Home />
        </div>
    )
}

export default HomePage
