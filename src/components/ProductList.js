import React from 'react';
import cartContext from '../CartContext';
import { useContext } from 'react';

import Card from './Card'
function ProductList() {
    const { productData } = useContext(cartContext);
    const itemsElements = productData.map((item)=>{ 
    return <Card name = { item.name }
                price = { item.price } />
    })
  return (
    <div className='items-container'>
        { itemsElements }
    </div>
  )
}

export default ProductList