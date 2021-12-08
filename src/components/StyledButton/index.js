import {Button } from 'react-bootstrap';
import './style.scss'
import Swal from "sweetalert2"

const StyledButton = (props) =>{

    const {type, action, product, text, paddindMargin, modal} = props

    //types: success, outline-success, secondary

    const modalFire = (product)=>{
      Swal.fire({
        imageUrl: product.imageUrl,
        imageHeight: 100,
        imageWidth: 120,
        imageAlt: product.title,
        title: 'Produto adicionado com sucesso!',
        icon: 'success',
        iconColor: '#81AA66',
        confirmButtonText: 'Continuar Comprando',
        buttonsStyling: false,
        width: 450,
        height: 350
        
    })
    }

    return(

            <Button
                variant={type}
                className={paddindMargin}
                onClick={()=> {
                  action(product)
                  if(modal) 
                    modalFire(product)
                  }
                }
              >
                {text}
              </Button>
        
    )
}

export default StyledButton;