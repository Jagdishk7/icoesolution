import React, { useState } from "react";
import "./HoverComponentView.css";
import TechCard from "../cards/TechCard";

const HoverComponentView = () => {
  const [isDefault, setIsDefault] = useState(true);
  const [isHealthCare, setIsHealthCare] = useState(false);
  const [isEcomm, setIsEcomm] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const [isRealEstate, setIsRealEstate] = useState(false);
  const [isMedia, setIsMedia] = useState(false);
  const [isLogistics, setIsLogistics] = useState(false);
  const [isTourism, setIsTourism] = useState(false);

  // Health Care Function Starts
  function healthCareEnter() {
    setIsHealthCare(true);
    setIsDefault(false);
  }
  function healthCareLeave() {
    setIsHealthCare(false);
    setIsDefault(true);
  }
  // Health Care Function Ends

  // Ecomm Function Starts
  function EcommEnter() {
    setIsEcomm(true);
    setIsDefault(false);
  }
  function EcommLeave() {
    setIsEcomm(false);
    setIsDefault(true);
  }
  // Ecomm Function Ends

  // Education Function Starts
  function EducationEnter() {
    setIsEducation(true);
    setIsDefault(false);
  }
  function EducationLeave() {
    setIsEducation(false);
    setIsDefault(true);
  }
  // Education Function Ends

  // Real Estate Function Starts
  function RealEstateEnter() {
    setIsRealEstate(true);
    setIsDefault(false);
  }
  function RealEstateLeave() {
    setIsRealEstate(false);
    setIsDefault(true);
  }
  // Real Estate Function Ends

  // Real Media Function Starts
  function MediaEnter() {
    setIsMedia(true);
    setIsDefault(false);
  }
  function MediaLeave() {
    setIsMedia(false);
    setIsDefault(true);
  }
  // Real Media Function Ends

  // Real Logistics Function Starts
  function LogisticsEnter() {
    setIsLogistics(true);
    setIsDefault(false);
  }
  function LogisticsLeave() {
    setIsLogistics(false);
    setIsDefault(true);
  }
  // Real Logistics Function Ends

  // Real Tourism Function Starts
  function TourismEnter() {
    setIsTourism(true);
    setIsDefault(false);
  }
  function TourismLeave() {
    setIsTourism(false);
    setIsDefault(true);
  }
  // Real Tourism Function Ends

  return (
    <>
      <div className="hoverComponent-container">
        <div className="hoverComponent-left">
          <span onMouseEnter={healthCareEnter} onMouseLeave={healthCareLeave}>
            Health Care
          </span>
          <span onMouseEnter={EcommEnter} onMouseLeave={EcommLeave}>
            Ecomm Solutions
          </span>
          <span onMouseEnter={EducationEnter} onMouseLeave={EducationLeave}>
            Education
          </span>
          <span onMouseEnter={RealEstateEnter} onMouseLeave={RealEstateLeave}>
            Real Estate
          </span>
          <span onMouseEnter={MediaEnter} onMouseLeave={MediaLeave}>
            Media & Entertainment
          </span>
          <span onMouseEnter={LogisticsEnter} onMouseLeave={LogisticsLeave}>
            Logistics
          </span>
          <span onMouseEnter={TourismEnter} onMouseLeave={TourismLeave}>
            Tourism
          </span>
        </div>
        <div className="hoverComponent-right">
          {isDefault && (
            <TechCard
              heading={"Default"}
              src={"assets/html.png"}
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        placeat.`}
            />
          )}
          {isHealthCare && (
            <TechCard
              heading={"Health Care"}
              src={"assets/html.png"}
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        placeat.`}
            />
          )}
          {isEcomm && (
            <TechCard
              heading={"Ecomm Solutions"}
              src={"assets/html.png"}
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        placeat.`}
            />
          )}
          {isEducation && (
            <TechCard
              heading={"Education"}
              src={"assets/html.png"}
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        placeat.`}
            />
          )}
          {isRealEstate && (
            <TechCard
              heading={"Real Estate"}
              src={"assets/html.png"}
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        placeat.`}
            />
          )}
          {isMedia && (
            <TechCard
              heading={"Media & Entertainment"}
              src={"assets/html.png"}
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        placeat.`}
            />
          )}
          {isLogistics && (
            <TechCard
              heading={"Logistics"}
              src={"assets/html.png"}
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        placeat.`}
            />
          )}
          {isTourism && (
            <TechCard
              heading={"Tourism"}
              src={"assets/html.png"}
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
        placeat.`}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HoverComponentView;
