import React from 'react';
import './Navbar.css'

// eslint-disable-next-line react/prop-types
export default function Navbar({selectedProducts, price}){
    return (
        <div>
            <div className='nav-container'>
                <div className='logo'>
                    Logo
                </div>
                <div className='menus'>
                    <li className='item'>Home</li>
                    <li className='item'>Product</li>
                    <li className='item'>cart {selectedProducts}</li>
                    <li className='item'>$ {price}</li>
                </div>
            </div>
        </div>
    )
}

    

