import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../../../context/CartContext"

const CartItem = (props) =>{
    const {id, title, price, imageUrl, quantity} = props;
    const product = {id, title, price, imageUrl, quantity};
    
    const {increment, decrement, removeItem} = useContext(CartContext);
    

    return (
      <div className="product" key={id}>
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
        <img src={product.imageUrl} alt={product.title} />
          <Button
            variant="primary"
            onClick={() => 
              increment(product)
            }
          >
            +
          </Button>
          {product.quantity}
          <Button
            variant="primary"
            onClick={() => 
              decrement(product)
            
            }
          >
            -
          </Button>
          <Button
            variant="secondary"
            onClick={() => 
              removeItem(product)
            
            }
          >
            Remover
          </Button>
        
      </div>
    );
           
}

export default CartItem;