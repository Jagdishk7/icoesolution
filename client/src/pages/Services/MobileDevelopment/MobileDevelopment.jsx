import React from "react";
import "./MobileDevelopment.css";
import WebDevelopmentSlider from "../../../components/cardsliders/WebDevelopmentSlider";
import TechCard from "../../../components/cards/TechCard";
import HoverComponentView from "../../../components/hoverComponentView/HoverComponentView";
import OfferingSlider from "../../../components/cardsliders/OfferingSlider";
import TitleTextCard from "../../../components/cards/TitleTextCard";
import Contact from "../../../components/contact/Contact";
import { NavLink } from "react-router-dom";

const MobileDevelopment = () => {
  return (
    <>
      <section id="webdevelopment-top">
        <div className="webdevelopment-top container">
          <div className="webdevelopment-top-left">
            <h1>Mobile App Development</h1>
            <p>
              The mobile app development market is growing massively. In this
              digital transformation dedicated era, investing in a mobile app is
              a golden opportunity for businesses. In the third quarter of 2021,
              users downloaded 27.6 billion apps from Google Play and 8.1
              billion downloads happened on the Apple App Store. Although the
              competition is high for a new entrant, not supporting a mobile app
              could be a big mistake given that most of the world’s population
              is already preferring mobile apps as their favorite touchpoint.
            </p>
            <button className="cta">Get a Quote</button>
          </div>
          <div className="webdevelopment-top-right">
            <WebDevelopmentSlider />
          </div>
        </div>
      </section>

      <main className="container">
        {/* Start Custom Mobile App Section  */}
        <h3 className="heading3">Custom Mobile App Development Services</h3>
        <section className=" webdevelopment-custom-container section container">
          <div className="content">
            <div className="content-left">
              <h1>Mobile App Development</h1>
              <p>
                The mobile app development market is growing massively. In this
                digital transformation dedicated era, investing in a mobile app
                is a golden opportunity for businesses. In the third quarter of
                2021, users downloaded 27.6 billion apps from Google Play and
                8.1 billion downloads happened on the Apple App Store. Although
                the competition is high for a new entrant, not supporting a
                mobile app could be a big mistake given that most of the world’s
                population is already preferring mobile apps as their favorite
                touchpoint.
              </p>
            </div>

            <figure className="content-right">
              <img src="assets/background.jpg" alt="Shiv Shakti Gurukulam" />
            </figure>
          </div>
        </section>
        {/* End Custom Website Section  */}

        {/* Start Technology we use Section  */}
        <h1 className="heading1">Key Approaches to Mobile App Development</h1>
        <p className="para1">
          Before investing in a mobile app, a business must decide the approach
          they will follow to build an app. The most commonly known approaches
          include — native apps, cross-platform apps, hybrid apps, progressive
          web apps, and rapid mobile app development.
        </p>
        <section className=" section center">
          <div className="it-staffing-services">
            <div className="card2-item article">
              <div className="card2-info">
                <h1>Native App</h1>
                <h4 className="heading4">INSTANT ACCESS, WITH ROOM TO GROW</h4>
                <p>
                  Exceptional IT talent and scalable staffing solutions for
                  companies of all sizes. Our highly skilled IT consultants
                  extend your team’s capabilities without the overhead of
                  in-house employees.
                </p>
                <NavLink className="cta" to={"/contact"}>
                  SCHEDULE A CALL
                </NavLink>
              </div>
              <div className="card2-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
            <div className="card2-item article">
              <div className="card2-info">
                <h1>Direct Hiring</h1>
                <h4 className="heading4">FULL-TIME TECH TALENT</h4>
                <p>
                  Our dedicated direct placement recruiting services place
                  in-demand IT talent across North America
                </p>
                <p>
                  Proactive recruiting targets hidden talents and better
                  prepares customers for potentially tight labor pools.
                </p>
                <NavLink className="cta" to={"/contact"}>
                  GROW YOUR IT TALENT
                </NavLink>
              </div>
              <div className="card2-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
            <div className="card2-item article">
              <div className="card2-info">
                <h1>Contract Hiring</h1>
                <h4 className="heading4">SHORT-TERM HELP, LONG-TERM IMPACT</h4>

                <p>
                  Exceptional IT talent and scalable staffing solutions for
                  companies of all sizes. Our highly skilled IT consultants
                  extend your team’s capabilities without the overhead of
                  in-house employees.
                </p>
                <NavLink className="cta" to={"/contact"}>
                  GET CONTRACTED IT STAFF
                </NavLink>
              </div>
              <div className="card2-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
          </div>
        </section>
        {/* End Technology we use Section  */}

        {/* Start Technology we use Section  */}
        <h1 className="heading1">Technologies we use</h1>
        <section className="technologies-weuse-container section row flex-wrap center">
          
          <TechCard
            heading={"NodeJS"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
          <TechCard
            heading={"ExpressJS"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
          <TechCard
            heading={"MongoDB"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
          <TechCard
            heading={"MySQL"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
          <TechCard
            heading={"CRM"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
        </section>
        {/* End Technology we use Section  */}

        {/* Start Why choose us container  */}
        <h1 className="heading1">Why choose us</h1>
        <section className="why-choose-us-container section ">
          <TitleTextCard heading={"Maintenance"} text={"Hello Text"} />
          <TitleTextCard
            heading={"Custom web development"}
            text={"Hello Text"}
          />
          <TitleTextCard
            heading={"Use of latest Framework & Technology"}
            text={"Hello Text"}
          />
          <TitleTextCard
            heading={"Transparent & Flexible Process"}
            text={"Hello Text"}
          />
          <TitleTextCard
            heading={"Strategic & Asured Quality"}
            text={"Hello Text"}
          />
        </section>
        {/* End Why choose us container  */}

        {/* Start Pricing container  */}
        <h1 className="heading1">Pricing</h1>
        <section className="web-pricing-container section ">
          <div className="price1">
            <h2>Basic- INR (Rs. 4200/-)</h2>
            <ul>
              <li>Landing Page + 03 pages</li>
              <li>*Hosting + Domain registration (Free)</li>
              <li>Static Web Design & Development</li>
              <li>Build with CMS</li>
              <li>Fully Mobile Responsive</li>
              <li>SSL Integrations (Secure Websites’)</li>
              <li>SEO Friendly</li>
              <li>01 Contact Form (Without DB Integration)</li>
              <li>02 Email Accounts</li>
              <li>Delivery Time: 05 Working Days</li>
              <li>01 Year Free Support</li>
            </ul>
          </div>
          <div className="price2">
            <h2>Standard- INR (Rs. 10500/-)</h2>
            <ul>
              <li>Landing Page + 09 Pages</li>
              <li>*Hosting + Domain registration (Free)</li>
              <li>Dynamic Web Design & Development</li>
              <li>Build with CMS, MySQL Database</li>
              <li>Fully Mobile Responsive</li>
              <li>Social Media Integration</li>
              <li>SSL Integrations (Secure Websites’)</li>
              <li>SEO Friendly</li>
              <li>02 Contact Form (**With Database Integration)</li>
              <li>~Google Map integration</li>
              <li>~Click to call action integration</li>
              <li>03 Email Accounts</li>
              <li>Delivery Time: 11 Working Days</li>
              <li>01 Year Free Support</li>
            </ul>
          </div>
          <div className="price3">
            <h2>Professional- INR (Rs.19000/-)</h2>
            <ul>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
            </ul>
          </div>
          <div className="price4">
            <h2>Enterprise - INR (Rs. 39000/-)</h2>
            <ul>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
              <li>Landing Page + 03 pages</li>
            </ul>
          </div>
        </section>
        {/* End Pricing container  */}

        {/* Start Contact form container  */}
        <h1 className="heading1">Web Contact Form</h1>
        <section className="web-contactform-container section">
          <Contact />
        </section>
        {/* End Our Offerings container  */}
      </main>
    </>
  );
};

export default MobileDevelopment;
