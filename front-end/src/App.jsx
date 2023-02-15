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
import { UserContextProvider } from './context/UserContextProvider';
import Footer from './components/Footer/Footer';
import MainLogo from './components/MainLogo/MainLogo';
import LogOut from './components/LogOut/LogOut';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import OrderList from './components/OrderList/OrderList';


function App() {
  
  
  
  return (

    <UserContextProvider>
      <BrowserRouter>
        <MainLogo />
        <NavBar/>

        <Routes> 
          <Route path="/register" element={<RegisterPage /> } />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<OrderList />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductPageLoader />} />
          <Route path='/products/new' element={<CreateProductPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
        </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

