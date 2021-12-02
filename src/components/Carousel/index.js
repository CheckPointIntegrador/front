import { Container, Row, Col, Image } from 'react-bootstrap';
import cacto02 from '../../imgs/produtos/cactos/cacto02.png';
import suculenta2 from '../../imgs/produtos/suculentas/suculenta2.jpg';
import samambaia from '../../imgs/home/categoriaSamambaia.jpg';
import flor04 from '../../imgs/produtos/flores/flor04.png';
import designSemNome2 from '../../imgs/produtos/jardinagem/designSemNome2.png';
import './style.scss';

const Carousel = () => {

    return (
        <section id="carousel">
                <h2>Produtos em destaque:</h2>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col >
                            <Image src={cacto02} roundedCircle />
                        </Col>
                        <Col >
                            <Image src={suculenta2} roundedCircle />
                        </Col>
                        <Col >
                            <Image src={samambaia} roundedCircle />
                        </Col>
                        <Col >
                            <Image src={flor04} roundedCircle />
                        </Col>
                        <Col >
                            <Image src={designSemNome2} roundedCircle />
                        </Col>
                    </Row>
                </Container>
        </section>
    )
    }
    
    export default Carousel;