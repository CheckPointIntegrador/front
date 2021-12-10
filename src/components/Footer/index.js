/* eslint-disable react/jsx-no-target-blank */
import './style.scss'
import { Card, Row, Col } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {

    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }

    return (
        <footer id="footer">

            <Card >
                <Card.Body>
                    <Row>
                        <Col md={{span:4}} sm={{span:3}}>
                            <Card.Text>"Em memória de Matilda, a falecida plantinha de Esther"</Card.Text>
                        </Col>
                        <Col md={{span:4}} sm={{span:6}}>
                            <Card.Text className="text-center">
                                <a href="https://github.com/CheckPointIntegrador" target="_blank"><BsGithub /></a>
                            </Card.Text>
                        </Col>
                        <Col md={{span:2, offset:2}} sm={{span:3}}>
                            <Card.Text className="text-right" >
                               <a href="/sobreNos"> Sobre nós </a>
                            </Card.Text>
                        </Col>
                        
                    </Row>
                    

                </Card.Body>
                <Card.Footer className="text-center"> ©Copyright  {generateDateString()} - Checkpoint Integrador</Card.Footer>
            </Card>

        </footer>
    )
}
export default Footer;