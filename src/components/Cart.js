import React from 'react';
import cartContext from '../CartContext';
import { useContext } from 'react';

function Cart() {
    const { items } = useContext(cartContext)
    const cartListElements = items.map((item)=>{
        return (
            <div>
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>
            </div>
        )
    })
  return (
    <div className='cart-items'>
        { cartListElements }
    </div>
  )
}

export default Cart