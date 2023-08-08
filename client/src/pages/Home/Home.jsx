import React from "react";
import "./Home.css";
import CardSlider from "../../components/cardslider/CardSlider";

const Home = () => {
  return (
    <main>
      <section id="hero">
        <div class="hero container">
          <div class="header-text">
            <h1>
              Empowering a <span>livable future</span>
            </h1>
            <a href="#projects" type="button" class="cta">
              Know More
            </a>
          </div>
        </div>
      </section>

      <section id="cardslider">
        
        <div class="projects-header">
          <h1 class="section-title">
            <span>Trending</span> Courses
          </h1>
        </div>
        <CardSlider />
      </section>

      {/* Projects Section  */}
      <section id="projects">
        <div class="projects container">
          <div class="projects-header">
            <h1 class="section-title">
              Our <span>Services</span>
            </h1>
          </div>
          <div class="all-projects">
            <div class="project-item">
              <div class="project-info">
                <h1>Web Development</h1>

                <p>
                  ICOESS's web design and development services provides up to
                  clients satisfaction. Domain, Hosting, Responsive Web sites,
                  E-Commerce web sites etc. are key areas of service.
                </p>
                <button>Know More</button>
              </div>
              <div class="project-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>Mobile Apps</h1>

                <p>
                  ICOESS's web design and development services provides up to
                  clients satisfaction. Domain, Hosting, Responsive Web sites,
                  E-Commerce web sites etc. are key areas of service.
                </p>
                <button>Know More</button>
              </div>
              <div class="project-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>Corporate Training</h1>

                <p>
                  We help corporates to bridge competency gap towards building
                  skilled and productive workforce. We provide turnkey in
                  company training and skill building services...
                </p>
                <button>Know More</button>
              </div>
              <div class="project-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>S/w Dev & OutSourcing</h1>

                <p>
                  ICOESS's web design and development services provides up to
                  clients satisfaction. Domain, Hosting, Responsive Web sites,
                  E-Commerce web sites etc. are key areas of service.
                </p>
                <button>Know More</button>
              </div>
              <div class="project-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>Web Development</h1>

                <p>
                  ICOESS's web design and development services provides up to
                  clients satisfaction. Domain, Hosting, Responsive Web sites,
                  E-Commerce web sites etc. are key areas of service.
                </p>
                <button>Know More</button>
              </div>
              <div class="project-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
            <div class="project-item">
              <div class="project-info">
                <h1>Web Development</h1>

                <p>
                  ICOESS's web design and development services provides up to
                  clients satisfaction. Domain, Hosting, Responsive Web sites,
                  E-Commerce web sites etc. are key areas of service.
                </p>
                <button>Know More</button>
              </div>
              <div class="project-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End Projects Section */}
    </main>
  );
};

export default Home;
