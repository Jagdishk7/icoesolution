import React from "react";
import "./Home.css";
import Card1 from "../../components/cards/Card1";
import SideNav from "../../components/Navbar/SideNav";
import { FaLaptopCode } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { PiGameControllerBold } from "react-icons/pi";
import { TbTopologyComplex } from "react-icons/tb";

const Home = () => {
  return (
    <>
      <SideNav />
      <main>
        <section id="hero">
          <div className="hero container"></div>
        </section>

        <section id="cardslider">
          <div className="cardslider">
            <h1 className="cardslider-title">Trending Courses</h1>
            <div className="course-cards">
              <div className="course-item bg-green">
                <FaLaptopCode className="course-icon" />
                <p>Websites</p>
              </div>
              <div className="course-item bg-cyan">
                <GiSmartphone className="course-icon" />
                <p>Mobile Apps</p>
              </div>
              <div className="course-item bg-leafgreen">
                <RiComputerLine className="course-icon" />
                <p>CRM / ERP</p>
              </div>
              <div className="course-item bg-green">
                <PiGameControllerBold className="course-icon" />
                <p>Game</p>
              </div>
              <div className="course-item bg-green">
                <TbTopologyComplex className="course-icon" />
                <p>SEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section  */}

        <article class="article front-intro">
          <div class="content">
            <h1 class="headline">Build your Web & Mobile Apps</h1>
            <p>
              Attractive Websites are doors of your Business. Our Team of
              Experts provides the custom build, Sophisticated & Full Featured
              Websites. Our Full Stack Developer team builds Robust Web
              Applications. So, if you are looking for E-Com web Sites, Shopping
              portals, Web Applications? Just knock the door of us, Tell your
              requirements and rest leave to us.
            </p>
          </div>

          <figure class="image-wrap">
            <img src="assets/icoess.jpg" alt="Shiv Shakti Gurukulam" />
          </figure>
        </article>

        <section id="home-services" className="main section-wrap">
          <div className="home-services ">
            <div className="home-services-header">
              <h1 className="section-title">
                Our <span>Services</span>
              </h1>
            </div>
            <div className="all-home-services">
              <div className="card2-item article">
                <div className="card2-info">
                  <h1>Web Development</h1>

                  <p>
                    ICOESS's web design and development services provides up to
                    clients satisfaction. Domain, Hosting, Responsive Web sites,
                    E-Commerce web sites etc. are key areas of service...
                  </p>
                  <button className="cta">Know More</button>
                </div>
                <div className="card2-img">
                  <img src="assets/service/web.jpg" alt="img" />{" "}
                </div>
              </div>
              <div className="card2-item article">
                <div className="card2-info">
                  <h1>Mobile Apps</h1>

                  <p>
                    ICOESS's web design and development services provides up to
                    clients satisfaction. Domain, Hosting, Responsive Web sites,
                    E-Commerce web sites etc. are key areas of service...
                  </p>
                  <button className="cta">Know More</button>
                </div>
                <div className="card2-img">
                  <img src="assets/service/web.jpg" alt="img" />{" "}
                </div>
              </div>
              <div className="card2-item article">
                <div className="card2-info">
                  <h1>Corporate Training</h1>

                  <p>
                    We help corporates to bridge competency gap towards building
                    skilled and productive workforce. We provide turnkey in
                    company training and skill building services...
                  </p>
                  <button className="cta">Know More</button>
                </div>
                <div className="card2-img">
                  <img src="assets/service/web.jpg" alt="img" />{" "}
                </div>
              </div>
              <div className="card2-item article">
                <div className="card2-info">
                  <h1>S/w Dev & OutSourcing</h1>

                  <p>
                    Our ousourcign services provide software development and
                    testing to our clients. Client satisfaction is our key
                    policy when providing IT services to our client ...
                  </p>
                  <button className="cta">Know More</button>
                </div>
                <div className="card2-img">
                  <img src="assets/service/web.jpg" alt="img" />{" "}
                </div>
              </div>
              <div className="card2-item article">
                <div className="card2-info">
                  <h1>IT Staffing & Smart Hire</h1>

                  <p>
                    We aims at employing, deploying and monitoring a competent
                    and contented staff. Our IT Staffing service provides a
                    contingent IT professionals through smart hire...
                  </p>
                  <button className="cta">Know More</button>
                </div>
                <div className="card2-img">
                  <img src="assets/service/web.jpg" alt="img" />{" "}
                </div>
              </div>
              <div className="card2-item article">
                <div className="card2-info">
                  <h1>Education Support</h1>

                  <p>
                    Supporting Education began to be included as part of our
                    corporate culture. ICOESS's educational practices &
                    programes which have immediately applicable workskills...
                  </p>
                  <button className="cta">Know More</button>
                </div>
                <div className="card2-img">
                  <img src="assets/service/web.jpg" alt="img" />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  End Services Section */}

        <section id="insights" className="insights-section container">
          <div className="flex">
            <div className="insight-info">
            <h2 className="heading2">Insights</h2>
            <p className="paragraph">
              Our Thinking of Ideas, Technologies & Trends that create impact
            </p>
            <button className="cta">Read More</button>
            </div>
            <div className="insight-imgs row">
              <img src="assets/background.jpg" alt="" />
              <img src="assets/background.jpg" alt="" />
              <img src="assets/background.jpg" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
