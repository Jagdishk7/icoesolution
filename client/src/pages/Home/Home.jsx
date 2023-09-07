import React from "react";
import "./Home.css";
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

        {/* Start Front Intro Section  */}

        <article className="article front-intro">
          <div className="content">
            <h1 className="headline">Build your Web & Mobile Apps</h1>
            <p>
              Attractive Websites are doors of your Business. Our Team of
              Experts provides the custom build, Sophisticated & Full Featured
              Websites. Our Full Stack Developer team builds Robust Web
              Applications. So, if you are looking for E-Com web Sites, Shopping
              portals, Web Applications? Just knock the door of us, Tell your
              requirements and rest leave to us.
            </p>
            <p>
              Mobile app development is rapidly growing. From retail,
              telecommunications and e-commerce to insurance, healthcare and
              government, organizations across industries must meet user
              expectations for real-time, convenient ways to conduct
              transactions and access information. Today, mobile devices—and the
              mobile applications that unlock their value—are the most popular
              way for people and businesses to connect to the internet. To stay
              relevant, responsive and successful, organizations need to develop
              the mobile applications that their customers, partners and
              employees demand.
            </p>
          </div>

          <figure className="image-wrap">
            <img src="assets/icoess.jpg" alt="Shiv Shakti Gurukulam" />
          </figure>
        </article>
        {/* End Front Intro Section  */}

        {/* Start Home Services Section  */}
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
                  <h1>Corporate Training</h1>

                  <p>
                    We help corporates to bridge competency gap towards building
                    skilled and productive workforce. We provide turnkey in
                    company training and skill building services...
                  </p>
                  <button className="cta">Know More...</button>
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
                  <button className="cta">Know More...</button>
                </div>
                <div className="card2-img">
                  <img src="assets/service/web.jpg" alt="img" />{" "}
                </div>
              </div>
              <div className="card2-item article">
                <div className="card2-info">
                  <h1>Web Development</h1>
                  <p>
                    ICOESS's web design and development services provides up to
                    clients satisfaction. Domain, Hosting, Responsive Web sites,
                    E-Commerce web sites etc. are key areas of service...
                  </p>
                  <button className="cta">Know More...</button>
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
                  <button className="cta">Know More...</button>
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
                  <button className="cta">Know More...</button>
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
                  <button className="cta">Know More...</button>
                </div>
                <div className="card2-img">
                  <img src="assets/service/web.jpg" alt="img" />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  End Home Services Section */}

        {/*  Start Insights Section */}

        <section id="insights" className="insights-section container">
          <div className="flex insights-container">
            <div className="insight-info">
              <h2 className="heading2">Insights</h2>
              <p className="paragraph">
                Our Thinking of Ideas, Technologies & Trends that create impact
              </p>
            </div>
            <div className="insight-imgs row">
              <div className="grid_item center">
                <div class="card">
                  <img src="assets/card1.png" alt="Project 1" />
                  <a href="/">
                    <div class="card_content">
                      <h3>Read More</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid_item center">
                <div class="card">
                  <img src="assets/background.jpg" alt="Project 1" />
                  <a href="/">
                    <div class="card_content">
                      <h3>Read More</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="grid_item center">
                <div class="card">
                  <img src="assets/card1.png" alt="Project 1" />
                  <a href="/">
                    <div class="card_content">
                      <h3>Read More</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  End Insights Section */}

        {/*  Start Service Areas Section */}

        <section id="service-areas" className="service-areas container">
          <h1 className="section-title">
            Our Service <span>Areas</span>
          </h1>
          <div className="article">
            <div className="course-item wh-150 bg-green">
              <FaLaptopCode className="course-icon" />
              <p>Websites</p>
            </div>
            <div className="course-item wh-150 bg-green">
              <FaLaptopCode className="course-icon" />
              <p>Websites</p>
            </div>
            <div className="course-item wh-150 bg-green">
              <FaLaptopCode className="course-icon" />
              <p>Websites</p>
            </div>
            <div className="course-item wh-150 bg-green">
              <FaLaptopCode className="course-icon" />
              <p>Websites</p>
            </div>
            <div className="course-item wh-150 bg-green">
              <FaLaptopCode className="course-icon" />
              <p>Websites</p>
            </div>
            <div className="course-item wh-150 bg-green">
              <FaLaptopCode className="course-icon" />
              <p>Websites</p>
            </div>
            <div className="course-item wh-150 bg-green">
              <FaLaptopCode className="course-icon" />
              <p>Websites</p>
            </div>
            <div className="course-item wh-150 bg-green">
              <FaLaptopCode className="course-icon" />
              <p>Websites</p>
            </div>
          </div>
        </section>
        {/*  End Service Areas Section */}

        {/*  Start inside icoess Section */}

        <section id="inside-icoess" className="section inside-icoess container">
          <div className="flex insights-container">
            <div className="insight-info">
              <h2 className="heading2">Inside ICOESS</h2>
            </div>
            <div className="insight-imgs row">
              <div className="work">
                <div className="grid_item">
                  <div className="inside-icoess-card">
                    <div className="image_container">
                      <img src="assets/background.jpg" alt="web development" />
                    </div>
                    <div className="inside-icoess-card_content">
                      <h3>UI UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione quibusdam ex quaerat quasi nostrum
                        tempore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid_item">
                  <div className="inside-icoess-card">
                    <div className="image_container">
                      <img src="assets/background.jpg" alt="web development" />
                    </div>
                    <div className="inside-icoess-card_content">
                      <h3>UI UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione quibusdam ex quaerat quasi nostrum
                        tempore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid_item">
                  <div className="inside-icoess-card">
                    <div className="image_container">
                      <img src="assets/background.jpg" alt="web development" />
                    </div>
                    <div className="inside-icoess-card_content">
                      <h3>UI UX Design</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione quibusdam ex quaerat quasi nostrum
                        tempore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  End inside icoess Section */}

        {/* Start About Us Section  */}

        <article id="home-about-section" className="home-about ">
          <div className="home-about-left">
            <h1>About Us</h1>
            <h3>Vision</h3>
            <p>Paragraph</p>
            <h3>Mission</h3>
            <p>Paragraph</p>
          </div>

          <video
            className="home-about-right"
            src="assets/videos/Intro.mp4"
            controls
            controlList="nodownload"
          ></video>
          
        </article>
        {/* End About Us Section  */}
        {/*  Start Contact Section */}
        <article id="home-contact-section" className="home-contact ">
          <div className="home-contact-left">
            <img src="assets/contact.jpg" alt="" />
          </div>

          <div className="home-contact-right">
            <h1>
              Talk to us for your business needs, all staffing requirements and
              anything on technology. We would love to here from you & share our
              expertise with you
            </h1>
            <button className="">Contact Us</button>
          </div>
        </article>
        {/*  End Contact Section */}
      </main>
    </>
  );
};

export default Home;
