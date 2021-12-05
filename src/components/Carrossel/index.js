import {Carousel, Row, Col, Container } from 'react-bootstrap';
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
      <Container >
     
      <Carousel className= "container">
        <Carousel.Item >      
          <Row>
            <Col md={4} sm={6}>
              <img
              className="d-block"
              src= {cacto02} width= "90%" height= "90%"
              alt="cacto"
              />
            </Col>
            <Col md={4} sm={6} className="d-none d-sm-block">
              <img
              className="d-block"
              src= {suculenta2} width= "90%" height= "90%"
              alt="suculenta"
              />
            </Col>
            <Col md={4} sm={6} className="d-none d-md-block">
              <img
              className="d-block"
              src= {samambaia} width= "90%" height= "90%"
              alt="samambaia"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={4} sm={6}>
              <img
              className="d-block"
              src= {flor04} width= "90%" height= "90%"
              alt="flor"
              />
            </Col>
            <Col md={4} sm={6} className="d-none d-sm-block">
              <img
              className="d-block"
              src= {designSemNome2} width= "90%" height= "90%"
              alt="utensílios"
              />
            </Col>
            <Col md={4} sm={6} className="d-none d-md-block">
              <img
              className="d-block"
              src= {cacto02} width= "90%" height= "90%"
              alt="cacto"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      </Container>
    </section>
        
  )
}
    
export default Carrossel;