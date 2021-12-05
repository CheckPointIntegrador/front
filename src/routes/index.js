import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import CartContextProvider from '../context/CartContext';
import ProductsContextProvider from '../context/ProductsContext';

const RouteList = () => (
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  );
  
  export default RouteList;