import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import cacto02 from '../../imgs/produtos/cactos/cacto02.png';
import suculenta2 from '../../imgs/produtos/suculentas/suculenta2.jpg';
import samambaia from '../../imgs/home/categoriaSamambaia.jpg';
import flor04 from '../../imgs/produtos/flores/flor04.png';
import designSemNome2 from '../../imgs/produtos/jardinagem/designSemNome2.png';
import './style.scss';

const Carrossel = () => {

    return (
        <section id="carousel">
            <div className= "carousel">
                <div class= "item">
                    <div className= "image">
                        <img src= {cacto02} width= "150" height= "auto" alt= "cacto"/>
                    </div>
                    <div className= "informacao">
                        <span className="nome">Cacto</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
    
    export default Carrossel;