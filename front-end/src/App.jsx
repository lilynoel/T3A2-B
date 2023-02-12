import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading/Heading';
import Listing from './components/Listing/Listing';

function App() {
  return (
    <>
      <Heading content='Bone & Biscuit'/>
      <h3>The 4 Legged Bakery</h3>
      <Listing/>
    </>
  );
}

export default App;
