import React from "react";

const Login = () => {
  return (
    <div className="container pb20 pt20">
      <div className="row">
        <div className="col-lg-12">
          <ul className="sign_up_tab nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-lg-6">
            <div className=" mt25 " id="home" aria-labelledby="home-tab">
              <div className="col-lg-12 col-xl-12">
                <div className="login_form">
                  <form action="#">
                    <div className="heading">
                      <h4>Login</h4>
                    </div>
                    <div className="row mt25">
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-fb btn-block">
                          <i className="fa fa-facebook float-left mt5"></i>
                          Login with Facebook
                        </button>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-googl btn-block"
                        >
                          <i className="fa fa-google float-left mt5"></i> Login
                          with Google
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="input-group mb-2 mr-sm-2">
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="User Name Or Email"
                      />
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="flaticon-user"></i>
                        </div>
                      </div>
                    </div>
                    <div className="input-group form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="flaticon-password"></i>
                        </div>
                      </div>
                    </div>
                    <div className="form-group custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="exampleCheck1"
                      >
                        Remember me
                      </label>
                      <a className="btn-fpswd float-right" href="#">
                        Lost your password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-log btn-block btn-thm"
                    >
                      Log In
                    </button>
                    <p className="text-center">
                      Don't have an account?
                      <a className="text-thm" href="#">
                        Register
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className=" mt25" id="profile" aria-labelledby="profile-tab">
              <div className="col-lg-12 col-xl-12">
                <div className="sign_up_form">
                  <div className="heading">
                    <h4>Register</h4>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-block btn-fb">
                          <i className="fa fa-facebook float-left mt5"></i>
                          Login with Facebook
                        </button>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-block btn-googl"
                        >
                          <i className="fa fa-google float-left mt5"></i> Login
                          with Google
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="form-group input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        placeholder="User Name"
                      />
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="flaticon-user"></i>
                        </div>
                      </div>
                    </div>
                    <div className="form-group input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail2"
                        placeholder="Email"
                      />
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-envelope-o"></i>
                        </div>
                      </div>
                    </div>
                    <div className="form-group input-group">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                        placeholder="Password"
                      />
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="flaticon-password"></i>
                        </div>
                      </div>
                    </div>
                    <div className="form-group input-group">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword3"
                        placeholder="Re-enter password"
                      />
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="flaticon-password"></i>
                        </div>
                      </div>
                    </div>
                    <div className="form-group ui_kit_select_search mb0">
                      <select
                        className="selectpicker"
                        data-live-search="true"
                        data-width="100%"
                      >
                        <option data-tokens="SelectRole">Single User</option>
                        <option data-tokens="Agent/Agency">Agent</option>
                        <option data-tokens="SingleUser">Multi User</option>
                      </select>
                    </div>
                    <div className="form-group custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="exampleCheck2"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="exampleCheck2"
                      >
                        I have read and accept the Terms and Privacy Policy?
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-log btn-block btn-thm"
                    >
                      Sign Up
                    </button>
                    <p className="text-center">
                      Already have an account?
                      <a className="text-thm" href="#">
                        Log In
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
