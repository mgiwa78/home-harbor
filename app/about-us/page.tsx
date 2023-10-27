import Header from "@/components/Header";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="breadcrumb_content">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
                <h1 className="breadcrumb_title">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2 className="mt0">Our Mission Is To FindHouse</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              <div className="about_content">
                <p className="large">
                  At HomeHarbor, we believe that finding your perfect property
                  should be an exciting and seamless experience. With years of
                  expertise in the real estate industry, we've crafted a
                  platform that simplifies the process for buyers, sellers, and
                  renters alike.
                </p>
                <p>
                  <span style={{ fontWeight: 900 }}> Our Mission:</span> To be
                  the guiding light in your property journey, providing you with
                  the tools, information, and support you need to make informed
                  decisions.
                </p>
                <p>
                  <span style={{ fontWeight: 900 }}> Our Values:</span>
                  <br />
                  <span style={{ fontWeight: 600 }}> Integrity:</span> We
                  operate with honesty and transparency, ensuring your trust in
                  us.
                  <br />
                  <span style={{ fontWeight: 600 }}> Empowerment:</span> We
                  empower you with knowledge, giving you the confidence to
                  navigate the real estate market. <br />
                  <span style={{ fontWeight: 600 }}> Community:</span> We foster
                  a community of homeowners, buyers, sellers, and renters,
                  connecting people with their dream properties.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-5">
              <div className="about_thumb">
                <img
                  className="img-fluid w100"
                  src="images/about/1.jpg"
                  alt="1.jpg"
                />
                <a
                  className="popup-iframe popup-youtube color-white"
                  href="https://www.youtube.com/watch?v=R7xbhKIiw4Y"
                >
                  <i className="flaticon-play"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row mt50">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us style2">
                <div className="icon">
                  <span className="flaticon-high-five"></span>
                </div>
                <div className="details">
                  <h4>Trusted By Thousands</h4>
                  <p>
                    Aliquam dictum elit vitae mauris facilisis at dictum urna
                    dignissim donec vel lectus vel felis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us style2">
                <div className="icon">
                  <span className="flaticon-home-1"></span>
                </div>
                <div className="details">
                  <h4>Wide Renge Of Properties</h4>
                  <p>
                    Aliquam dictum elit vitae mauris facilisis at dictum urna
                    dignissim donec vel lectus vel felis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4">
              <div className="why_chose_us style2">
                <div className="icon">
                  <span className="flaticon-profit"></span>
                </div>
                <div className="details">
                  <h4>Financing Made Easy</h4>
                  <p>
                    Aliquam dictum elit vitae mauris facilisis at dictum urna
                    dignissim donec vel lectus vel felis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg">
              <div className="our_partner">
                <img
                  className="img-fluid"
                  src="images/partners/1.png"
                  alt="1.png"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg">
              <div className="our_partner">
                <img
                  className="img-fluid"
                  src="images/partners/2.png"
                  alt="2.png"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg">
              <div className="our_partner">
                <img
                  className="img-fluid"
                  src="images/partners/3.png"
                  alt="3.png"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg">
              <div className="our_partner">
                <img
                  className="img-fluid"
                  src="images/partners/4.png"
                  alt="4.png"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg">
              <div className="our_partner">
                <img
                  className="img-fluid"
                  src="images/partners/5.png"
                  alt="5.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="start-partners bgc-thm pt50 pb50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="start_partner tac-smd">
                <h2>Become a Real Estate Agent</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="parner_reg_btn text-right tac-smd">
                <a className="btn btn-thm2" href="#">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_one">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 pr0 pl0">
              <div className="footer_about_widget">
                <h4>About Site</h4>
                <p>
                  We’re reimagining how you buy, sell and rent. It’s now easier
                  to get into a place you love. So let’s do this, together.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="footer_qlink_widget">
                <h4>Quick Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">User’s Guide</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Press Info</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="footer_contact_widget">
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">info@findhouse.com</a>
                  </li>
                  <li>
                    <a href="#">Collins Street West, Victoria</a>
                  </li>
                  <li>
                    <a href="#">8007, Australia.</a>
                  </li>
                  <li>
                    <a href="#">+1 246-345-0699</a>
                  </li>
                  <li>
                    <a href="#">+1 246-345-0695</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="footer_social_widget">
                <h4>Follow us</h4>
                <ul className="mb30">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                </ul>
                <h4>Subscribe</h4>
                <form className="footer_mailchimp_form">
                  <div className="form-row align-items-center">
                    <div className="col-auto">
                      <input
                        type="email"
                        className="form-control mb-2"
                        id="inlineFormInput"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary mb-2">
                        <i className="fa fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_middle_area pt40 pb40">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="footer_menu_widget">
                <ul>
                  <li className="list-inline-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Listing</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Property</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Pages</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Blog</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="copyright-widget text-right">
                <p>© 2023 HomeHarbor. Made with love.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
