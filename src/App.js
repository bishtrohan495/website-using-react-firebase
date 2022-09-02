import React from "react";
import Home from "./Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Service from "./pages/Service";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Error from "./pages/Error";

const App = () =>{
  return(
    <>
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Home />} />
     <Route path="/service" element={<Service />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contactus />} />
     <Route element={<Error />} />
     </Routes>
     </BrowserRouter>
    </>
  );
};
export default App;