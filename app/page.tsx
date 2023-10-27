import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className="home-three bg-img3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="home3_home_content">
                <h1>Your Property, Our Priority.</h1>
                <h4>
                  From as low as $10 per day with limited time offer discounts
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="home_adv_srch_opt home3">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Buy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-profile"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Rent
                    </a>
                  </li>
                </ul>
                <div
                  className="tab-content home1_adsrchfrm"
                  id="pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="home1-advnc-search home3">
                      <ul className="h1ads_1st_list mb0">
                        <li className="list-inline-item">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName1"
                              placeholder="Enter keyword..."
                            />
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="search_option_two">
                            <div className="candidate_revew_select">
                              <select className="selectpicker w100 show-tick">
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
                        <li className="list-inline-item">
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
                        <li className="list-inline-item">
                          <div className="small_dropdown2 home3">
                            <div id="prncgs" className="btn dd_btn">
                              <span>Price</span>
                              <label htmlFor="exampleInputEmail2">
                                <span className="fa fa-angle-down"></span>
                              </label>
                            </div>
                            <div className="dd_content2">
                              <div className="pricing_acontent">
                                <span id="slider-range-value1"></span>
                                <span id="slider-range-value2"></span>
                                <div id="slider"></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="custome_fields_520 list-inline-item">
                          <div className="navbered">
                            <div className="mega-dropdown home3">
                              <span id="show_advbtn" className="dropbtn">
                                Advanced
                                <i className="flaticon-more pl10 flr-520"></i>
                              </span>
                              <div className="dropdown-content">
                                <div className="row p15">
                                  <div className="col-lg-12">
                                    <h4 className="text-thm3">Amenities</h4>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
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
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
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
                                    </ul>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
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
                                    </ul>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
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
                                    </ul>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
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
                                <div className="row p15 pt0-xsd">
                                  <div className="col-lg-11 col-xl-10">
                                    <ul className="apeartment_area_list mb0">
                                      <li className="list-inline-item">
                                        <div className="candidate_revew_select">
                                          <select className="selectpicker w100 show-tick">
                                            <option>Bathrooms</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                          </select>
                                        </div>
                                      </li>
                                      <li className="list-inline-item">
                                        <div className="candidate_revew_select">
                                          <select className="selectpicker w100 show-tick">
                                            <option>Bedrooms</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                          </select>
                                        </div>
                                      </li>
                                      <li className="list-inline-item">
                                        <div className="candidate_revew_select">
                                          <select className="selectpicker w100 show-tick">
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
                                      </li>
                                      <li className="list-inline-item">
                                        <div className="candidate_revew_select">
                                          <select className="selectpicker w100 show-tick">
                                            <option>Built-up Area</option>
                                            <option>Adana</option>
                                            <option>Ankara</option>
                                            <option>Antalya</option>
                                            <option>Bursa</option>
                                            <option>Bodrum</option>
                                            <option>Gaziantep</option>
                                            <option>İstanbul</option>
                                            <option>İzmir</option>
                                            <option>Konya</option>
                                          </select>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-1 col-xl-2">
                                    <div className="mega_dropdown_content_closer">
                                      <h5 className="text-thm text-right mt15">
                                        <span id="hide_advbtn" className="curp">
                                          Hide
                                        </span>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="search_option_button">
                            <button type="submit" className="btn btn-thm3">
                              Search
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="home1-advnc-search home3">
                      <ul className="h1ads_1st_list mb0">
                        <li className="list-inline-item">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputName2"
                              placeholder="Enter keyword..."
                            />
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="search_option_two">
                            <div className="candidate_revew_select">
                              <select className="selectpicker w100 show-tick">
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
                        <li className="list-inline-item">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputEmail3"
                              placeholder="Location"
                            />
                            <label htmlFor="exampleInputEmail3">
                              <span className="flaticon-maps-and-flags"></span>
                            </label>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="small_dropdown2 home3">
                            <div id="prncgs2" className="btn dd_btn">
                              <span>Price</span>
                              <label>
                                <span className="fa fa-angle-down"></span>
                              </label>
                            </div>
                            <div className="dd_content2">
                              <div className="pricing_acontent">
                                <input
                                  type="text"
                                  className="amount"
                                  placeholder="$52,239"
                                />
                                <input
                                  type="text"
                                  className="amount2"
                                  placeholder="$985,14"
                                />
                                <div className="slider-range"></div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="custome_fields_520 list-inline-item">
                          <div className="navbered">
                            <div className="mega-dropdown home3">
                              <span id="show_advbtn2" className="dropbtn">
                                Advanced
                                <i className="flaticon-more pl10 flr-520"></i>
                              </span>
                              <div className="dropdown-content">
                                <div className="row p15">
                                  <div className="col-lg-12">
                                    <h4 className="text-thm3">Amenities</h4>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck16"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck16"
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
                                            id="customCheck17"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck17"
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
                                            id="customCheck18"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck18"
                                          >
                                            Swimming Pool
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck19"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck19"
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
                                            id="customCheck20"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck20"
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
                                            id="customCheck21"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck21"
                                          >
                                            ht Cable
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck22"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck22"
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
                                            id="customCheck23"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck23"
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
                                            id="customCheck24"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck24"
                                          >
                                            Washer
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck25"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck25"
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
                                            id="customCheck26"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck26"
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
                                            id="customCheck27"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck27"
                                          >
                                            WiFi
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-xxs-6 col-sm col-lg col-xl">
                                    <ul className="ui_kit_checkbox selectable-list">
                                      <li>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="customCheck28"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck28"
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
                                            id="customCheck29"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck29"
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
                                            id="customCheck30"
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="customCheck30"
                                          >
                                            Window Coverings
                                          </label>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="row p15 pt0-xsd">
                                  <div className="col-lg-11 col-xl-10">
                                    <ul className="apeartment_area_list mb0">
                                      <li className="list-inline-item">
                                        <div className="candidate_revew_select">
                                          <select className="selectpicker w100 show-tick">
                                            <option>Bathrooms</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                          </select>
                                        </div>
                                      </li>
                                      <li className="list-inline-item">
                                        <div className="candidate_revew_select">
                                          <select className="selectpicker w100 show-tick">
                                            <option>Bedrooms</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                          </select>
                                        </div>
                                      </li>
                                      <li className="list-inline-item">
                                        <div className="candidate_revew_select">
                                          <select className="selectpicker w100 show-tick">
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
                                      </li>
                                      <li className="list-inline-item">
                                        <div className="candidate_revew_select">
                                          <select className="selectpicker w100 show-tick">
                                            <option>Built-up Area</option>
                                            <option>Adana</option>
                                            <option>Ankara</option>
                                            <option>Antalya</option>
                                            <option>Bursa</option>
                                            <option>Bodrum</option>
                                            <option>Gaziantep</option>
                                            <option>İstanbul</option>
                                            <option>İzmir</option>
                                            <option>Konya</option>
                                          </select>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col-lg-1 col-xl-2">
                                    <div className="mega_dropdown_content_closer">
                                      <h5 className="text-thm text-right mt15">
                                        <span
                                          id="hide_advbtn2"
                                          className="curp"
                                        >
                                          Hide
                                        </span>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="search_option_button">
                            <button type="submit" className="btn btn-thm3">
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
        </div>
      </section>

      <section id="feature-property" className="latest-property">
        <div className="container">
          <div className="row featured_row">
            <div className="col-lg-12">
              <div className="home1-advnc-search home2 mt20">
                <ul className="h1ads_1st_list mb0">
                  <li className="list-inline-item">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        placeholder="Enter keyword..."
                      />
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="search_option_two home2">
                      <div className="candidate_revew_select">
                        <select className="selectpicker w100 show-tick">
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
                  <li className="list-inline-item">
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
                  <li className="list-inline-item">
                    <div className="small_dropdown2">
                      <div id="prncgs" className="btn dd_btn">
                        <span>Price</span>
                        <label htmlFor="exampleInputEmail2">
                          <span className="fa fa-angle-down"></span>
                        </label>
                      </div>
                      <div className="dd_content2 home2">
                        <div className="pricing_acontent">
                          <span id="slider-range-value1"></span>
                          <span id="slider-range-value2"></span>
                          <div id="slider"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="custome_fields_520 list-inline-item">
                    <div className="navbered">
                      <div className="mega-dropdown">
                        <span id="show_advbtn" className="dropbtn">
                          Advanced{" "}
                          <i className="flaticon-more pl10 flr-520"></i>
                        </span>
                        <div className="dropdown-content home2">
                          <div className="row p15">
                            <div className="col-lg-12">
                              <h4 className="text-thm3">Amenities</h4>
                            </div>
                            <div className="col-xxs-6 col-sm col-lg col-xl">
                              <ul className="ui_kit_checkbox selectable-list">
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
                            </div>
                            <div className="col-xxs-6 col-sm col-lg col-xl">
                              <ul className="ui_kit_checkbox selectable-list">
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
                              </ul>
                            </div>
                            <div className="col-xxs-6 col-sm col-lg col-xl">
                              <ul className="ui_kit_checkbox selectable-list">
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
                              </ul>
                            </div>
                            <div className="col-xxs-6 col-sm col-lg col-xl">
                              <ul className="ui_kit_checkbox selectable-list">
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
                              </ul>
                            </div>
                            <div className="col-xxs-6 col-sm col-lg col-xl">
                              <ul className="ui_kit_checkbox selectable-list">
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
                          <div className="row p15 pt0-xsd">
                            <div className="col-lg-11 col-xl-10">
                              <ul className="apeartment_area_list mb0">
                                <li className="list-inline-item">
                                  <div className="candidate_revew_select">
                                    <select className="selectpicker w100 show-tick">
                                      <option>Bathrooms</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                    </select>
                                  </div>
                                </li>
                                <li className="list-inline-item">
                                  <div className="candidate_revew_select">
                                    <select className="selectpicker w100 show-tick">
                                      <option>Bedrooms</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                      <option>6</option>
                                      <option>7</option>
                                      <option>8</option>
                                    </select>
                                  </div>
                                </li>
                                <li className="list-inline-item">
                                  <div className="candidate_revew_select">
                                    <select className="selectpicker w100 show-tick">
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
                                </li>
                                <li className="list-inline-item">
                                  <div className="candidate_revew_select">
                                    <select className="selectpicker w100 show-tick">
                                      <option>Built-up Area</option>
                                      <option>Adana</option>
                                      <option>Ankara</option>
                                      <option>Antalya</option>
                                      <option>Bursa</option>
                                      <option>Bodrum</option>
                                      <option>Gaziantep</option>
                                      <option>İstanbul</option>
                                      <option>İzmir</option>
                                      <option>Konya</option>
                                    </select>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-1 col-xl-2">
                              <div className="mega_dropdown_content_closer">
                                <h5 className="text-thm text-right mt15">
                                  <span id="hide_advbtn" className="curp">
                                    Hide
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="search_option_button">
                      <button type="submit" className="btn btn-thm">
                        Search
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container ovh">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Latest For Sale</h2>
                <p>Handpicked properties by our team.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider">
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-property">
        <div className="container ovh">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb40">
                <h2>Latest For Rent</h2>
                <p>Handpicked properties by our team.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="feature_property_slider">
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
                <div className="item">
                  <div className="feat_property">
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
                            <a href="#">Beds: 4</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Baths: 2</a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#">Sq Ft: 5280</a>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-chose" className="whychose_us bgc-f7 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Why Choose Us</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-profit"></span>
                </div>
                <div className="details">
                  <h4>User-Friendly Platform</h4>
                  <p>
                    Our website is designed with you in mind. Intuitive
                    navigation, advanced search, and detailed listings make
                    finding your ideal property a breeze.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-high-five"></span>
                </div>
                <div className="details">
                  <h4>Local Insights</h4>
                  <p>
                    We have our finger on the pulse of local real estate trends,
                    giving you an edge in your property endeavors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-home-1"></span>
                </div>
                <div className="details">
                  <h4>Customer Support</h4>
                  <p>
                    Our dedicated support team is always here to assist you,
                    providing prompt responses to your queries.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-xl-3">
              <div className="why_chose_us">
                <div className="icon">
                  <span className="flaticon-profit"></span>
                </div>
                <div className="details">
                  <h4>Expertise</h4>
                  <p>
                    Our team comprises seasoned professionals with deep
                    knowledge of the real estate market, ensuring you receive
                    the best guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-xl-4">
              <div className="properti_city">
                <div className="thumb">
                  <img
                    className="img-fluid w100"
                    src="images/property/pc1.jpg"
                    alt="pc1.jpg"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Miami</h4>
                    <p>24 Properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-8">
              <div className="properti_city">
                <div className="thumb">
                  <img
                    className="img-fluid w100"
                    src="images/property/pc2.jpg"
                    alt="pc2.jpg"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Los Angeles</h4>
                    <p>18 Properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="properti_city">
                <div className="thumb">
                  <img
                    className="img-fluid w100"
                    src="images/property/pc5.jpg"
                    alt="pc5.jpg"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>New York</h4>
                    <p>89 Properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="properti_city">
                <div className="thumb">
                  <img
                    className="img-fluid w100"
                    src="images/property/pc6.jpg"
                    alt="pc6.jpg"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Orlando</h4>
                    <p>89 Properties</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4">
              <div className="properti_city">
                <div className="thumb">
                  <img
                    className="img-fluid w100"
                    src="images/property/pc4.jpg"
                    alt="pc4.jpg"
                  />
                </div>
                <div className="overlay">
                  <div className="details">
                    <h4>Florida</h4>
                    <p>47 Properties</p>
                  </div>
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

      <Footer />
    </>
  );
}
