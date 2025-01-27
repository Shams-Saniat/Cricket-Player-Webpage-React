import React from 'react';
import Available from '../Available/Available'
import Selected from '../Selected/Selected'


export default function AvailableContainer({
    handleIsActiveState, isActive, selectedProducts, handleDelete }) {
    
    return (
        <div>
            <h1>Available Container</h1>

            <div className='flex'>
                <div onClick={()=>handleIsActiveState("available")}
                    className={`${isActive.available?" btn active":"btn"}`}>Available</div>
                <div onClick={()=>handleIsActiveState("selected")}
                    className={`${isActive.available?" btn":"active btn"}`}>Selected</div>

            </div>

            {isActive.available?<Available handleDelete={handleDelete} selectedProducts={selectedProducts}></Available>:
            <Selected></Selected>}
        </div>
    )
}


