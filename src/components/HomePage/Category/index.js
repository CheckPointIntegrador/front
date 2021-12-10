import { Row, Col, Image } from 'react-bootstrap';
import categoriaCacto from '../../../imgs/home/categoriaCacto.jpg';
import categoriaSuculenta from '../../../imgs/home/categoriaSuculenta.jpg';
import categoriaSamambaia from '../../../imgs/home/categoriaSamambaia.jpg';
import categoriaFlores from '../../../imgs/home/categoriaFlores.jpg';
import categoriaJardinagem from '../../../imgs/home/categoriaJardinagem.jpg';
import './style.scss';
import { useNavigate } from 'react-router-dom';


const Category = () => {

    const navigate = useNavigate();
    return (
        <>
            <section id="categorias">
                <h2>Escolha por categoria:</h2>

                    <Row className="justify-content-md-center">
                        <Col >
                            <Image src={categoriaCacto} roundedCircle style={{objectFit:"cover"}} onClick={()=>navigate('/categoria/cactos')}/>
                            <p>Cacto</p>
                        </Col>
                        <Col >
                            <Image src={categoriaSuculenta} roundedCircle style={{objectFit:"cover"}} onClick={()=>navigate('/categoria/suculentas')}/>
                            <p>Suculenta</p>
                        </Col>
                        <Col >
                            <Image src={categoriaSamambaia} roundedCircle style={{objectFit:"cover"}} onClick={()=>navigate('/categoria/samambaias')}/>
                            <p>Samambaia</p>
                        </Col>
                        <Col >
                            <Image src={categoriaFlores} roundedCircle style={{objectFit:"cover"}} onClick={()=>navigate('/categoria/flores')}/>
                            <p>Flores</p>
                        </Col>
                        <Col >
                            <Image src={categoriaJardinagem} roundedCircle style={{objectFit:"cover"}}onClick={()=>navigate('/categoria/jardinagem')}/>
                            <p>Jardinagem</p>
                        </Col>
                    </Row>
                
            </section>
        </>

    )

}

export default Category;