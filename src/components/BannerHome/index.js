import {Image} from 'react-bootstrap';
import imageHome from '../../imgs/home/banner-home.jpg';
import './style.scss';


const BannerHome = () => {

return (
    <section id="bannerHome">  
         <Image src={imageHome} rounded fluid/>
    </section>
    )
}

export default BannerHome;