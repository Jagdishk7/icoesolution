import React from "react";

const TechCard = ({heading,src,alt,text}) => {
  return (
    <>
      <div className="tech-card-container">
        <h1>{heading}</h1>
        <img src={src} alt={alt} />
        <p>
          {text}
        </p>
      </div>
    </>
  );
};

export default TechCard;
