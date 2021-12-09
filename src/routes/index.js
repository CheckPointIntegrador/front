import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import ProdutoUnidade from '../pages/ProdutoUnidade';
import CartContextProvider from '../context/CartContext';
import ProductsContextProvider from '../context/ProductsContext';
import About from '../pages/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
              <Route path="/produtos/:id" element={<ProdutoUnidade />} />
              <Route path="/categoria/:categoryName" element={<Products />} />
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