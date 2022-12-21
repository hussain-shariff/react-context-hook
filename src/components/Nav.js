import React from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../CartContext'
import { useContext } from 'react'

function Nav(props) {
    const { items } = useContext(cartContext)
    return (
    <nav className='navbar'>    
        <Link to= "/"><div className="home">Home</div></Link>
        <Link to= "/cart"><div className="cart">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <span>{ items.length }</span>
            </div>
        </Link>
    </nav>

    )
}

export default Nav