
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import CategoryOne from './Component/CategoryOne';
import Login from './Component/Login';
import Signup from './Component/Signup';

import Slider from './Component/Slider';
import Contact from './Component/Contact';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        
      <Route exact path="/" element={<Home />}></Route>

         <Route exact path="/Categoryone" element={<CategoryOne />}></Route>
         <Route exact path="/login" element={<Login />}></Route>
         <Route exact path="/signup" element={<Signup />}></Route>
         
         <Route exact path='/Slider' element={<Slider/>}></Route>
         <Route exact path="/Contact" element={<Contact/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;





