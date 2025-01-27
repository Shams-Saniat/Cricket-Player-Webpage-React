import React from 'react';

export default function Available({selectedProducts, handleDelete}) {
    return (
        <div>
            {
                selectedProducts.map((product)=>(
                    <div>
                        <div className='flex'>
                            <img className='selected-img' src={product.image} alt="" />
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <button onClick={()=>handleDelete(product.id)}>Delete</button>
                            </div>
                    </div>
                ))
            }
        </div>
    )
}
