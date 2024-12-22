import React from "react";

const Navbar = () => {
  return (
    <nav style={{ background: "black", padding: "", color: "white" }}>
      <h1 style={{paddingTop:33,position:"relative",top:30, paddingLeft:30,}}>realme</h1>
      <ul style={{ 
        listStyle: "none", 
        display: "flex",
        justifyContent:"center",
        alignItems : "center", 
        gap: "5rem",  
        padding: 0 
      }}>
        <li><a href="#realme smartphone" style={{ color: "white", textDecoration: "none" }}>realme smartphone</a></li>
        <li><a href="#narzo smartphone" style={{ color: "white", textDecoration: "none" }}>narzo smartphone</a></li>
        <li><a href="#Audio" style={{ color: "white", textDecoration: "none" }}>Audio</a></li>
        <li><a href="#Accessories" style={{ color: "white", textDecoration: "none" }}>Accessories</a></li>
      </ul>
    </nav>
  );
    
  
};

export default Navbar;