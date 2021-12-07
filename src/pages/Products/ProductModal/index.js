import { Modal, Button } from "react-bootstrap"
import { useState, useContext } from "react";
import './style.scss'
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router";
import StyledButton from "../../../components/StyledButton";

const ProductModal = (props) => {
  const { id, title, price, description, imageUrl, category } = props;
  const product = { id, title, price, description, imageUrl, category };
  const { increment, addToCart, cartItens } = useContext(CartContext);
  const navigate = useNavigate();
  const itemInCart = cartItens.find((item) => item.id === product.id);

  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>Info</Button>
      <Modal
        className="modal"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex">
          <img className="m-4" src={imageUrl} alt={title} />
          <div className="info-text">
            <div className="info-price">R$ {price.toFixed(2)}</div>
            <div className="info-description">{description}</div>
            {!itemInCart ? (
              <StyledButton
                type="success"
                action={addToCart}
                product={product}
                text="Adicionar ao carrinho"
                paddindMargin="mx-2 p-4"
              />
            ) : (
              <StyledButton
                type="secondary"
                action={increment}
                product={product}
                text="Adicionar mais"
                paddindMargin="mx-2 p-4"
              />
            )}
            <StyledButton
              type="outline-success"
              action={navigate}
              product="/produtos"
              text="Continuar Comprando"
              paddindMargin="mx-2 p-4"
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;