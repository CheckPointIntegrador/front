import { INITIAL_STATE } from "./CartContext"

export const ACTION = {
    ADD_ITEM: 'addItem',
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    REMOVE_ITEM: 'removeItem',
    CLEAR: 'clear'
}


const CartReducer = (state, action) =>{
    switch(action.type){
        case ACTION.ADD_ITEM:
            return {
              ...state,
              cartItens: [...state.cartItens, {...action.payload, quantity: 1}]
            };
            
        case ACTION.INCREMENT:
            return {
                ...state,
                cartItens: state.cartItens.map(product => product.id === action.payload.id ? 
                    {...product, quantity: product.quantity + 1} : product)
            }

        case ACTION.DECREMENT:
            return {
                ...state,
                cartItens: state.cartItens.map(product => product.id === action.payload.id ? 
                    {...product, quantity: product.quantity - 1} : product)
            }

        case ACTION.REMOVE_ITEM:
            return{
                ...state,
                cartItens: state.cartItens.filter(product => product.id !== action.payload.id)
            }
        
        case ACTION.CLEAR:
            return{
                ...INITIAL_STATE
            }
            
        default:
            return state;
    }
}

export default CartReducer;