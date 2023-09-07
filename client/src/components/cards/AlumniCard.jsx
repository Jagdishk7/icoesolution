import React from "react";
import './Cards.css'

const AlumniCard = () => {
  return (
    <>
      <div className="alumnicard-container">
        <div className="alumnicard-top">
          <img
            src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q="
            alt=""
          />
          <div className="alumnicard-top-text">
            <p>Name</p>
            <h4 className="heading4">
              Position<span>Company</span>
            </h4>
          </div>
        </div>
        <div className="alumnicard-bottom">description</div>
      </div>
    </>
  );
};

export default AlumniCard;
