import { useEffect, useState } from 'react';
import './AllProducts.css'
import SingleProduct from '../SingleProduct/SingleProduct';

export default function AllProducts({handleSelectedProduct}) {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)

            })
    }, [])

    //console.log(products);
    return (
        <div>
            <h1>All Products</h1>
            {
                products.map((p) => <SingleProduct
                handleSelectedProduct={handleSelectedProduct} key={p.id}product={p}> </SingleProduct>)
            }
        </div>
    )
}