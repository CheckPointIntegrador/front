import {Carousel, Row, Col} from 'react-bootstrap';
//import {useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import cacto02 from '../../imgs/destaques/cacto02.jpg';
import suculenta1 from '../../imgs/destaques/suculenta_Haworthia_Fasciata.jpg';
import samambaia from '../../imgs/destaques/Samambaia_Americana.jpg';
import flor04 from '../../imgs/destaques/hortensia.jpg';
import designSemNome2 from '../../imgs/destaques/utensilios.jpg';
import suculenta2 from '../../imgs/destaques/suculenta_Haworthia_limifolia.jpg';
import api from '../../services/api';
import './style.scss';

const Carrossel = () =>{
  /*const [data, setData] = useState([]);

  useEffect(()=>{
    api.get('/products').then((response)=>setData(response.data);
  }, []) */
const data = useAxios('/products')

  return (
    
    <section id="carrossel">
      <h2>Produtos em destaque:</h2>
     
      <Carousel variant="dark" id= "destaques">
        <Carousel.Item>
       
          <Row >
          {data.length !==0 && (data.map(({id, imageUrl, title}, index) => {
          return(
            <Col key={id} md={4} sm={6} className={`mx-auto ${index===1?'d-none d-sm-block' : index===2? 'd-none d-md-block' : ''}`}>
              <img
              className="d-block mx-auto"
              src= {imageUrl} width= "80%" height= "80%"
              alt={title}
              />
              <h5>{title}</h5>
            </Col>
           )}).slice(0,3))}
           </Row>
          </Carousel.Item>
          
          <Carousel.Item>
            <Row className="mx-auto">
          {data.length !==0 && (data.map(({id, imageUrl, title}, index) => {
          return(
            <Col key= {id} md={4} sm={6} className={`mx-auto ${index===4?'d-none d-sm-block' : index===5? 'd-none d-md-block' : ''}`}>
              <img
              className="d-block mx-auto"
              src= {imageUrl} width= "80%" height= "80%"
              alt={title}
              />
              <h5>{title}</h5>
            </Col>
          )}).slice(3,6))}
          </Row>
          </Carousel.Item>
      </Carousel>
    </section>    
    
)}     
export default Carrossel;

