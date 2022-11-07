import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { appendScript } from "../utils/appendScript";

function Checkout() {
  useEffect(() => {
    appendScript("../assets/js/main8c94.js");
  }, [])
  return (
    <>
      <header className="header-area header-style-1 header-height-2">
        <div
          className="header-top header-top-ptb-1 d-none d-lg-block header-bottom-bg-color"
          style={{ backgroundColor: "#3bb77e" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4">
                <div className="header-info">
                  <ul></ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4">
                <div className="text-center">
                  <div className="d-inline-block">
                    <ul style={{ color: "#fff" }}>
                      <li>Contact Us: +234 000 000 000</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="header-info header-info-right">
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle header-middle-ptb-1 d-none sticky-bar d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1 col-xl-6 col-lg-6">
                <Link to="/">
                  <img src="assets/imgs/theme/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="header-right col-xl-4 col-lg-3">
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <Link to="/wishlist">
                        <img
                          className="svgInject"
                          alt="Nest"
                          src="assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count blue">6</span>
                      </Link>
                      <Link to="/wishlist">
                        <span className="lable">Wishlist</span>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link className="mini-cart-icon" to="/cart">
                        <img
                          alt="Nest"
                          src="assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count blue">2</span>
                      </Link>
                      <Link to="/cart">
                        <span className="lable">Cart</span>
                      </Link>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2">
                        <ul>
                          <li>
                            <div className="shopping-cart-img">
                              <Link to="shop-product-right.html">
                                <img
                                  alt="Nest"
                                  src="assets/imgs/shop/thumbnail-3.jpg"
                                />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link to="shop-product-right.html">
                                  Daisy Casual Bag
                                </Link>
                              </h4>
                              <h4>
                                <span>1 × </span>$800.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <Link to="#">
                                <i className="fi-rs-cross-small"></i>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="shopping-cart-img">
                              <Link to="shop-product-right.html">
                                <img
                                  alt="Nest"
                                  src="assets/imgs/shop/thumbnail-2.jpg"
                                />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link to="shop-product-right.html">
                                  Corduroy Shirts
                                </Link>
                              </h4>
                              <h4>
                                <span>1 × </span>$3200.00
                              </h4>
                            </div>
                            <div className="shopping-cart-delete">
                              <Link to="#">
                                <i className="fi-rs-cross-small"></i>
                              </Link>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-footer">
                          <div className="shopping-cart-total">
                            <h4>
                              Total <span>$4000.00</span>
                            </h4>
                          </div>
                          <div className="shopping-cart-button">
                            <Link to="/cart" className="outline">
                              View cart
                            </Link>
                            <Link to="shop-checkout.html">Checkout</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="header-action-icon-2">
                      <Link to="/dashboard">
                        <img
                          className="svgInject"
                          alt="Nest"
                          src="assets/imgs/theme/icons/icon-user.svg"
                        />
                      </Link>
                      <Link to="/dashboard">
                        <span className="lable ml-0">Account</span>
                      </Link>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <Link to="/dashboard">
                              <i className="fi fi-rs-user mr-10"></i>My Account
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard">
                              <i className="fi fi-rs-location-alt mr-10"></i>
                              Order Tracking
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard">
                              <i className="fi fi-rs-label mr-10"></i>My Voucher
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fi fi-rs-heart mr-10"></i>My
                              Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link to="/dashboard">
                              <i className="fi fi-rs-settings-sliders mr-10"></i>
                              Setting
                            </Link>
                          </li>
                          <li>
                            <Link to="/login">
                              <i className="fi fi-rs-sign-out mr-10"></i>Sign
                              out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="hotline d-none d-lg-flex">
                      <img
                        src="assets/imgs/theme/icons/icon-headphone.svg"
                        alt="hotline"
                      />
                      <p>
                        1900 - 888<span>24/7 Support Center</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link to="index-2.html">
                  <img src="assets/imgs/theme/logo.svg" alt="logo" />
                </Link>
              </div>

              <div className="header-action-icon-2 d-block d-lg-none">
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="mobile-header-logo">
              <Link to="index-2.html">
                <img src="assets/imgs/theme/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
              <button className="close-style search-close">
                <i className="icon-top"></i>
                <i className="icon-bottom"></i>
              </button>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="mobile-search search-style-3 mobile-header-border">
              <form action="#">
                <input type="text" placeholder="Search for items…" />
                <button type="submit">
                  <i className="fi-rs-search"></i>
                </button>
              </form>
            </div>
            <div className="mobile-menu-wrap mobile-header-border">
              {/* <!-- mobile menu start --> */}
              <nav>
                <ul className="mobile-menu font-heading">
                  <li className="menu-item-has-children">
                    <Link to="index-2.html">Home</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="index-2.html">Home 1</Link>
                      </li>
                      <li>
                        <Link to="index-3.html">Home 2</Link>
                      </li>
                      <li>
                        <Link to="index-4.html">Home 3</Link>
                      </li>
                      <li>
                        <Link to="index-5.html">Home 4</Link>
                      </li>
                      <li>
                        <Link to="/">Home 5</Link>
                      </li>
                      <li>
                        <Link to="index-7.html">Home 6</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="shop-grid-right.html">shop</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="shop-grid-right.html">
                          Shop Grid – Right Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-left.html">
                          Shop Grid – Left Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-list-right.html">
                          Shop List – Right Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-list-left.html">
                          Shop List – Left Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-fullwidth.html">Shop - Wide</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Single Product</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="shop-product-right.html">
                              Product – Right Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-left.html">
                              Product – Left Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-full.html">
                              Product – No sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-vendor.html">
                              Product – Vendor Infor
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="shop-filter.html">Shop – Filter</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Shop – Wishlist</Link>
                      </li>
                      <li>
                        <Link to="/cart">Shop – Cart</Link>
                      </li>
                      <li>
                        <Link to="shop-checkout.html">Shop – Checkout</Link>
                      </li>
                      <li>
                        <Link to="shop-compare.html">Shop – Compare</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Shop Invoice</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="shop-invoice-1.html">Shop Invoice 1</Link>
                          </li>
                          <li>
                            <Link to="shop-invoice-2.html">Shop Invoice 2</Link>
                          </li>
                          <li>
                            <Link to="shop-invoice-3.html">Shop Invoice 3</Link>
                          </li>
                          <li>
                            <Link to="shop-invoice-4.html">Shop Invoice 4</Link>
                          </li>
                          <li>
                            <Link to="shop-invoice-5.html">Shop Invoice 5</Link>
                          </li>
                          <li>
                            <Link to="shop-invoice-6.html">Shop Invoice 6</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Vendors</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="vendors-grid.html">Vendors Grid</Link>
                      </li>
                      <li>
                        <Link to="vendors-list.html">Vendors List</Link>
                      </li>
                      <li>
                        <Link to="/vendor">Vendor Details 01</Link>
                      </li>
                      <li>
                        <Link to="vendor-details-2.html">
                          Vendor Details 02
                        </Link>
                      </li>
                      <li>
                        <Link to="vendor-dashboard.html">Vendor Dashboard</Link>
                      </li>
                      <li>
                        <Link to="vendor-guide.html">Vendor Guide</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Mega menu</Link>
                    <ul className="dropdown">
                      <li className="menu-item-has-children">
                        <Link to="#">Women's Fashion</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="shop-product-right.html">Dresses</Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">
                              Blouses & Shirts
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">
                              Hoodies & Sweatshirts
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">
                              Women's Sets
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Men's Fashion</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="shop-product-right.html">Jackets</Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">
                              Casual Faux Leather
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">
                              Genuine Leather
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Technology</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="shop-product-right.html">
                              Gaming Laptops
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">
                              Ultraslim Laptops
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">Tablets</Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">
                              Laptop Accessories
                            </Link>
                          </li>
                          <li>
                            <Link to="shop-product-right.html">
                              Tablet Accessories
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="blog-category-fullwidth.html">Blog</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="blog-category-grid.html">
                          Blog Category Grid
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-category-list.html">
                          Blog Category List
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-category-big.html">
                          Blog Category Big
                        </Link>
                      </li>
                      <li>
                        <Link to="blog-category-fullwidth.html">
                          Blog Category Wide
                        </Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Single Product Layout</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="blog-post-left.html">Left Sidebar</Link>
                          </li>
                          <li>
                            <Link to="blog-post-right.html">Right Sidebar</Link>
                          </li>
                          <li>
                            <Link to="blog-post-fullwidth.html">
                              No Sidebar
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="page-about-2.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="page-contact.html">Contact</Link>
                      </li>
                      <li>
                        <Link to="/dashboard">My Account</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="page-register.html">Register</Link>
                      </li>
                      <li>
                        <Link to="page-purchase-guide.html">
                          Purchase Guide
                        </Link>
                      </li>
                      <li>
                        <Link to="page-privacy-policy.html">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="page-terms.html">Terms of Service</Link>
                      </li>
                      <li>
                        <Link to="page-404.html">404 Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Language</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">English</Link>
                      </li>
                      <li>
                        <Link to="#">French</Link>
                      </li>
                      <li>
                        <Link to="#">German</Link>
                      </li>
                      <li>
                        <Link to="#">Spanish</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* <!-- mobile menu end --> */}
            </div>
            <div className="mobile-header-info-wrap">
              <div className="single-mobile-header-info">
                <Link to="page-contact.html">
                  <i className="fi-rs-marker"></i> Our location
                </Link>
              </div>
              <div className="single-mobile-header-info">
                <Link to="/login">
                  <i className="fi-rs-user"></i>Log In / Sign Up
                </Link>
              </div>
              <div className="single-mobile-header-info">
                <Link to="#">
                  <i className="fi-rs-headphones"></i>(+01) - 2345 - 6789
                </Link>
              </div>
            </div>
            <div className="mobile-social-icon mb-50">
              <h6 className="mb-15">Follow Us</h6>
              <Link to="#">
                <img
                  src="assets/imgs/theme/icons/icon-facebook-white.svg"
                  alt=""
                />
              </Link>
              <Link to="#">
                <img
                  src="assets/imgs/theme/icons/icon-twitter-white.svg"
                  alt=""
                />
              </Link>
              <Link to="#">
                <img
                  src="assets/imgs/theme/icons/icon-instagram-white.svg"
                  alt=""
                />
              </Link>
              <Link to="#">
                <img
                  src="assets/imgs/theme/icons/icon-pinterest-white.svg"
                  alt=""
                />
              </Link>
              <Link to="#">
                <img
                  src="assets/imgs/theme/icons/icon-youtube-white.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="site-copyright">
              Copyright 2021 © Nest. All rights reserved. Powered by AliThemes.
            </div>
          </div>
        </div>
      </div>
      {/* <!--End header--> */}
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="index-2.html" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> Shop
              <span></span> Checkout
            </div>
          </div>
        </div>
        <div className="container mb-80 mt-50">
          <div className="row">
            <div className="col-lg-8 mb-40">
              <h1 className="heading-2 mb-10">Checkout</h1>
              <div className="d-flex justify-content-between">
                <h6 className="text-body">
                  There are <span className="text-brand">3</span> products in
                  your cart
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="row mb-50">
                <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                  <div className="toggle_info">
                    <span>
                      <i className="fi-rs-user mr-10"></i>
                      <span className="text-muted font-lg">
                        Already have an account?
                      </span>{" "}
                      <Link
                        to="#loginform"
                        data-bs-toggle="collapse"
                        className="collapsed font-lg"
                        aria-expanded="false"
                      >
                        Click here to login
                      </Link>
                    </span>
                  </div>
                  <div
                    className="panel-collapse collapse login_form"
                    id="loginform"
                  >
                    <div className="panel-body">
                      <p className="mb-30 font-sm">
                        If you have shopped with us before, please enter your
                        details below. If you are a new customer, please proceed
                        to the Billing &amp; Shipping section.
                      </p>
                      <form method="post">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            placeholder="Username Or Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="remember"
                                value=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="remember"
                              >
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <Link to="#">Forgot password?</Link>
                        </div>
                        <div className="form-group">
                          <button className="btn btn-md" name="login">
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form method="post" className="apply-coupon">
                    <input type="text" placeholder="Enter Coupon Code..." />
                    <button className="btn  btn-md" name="login">
                      Apply Coupon
                    </button>
                  </form>
                </div>
              </div>
              <div className="row">
                <h4 className="mb-30">Billing Details</h4>
                <form method="post">
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        required=""
                        name="fname"
                        placeholder="First name *"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        required=""
                        name="lname"
                        placeholder="Last name *"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="billing_address"
                        required=""
                        placeholder="Address *"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        type="text"
                        name="billing_address2"
                        required=""
                        placeholder="Address line2"
                      />
                    </div>
                  </div>
                  <div className="row shipping_calculator">
                    <div className="form-group col-lg-6">
                      <div className="custom_select">
                        <select className="form-control select-active">
                          <option value="">Select an option...</option>
                          <option value="AX">Aland Islands</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="PW">Belau</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BQ">
                            Bonaire, Saint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="VG">British Virgin Islands</option>
                          <option value="BN">Brunei</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo (Brazzaville)</option>
                          <option value="CD">Congo (Kinshasa)</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">CuraÇao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">
                            French Southern Territories
                          </option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">
                            Heard Island and McDonald Islands
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="CI">Ivory Coast</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao S.A.R., China</option>
                          <option value="MK">Macedonia</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="AN">Netherlands Antilles</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PS">Palestinian Territory</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="QA">Qatar</option>
                          <option value="IE">Republic of Ireland</option>
                          <option value="RE">Reunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="ST">São Tomé and Príncipe</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">Saint Helena</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="SX">Saint Martin (Dutch part)</option>
                          <option value="MF">Saint Martin (French part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="SM">San Marino</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">
                            South Georgia/Sandwich Islands
                          </option>
                          <option value="KR">South Korea</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom (UK)</option>
                          <option value="US">USA (US)</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VA">Vatican</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="WS">Western Samoa</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        required=""
                        type="text"
                        name="city"
                        placeholder="City / Town *"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        required=""
                        type="text"
                        name="zipcode"
                        placeholder="Postcode / ZIP *"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        required=""
                        type="text"
                        name="phone"
                        placeholder="Phone *"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input
                        required=""
                        type="text"
                        name="cname"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <input
                        required=""
                        type="text"
                        name="email"
                        placeholder="Email address *"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-30">
                    <textarea
                      rows="5"
                      placeholder="Additional information"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <div className="checkbox">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="createaccount"
                        />
                        <label
                          className="form-check-label label_info"
                          data-bs-toggle="collapse"
                          to="#collapsePassword"
                          data-target="#collapsePassword"
                          aria-controls="collapsePassword"
                          htmlFor="createaccount"
                        >
                          <span>Create an account?</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapsePassword"
                    className="form-group create-account collapse in"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          required=""
                          type="password"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ship_detail">
                    <div className="form-group">
                      <div className="chek-form">
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="differentaddress"
                          />
                          <label
                            className="form-check-label label_info"
                            data-bs-toggle="collapse"
                            data-target="#collapseAddress"
                            to="#collapseAddress"
                            aria-controls="collapseAddress"
                            htmlFor="differentaddress"
                          >
                            <span>Ship to a different address?</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseAddress"
                      className="different_address collapse in"
                    >
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            required=""
                            name="fname"
                            placeholder="First name *"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            required=""
                            name="lname"
                            placeholder="Last name *"
                          />
                        </div>
                      </div>
                      <div className="row shipping_calculator">
                        <div className="form-group col-lg-6">
                          <input
                            required=""
                            type="text"
                            name="cname"
                            placeholder="Company Name"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <div className="custom_select w-100">
                            <select className="form-control select-active">
                              <option value="">Select an option...</option>
                              <option value="AX">Aland Islands</option>
                              <option value="AF">Afghanistan</option>
                              <option value="AL">Albania</option>
                              <option value="DZ">Algeria</option>
                              <option value="AD">Andorra</option>
                              <option value="AO">Angola</option>
                              <option value="AI">Anguilla</option>
                              <option value="AQ">Antarctica</option>
                              <option value="AG">Antigua and Barbuda</option>
                              <option value="AR">Argentina</option>
                              <option value="AM">Armenia</option>
                              <option value="AW">Aruba</option>
                              <option value="AU">Australia</option>
                              <option value="AT">Austria</option>
                              <option value="AZ">Azerbaijan</option>
                              <option value="BS">Bahamas</option>
                              <option value="BH">Bahrain</option>
                              <option value="BD">Bangladesh</option>
                              <option value="BB">Barbados</option>
                              <option value="BY">Belarus</option>
                              <option value="PW">Belau</option>
                              <option value="BE">Belgium</option>
                              <option value="BZ">Belize</option>
                              <option value="BJ">Benin</option>
                              <option value="BM">Bermuda</option>
                              <option value="BT">Bhutan</option>
                              <option value="BO">Bolivia</option>
                              <option value="BQ">
                                Bonaire, Saint Eustatius and Saba
                              </option>
                              <option value="BA">Bosnia and Herzegovina</option>
                              <option value="BW">Botswana</option>
                              <option value="BV">Bouvet Island</option>
                              <option value="BR">Brazil</option>
                              <option value="IO">
                                British Indian Ocean Territory
                              </option>
                              <option value="VG">British Virgin Islands</option>
                              <option value="BN">Brunei</option>
                              <option value="BG">Bulgaria</option>
                              <option value="BF">Burkina Faso</option>
                              <option value="BI">Burundi</option>
                              <option value="KH">Cambodia</option>
                              <option value="CM">Cameroon</option>
                              <option value="CA">Canada</option>
                              <option value="CV">Cape Verde</option>
                              <option value="KY">Cayman Islands</option>
                              <option value="CF">
                                Central African Republic
                              </option>
                              <option value="TD">Chad</option>
                              <option value="CL">Chile</option>
                              <option value="CN">China</option>
                              <option value="CX">Christmas Island</option>
                              <option value="CC">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="CO">Colombia</option>
                              <option value="KM">Comoros</option>
                              <option value="CG">Congo (Brazzaville)</option>
                              <option value="CD">Congo (Kinshasa)</option>
                              <option value="CK">Cook Islands</option>
                              <option value="CR">Costa Rica</option>
                              <option value="HR">Croatia</option>
                              <option value="CU">Cuba</option>
                              <option value="CW">CuraÇao</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
                              <option value="ER">Eritrea</option>
                              <option value="EE">Estonia</option>
                              <option value="ET">Ethiopia</option>
                              <option value="FK">Falkland Islands</option>
                              <option value="FO">Faroe Islands</option>
                              <option value="FJ">Fiji</option>
                              <option value="FI">Finland</option>
                              <option value="FR">France</option>
                              <option value="GF">French Guiana</option>
                              <option value="PF">French Polynesia</option>
                              <option value="TF">
                                French Southern Territories
                              </option>
                              <option value="GA">Gabon</option>
                              <option value="GM">Gambia</option>
                              <option value="GE">Georgia</option>
                              <option value="DE">Germany</option>
                              <option value="GH">Ghana</option>
                              <option value="GI">Gibraltar</option>
                              <option value="GR">Greece</option>
                              <option value="GL">Greenland</option>
                              <option value="GD">Grenada</option>
                              <option value="GP">Guadeloupe</option>
                              <option value="GT">Guatemala</option>
                              <option value="GG">Guernsey</option>
                              <option value="GN">Guinea</option>
                              <option value="GW">Guinea-Bissau</option>
                              <option value="GY">Guyana</option>
                              <option value="HT">Haiti</option>
                              <option value="HM">
                                Heard Island and McDonald Islands
                              </option>
                              <option value="HN">Honduras</option>
                              <option value="HK">Hong Kong</option>
                              <option value="HU">Hungary</option>
                              <option value="IS">Iceland</option>
                              <option value="IN">India</option>
                              <option value="ID">Indonesia</option>
                              <option value="IR">Iran</option>
                              <option value="IQ">Iraq</option>
                              <option value="IM">Isle of Man</option>
                              <option value="IL">Israel</option>
                              <option value="IT">Italy</option>
                              <option value="CI">Ivory Coast</option>
                              <option value="JM">Jamaica</option>
                              <option value="JP">Japan</option>
                              <option value="JE">Jersey</option>
                              <option value="JO">Jordan</option>
                              <option value="KZ">Kazakhstan</option>
                              <option value="KE">Kenya</option>
                              <option value="KI">Kiribati</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LA">Laos</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libya</option>
                              <option value="LI">Liechtenstein</option>
                              <option value="LT">Lithuania</option>
                              <option value="LU">Luxembourg</option>
                              <option value="MO">Macao S.A.R., China</option>
                              <option value="MK">Macedonia</option>
                              <option value="MG">Madagascar</option>
                              <option value="MW">Malawi</option>
                              <option value="MY">Malaysia</option>
                              <option value="MV">Maldives</option>
                              <option value="ML">Mali</option>
                              <option value="MT">Malta</option>
                              <option value="MH">Marshall Islands</option>
                              <option value="MQ">Martinique</option>
                              <option value="MR">Mauritania</option>
                              <option value="MU">Mauritius</option>
                              <option value="YT">Mayotte</option>
                              <option value="MX">Mexico</option>
                              <option value="FM">Micronesia</option>
                              <option value="MD">Moldova</option>
                              <option value="MC">Monaco</option>
                              <option value="MN">Mongolia</option>
                              <option value="ME">Montenegro</option>
                              <option value="MS">Montserrat</option>
                              <option value="MA">Morocco</option>
                              <option value="MZ">Mozambique</option>
                              <option value="MM">Myanmar</option>
                              <option value="NA">Namibia</option>
                              <option value="NR">Nauru</option>
                              <option value="NP">Nepal</option>
                              <option value="NL">Netherlands</option>
                              <option value="AN">Netherlands Antilles</option>
                              <option value="NC">New Caledonia</option>
                              <option value="NZ">New Zealand</option>
                              <option value="NI">Nicaragua</option>
                              <option value="NE">Niger</option>
                              <option value="NG">Nigeria</option>
                              <option value="NU">Niue</option>
                              <option value="NF">Norfolk Island</option>
                              <option value="KP">North Korea</option>
                              <option value="NO">Norway</option>
                              <option value="OM">Oman</option>
                              <option value="PK">Pakistan</option>
                              <option value="PS">Palestinian Territory</option>
                              <option value="PA">Panama</option>
                              <option value="PG">Papua New Guinea</option>
                              <option value="PY">Paraguay</option>
                              <option value="PE">Peru</option>
                              <option value="PH">Philippines</option>
                              <option value="PN">Pitcairn</option>
                              <option value="PL">Poland</option>
                              <option value="PT">Portugal</option>
                              <option value="QA">Qatar</option>
                              <option value="IE">Republic of Ireland</option>
                              <option value="RE">Reunion</option>
                              <option value="RO">Romania</option>
                              <option value="RU">Russia</option>
                              <option value="RW">Rwanda</option>
                              <option value="ST">São Tomé and Príncipe</option>
                              <option value="BL">Saint Barthélemy</option>
                              <option value="SH">Saint Helena</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint Lucia</option>
                              <option value="SX">
                                Saint Martin (Dutch part)
                              </option>
                              <option value="MF">
                                Saint Martin (French part)
                              </option>
                              <option value="PM">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="VC">
                                Saint Vincent and the Grenadines
                              </option>
                              <option value="SM">San Marino</option>
                              <option value="SA">Saudi Arabia</option>
                              <option value="SN">Senegal</option>
                              <option value="RS">Serbia</option>
                              <option value="SC">Seychelles</option>
                              <option value="SL">Sierra Leone</option>
                              <option value="SG">Singapore</option>
                              <option value="SK">Slovakia</option>
                              <option value="SI">Slovenia</option>
                              <option value="SB">Solomon Islands</option>
                              <option value="SO">Somalia</option>
                              <option value="ZA">South Africa</option>
                              <option value="GS">
                                South Georgia/Sandwich Islands
                              </option>
                              <option value="KR">South Korea</option>
                              <option value="SS">South Sudan</option>
                              <option value="ES">Spain</option>
                              <option value="LK">Sri Lanka</option>
                              <option value="SD">Sudan</option>
                              <option value="SR">Suriname</option>
                              <option value="SJ">Svalbard and Jan Mayen</option>
                              <option value="SZ">Swaziland</option>
                              <option value="SE">Sweden</option>
                              <option value="CH">Switzerland</option>
                              <option value="SY">Syria</option>
                              <option value="TW">Taiwan</option>
                              <option value="TJ">Tajikistan</option>
                              <option value="TZ">Tanzania</option>
                              <option value="TH">Thailand</option>
                              <option value="TL">Timor-Leste</option>
                              <option value="TG">Togo</option>
                              <option value="TK">Tokelau</option>
                              <option value="TO">Tonga</option>
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
                              <option value="GB">United Kingdom (UK)</option>
                              <option value="US">USA (US)</option>
                              <option value="UY">Uruguay</option>
                              <option value="UZ">Uzbekistan</option>
                              <option value="VU">Vanuatu</option>
                              <option value="VA">Vatican</option>
                              <option value="VE">Venezuela</option>
                              <option value="VN">Vietnam</option>
                              <option value="WF">Wallis and Futuna</option>
                              <option value="EH">Western Sahara</option>
                              <option value="WS">Western Samoa</option>
                              <option value="YE">Yemen</option>
                              <option value="ZM">Zambia</option>
                              <option value="ZW">Zimbabwe</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            name="billing_address"
                            required=""
                            placeholder="Address *"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            type="text"
                            name="billing_address2"
                            required=""
                            placeholder="Address line2"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            required=""
                            type="text"
                            name="state"
                            placeholder="State / County *"
                          />
                        </div>
                        <div className="form-group col-lg-6">
                          <input
                            required=""
                            type="text"
                            name="city"
                            placeholder="City / Town *"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-lg-6">
                          <input
                            required=""
                            type="text"
                            name="zipcode"
                            placeholder="Postcode / ZIP *"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="border p-40 cart-totals ml-30 mb-50">
                <div className="d-flex align-items-end justify-content-between mb-30">
                  <h4>Your Order</h4>
                  <h6 className="text-muted">Subtotal</h6>
                </div>
                <div className="divider-2 mb-30"></div>
                <div className="table-responsive order_table checkout">
                  <table className="table no-border">
                    <tbody>
                      <tr>
                        <td className="image product-thumbnail">
                          <img src="assets/imgs/shop/product-1-1.jpg" alt="#" />
                        </td>
                        <td>
                          <h6 className="w-160 mb-5">
                            <Link
                              to="shop-product-full.html"
                              className="text-heading"
                            >
                              Yidarton Women Summer Blue
                            </Link>
                          </h6>
                          <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                              <div
                                className="product-rating"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                            <span className="font-small ml-5 text-muted">
                              {" "}
                              (4.0)
                            </span>
                          </div>
                        </td>
                        <td>
                          <h6 className="text-muted pl-20 pr-20">x 1</h6>
                        </td>
                        <td>
                          <h4 className="text-brand">$13.3</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="image product-thumbnail">
                          <img src="assets/imgs/shop/product-2-1.jpg" alt="#" />
                        </td>
                        <td>
                          <h6 className="w-160 mb-5">
                            <Link
                              to="shop-product-full.html"
                              className="text-heading"
                            >
                              Seeds of Change Organic Quinoa
                            </Link>
                          </h6>
                          <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                              <div
                                className="product-rating"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                            <span className="font-small ml-5 text-muted">
                              {" "}
                              (4.0)
                            </span>
                          </div>
                        </td>
                        <td>
                          <h6 className="text-muted pl-20 pr-20">x 1</h6>
                        </td>
                        <td>
                          <h4 className="text-brand">$15.0</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="image product-thumbnail">
                          <img src="assets/imgs/shop/product-3-1.jpg" alt="#" />
                        </td>
                        <td>
                          <h6 className="w-160 mb-5">
                            <Link
                              to="shop-product-full.html"
                              className="text-heading"
                            >
                              Angie’s Boomchickapop Sweet{" "}
                            </Link>
                          </h6>
                          <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                              <div
                                className="product-rating"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                            <span className="font-small ml-5 text-muted">
                              {" "}
                              (4.0)
                            </span>
                          </div>
                        </td>
                        <td>
                          <h6 className="text-muted pl-20 pr-20">x 1</h6>
                        </td>
                        <td>
                          <h4 className="text-brand">$17.2</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="payment ml-30">
                <h4 className="mb-30">Payment</h4>
                <div className="payment_option">
                  <div className="custome-radio">
                    <input
                      className="form-check-input"
                      required=""
                      type="radio"
                      name="payment_option"
                      id="exampleRadios3"
                      checked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios3"
                      data-bs-toggle="collapse"
                      data-target="#bankTranfer"
                      aria-controls="bankTranfer"
                    >
                      Direct Bank Transfer
                    </label>
                  </div>
                  <div className="custome-radio">
                    <input
                      className="form-check-input"
                      required=""
                      type="radio"
                      name="payment_option"
                      id="exampleRadios4"
                      checked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios4"
                      data-bs-toggle="collapse"
                      data-target="#checkPayment"
                      aria-controls="checkPayment"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  <div className="custome-radio">
                    <input
                      className="form-check-input"
                      required=""
                      type="radio"
                      name="payment_option"
                      id="exampleRadios5"
                      checked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios5"
                      data-bs-toggle="collapse"
                      data-target="#paypal"
                      aria-controls="paypal"
                    >
                      Online Getway
                    </label>
                  </div>
                </div>
                <div className="payment-logo d-flex">
                  <img
                    className="mr-15"
                    src="assets/imgs/theme/icons/payment-paypal.svg"
                    alt=""
                  />
                  <img
                    className="mr-15"
                    src="assets/imgs/theme/icons/payment-visa.svg"
                    alt=""
                  />
                  <img
                    className="mr-15"
                    src="assets/imgs/theme/icons/payment-master.svg"
                    alt=""
                  />
                  <img
                    src="assets/imgs/theme/icons/payment-zapper.svg"
                    alt=""
                  />
                </div>
                <Link to="#" className="btn btn-fill-out btn-block mt-30">
                  Place an Order<i className="fi-rs-sign-out ml-15"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="main">
      <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="position-relative newsletter-inner">
                                <div className="newsletter-content">
                                    <h2 className="mb-20">
                                        Stay home & get your daily <br />
                                        needs from our shop
                                    </h2>
                                    <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand">Nest Mart</span></p>
                                    <form className="form-subcriber d-flex">
                                        <input type="email" placeholder="Your emaill address" />
                                        <button className="btn" type="submit">Subscribe</button>
                                    </form>
                                </div>
                                <img src="assets/imgs/banner/banner-9.png" alt="newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <section className="featured section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                  <div className="banner-icon">
                    <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Best prices & offers</h3>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                  <div className="banner-icon">
                    <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Free delivery</h3>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                  <div className="banner-icon">
                    <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Great daily deal</h3>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                  <div className="banner-icon">
                    <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Wide assortment</h3>
                    <p>Mega Discounts</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                  <div className="banner-icon">
                    <img src="assets/imgs/theme/icons/icon-5.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Easy returns</h3>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                <div className="banner-left-icon d-flex align-items-center wow fadeIn  animated">
                  <div className="banner-icon">
                    <img src="assets/imgs/theme/icons/icon-6.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Safe delivery</h3>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding footer-mid" style={{textAlign: "center"}}>
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col">
                <div
                  className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0"
                >
                  <div className="logo mb-30">
                    <Link to="#" className="mb-15">
                      <img src="assets/imgs/theme/logo.svg" alt="logo" />
                    </Link>
                  </div>
                  <ul className="contact-infor">
                    {/* <li>
                      <img
                        src="assets/imgs/theme/icons/icon-location.svg"
                        alt=""
                      />
                      <strong>Address: </strong>
                      <span>
                        5171 W Campbell Ave undefined Kent, Utah 53127
                        UnitedStates
                      </span>
                    </li> */}
                    {/* <li>
                      <img
                        src="assets/imgs/theme/icons/icon-contact.svg"
                        alt=""
                      />
                      <strong>Call Us:</strong>
                      <span>(+91) - 540-025-124553</span>
                    </li> */}
                    <li>
                      <img
                        src="assets/imgs/theme/icons/icon-email-2.svg"
                        alt=""
                      />
                      <strong>Email:</strong>
                      <span>
                        <Link
                          to="http://wp.alithemes.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="5023313c35101e3523247e333f3d"
                        >
                          [email&#160;protected]
                        </Link>
                      </span>
                    </li>
                    <li>
                      <img
                        src="assets/imgs/theme/icons/icon-clock.svg"
                        alt=""
                      />
                      <strong>Hours:</strong>
                      <span>10:00 - 18:00, Mon - Sat</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="footer-link-widget col wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s"
              >
                <h4 className="widget-title">Company</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Delivery Information</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Support Center</Link>
                  </li>
                  <li>
                    <Link to="#">Careers</Link>
                  </li>
                </ul>
              </div>
              {/* <div
                className="footer-link-widget col wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="widget-title">Account</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <Link to="#">Sign In</Link>
                  </li>
                  <li>
                    <Link to="#">View Cart</Link>
                  </li>
                  <li>
                    <Link to="#">My Wishlist</Link>
                  </li>
                  <li>
                    <Link to="#">Track My Order</Link>
                  </li>
                  <li>
                    <Link to="#">Help Ticket</Link>
                  </li>
                  <li>
                    <Link to="#">Shipping Details</Link>
                  </li>
                  <li>
                    <Link to="#">Compare products</Link>
                  </li>
                </ul>
              </div> */}
              <div
                className="footer-link-widget col wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
              >
                <h4 className="widget-title">Corporate</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <Link to="#">Become a Vendor</Link>
                  </li>
                  <li>
                    <Link to="#">Affiliate Program</Link>
                  </li>
                  <li>
                    <Link to="#">Farm Business</Link>
                  </li>
                  <li>
                    <Link to="#">Farm Careers</Link>
                  </li>
                  <li>
                    <Link to="#">Our Suppliers</Link>
                  </li>
                  <li>
                    <Link to="#">Accessibility</Link>
                  </li>
                  <li>
                    <Link to="#">Promotions</Link>
                  </li>
                </ul>
              </div>
              {/* <div
                className="footer-link-widget col wow animate__animated animate__fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="widget-title">Popular</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <Link to="#">Milk &amp; Flavoured Milk</Link>
                  </li>
                  <li>
                    <Link to="#">Butter and Margarine</Link>
                  </li>
                  <li>
                    <Link to="#">Eggs Substitutes</Link>
                  </li>
                  <li>
                    <Link to="#">Marmalades</Link>
                  </li>
                  <li>
                    <Link to="#">Sour Cream and Dips</Link>
                  </li>
                  <li>
                    <Link to="#">Tea &amp; Kombucha</Link>
                  </li>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                </ul>
              </div> */}
              <div
                className="footer-link-widget widget-install-app col wow animate__animated animate__fadeInUp"
                data-wow-delay=".5s"
              >
                <h4 className="widget-title">Install App</h4>
                <p className="">From App Store or Google Play</p>
                <div className="download-app">
                  <Link to="#" className="hover-up mb-sm-2 mb-lg-0">
                    <img
                      className="active"
                      src="assets/imgs/theme/app-store.jpg"
                      alt=""
                    />
                  </Link>
                  <Link to="#" className="hover-up mb-sm-2">
                    <img src="assets/imgs/theme/google-play.jpg" alt="" />
                  </Link>
                </div>
                <p className="mb-20">Secured Payment Gateways</p>
                <img
                  className=""
                  src="assets/imgs/theme/payment-method.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <div className="container pb-30">
          <div className="row align-items-center">
            <div className="col-12 mb-30">
              <div className="footer-bottom"></div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <p className="font-sm mb-0">
                &copy; 2021, <strong className="text-brand">Nest</strong> - HTML
                Ecommerce Template
                <br />
                All rights reserved
              </p>
            </div>
            <div className="col-xl-4  col-lg-6 text-center d-none d-xl-block">
              <div className="hotline d-lg-inline-flex mr-30">
                <img
                  src="assets/imgs/theme/icons/phone-call.svg"
                  alt="hotline"
                />
                <p>
                  1900 - 6666<span>Working 8:00 - 22:00</span>
                </p>
              </div>
              <div className="hotline d-lg-inline-flex">
                <img
                  src="assets/imgs/theme/icons/phone-call.svg"
                  alt="hotline"
                />
                <p>
                  1900 - 8888<span>24/7 Support Center</span>
                </p>
              </div>
            </div>
            <div className="col-xl-4  col-lg-6  col-md-6 text-end d-none d-md-block">
              <div className="mobile-social-icon">
                <h6>Follow Us </h6>
                <Link to="#">
                  <img
                    src="assets/imgs/theme/icons/icon-facebook-white.svg"
                    alt=""
                  />
                </Link>
                <Link to="#">
                  <img
                    src="assets/imgs/theme/icons/icon-twitter-white.svg"
                    alt=""
                  />
                </Link>
                <Link to="#">
                  <img
                    src="assets/imgs/theme/icons/icon-instagram-white.svg"
                    alt=""
                  />
                </Link>
                <Link to="#">
                  <img
                    src="assets/imgs/theme/icons/icon-pinterest-white.svg"
                    alt=""
                  />
                </Link>
                <Link to="#">
                  <img
                    src="assets/imgs/theme/icons/icon-youtube-white.svg"
                    alt=""
                  />
                </Link>
              </div>
              <p className="font-sm">
                Up to 15% discount on your first subscribe
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Preloader Start --> */}
      {/* <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="text-center">
              <img src="assets/imgs/theme/loading.gif" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Checkout;
