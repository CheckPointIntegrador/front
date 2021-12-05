import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../../../context/CartContext"
import './style.scss'

const ProductItem = (props) =>{
    const {id, title, price, description, imageUrl, category} = props;
    const product = { id, title, price, description, imageUrl, category};
    
    const {addToCart, increment, cartItens} = useContext(CartContext);
    
    const itemInCart = cartItens.find(item => item.id === product.id);

    return (
      <div className="product" key={id}>
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
        <img src={product.imageUrl} alt={product.title} />
        {!itemInCart && (
          <Button
            variant="primary"
            onClick={() => 
              addToCart(product)
            }
          >
            AddToCart
          </Button>
        )}
        { itemInCart && (
          <Button
            variant="secondary"
            onClick={() => 
              increment(product)
            
            }
          >
            AddMore
          </Button>
        )}
      </div>
    );
           
}

export default ProductItem;