import Header from '../../components/Header';
import BannerHome from '../../components/BannerHome';
import Carrossel from '../../components/Carrossel';
import Category from '../../components/HomePage/Category';
import Footer from '../../components/Footer';

const Home = () =>{
    return(
    <>
        <Header/>
        <BannerHome/>
        <Carrossel/>
        <Category/>
        <Footer/>
    </>
    )
}

export default Home;