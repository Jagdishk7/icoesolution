import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <>
    
    <section
          id="home-contact-section"
          className="home-contact-section container"
        >
          <div className="home-services-header">
            <h1 className="section-title">
              Contact <span>Us</span>
            </h1>
          </div>
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-left">
                <img src="assets/contact.jpg" alt="" />
                <p>
                  Talk to us for your business needs, all staffing requirements
                  and anything on technology. We would love to here from you &
                  share our expertise with you
                </p>
              </div>
              <div className="contact-right">
                <div class="contact-form">
                  <h3>Contact us</h3>
                  <form>
                    <p>
                      <label>First Name</label>
                      <input type="text" name="firstName" />
                    </p>
                    <p>
                      <label>Last Name</label>
                      <input type="text" name="lastName" />
                    </p>
                    <p>
                      <label>Phone Number</label>
                      <input type="number" name="phone" />
                    </p>
                    <p>
                      <label>Email Adress</label>
                      <input type="email" name="email" />
                    </p>
                    <p className="block">
                      <label>Message</label>
                      <textarea name="message" rows="5"></textarea>
                    </p>
                    <p>
                      <button>Send</button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Contact