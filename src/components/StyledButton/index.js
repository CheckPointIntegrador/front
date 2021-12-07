import {Button } from 'react-bootstrap';
import './style.scss'

const StyledButton = (props) =>{

    const {type, action, product, text, paddindMargin} = props

    //types: success, outline-success, secondary

    return(

            <Button
                variant={type}
                className={paddindMargin}
                onClick={()=> 
                  action(product)
                }
              >
                {text}
              </Button>
        
    )
}

export default StyledButton;