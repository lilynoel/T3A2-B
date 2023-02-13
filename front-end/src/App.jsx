import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Heading from './components/Heading/Heading';
import Listing from './components/Listing/Listing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import ProductPageLoader from './containers/ProductPageLoader/ProductPageLoader';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductPageLoader />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
