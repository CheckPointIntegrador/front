import {Carousel, Row, Col } from 'react-bootstrap';
import cacto02 from '../../imgs/produtos/cactos/cacto02.jpg';
import suculenta2 from '../../imgs/produtos/suculentas/suculenta2.jpg';
import samambaia from '../../imgs/home/categoriaSamambaia.jpg';
import flor04 from '../../imgs/produtos/flores/flor04.png';
import designSemNome2 from '../../imgs/produtos/jardinagem/designSemNome2.png';
import './style.scss';

const Carrossel = () =>{

  return (
    <section id="carrossel">
      <h2>Produtos em destaque:</h2>
      <Carousel>
        <Carousel.Item>      
          <Row>
            <Col md={3} sm={6}>
              <img
              className="d-block"
              src= {cacto02} width= "150" height= "150"
              alt="cacto"
              />
            </Col>
            <Col md={3} sm={6} className="d-none d-sm-block">
              <img
              className="d-block"
              src= {suculenta2} width= "150" height= "150"
              alt="suculenta"
              />
            </Col>
            <Col md={3} sm={6} className="d-none d-md-block">
              <img
              className="d-block"
              src= {samambaia} width= "150" height= "150"
              alt="samambaia"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={3} sm={6}>
              <img
              className="d-block"
              src= {flor04} width= "150" height= "150"
              alt="flor"
              />
            </Col>
            <Col md={3} sm={6} className="d-none d-sm-block">
              <img
              className="d-block"
              src= {designSemNome2} width= "150" height= "150"
              alt="utensílios"
              />
            </Col>
            <Col md={3} sm={6} className="d-none d-md-block">
              <img
              className="d-block"
              src= {cacto02} width= "150" height= "150"
              alt="cacto"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </section>
        
  )
}
    
export default Carrossel;