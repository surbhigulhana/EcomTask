import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import CategoryOne from './Component/CategoryOne';
import Login from './Component/Login';
import Signup from './Component/Signup';
import ProductDetails from './Component/ProductDetails';
import BuyNow from './Component/BuyNow';
import Cart from './Component/Cart';
import Myorder from './Component/Myorder';
import Trackorder from './Component/Trackorder';
import Address from './Component/Address'
import Slider from './Component/Slider';
import Contact from './Component/Contact';
import Home1 from './demo/Home1';
import Jh from './demo/Jhll';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/Hello" element={<Jh/>}></Route>
         <Route exact path="/h" element={<Home />}></Route>
         <Route exact path="/Categoryone" element={<CategoryOne />}></Route>
         <Route exact path="/login" element={<Login />}></Route>
         <Route exact path="/signup" element={<Signup />}></Route>
         <Route exact path="/Details" element={<ProductDetails />}></Route>
         <Route exact path="/BuyNow" element={<BuyNow />}></Route>
         <Route exact path="/Cart" element={<Cart/>}></Route>
         <Route exact path='/Myorder' element={<Myorder/>}></Route>
         <Route exact path='/Address' element={<Address/>}></Route>

         <Route exact path='/TrackOrder' element={<Trackorder/>}></Route>
         <Route exact path='/Slider' element={<Slider/>}></Route>
         <Route exact path="/Contact" element={<Contact/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;





