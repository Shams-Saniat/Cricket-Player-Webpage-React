import React from 'react';
import './SingleProduct.css'

export default function SingleProduct({ product, handleSelectedProduct }) {
    //console.log(handleSelectedProduct);
    console.log(product);
    const { id, name, image, price, description, isFeature } = product || {}
    return (
        <div className='card'>
            <img className='img' src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="cat-price">
                <p>${price}</p>
                <p>${isFeature?"Feature category":"not category"}</p>
            </div>

            <button onClick={()=>handleSelectedProduct(product)}>Add to cart</button>
        </div>
    )
}
