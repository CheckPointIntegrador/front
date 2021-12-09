import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import ProductModal from '../ProductModal'
import './style.scss'
import StyledButton from "../../../components/StyledButton"

const ProductItem = (props) =>{
    const {id, title, price, description, imageUrl, category} = props;
    const product = {id, title, price, description, imageUrl, category};
    const navigate = useNavigate();
    const {addToCart, increment, cartItens} = useContext(CartContext);
    
    const itemInCart = cartItens.find(item => item.id === product.id);



    return (
      <div className="product" key={id}>
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
        <img src={product.imageUrl} alt={product.title} onClick={()=>navigate(`/produtos/${product.id}`)}/>
        {!itemInCart && (
          <StyledButton
            type="success"
            action={addToCart}
            product={product}
            text="Adicionar ao carrinho"
            paddindMargin="mx-2 p-4"
            modal={true}
          />
        )}
        {itemInCart && (
          <StyledButton
            type="secondary"
            action={increment}
            product={product}
            text="Adicionar mais"
            paddindMargin="mx-2 p-4"
            modal={true}
          />
        )}
        <ProductModal {...product} />
      </div>
    );
           
}

export default ProductItem;