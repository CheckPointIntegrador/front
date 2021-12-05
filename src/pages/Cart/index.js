import React, {useContext, useEffect, useState} from 'react'
import { Button, Container } from "react-bootstrap"
import Header from '../../components/Header'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import { Helmet } from 'react-helmet';
import './style.scss'

const Cart = () => {
    const {cartItens, clearCart} = useContext(CartContext)
    const [cartItensTotal, setCartItensTotal] = useState(0);
    const [cartPriceTotal, setCartPriceTotal] = useState(0);
    useEffect( ()=>{
        setCartItensTotal(cartItens.reduce((total, prod) =>  total + prod.quantity, 0))
        setCartPriceTotal(cartItens.reduce((total, prod) =>  total + (prod.quantity*prod.price), 0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
        }
        , [cartItens]);

        
    return (
      <>
        <Helmet>
          <title>Casa das Plantinhas | Carrinho </title>
        </Helmet>
        <Header />
        <main>
          <Container xs={12} sm={10} md={8} className="cart-container">
            {cartItens.map((item) => {
              return <CartItem {...item} key={item.id} />;
            })}
            {cartItens.length>0 ? 
              <div>
                <Button
                  variant="secondary"
                  onClick={() =>
                      clearCart()
                  }
                >
                  Remover
                </Button> 
                <div>Itens: {cartItensTotal} Total: {cartPriceTotal}</div>
              </div>
              : 
              <h2 className="m-5 text-center">Seu carrinho está vazio</h2>
              
            }
            
          </Container>
        </main>
      </>
    );
}

export default Cart;
