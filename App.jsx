

import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import phone1 from "./assets/phone1.png";
import phone2 from "./assets/phone2.png";
import phone3 from "./assets/phone3.png";
import logo1  from "./assets/logo1.webp";
import logo2  from "./assets/logo2.webp";


const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        padding: "1rem"
      }}>
      <Cards imgSrc={phone1}  title="realme GT 6" description="Rs,26.999" />
      <Cards imgSrc={phone2}  title="realme note 60" description="Rs.34.499" />
      <Cards imgSrc={phone3}  title="realme C65" description="Rs,23.455" />
      <Cards imgSrc={phone1}  title="realme 12" description="Rs,25.000" />
      <Cards imgSrc={phone2}  title="realme C53" description="Rs,36.399" />
      <Cards imgSrc={phone3}  title="realme 30" description="Rs,22.599" />
    </div>
    <Footer imgSrc={logo1} />
    <Footer imgSrc= {logo2} />
  </div>
);
};
      
    
  


export default App
