import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Heading from './components/Heading/Heading';
import Listing from './components/Listing/Listing';

function App() {
  // const names = ['Alice', 'Bob', 'Charlie'];
  // const places = ['Adelaide', 'Melbourne', 'Sydney', 'Brisbane'];
  return (
    <div>
      <Heading content='Bone & Biscuit' name='Bone & Biscuit'/>
      {/* <h2>Names</h2>
      <Listing data={names} />
      <h2>Places</h2>
      <Listing data={places} />
      <h2>Numbers</h2>
      <Listing data={[1, 2, 3, 4, 5, 6]} /> */}

      <ProductList />
    </div>
  );
}

export default App;
