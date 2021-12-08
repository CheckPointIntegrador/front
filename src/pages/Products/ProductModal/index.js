import { Modal, Button } from "react-bootstrap"
import { useState, useContext } from "react";
import './style.scss'
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router";
import StyledButton from "../../../components/StyledButton";

const ProductModal = (props) => {
  const { id, title, price, description, imageUrl, category } = props;
  const product = { id, title, price, description, imageUrl, category };
  const {addToCart, cartItens } = useContext(CartContext);
  const navigate = useNavigate();
  const itemInCart = cartItens.find((item) => item.id === product.id);

  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button
        variant="light" 
        onClick={() => setLgShow(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      </Button>
      <Modal
        className="modal"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="d-flex justify-content-center">
            <Modal.Title  id="contained-modal-title-vcenter">{title}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <img className="m-4" src={imageUrl} alt={title} />
          <div className="info-text m-4">
            <div className="info-price">R$ {price.toFixed(2)}</div>
            <div className="info-description">{description}</div>
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
              action={navigate}
              product="/produtos"
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