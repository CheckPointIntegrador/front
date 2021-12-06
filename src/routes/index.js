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

const RouteList = () => (
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/produtos" element={null} />
            <Route path="/categoria/:categoryName" element={<Products />} />
            <Route path="/sobreNos" element ={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
      
  );
  
  export default RouteList;