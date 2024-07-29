import {useContext, createContext, useState } from "react"

const cartContex = createContext();
export const useCart =()=>useContext
(cartContex);


export const cartProvider =({children})=>{

const [cart, setCart] =useState(0)


return(
    <cartContex.Provider value =
    {{cart, setCart}}>
        {children}
        </cartContex.Provider>
)
}