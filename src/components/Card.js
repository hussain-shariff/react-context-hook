import React from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../CartContext'
import { useContext } from 'react'

function Card(props) {
    const {addToCart} = useContext(cartContext);
  return (
        <div className='card-container' onClick={()=>addToCart(props.name, props.price)}>
            <div className="card-img">
                <i class="fa-sharp fa-solid fa-shirt"></i>
            </div>
            <div className="card-details">
                <div>
                    <h4>{ props.name }</h4>
                    <p>${ props.price }</p>
                </div>
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            </div>
        </div>
  )
}

export default Card