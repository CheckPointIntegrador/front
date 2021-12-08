import BannerHome from "../../components/BannerHome";
import Carrossel from "../../components/Carrossel";
import Category from "../../components/HomePage/Category";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Casa das Plantinhas</title>
      </Helmet>
      <BannerHome />
      <Carrossel />
      <Category />
    </>
  );
};

export default Home;
