import { useContext } from "react"
import { Button, Row, Col } from "react-bootstrap"
import { CartContext } from "../../../context/CartContext"
import './style.scss'

const CartItem = (props) => {
  const { id, title, price, imageUrl, quantity } = props;
  const product = { id, title, price, imageUrl, quantity };

  const { increment, decrement, removeItem } = useContext(CartContext);

  const subtotal = (product.price * product.quantity).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <Row className="product-row m-5 justify-content-between" key={id}>
      <Col xs={5} md={3}  className="product-col my-auto">
        <img
          className="product-img"
          src={product.imageUrl}
          alt={product.title}
        />
      </Col>
      <Col xs={7} md={3} lg={4} className="product-col my-auto p-4">
        <h3>{product.title}</h3>
      </Col>
      <Col xs={12} md="auto" className="product-col my-auto">
        <div className="product-quantity d-flex  justify-content-end">
          <label className="py-4 px-2" for="quantity">
            Quantidade:
          </label>
          <div className="increment-decrement">
            <input
              className="p-4"
              type="submit"
              value="-"
              name="quantity"
              onClick={() => decrement(product)}
            />
            <span>{product.quantity}</span>

            <input
              className="p-4"
              type="submit"
              value="+"
              name="quantity"
              onClick={() => increment(product)}
            />
          </div>
        </div>
      </Col>
      <Col xs={12} md="auto" className="product-col p-2 my-auto d-flex justify-content-end">
        <h4>{subtotal}</h4>
      </Col>
      <Col xs={12} md="auto" className="product-col p-2 my-auto d-flex justify-content-end">
        <Button variant="light" onClick={() => removeItem(product)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;