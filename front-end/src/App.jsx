import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Heading from './components/Heading/Heading';
import Listing from './components/Listing/Listing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import ProductPageLoader from './containers/ProductPageLoader/ProductPageLoader';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import CreateProductPage from './pages/CreateProductPage/CreateProductPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>Bone & Biscuit</h1>
        <NavBar/>

        <Routes> 
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductPageLoader />} />
          <Route path='/products/new' element={<CreateProductPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      <footer>My Paws</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

