import { useParams } from 'react-router-dom'
import React from "react";

const ProductDetails = () => {
    const params = useParams()
    console.log(params)
    return (
        <React.Fragment>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
        </React.Fragment>
    )
}

export default ProductDetails