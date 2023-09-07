import React from "react";

const TitleTextCard = ({heading,text}) => {
  return (
    <>
      <div className="titletext-card-container">
        <h1>{heading}</h1>
        <hr />
        <p>
          {text}
        </p>
      </div>
    </>
  );
};

export default TitleTextCard;
