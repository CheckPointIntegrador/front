import BannerHome from "../../components/BannerHome";
import Carrossel from "../../components/Carrossel";
import Category from "../../components/HomePage/Category";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loader";
import { useState, useEffect } from "react";
import useAxios from '../../hooks/useAxios';

const Home = () => {
  const [show, setShow] = useState(false);

  const data = useAxios('/products')
  useEffect(() => {
    if (data.length > 0){
      setShow(true)
    }
  }, [show, data.length])

  return (
    <>
      {!show ? 
      <Loader/> : 
      <>
        <Helmet>
          <title>Casa das Plantinhas</title>
        </Helmet>
        <BannerHome />
        <Carrossel data={data}/>
        <Category /> 
      </>
    }
   </>
  );
};

export default Home;
