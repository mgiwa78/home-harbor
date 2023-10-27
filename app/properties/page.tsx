"use client";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

const page = () => {
  const [position, setPosition] = React.useState(-700);
  return (
    <>
      <section className="our-listing bgc-f7 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="listing_sidebar  db-991">
                <div
                  style={{ marginLeft: `${position}px ` }}
                  className="sidebar_content_details "
                >
                  <div className="sidebar_listing_list style2 mobile_sytle_sidebar mb0">
                    <div className="sidebar_advanced_search_widget">
                      <h4 className="mb25">
                        Advanced Search
                        <button
                          onClick={() => setPosition(-700)}
                          className="filter_closed_btn float-right"
                        >
                          <small>Hide Filter</small>
                          <span className="flaticon-close"></span>
                        </button>
                      </h4>
                      <ul className="sasw_list style2 mb0">
                        <li className="search_area">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName1"
                              placeholder="keyword"
                            />
                            <label htmlFor="exampleInputEmail">
                              <span className="flaticon-magnifying-glass"></span>
                            </label>
                          </div>
                        </li>
                        <li className="search_area">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail"
                              placeholder="Location"
                            />
                            <label htmlFor="exampleInputEmail">
                              <span className="flaticon-maps-and-flags"></span>
                            </label>
                          </div>
                        </li>
                        <li className="search_area">
                          <div className="form-group">
                            <select className=" w100 show-tick">
                              <option>Status</option>
                              <option>Apartment</option>
                              <option>Bungalow</option>
                              <option>Condo</option>
                              <option>House</option>
                              <option>Land</option>
                              <option>Single Family</option>
                            </select>
                          </div>
                        </li>
                        <li className="search_area">
                          <div className="search_option_two">
                            <div className="candidate_revew_select">
                              <select className=" w100 show-tick">
                                <option>Property Type</option>
                                <option>Apartment</option>
                                <option>Bungalow</option>
                                <option>Condo</option>
                                <option>House</option>
                                <option>Land</option>
                                <option>Single Family</option>
                              </select>
                            </div>
                          </div>
                        </li>
                        <li className="search_area">
                          <div className="small_dropdown2">
                            <div id="prncgs" className="btn dd_btn">
                              <span>Price</span>
                              <label htmlFor="exampleInputEmail2">
                                <span className="fa fa-angle-down"></span>
                              </label>
                            </div>
                            <div className="dd_content2">
                              <div className="pricing_acontent">
                                <span id="slider-range-value1"></span>
                                <span
                                  className="mt0"
                                  id="slider-range-value2"
                                ></span>
                                <div id="slider"></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="search_area">
                          <div className="search_option_two">
                            <div className="candidate_revew_select">
                              <select className=" w100 show-tick">
                                <option>Bathrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                              </select>
                            </div>
                          </div>
                        </li>
                        <li className="search_area">
                          <div className="search_option_two">
                            <div className="candidate_revew_select">
                              <select className=" w100 show-tick">
                                <option>Bedrooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                              </select>
                            </div>
                          </div>
                        </li>
                        <li className="search_area">
                          <div className="search_option_two">
                            <div className="candidate_revew_select">
                              <select className=" w100 show-tick">
                                <option>Garages</option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Others</option>
                              </select>
                            </div>
                          </div>
                        </li>
                        <li className="search_area">
                          <div className="search_option_two">
                            <div className="candidate_revew_select">
                              <select className=" w100 show-tick">
                                <option>Year built</option>
                                <option>2013</option>
                                <option>2014</option>
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                                <option>2020</option>
                              </select>
                            </div>
                          </div>
                        </li>
                        <li className="min_area style2 list-inline-item">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName2"
                              placeholder="Min Area"
                            />
                          </div>
                        </li>
                        <li className="max_area list-inline-item">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName3"
                              placeholder="Max Area"
                            />
                          </div>
                        </li>
                        <li>
                          <div id="accordion" className="panel-group">
                            <div className="panel">
                              <div className="panel-heading">
                                <h4 className="panel-title">
                                  <a
                                    href="#panelBodyRating"
                                    className="accordion-toggle link"
                                    data-toggle="collapse"
                                    data-parent="#accordion"
                                  >
                                    <i className="flaticon-more"></i> Advanced
                                    features
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="panelBodyRating"
                                className="panel-collapse collapse"
                              >
                                <div className="panel-body row">
                                  <div className="col-lg-12">
                                    <ul className="ui_kit_checkbox selectable-list float-left fn-400">
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck1"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck1"
                                          >
                                            Air Conditioning
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck4"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck4"
                                          >
                                            Barbeque
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck10"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck10"
                                          >
                                            Gym
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck5"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck5"
                                          >
                                            Microwave
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck6"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck6"
                                          >
                                            TV Cable
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck2"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck2"
                                          >
                                            Lawn
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck11"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck11"
                                          >
                                            Refrigerator
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck3"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck3"
                                          >
                                            Swimming Pool
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                    <ul className="ui_kit_checkbox selectable-list float-right fn-400">
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck12"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck12"
                                          >
                                            WiFi
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck14"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck14"
                                          >
                                            Sauna
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck7"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck7"
                                          >
                                            Dryer
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck9"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck9"
                                          >
                                            Washer
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck13"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck13"
                                          >
                                            Laundry
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck8"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck8"
                                          >
                                            Outdoor Shower
                                          </label>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck15"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck15"
                                          >
                                            Window Coverings
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="search_option_button">
                            <button
                              type="submit"
                              className="btn btn-block btn-thm"
                            >
                              Search
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10">
              <div className="breadcrumb_content style2 mt30-767 mb30-767">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item active text-thm"
                    aria-current="page"
                  >
                    Properties
                  </li>
                </ol>
                <h2 className="breadcrumb_title">Properties</h2>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="db-991">
                <div id="main2">
                  <button
                    onClick={() => setPosition(0)}
                    id="open2"
                    className="flaticon-filter-results-button filter_open_btn style3"
                  >
                    Show Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                <div className="grid_list_search_result">
                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-5">
                    <div className="left_area tac-xsd">
                      <p>9 Search results</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-8 col-xl-7">
                    <div className="right_area text-right tac-xsd">
                      <ul>
                        <li className="list-inline-item">
                          <span className="stts">Status:</span>
                          <select className=" show-tick">
                            <option>All Status</option>
                            <option>Recent</option>
                            <option>Old Review</option>
                          </select>
                        </li>
                        <li className="list-inline-item">
                          <span className="shrtby">Sort by:</span>
                          <select className=" show-tick">
                            <option>Featured First</option>
                            <option>Featured 2nd</option>
                            <option>Featured 3rd</option>
                            <option>Featured 4th</option>
                            <option>Featured 5th</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4">
                  <Link
                    href="/properties/property"
                    className="feat_property home7"
                  >
                    <div className="thumb">
                      <img
                        className="img-whp"
                        src="images/property/fp1.jpg"
                        alt="fp1.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item">
                            <a href="#">For Rent</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Featured</a>
                          </li>
                        </ul>
                        <ul className="icon mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-transfer-1"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                        <a className="fp_price" href="#">
                          $13,000<small>/mo</small>
                        </a>
                      </div>
                    </div>
                    <div className="details">
                      <div className="tc_content">
                        <p className="text-thm">Apartment</p>
                        <h4>Renovated Apartment</h4>
                        <p>
                          <span className="flaticon-placeholder"></span> 1421
                          San Pedro St, Los Angeles, CA 90015
                        </p>
                        <ul className="prop_details mb0">
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Beds: 4
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Baths: 2
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Sq Ft: 5280
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="fp_footer">
                        <ul className="fp_meta float-left mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src="images/property/pposter1.png"
                                alt="pposter1.png"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Ali Tufan</a>
                          </li>
                        </ul>
                        <div className="fp_pdate float-right">4 years ago</div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img
                        className="img-whp"
                        src="images/property/fp2.jpg"
                        alt="fp2.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item">
                            <a href="#">For Rent</a>
                          </li>
                          <li className="list-inline-item dn"></li>
                        </ul>
                        <ul className="icon mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-transfer-1"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                        <a className="fp_price" href="#">
                          $13,000<small>/mo</small>
                        </a>
                      </div>
                    </div>
                    <div className="details">
                      <div className="tc_content">
                        <p className="text-thm">Villa</p>
                        <h4>Gorgeous Villa Bay View</h4>
                        <p>
                          <span className="flaticon-placeholder"></span> 1421
                          San Pedro St, Los Angeles, CA 90015
                        </p>
                        <ul className="prop_details mb0">
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Beds: 4
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Baths: 2
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Sq Ft: 5280
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="fp_footer">
                        <ul className="fp_meta float-left mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src="images/property/pposter1.png"
                                alt="pposter1.png"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Ali Tufan</a>
                          </li>
                        </ul>
                        <div className="fp_pdate float-right">4 years ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img
                        className="img-whp"
                        src="images/property/fp3.jpg"
                        alt="fp3.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item">
                            <a href="#">For Sale</a>
                          </li>
                          <li className="list-inline-item dn"></li>
                        </ul>
                        <ul className="icon mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-transfer-1"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                        <a className="fp_price" href="#">
                          $13,000<small>/mo</small>
                        </a>
                      </div>
                    </div>
                    <div className="details">
                      <div className="tc_content">
                        <p className="text-thm">Single Family Home</p>
                        <h4>Luxury Family Home</h4>
                        <p>
                          <span className="flaticon-placeholder"></span> 1421
                          San Pedro St, Los Angeles, CA 90015
                        </p>
                        <ul className="prop_details mb0">
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Beds: 4
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Baths: 2
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Sq Ft: 5280
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="fp_footer">
                        <ul className="fp_meta float-left mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src="images/property/pposter1.png"
                                alt="pposter1.png"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Ali Tufan</a>
                          </li>
                        </ul>
                        <div className="fp_pdate float-right">4 years ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img
                        className="img-whp"
                        src="images/property/fp4.jpg"
                        alt="fp4.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item">
                            <a href="#">For Rent</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Featured</a>
                          </li>
                        </ul>
                        <ul className="icon mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-transfer-1"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                        <a className="fp_price" href="#">
                          $13,000<small>/mo</small>
                        </a>
                      </div>
                    </div>
                    <div className="details">
                      <div className="tc_content">
                        <p className="text-thm">Apartment</p>
                        <h4>Luxury Family Home</h4>
                        <p>
                          <span className="flaticon-placeholder"></span> 1421
                          San Pedro St, Los Angeles, CA 90015
                        </p>
                        <ul className="prop_details mb0">
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Beds: 4
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Baths: 2
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Sq Ft: 5280
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="fp_footer">
                        <ul className="fp_meta float-left mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src="images/property/pposter1.png"
                                alt="pposter1.png"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Ali Tufan</a>
                          </li>
                        </ul>
                        <div className="fp_pdate float-right">4 years ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img
                        className="img-whp"
                        src="images/property/fp15.jpg"
                        alt="fp15.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item">
                            <a href="#">For Rent</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Featured</a>
                          </li>
                        </ul>
                        <ul className="icon mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-transfer-1"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                        <a className="fp_price" href="#">
                          $13,000<small>/mo</small>
                        </a>
                      </div>
                    </div>
                    <div className="details">
                      <div className="tc_content">
                        <p className="text-thm">Apartment</p>
                        <h4>Renovated Apartment</h4>
                        <p>
                          <span className="flaticon-placeholder"></span> 1421
                          San Pedro St, Los Angeles, CA 90015
                        </p>
                        <ul className="prop_details mb0">
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Beds: 4
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Baths: 2
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Sq Ft: 5280
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="fp_footer">
                        <ul className="fp_meta float-left mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src="images/property/pposter1.png"
                                alt="pposter1.png"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Ali Tufan</a>
                          </li>
                        </ul>
                        <div className="fp_pdate float-right">4 years ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="feat_property home7">
                    <div className="thumb">
                      <img
                        className="img-whp"
                        src="images/property/fp16.jpg"
                        alt="fp16.jpg"
                      />
                      <div className="thmb_cntnt">
                        <ul className="tag mb0">
                          <li className="list-inline-item">
                            <a href="#">For Rent</a>
                          </li>
                          <li className="list-inline-item dn"></li>
                        </ul>
                        <ul className="icon mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-transfer-1"></span>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">
                              <span className="flaticon-heart"></span>
                            </a>
                          </li>
                        </ul>
                        <a className="fp_price" href="#">
                          $13,000<small>/mo</small>
                        </a>
                      </div>
                    </div>
                    <div className="details">
                      <div className="tc_content">
                        <p className="text-thm">Villa</p>
                        <h4>Gorgeous Villa Bay View</h4>
                        <p>
                          <span className="flaticon-placeholder"></span> 1421
                          San Pedro St, Los Angeles, CA 90015
                        </p>
                        <ul className="prop_details mb0">
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Beds: 4
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Baths: 2
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a className="text-thm3" href="#">
                              Sq Ft: 5280
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="fp_footer">
                        <ul className="fp_meta float-left mb0">
                          <li className="list-inline-item">
                            <a href="#">
                              <img
                                src="images/property/pposter1.png"
                                alt="pposter1.png"
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Ali Tufan</a>
                          </li>
                        </ul>
                        <div className="fp_pdate float-right">4 years ago</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mt20">
                  <div className="mbp_pagination">
                    <ul className="page_navigation">
                      <li className="page-item disabled">
                        <a
                          className="page-link"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          <span className="flaticon-left-arrow"></span> Prev
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">
                          2 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          29
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span className="flaticon-right-arrow"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
