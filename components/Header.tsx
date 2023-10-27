import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu">
        <div className="container-fluid p0">
          <nav>
            <div className="menu-toggle">
              <img
                className="nav_logo_img img-fluid"
                src="/images/header-logo.png"
                alt="header-logo.png"
              />
              <button type="button" id="menu-btn">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <a href="#" className="navbar_brand float-left dn-smd">
              <img
                className="logo1 img-fluid"
                src="/images/header-logo2.png"
                alt="header-logo.png"
              />
              <img
                className="logo2 img-fluid"
                src="/images/header-logo2.png"
                alt="header-logo2.png"
              />
            </a>
            <ul
              id="respMenu"
              className="ace-responsive-menu text-right"
              data-menu-style="horizontal"
            >
              <li className="last">
                <Link href="/">
                  <span className="title">Home</span>
                </Link>
              </li>
              <li className="last">
                <Link href="/properties">
                  <span className="title">Properties</span>
                </Link>
              </li>
              <li className="last">
                <Link href="/about-us">
                  <span className="title">About</span>
                </Link>
              </li>
              <li className="last">
                <Link href="/contact">
                  <span className="title">Contact</span>
                </Link>
              </li>

              <li className="list-inline-item add_listing home2">
                <Link href="/auth/login">
                  <span className="flaticon-user"></span>
                  <span className="dn-lg"> Login/Register</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <div id="page" className="stylehome1 h0">
        <div className="mobile-menu">
          <div className="header stylehome1">
            <div className="d-flex justify-content-between">
              <a className="mobile-menu-trigger" href="#menu">
                <img src="/images/dark-nav-icon.svg" alt="" />
              </a>
              <a className="nav_logo_img" href="index-2.html">
                <img
                  className="img-fluid mt20"
                  src="/images/header-logo2.png"
                  alt="header-logo2.png"
                />
              </a>
              <a className="mobile-menu-reg-link" href="page-register.html">
                <span className="flaticon-user"></span>
              </a>
            </div>
          </div>
        </div>
        <nav id="menu" className="stylehome1">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="properties">Properties</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
            <li>
              <a href="page-login.html">
                <span className="flaticon-user"></span> Login
              </a>
            </li>
            <li>
              <a href="page-register.html">
                <span className="flaticon-edit"></span> Register
              </a>
            </li>
            <li className="cl_btn">
              <a className="btn btn-block btn-lg btn-thm circle" href="#">
                <span className="flaticon-plus"></span> Create Listing
              </a>
            </li>
          </ul>
        </nav>
      </div> */}
    </>
  );
};

export default Header;
