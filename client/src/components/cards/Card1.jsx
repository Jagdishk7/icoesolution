import React from "react";
import "./Cards.css";

const Card1 = ({ heading, desc }) => {
  return (
    <>
      <div className="card_wrapper">
        <div className="v-card">
          <div className="card_content">
            <h2>{heading}</h2>
            <p>{desc}</p>
            <div className="status">
              <p>8 Feb 2022</p>
              <a href="/">
                <button className="read-btn cta">Read More</button>
              </a>
            </div>
          </div>
          <img src="assets/card1.png" alt="laptop guy" />
        </div>
      </div>
    </>
  );
};

export default Card1;
