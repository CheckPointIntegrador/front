import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import CartContextProvider from '../context/CartContext';
import About from '../pages/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categorys from "../pages/Categorys"
import { HelmetProvider } from 'react-helmet-async';

const RouteList = () => {
  return(
    <BrowserRouter>
     <HelmetProvider>
          <CartContextProvider>
            <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produtos/buscar/:input" element={<Products />} />
              <Route path="/categoria/:categoryName" element={<Categorys />} />
              <Route path="/sobreNos" element ={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
          </CartContextProvider>
      </HelmetProvider>
    </BrowserRouter>
      
  )
};
  
  export default RouteList;