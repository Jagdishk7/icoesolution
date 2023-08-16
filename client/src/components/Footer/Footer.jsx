import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <div className="footer__data">
              <h3 className="footer__subtitle">Company</h3>
              <ul>
                <li className="footer__item">
                  <NavLink to="/about" className="footer__link">
                    About Us
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/team" className="footer__link">
                    Team
                  </NavLink>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    Become a member
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__data">
              <h3 className="footer__subtitle">Pages</h3>
              <ul>
                <li className="footer__item">
                  <NavLink to="/" className="footer__link">
                    Home
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/service" className="footer__link">
                    Services
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/webd" className="footer__link">
                    Web Development
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/appd" className="footer__link">
                    Mobile App Development
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/corporateTraining" className="footer__link">
                  Corporate Training
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/swdev" className="footer__link">
                  S/w Dev & OutSourcing
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/itStaffing" className="footer__link">
                  IT Staffing & Smart Hire
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/educationSupport" className="footer__link">
                  Education Support
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/career" className="footer__link">
                    Career
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink to="/contact" className="footer__link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="footer__data">
              <h3 className="footer__subtitle">Blogs</h3>
              <ul>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    B1
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    B2
                  </a>
                </li>
                <li className="footer__item">
                  <a href="/" className="footer__link">
                    B3
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__data">
              <h3 className="footer__subtitle">Subscribe Newsletter</h3>
                <div class="footer-email flex">
                  <input type="text" placeholder="Email" />
                  <button class="footer-subscribe-btn flex">
                  <AiOutlineMail className="subscribe-img"/>
                    <p>Subscribe</p>
                  </button>
                </div>

                <div class="footer-socials">
                  <a href="#">
                  <FaFacebookSquare className="facebook" />
                  </a>
                  <a href="#">
                  <FaInstagramSquare className="instagram" />
                  </a>
                  <a href="#">
                  <FaYoutubeSquare className="youtube" />
                  </a>
                </div>
            </div>
          </div>

          <div className="footer__rights">
            <p className="footer__copy">
              &#169; 2023 ICOESS Solutions . All rigths reserved.
            </p>
            <div className="footer__terms">
              <a href="/" className="footer__terms-link">
                Terms & Agreements
              </a>
              <a href="/" className="footer__terms-link">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
