import { Modal, Button } from "react-bootstrap"
import { useState, useContext } from "react";
import './style.scss'
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router";

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
          <img src={imageUrl} alt={title} />
          <div className="info-text">
            <div className="info-price">R$ {price.toFixed(2)}</div>
            <div className="info-description">{description}</div>
            {!itemInCart ? (
              <Button
                variant="light"
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
              >
                Adicionar ao carrinho
              </Button>
            ) : (
              <Button
                variant="light"
                onClick={() => {
                  increment(product);
                  navigate("/cart");
                }}
              >
                Adicionar mais
              </Button>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;