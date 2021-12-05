import React, {useContext, useEffect, useState} from 'react'
import { Button, Container, Row, Col } from "react-bootstrap"
import Header from '../../components/Header'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import { Helmet } from 'react-helmet';
import './style.scss'
import { useNavigate } from 'react-router'

const Cart = () => {
    const {cartItens, clearCart} = useContext(CartContext)
    const [cartPriceTotal, setCartPriceTotal] = useState(0);
    const navigate = useNavigate();

    useEffect( ()=>{
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
          <Container className="cart-title d-flex my-4 justify-content-between">
            <h1>Meu Carrinho</h1>
          {cartItens.length>0 && 
                <Button
                  variant="light"
                  onClick={() =>
                      clearCart()
                  }
                >
                  Limpar Carrinho
                </Button> 
          }
          </Container>
          
          <Container xs={12} sm={10} md={8} className="cart-container my-5">
            {cartItens.map((item) => {
              return <CartItem {...item} key={item.id} />;
            })}
            {cartItens.length>0 ? 
              <Row className="total-row">
                <Col className="total-col m-5 d-flex justify-content-end">
                  <h2>Total: {cartPriceTotal}</h2>
                </Col>
              </Row>
              : 
              <h2 className="my-5 p-5 text-center">Seu carrinho está vazio</h2>
            }
          </Container>

          {cartItens.length>0 && 
              <Container className="buttons-container my-5 d-flex justify-content-end">
                 <Button
                  className="mx-2"
                  variant="light"
                  onClick={() =>
                      navigate('/')
                  }
                >
                  Continuar Comprando
                </Button> 
                <Button
                  className="mx-2"
                  variant="light"
                  onClick={() =>
                      console.log("finalizou")
                  }
                >
                  Finalizar Compra
                </Button> 
              </Container>
            }
            
          
        </main>
      </>
    );
}

export default Cart;
