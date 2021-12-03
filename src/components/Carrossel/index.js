import {Carousel } from 'react-bootstrap';
import cacto02 from '../../imgs/produtos/cactos/cacto02.jpg';
import suculenta2 from '../../imgs/produtos/suculentas/suculenta2.jpg';
import samambaia from '../../imgs/home/categoriaSamambaia.jpg';
import flor04 from '../../imgs/produtos/flores/flor04.png';
import designSemNome2 from '../../imgs/produtos/jardinagem/designSemNome2.png';
import {useState} from 'react';
import './style.scss';

const listaProjetos = [
    {
      id: 1,
      imagem:cacto02,
      nome: "cacto"
    },
    {
      id: 2,
      imagem:suculenta2,
      nome: "suculenta"
    },
    {
      id: 3,
      imagem:samambaia,
      nome: "samambaia"
    },
    {
      id: 4,
      imagem:flor04,
      nome: "flor"
    },
    {
      id: 5,
      imagem:designSemNome2,
      nome: "utensílios"
    },
    {
      id: 6,
      imagem:cacto02,
      nome: "cacto"
    }
]    

const Carrossel= () =>{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <section id="carrossel">
        <h2>Escolha por categoria:</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {listaProjetos.map((item, i)=>{
        const{imagem, nome} = item;
          return(
            <Carousel.Item>
                <img className= "d-block" 
                    src= {imagem} width= "150" height= "150" 
                    alt= "nome"/>
                <Carousel.Caption>
                    <span className="nome">{nome}</span>
                </Carousel.Caption>
            </Carousel.Item>
          )
        })}
                
      </Carousel>
      </section>
        
    );
}
    
export default Carrossel;