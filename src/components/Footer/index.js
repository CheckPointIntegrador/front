/* eslint-disable react/jsx-no-target-blank */
import './style.scss'
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {

    const generateDateString = () => {
        const creationYear = '2021';
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }

    return (
        <footer id="footer">
           
                <Row>
                    <Col>
                        <div className="contato">
                            <p>"Em memória de Matilda, a falecidade plantinha de Esther</p>
                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="checkpoint">
                            <p> &copy;Copyright  {generateDateString()} - Checkpoint Integrador</p>
                        </div>
                    </Col>
    </Row>
            
        </footer>
    )
}
export default Footer;