import React from "react";
import styles from "./Cards.module.css";

const Cards = ({imgSrc,  title, description }) => {
  return (
    <div className={styles.divContainer}>
     <img className={styles.img} src={imgSrc} alt="" />   
      
    
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Cards;
