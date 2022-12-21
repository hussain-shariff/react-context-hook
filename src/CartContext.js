import { createContext, useState } from "react";
import React from "react";
import Data from './data';


const cartContext = createContext();

export function CartProvider({children}){
    const [items, setItems] = React.useState([])
    const [productData, setProductData] = React.useState(Data)


    function addToCart(name, price){
        setItems(prestate=>{
            return(
                [...prestate, {name, price}]
            )
        })
    }
    return(
        <cartContext.Provider value={  {items, productData, addToCart}  }>
            { children }
        </cartContext.Provider>
    )
}



export default cartContext;