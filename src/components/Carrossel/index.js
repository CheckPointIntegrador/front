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

       <Carousel variant="dark" id= "destaques">
        <Carousel.Item>      
          <Row >
            <Col md={4} sm={6} className="mx-auto">
              <img
              className="d-block mx-auto"
              src= {cacto02} width= "80%" height= "80%"
              alt="cacto"
              />
              <h5>Opuntia Microdasys subsp. Albata</h5>
            </Col>
            <Col md={4} sm={6} className="d-none d-sm-block mx-auto">
              <img
              className="d-block mx-auto"
              src= {suculenta1} width= "80%" height= "80%"
              alt="suculenta"
              />
              <h5>Suculenta Haworthia Fasciata</h5>
            </Col>
            <Col md={4} sm={6} className="d-none d-md-block mx-auto">
              <img
              className="d-block mx-auto"
              src= {samambaia} width= "80%" height= "80%"
              alt="samambaia"
              />
              <h5>Samambaia Americana</h5>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="mx-auto">
            <Col md={4} sm={6} className="mx-auto">
              <img
              className="d-block mx-auto"
              src= {flor04} width= "80%" height= "80%"
              alt="flor"
              />
              <h5>Hortênsia</h5>
            </Col>
            <Col md={4} sm={6} className="d-none d-md-block mx-auto">
              <img
              className="d-block mx-auto"
              src= {suculenta2} width= "80%" height= "80%"
              alt="cacto"
              />
              <h5>Suculenta Haworthia Limifolia</h5>
            </Col>
            <Col md={4} sm={6} className="d-none d-sm-block mx-auto">
              <img
              className="d-block mx-auto"
              src= {designSemNome2} width= "80%" height= "80%"
              alt="utensílios"
              />
              <h5>Utensílios de Jardinagem 4PÇS</h5>
            </Col>  
          </Row>
        </Carousel.Item>
      </Carousel>
    </section>      
  )
}
    
export default Carrossel;