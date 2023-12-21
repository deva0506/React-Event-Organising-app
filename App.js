import React from 'react';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Inperson from './component/Inperson';
import Hybrid from './component/Hybrid';
import Webinars from './component/Webinars';
import Registration from './component/Registration';
import About from './component/About';
import { BrowserRouter , Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Hybrid" element={<Hybrid/>} />
        <Route path="/Inperson" element={<Inperson/>} />
        <Route path="/Webinars" element={<Webinars/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
