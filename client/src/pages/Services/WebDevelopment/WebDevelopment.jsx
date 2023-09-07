import React from "react";
import "./WebDevelopment.css";
import WebDevelopmentSlider from "../../../components/cardsliders/WebDevelopmentSlider";
import TechCard from "../../../components/cards/TechCard";
import HoverComponentView from "../../../components/hoverComponentView/HoverComponentView";
import OfferingSlider from "../../../components/cardsliders/OfferingSlider";
import TitleTextCard from "../../../components/cards/TitleTextCard";
import Contact from "../../../components/contact/Contact";

const WebDevelopment = () => {
  return (
    <>
      <section id="webdevelopment-top">
        <div className="webdevelopment-top container">
          <div className="webdevelopment-top-left">
            <h1>Heading 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto aliquam quis cum, perspiciatis reiciendis repellat
              eaque sit quo aliquid ipsum.
            </p>
            <button className="cta">Get a Quote</button>
          </div>
          <div className="webdevelopment-top-right">
            <WebDevelopmentSlider />
          </div>
        </div>
      </section>

      <main className="container">
        {/* Start Custom Website Section  */}

        <h3 className="heading3">
          Custom Website Design & Development Services
        </h3>
        <section className=" webdevelopment-custom-container section container">
          <div className="content">
            <div className="content-left">
              <h1>Heading 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                mollitia, quasi hic ad reprehenderit, dolor molestias
                consectetur quae assumenda ea fugit eveniet, aut non accusamus
                culpa. Maxime a sapiente iste. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Odio mollitia, quasi hic ad
                reprehenderit, dolor molestias consectetur quae assumenda ea
                fugit eveniet, aut non accusamus culpa. Maxime a sapiente iste.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                mollitia, quasi hic ad reprehenderit, dolor molestias
                consectetur quae assumenda ea fugit eveniet, aut non accusamus
                culpa. Maxime a sapiente iste.
              </p>
            </div>

            <figure className="content-right">
              <img src="assets/background.jpg" alt="Shiv Shakti Gurukulam" />
            </figure>
          </div>
        </section>
        {/* End Custom Website Section  */}

        {/* Start Technology we use Section  */}
        <h1 className="heading1">Technologies we use</h1>
        <section className="technologies-weuse-container section row flex-wrap center">
          <TechCard
            heading={"HTML"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
          <TechCard
            heading={"CSS"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
          <TechCard
            heading={"JAVASCRIPT"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
          <TechCard
            heading={"ReactJS"}
            src={"assets/html.png"}
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          placeat.`}
          />
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

        {/* Start Industries we serve container  */}
        <h1 className="heading1">Industries we serve</h1>
        <section className="industries-weserve-container section">
          <HoverComponentView />
        </section>
        {/* End Industries we serve container  */}

        {/* Start Our Offerings container  */}
        <h1 className="heading1">Our offerings for web design & development</h1>
        <section className="our-offereings-container section">
          <OfferingSlider />
        </section>
        {/* End Our Offerings container  */}

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
          <Contact/>
        </section>
        {/* End Our Offerings container  */}
      </main>
    </>
  );
};

export default WebDevelopment;
