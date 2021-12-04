import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Cart from '../pages/Cart';
import About from '../pages/About';

const RouteList = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/aboutUs" element ={<About />} />
      </Routes>
    </BrowserRouter>
  );
  
  export default RouteList;