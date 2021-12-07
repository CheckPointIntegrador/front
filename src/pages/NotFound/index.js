import { useNavigate } from 'react-router-dom';
import './style.scss';
import plant from '../../imgs/notFound/planta-esther.png'
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const navigate = useNavigate();
 
  setTimeout(() => {
    navigate('/');
  }, 6000);

  return (
    <>
    <Helmet>
        <title>Casa das Plantinhas | Not Found</title>
    </Helmet>
    <Container xs={12} sm={8} className="not-found d-flex flex-wrap justify-content-center">
      <div className="m-auto px-4">
        <h1 className="py-2">404</h1>
        <h2 className="py-2">Página não encontrada.</h2>
        <p className="py-2">A falecida Matilda pede que cuidem bem das suas plantinhas.</p>
      </div>
      <div data-aos="zoom-in-left" data-aos-duration="2000">
        <img className="planta-carnivora py-2" src={plant} alt="planta-carnivora" />
      </div>
    </Container>
    </>
  )
}
export default NotFound;