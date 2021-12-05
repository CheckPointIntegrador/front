import React, { useContext, useEffect, useState } from 'react'
import carrinho from '../../../imgs/home/cart4.svg'
import {CartContext} from '../../../context/CartContext'
import './style.scss'

const CartIcon = () => {
    const {cartItens} = useContext(CartContext)

    const [itemCount, setItemCount] = useState(0);
    useEffect( ()=>{
        setItemCount(cartItens.reduce((total, prod) =>  total + prod.quantity, 0))
        }
        , [cartItens]);
    
    return (
        <div className='cart-icon-container'>
            <img src={carrinho} alt='carrinho de compras'/>
            {itemCount === 0 ? null : <span className='cart-count'>{itemCount}</span>}
        </div>
    )
}


export default CartIcon;