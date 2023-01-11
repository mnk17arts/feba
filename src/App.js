import Home from './components/Home';
import {Route, Routes} from "react-router-dom";
import Data from './data/data.json';
import Product from './components/Product';
import Navbar from './components/Navbar';
import './App.css';

function App() {



  return (
    <div className="App">
      <Navbar />
      <Routes>
            <Route path="/" element={<Home />} />
            {
                Data.data.map((item) => {
                    return (
                        <Route path={`/${item.id}`} element={<Product data={item} />} />
                    )
                })
            }
      </Routes>
    </div>
  );
}

export default App;
