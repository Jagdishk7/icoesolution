import React from "react";
import "./ITStaffing.css";
import { NavLink } from "react-router-dom";



const ITStaffing = () => {
  return (
    <>
      <section id="itstaffing-top">
        <div className="itstaffing-top container">
          <h1>IT Staffing Services</h1>
          <p>Solutions to all your IT Staffing challanges</p>
          <button className="cta">Connect with us</button>
        </div>
      </section>

      <main className="container">
        {/* Start IT Talent Section  */}

        <h1 className="heading1">IT talent that drives results</h1>
        <section className="it-talent-container section container">
          <div className="content">
            <p>EMPOWERING BUSINESS GROWTH WITH ON-DEMAND TECH TALENT</p>
            <p>
              Business moves fast. Digital transformation makes you even faster.
              Is your IT department keeping up with demand?
            </p>
            <p>
              At Icoess Solutions, we accelerate growth for our customers by
              equipping them with the professional IT workforce they need right
              now. We offer a customizable, scalable approach to IT staffing,
              supporting where you are today and where you need to be in the
              future.
            </p>
            <p>
              Get resumes in hand within 24-48 hours and start running a more
              flexible and productive organization.
            </p>
          </div>
        </section>
        {/* End IT Talent Section  */}

        {/* Start Technology we use Section  */}
        <section className=" section center">
          <div className="it-staffing-services">
            <div className="card2-item article">
              <div className="card2-info">
                <h1>IT Staff Augmentation</h1>
                <h4 className="heading4">INSTANT ACCESS, WITH ROOM TO GROW</h4>
                <p>
                  Exceptional IT talent and scalable staffing solutions for
                  companies of all sizes. Our highly skilled IT consultants
                  extend your team’s capabilities without the overhead of
                  in-house employees.
                </p>
                <NavLink className="cta" to={'/contact'}>SCHEDULE A CALL</NavLink>
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
                <NavLink className="cta" to={'/contact'}>GROW YOUR IT TALENT</NavLink>

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
                <NavLink className="cta" to={'/contact'}>GET CONTRACTED IT STAFF</NavLink>
              </div>
              <div className="card2-img">
                <img src="assets/service/web.jpg" alt="img" />{" "}
              </div>
            </div>
          </div>
        </section>
        {/* End Technology we use Section  */}
      </main>
    </>
  );
};

export default ITStaffing;
