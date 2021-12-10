import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import CartContextProvider from '../context/CartContext';
import ProductsContextProvider from '../context/ProductsContext';
import About from '../pages/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categorys from "../pages/Categorys"
import { HelmetProvider } from 'react-helmet-async';

const RouteList = () => (
    <BrowserRouter>
     <HelmetProvider>
        <ProductsContextProvider>
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
        </ProductsContextProvider>
      </HelmetProvider>
    </BrowserRouter>
      
  );
  
  export default RouteList;