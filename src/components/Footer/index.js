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
                        <Col>
                            <Card.Text>"Em memória de Matilda, a falecidade plantinha de Esther"</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text className="text-center">
                                <BsGithub />
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text >
                                Sobre nós
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