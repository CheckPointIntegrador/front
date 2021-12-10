import { Modal, Button, Container } from "react-bootstrap"
import { useState, useContext } from "react";
import './style.scss'
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router";
import StyledButton from "../StyledButton/index";

const ProductModal = (props) => {
  const { id, title, price, description, imageUrl, category } = props;
  const product = { id, title, price, description, imageUrl, category };
  const {addToCart, increment, decrement,  removeItem,  cartItens } = useContext(CartContext);
  const navigate = useNavigate();
  const itemInCart = cartItens.find((item) => item.id === product.id);

  
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);

  return (
    <>
      <Button variant="link" style={{textDecoration: "none", color: "white", backgroundColor: "gray", borderRadius: "15px", marginRight: "7px"}} onClick={() => setLgShow(true)}>Informações</Button>
      <Modal
        className="modal"
        size="lg"
        show={lgShow}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="d-flex justify-content-center">
            <Modal.Title id="contained-modal-title-vcenter">
              {title}
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <img className="m-4" src={imageUrl} alt={title} />
          <div className="info-text m-4">
            <div className="info-price">R$ {price.toFixed(2)}</div>
            <div className="info-description">{description}</div>

            <Container xs={12} md="auto" className="product my-4">
              <div className="product-quantity d-flex">
                <label className="py-4 px-2" for="quantity">
                  Quantidade:
                </label>
                <div className="increment-decrement">
                  <input
                    className="p-4"
                    type="submit"
                    value="-"
                    name="quantity"
                    onClick={() => itemInCart && itemInCart.quantity > 1 ? decrement(product) : itemInCart ? removeItem(product) : null}
                  />
                  <span>{itemInCart ? itemInCart.quantity : 0}</span>
                  
                  <input
                    className="p-4"
                    type="submit"
                    value="+"
                    name="quantity"
                    onClick={() => itemInCart ? increment(product) : addToCart(product)}
                  />
                </div>
              </div>
            </Container>

            {!itemInCart ? (
              <StyledButton
                type="success"
                action={addToCart}
                product={product}
                text="Adicionar ao carrinho"
                paddindMargin="mx-2 my-4 p-4 "
              />
            ) : (
              <StyledButton
                type="secondary"
                action={navigate}
                product="/carrinho"
                text="Finalizar Compra"
                paddindMargin="mx-2 my-4 p-4"
              />
            )}
            <StyledButton
              type="outline-success"
              action={handleClose}
              text="Continuar Comprando"
              paddindMargin="mx-2 my-4 p-4"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;