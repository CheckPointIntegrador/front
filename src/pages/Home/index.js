import Header from '../../components/Header';
import BannerHome from '../../components/BannerHome';
import Carousel from '../../components/Carousel';
import Category from '../../components/HomePage/Category';

const Home = () =>{
    return(
    <>
        <Header/>
        <BannerHome/>
        <Carousel/>
        <Category/>
    </>
    )
}

export default Home;