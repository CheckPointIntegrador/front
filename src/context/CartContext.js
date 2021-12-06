import React, { createContext, useReducer, useEffect } from 'react'
import CartReducer from './CartReducer'
import {ACTION} from './CartReducer'

export const CartContext = createContext();

export const INITIAL_STATE = (initialValue = EMPTY_CART) => 
    JSON.parse(localStorage.getItem("cartState")) || initialValue;

  
export const EMPTY_CART = {cartItens:[]};

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE());
    const addToCart = (product) => dispatch({type: ACTION.ADD_ITEM, payload: product});
    const increment = (product) => dispatch({type: ACTION.INCREMENT, payload: product});
    const decrement = (product) => dispatch({type: ACTION.DECREMENT, payload: product});
    const removeItem = (product) => dispatch({type: ACTION.REMOVE_ITEM, payload: product});
    const clearCart = () => dispatch({type: ACTION.CLEAR});

    useEffect(() => {
        localStorage.setItem("cartState", JSON.stringify(state));
      }, [state]);
    
    const contextValues = {
        ...state,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart
    }

    return (
        <CartContext.Provider value={contextValues}>
            {
                children
            }
        </CartContext.Provider>
    )
}

export default CartContextProvider;
