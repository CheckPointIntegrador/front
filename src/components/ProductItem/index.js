import { useContext } from "react"
import {useNavigate} from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ProductModal from '../ProductModal'
import './style.scss'
import StyledButton from "../StyledButton"
import { Card } from "react-bootstrap"

const ProductItem = (props) =>{
    const {id, title, price, description, imageUrl, category} = props;
    const product = {id, title, price, description, imageUrl, category};
    const navigate = useNavigate();
    const {addToCart, increment, cartItens} = useContext(CartContext);
    
    const itemInCart = cartItens.find(item => item.id === product.id);


    let cardTarget

    const removeStyling = () => {
        const firstSibling = cardTarget.nextElementSibling
        const secondSibling = cardTarget.nextElementSibling.nextElementSibling
        firstSibling.classList.add("d-none")
        secondSibling.classList.add("d-none")
        cardTarget.parentElement.style.transform = "scale(1)"
        cardTarget = null
    }

    const addStyling = () => {
        cardTarget.parentElement.style.backgroundColor = "#606C38BD"
        cardTarget.parentElement.style.transform = "scale(1.2)"
        const firstSibling = cardTarget.nextElementSibling
        const secondSibling = cardTarget.nextElementSibling.nextElementSibling
        firstSibling.classList.remove("d-none")
        firstSibling.classList.remove("d-flex")
        secondSibling.classList.remove("d-none")
    }
    
    document.addEventListener("click", (e) => {
        if(cardTarget && e.target !== cardTarget){
            if( !e.target.classList.contains("card-title") &&
                    !e.target.classList.contains("card-body") &&
                        !e.target.classList.contains("card-text")){

                removeStyling()
            }
        }
        if(e.target.classList.contains("card-img-top")){
            cardTarget = e.target
            addStyling()
        }
    })


    return (
      <div className="product" key={id}>
        <Card key={id} style={{ width: '20rem', borderRadius:"18px", border: "0" , backgroundColor: "transparent", transition:"transform 0.1s", color: "#fff" }}>
        <Card.Img style={{borderRadius:"18px", width:"100%", height: "150px", objectFit:"cover"}} variant="top" src={product.imageUrl} /*onClick={()=> navigate(`/produtos/${id}`)}*/ />
          <Card.Body className="d-none">
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title style={{fontSize:"18px"}}>{product.title}</Card.Title>
                <ProductModal {...product} />
              </div>
                <Card.Text style={{fontSize:"14px"}}>
                    R${product.price},00
                </Card.Text>
            </Card.Body>
            <Card.Body className="d-none">
                {!itemInCart && (
                  <StyledButton
                    type="success"
                    action={addToCart}
                    product={product}
                    text="Adicionar ao carrinho"
                    modal={true}
                  />
                )}
                {itemInCart && (
                  <StyledButton
                    type="outline-success"
                    action={increment}
                    product={product}
                    text="Adicionar mais"
                    modal={true}
                  />
                )}
            </Card.Body>
        </Card>
      </div>
      
    );
           
}

export default ProductItem;