import React from "react";
import "./TechnicalTraining.css";
import { AiFillStar } from "react-icons/ai";
import Card3 from "../../../components/cards/Card3";
import { Card } from "react-bootstrap";
import AlumniSlider from "../../../components/cardsliders/AlumniSlider";

const TechnicalTraining = () => {
  return (
    <>
      <section id="training-top">
        <div className="training-top container">
          <div className="training-top-left">
            <h1>MP's #1 Online Bootcamp</h1>
            <h3>Teaching</h3>
            <h3>Mission</h3>
            <h3>Guidance</h3>
          </div>
          <div className="training-top-right">
            <video
              src="assets/videos/Intro.mp4"
              controls
              muted
              autoPlay
            ></video>
          </div>
        </div>
      </section>

      <main className="container">
        <section className="partners-training-section section container">
          <h4 className="heading4 center">Our Leading Partners</h4>
          <div className="training-img-container">
            <img src="assets/icoess-logo.png" alt="" />
            <img src="assets/icoess-logo.png" alt="" />
            <img src="assets/icoess-logo.png" alt="" />
            <img src="assets/icoess-logo.png" alt="" />
            <img src="assets/icoess-logo.png" alt="" />
          </div>
        </section>

        {/* Start programs-container Section  */}

        <h3 className="heading3">Globally Accepted Programs</h3>
        <section className=" training-programs-container section container">
          <div className="content">
            <div className="content-left">
              <h3>Teaching</h3>
              <h3>Mission</h3>
              <h3>Guidance</h3>
            </div>

            <figure className="content-right">
              <img src="assets/service/web.jpg" alt="Shiv Shakti Gurukulam" />
            </figure>
          </div>
        </section>

        {/* End programs-container Section  */}

        {/* Start programs-container Section  */}
        <h2 className="heading2">Post Graduate Certifications</h2>
        <section className="training-pg-certifications-container section ">
          <ul>
            <li>
              <AiFillStar />
              Live Interactive Classes
            </li>
            <li>
              <AiFillStar />
              Master Class from IIT
            </li>
            <li>
              <AiFillStar />
              Master Class from IIT
            </li>
            <li>
              <AiFillStar />
              Master Class from IIT
            </li>
            <li>
              <AiFillStar />
              Master Class from IIT
            </li>
          </ul>
          <div className="jcse">
            <Card3
              src={"assets/background.jpg"}
              title={"Heading"}
              text={"Text"}
            />
            <Card3
              src={"assets/background.jpg"}
              title={"Heading"}
              text={"Text"}
            />
            <Card3
              src={"assets/background.jpg"}
              title={"Heading"}
              text={"Text"}
            />
          </div>
        </section>
        {/* End programs-container Section  */}

        {/* Start programs-container Section  */}
        <h2 className="heading2">Training Certificate Programs</h2>
        <section className="training-certificate-programs-container section ">
          <div className="jcse training-certificate-programs-cards">
            <Card key={"Secondary"} className="mb-2 simplecard">
              <Card.Header
                style={{ backgroundColor: "orange" }}
                className="simplecard-title"
              >
                Orange
              </Card.Header>
              <Card.Body className="simplecard-desc">
                {/* <Card.Title>Title</Card.Title> */}
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
            <Card key={"Secondary"} className="mb-2 simplecard">
              <Card.Header
                style={{ backgroundColor: "#00e1ff" }}
                className="simplecard-title"
              >
                Sky Blue
              </Card.Header>
              <Card.Body className="simplecard-desc">
                {/* <Card.Title>Title</Card.Title> */}
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
            <Card key={"Secondary"} className="mb-2 simplecard">
              <Card.Header
                style={{ backgroundColor: "pink" }}
                className="simplecard-title"
              >
                Pink
              </Card.Header>
              <Card.Body className="simplecard-desc">
                {/* <Card.Title>Title</Card.Title> */}
                <Card.Text>Description</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
        {/* End programs-container Section  */}

        {/* Start training-hiring-partners Section  */}

        <h2 className="heading2">Our Hiring Partners</h2>
        <section className="training-hiring-partners-container section">
          <div className="training-hiring-partners-left">
            <h3>Heading</h3>
          </div>
          <div className="training-hiring-partners-right">
            <img src="assets/companies/infosys.png" alt="" />
            <img src="assets/companies/infosys.png" alt="" />
            <img src="assets/companies/infosys.png" alt="" />
            <img src="assets/companies/infosys.png" alt="" />

          </div>
        </section>
        {/* End training-hiring-partners Section  */}

        {/* Start training-alumni-talk Section  */}

        <h2 className="heading2">Our Alumni Talk & Feedback</h2>
        <section className="training-alumni-talk-container section">
          <div className="training-alumni-talk-left">
            <div className="training-alumni-talk-left-item">
              <img src="assets/companies/infosys.png" alt="" />
              <span className="training-alumni-talk-left-rating">
                4.3<AiFillStar />
              </span>
            </div>
            <div className="training-alumni-talk-left-item">
              <img src="assets/companies/infosys.png" alt="" />
              <span className="training-alumni-talk-left-rating">
                4.3<AiFillStar />
              </span>
            </div>
            <div className="training-alumni-talk-left-item">
              <img src="assets/companies/infosys.png" alt="" />
              <span className="training-alumni-talk-left-rating">
                4.3<AiFillStar />
              </span>
            </div>
          </div>
          <div className="training-alumni-talk-right">
            <AlumniSlider/>
          </div>
        </section>
        {/* End training-training-alumni-talk Section  */}
      
      </main>
    </>
  );
};

export default TechnicalTraining;
