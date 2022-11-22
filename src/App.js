import { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import Checkout from './scenes/checkbout/Checkout';
import Confirmation from './scenes/checkbout/Confirmation';
import ItemDetails from './scenes/itemDetails/ItemDetails';
import Home from './scenes/home/Home'
import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/CartMenu';

const ScrollToTop = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null;
}



function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='item/:itemId' element={<ItemDetails />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/success' element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
