import BannerHome   from '../../components/AboutUs/BannerAbout';
import AboutUs      from '../../components/AboutUs';
import { Helmet } from 'react-helmet-async';


const About = () => {
  return (
    <>
      <Helmet>
        <title>Casa das Plantinhas | Sobre nós</title> 
      </Helmet>   
      <BannerHome />
      <AboutUs />
      
    </>
  );
}
export default About;
