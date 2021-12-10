import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ProductModal from '../ProductModal'
import './style.scss'
import StyledButton from "../StyledButton"
import { Card, Col } from "react-bootstrap"

const ProductItem = (props) =>{
    const {id, title, price, description, imageUrl, category} = props;
    const product = {id, title, price, description, imageUrl, category};
    const {addToCart, increment, cartItens} = useContext(CartContext);
    
    const itemInCart = cartItens.find(item => item.id === product.id);


    let cardTarget

    const removeStyling = () => {
        const firstSibling = cardTarget.nextElementSibling
        const secondSibling = cardTarget.nextElementSibling.nextElementSibling
        firstSibling.classList.add("d-none")
        secondSibling.classList.add("d-none")
        cardTarget.parentElement.style.height = "220px"
        cardTarget.parentElement.style.position = "static"
        cardTarget.parentElement.style.transform = "scale(1)"
        cardTarget.parentElement.parentElement.style.zIndex = "1"
        cardTarget.style.cursor = "pointer"
        cardTarget = null
    }

    const addStyling = () => {
        cardTarget.parentElement.style.backgroundColor = "rgba(96, 108, 56, 0.95)"
        cardTarget.parentElement.style.transform = "scale(1.2)"
        cardTarget.parentElement.style.height = "315px"
        cardTarget.parentElement.style.position = "absolute"
        cardTarget.parentElement.parentElement.style.zIndex = "5"
        cardTarget.style.cursor = "initial"
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
      <Col xs={12} md={6} lg={4} className="product d-flex justify-content-center py-4 my-4" style={{zIndex: 1}} key={product.id}>
        <Card id={id} style={{ width: '28rem', borderRadius:"18px", border: "0" , backgroundColor: "transparent", transition:"transform 0.1s", color: "#fff" }}>
        <Card.Img style={{borderRadius:"18px", width:"100%", height: "220px", objectFit:"cover", cursor: "pointer"}} variant="top" src={product.imageUrl} />
          <Card.Body className="d-none">
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title style={{fontSize:"18px"}}>{product.title}</Card.Title>
              </div>
                <Card.Text style={{fontSize:"14px"}}>
                    R${product.price},00
                </Card.Text>
            </Card.Body>
            <Card.Body className="d-none">
                <div className="buttons">
                <ProductModal {...product}/>
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
                </div>
            </Card.Body>
        </Card>
      </Col>
      
    );
           
}

export default ProductItem;