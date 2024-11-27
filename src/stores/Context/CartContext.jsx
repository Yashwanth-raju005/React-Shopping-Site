/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cartItems,setCartitems]=useState([])


    const addToCart=(item)=>{
        setCartitems([...cartItems,item])
    }

    const removeFromCart=(item)=>{
        setCartitems(cartItems.filter((apple)=>apple !==item))

    }

    return (
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )


}

export const useCart=()=>{
    return useContext(CartContext)
}