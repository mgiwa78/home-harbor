import Header from "@/components/Header";
import React from "react";

const Contact = () => {
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
                    Contact
                  </li>
                </ol>
                <h4 className="breadcrumb_title">Contact Us</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-contact pb0 bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="form_grid">
                <h4 className="mb5">Send Us An Email</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida quis libero eleifend ornare. Maecenas mattis enim at
                  arcu feugiat, sit amet blandit nisl iaculis. Donec lacus odio,
                  malesuada eu libero sit amet, congue aliquam leo. In hac
                  habitasse platea dictumst.
                </p>
                <form
                  className="contact_form"
                  id="contact_form"
                  name="contact_form"
                  action="#"
                  method="post"
                  noValidate={true}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_name"
                          name="form_name"
                          className="form-control"
                          required={true}
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_email"
                          name="form_email"
                          className="form-control required email"
                          required={true}
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_phone"
                          name="form_phone"
                          className="form-control required phone"
                          required={true}
                          type="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="form_subject"
                          name="form_subject"
                          className="form-control required"
                          required={true}
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="form_message"
                          className="form-control required"
                          rows={8}
                          required={true}
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                      <div className="form-group mb0">
                        <button type="button" className="btn btn-lg btn-thm">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="contact_localtion">
                <h4>Contact Us</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida quis libero eleifend ornare. habitasse platea
                  dictumst.
                </p>
                <div className="content_list">
                  <h5>Address</h5>
                  <p>
                    2301 Ravenswood Rd Madison, <br />
                    WI 53711
                  </p>
                </div>
                <div className="content_list">
                  <h5>Phone</h5>
                  <p>(315) 905-2321</p>
                </div>
                <div className="content_list">
                  <h5>Mail</h5>
                  <p>info@findhouse.com</p>
                </div>
                <div className="content_list">
                  <h5>Skype</h5>
                  <p>findhouse.com</p>
                </div>
                <h5>Follow Us</h5>
                <ul className="contact_form_social_area">
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
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p0 mt50">
          <div className="row">
            <div className="col-lg-12">
              <div className="h600" id="map-canvas"></div>
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
    </>
  );
};

export default Contact;
