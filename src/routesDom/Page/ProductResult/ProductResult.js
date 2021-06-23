import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { useNewContexts } from '../../../contexts/contexts';

function ProductResult() {
    let { id } = useParams();
    const {addidas} = useNewContexts()
    const [products, setProducts] = useState([1,2,])
    console.log(addidas.PromiseResult)
    useEffect(() => {
        // setProducts())
    },[])
    return (
        <div>
            <div>
                {products.map(()=> (
                    <div>
                        1
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductResult
