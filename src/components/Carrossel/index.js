import {Carousel, Row, Col, Container } from 'react-bootstrap';
import cacto02 from '../../imgs/destaques/cacto02.jpg';
import suculenta1 from '../../imgs/destaques/suculenta_Haworthia_Fasciata.jpg';
import samambaia from '../../imgs/destaques/Samambaia_Americana.jpg';
import flor04 from '../../imgs/destaques/hortensia.jpg';
import designSemNome2 from '../../imgs/destaques/utensilios.jpg';
import suculenta2 from '../../imgs/destaques/suculenta_Haworthia_limifolia.jpg';
import './style.scss';

const Carrossel = () =>{

  return (
    <section id="carrossel">
      <h2>Produtos em destaque:</h2>

      <Container >
       <Carousel variant="dark" id= "container">
        <Carousel.Item >      
          <Row>
            <Col md={4} sm={6}>
              <img
              className="d-block"
              src= {cacto02} width= "80%" height= "80%"
              alt="cacto"
              />
              <h3>Nome da planta aqui</h3>
            </Col>
            <Col md={4} sm={6} className="d-none d-sm-block">
              <img
              className="d-block"
              src= {suculenta1} width= "80%" height= "80%"
              alt="suculenta"
              />
              <h3>Nome da planta aqui</h3>
            </Col>
            <Col md={4} sm={6} className="d-none d-md-block">
              <img
              className="d-block"
              src= {samambaia} width= "80%" height= "80%"
              alt="samambaia"
              />
              <h3>Nome da planta aqui</h3>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col md={4} sm={6}>
              <img
              className="d-block"
              src= {flor04} width= "80%" height= "80%"
              alt="flor"
              />
              <h3>Nome da planta aqui</h3>
            </Col>
            <Col md={4} sm={6} className="d-none d-sm-block">
              <img
              className="d-block"
              src= {designSemNome2} width= "80%" height= "80%"
              alt="utensílios"
              />
              <h3>Nome da planta aqui</h3>
            </Col>
            <Col md={4} sm={6} className="d-none d-md-block">
              <img
              className="d-block"
              src= {suculenta2} width= "80%" height= "80%"
              alt="cacto"
              />
              <h3>Nome da planta aqui</h3>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      </Container>
    </section>
        
  )
}
    
export default Carrossel;