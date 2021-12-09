import React, {useContext, useEffect, useState} from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { useNavigate, useParams} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Helmet } from 'react-helmet-async';
import './style.scss'
import CartItem from '../Cart/CartItem';
import StyledButton from '../../components/StyledButton';
import {ProductsContext} from '../../context/ProductsContext';

const ProdutoUnidade = () => {
const { cartItens, addToCart} = useContext(CartContext);
const [cartPriceTotal, setCartPriceTotal] = useState(0);
const navigate = useNavigate();
const {id} = useParams();
const {products}= useContext(ProductsContext);
const product= products.find(p => p.id === id);

 useEffect(() => {
    setCartPriceTotal(
      cartItens
        .reduce((total, prod) => total + prod.quantity * prod.price, 0)
        .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    );
  }, [cartItens]); 

  return (
    
    <>
      <Helmet>
        <title>Casa das Plantinhas | Produtos </title>
      </Helmet>


      <main className="main-cart">
        <Container className="cart-title d-flex my-4 justify-content-between">
          <h1>Produto</h1>
         
        </Container>
    
        <Container xs={12} sm={10} md={8} className="cart-container my-5">
          
            <CartItem {...product} key={id} />;
          
         
            <Row className="total-row">
              <Col className="total-col m-5 d-flex justify-content-end">
                <h2>Total: {cartPriceTotal}</h2>
              </Col>
            </Row>
          
        </Container>

        {cartItens.length > 0 && (
          <Container className="buttons-container my-5 d-flex justify-content-end">
                       
            <StyledButton
                type="outline-success"
                action={addToCart}
                product={product}
                text="Adicionar ao carrinho"
                paddindMargin="mx-2 p-4"
              />

            <StyledButton
                type="success"
                action={navigate}
                product="/carrinho"
                text="Finalizar Compra"
                paddindMargin="mx-2 p-4"
              />

          </Container>
        )}
      </main>
    </> 
  )
};

export default ProdutoUnidade;
