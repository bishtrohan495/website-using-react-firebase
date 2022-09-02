import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Howitswork from "./Howitswork";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () =>{
  return(
    <>
      <Navbar />
      <Header />
      <Howitswork />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;