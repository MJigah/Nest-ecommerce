import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { appendScript } from "../utils/appendScript";

function LocationPage() {
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
              <div className="logo logo-width-1 col-xl-7 col-lg-6">
                <Link to="/">
                  <img src="assets/imgs/theme/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="header-right col-xl-3 col-lg-3">
                <div className="header-action-right">
                  <div className="header-action-2">
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
                        <Link to="shop-wishlist.html">Shop – Wishlist</Link>
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
                        <Link to="vendor-details-2.html">Vendor Details 02</Link>
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
                            <Link to="shop-product-right.html">Women's Sets</Link>
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
                            <Link to="shop-product-right.html">Gaming Laptops</Link>
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
                        <Link to="blog-category-grid.html">Blog Category Grid</Link>
                      </li>
                      <li>
                        <Link to="blog-category-list.html">Blog Category List</Link>
                      </li>
                      <li>
                        <Link to="blog-category-big.html">Blog Category Big</Link>
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
                            <Link to="blog-post-fullwidth.html">No Sidebar</Link>
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
                        <Link to="page-purchase-guide.html">Purchase Guide</Link>
                      </li>
                      <li>
                        <Link to="page-privacy-policy.html">Privacy Policy</Link>
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
      <main className="main pages mb-80">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> [Location Name]
            </div>
          </div>
        </div>
        <div className="page-content pt-50">
          <div className="container">
            <div className="archive-header-2 text-center">
              <h1 className="display-2 mb-50">[Location Name]</h1>
              <div className="row">
                <div className="col-lg-5 mx-auto">
                  <div className="sidebar-widget-2 widget_search mb-50">
                    <div className="search-form">
                      <form action="#">
                        <input type="text" placeholder="Search your Vendor" />
                        <button type="submit">
                          <i className="fi-rs-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-50">
              <div className="col-12 col-lg-8 mx-auto">
                <div className="shop-product-fillter">
                  <div className="totall-product">
                    <p>
                      We have <strong className="text-brand">780</strong>{" "}
                      Supermarket now
                    </p>
                  </div>
                  <div className="sort-by-product-area">
                    <div className="sort-by-cover mr-10">
                      <div className="sort-by-product-wrap">
                        <div className="sort-by">
                          <span>
                            <i className="fi-rs-apps"></i>Filter:
                          </span>
                        </div>
                        <div className="sort-by-dropdown-wrap">
                          <span>
                            Supermarket{" "}
                            <i className="fi-rs-angle-small-down"></i>
                          </span>
                        </div>
                      </div>
                      <div className="sort-by-dropdown">
                        <ul>
                          <li>
                            <Link className="active" to="#">
                              Supermarket
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Grocery</Link>
                          </li>
                          <li>
                            <Link to="#">Fruits & Vegetables</Link>
                          </li>
                          <li>
                            <Link to="#">All</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="sort-by-cover">
                      <div className="sort-by-product-wrap">
                        <div className="sort-by">
                          <span>
                            <i className="fi-rs-apps-sort"></i>Sort by:
                          </span>
                        </div>
                        <div className="sort-by-dropdown-wrap">
                          <span>
                            Location <i className="fi-rs-angle-small-down"></i>
                          </span>
                        </div>
                      </div>
                      <div className="sort-by-dropdown">
                        <ul>
                          <li>
                            <Link className="active" to="#">
                              Location
                            </Link>
                          </li>
                          <li>
                            <Link to="#">Highest Rating</Link>
                          </li>
                          <li>
                            <Link to="#">Avg. Rating</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row vendor-grid">
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-1.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Mall</span>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Nature Food</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-7.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="best">Preferred</span>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2019</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Country Crock</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          18 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Mall</span>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Hambger Hel</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          63 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-8.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">Mall</span>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Totino's Pizza</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}

              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-3.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Maruchan Ramen</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}

              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-9.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">USA Noodle Soup</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-4.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Red Baron Pizza</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-10.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Mrs. Smith's Pie</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-5.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Dove Promises</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-11.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Mrs. Dash</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-6.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Lindt Grocery A1</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-12.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Snyder's-Lance</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}

              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-13.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Dreyer's/Edy's</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-14.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Wonderful</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-15.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Almonds</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
              <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                <div className="vendor-wrap mb-40">
                  <div className="vendor-img-action-wrap">
                    <div className="vendor-img">
                      <Link to="/vendor">
                        <img
                          className="default-img"
                          src="assets/imgs/vendor/vendor-1.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="vendor-content-wrap">
                    <div className="d-flex justify-content-between align-items-end mb-30">
                      <div>
                        <div className="product-category">
                          <span className="text-muted">Since 2012</span>
                        </div>
                        <h4 className="mb-5">
                          <Link to="/vendor">Pistachios</Link>
                        </h4>

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
                      </div>

                      <div className="mb-10">
                        <span className="font-small total-product">
                          380 products
                        </span>
                      </div>
                    </div>

                    <div className="vendor-info mb-30">
                      <ul className="contact-infor text-muted">
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-location.svg"
                            alt=""
                          />
                          <strong>Address: </strong>
                          <span>
                            5171 W Campbell Ave undefined Kent, Utah 53127
                            United States
                          </span>
                        </li>
                        <li>
                          <img
                            src="assets/imgs/theme/icons/icon-contact.svg"
                            alt=""
                          />
                          <strong>Call Us:</strong>
                          <span>(+91) - 540-025-124553</span>
                        </li>
                      </ul>
                    </div>
                    <Link to="/vendor" className="btn btn-xs">
                      Visit Store <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!--end vendor card--> */}
            </div>

            <div className="pagination-area mt-20 mb-20">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <i className="fi-rs-arrow-small-left"></i>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link dot" to="#">
                      ...
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      6
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <footer className="main">
        <section className="newsletter mb-15">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="position-relative newsletter-inner">
                  <div className="newsletter-content">
                    <h2 className="mb-20">
                      Stay home & get your daily <br />
                      needs from our shop
                    </h2>
                    <p className="mb-45">
                      Start You'r Daily Shopping with
                      <span className="text-brand">Nest Mart</span>
                    </p>
                    <form method="post">
                      <div className="form-group">
                        <input
                          type="text"
                          required=""
                          name="firstname"
                          placeholder="Firstname"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          required=""
                          name="lastname"
                          placeholder="Lastname"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          required=""
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                        />
                      </div>
                      <button className="btn" type="submit">
                        Subscribe
                      </button>
                    </form>
                  </div>
                  <img
                    src="assets/imgs/banner/banner-13.png"
                    alt="newsletter"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                <div className="banner-left-icon d-flex align-items-center">
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
                <div className="banner-left-icon d-flex align-items-center">
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
                <div className="banner-left-icon d-flex align-items-center">
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
                <div className="banner-left-icon d-flex align-items-center">
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
                <div className="banner-left-icon d-flex align-items-center">
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
                <div className="banner-left-icon d-flex align-items-center">
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
        <section className="section-padding footer-mid">
          <div className="container pt-15 pb-20">
            <div className="row">
              <div className="col">
                <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                  <div className="logo mb-30">
                    <Link to="index-2.html" className="mb-15">
                      <img src="assets/imgs/theme/logo.svg" alt="logo" />
                    </Link>
                    <p className="font-lg text-heading">
                      Awesome grocery store website template
                    </p>
                  </div>
                  <ul className="contact-infor">
                    <li>
                      <img
                        src="assets/imgs/theme/icons/icon-location.svg"
                        alt=""
                      />
                      <strong>Address: </strong>
                      <span>
                        5171 W Campbell Ave undefined Kent, Utah 53127 United
                        States
                      </span>
                    </li>
                    <li>
                      <img
                        src="assets/imgs/theme/icons/icon-contact.svg"
                        alt=""
                      />
                      <strong>Call Us:</strong>
                      <span>(+91) - 540-025-124553</span>
                    </li>
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
                          data-cfemail="a4d7c5c8c1e4eac1d7d08ac7cbc9"
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
              <div className="footer-link-widget col">
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
              <div className="footer-link-widget col">
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
              </div>
              <div className="footer-link-widget col">
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
              <div className="footer-link-widget col">
                <h4 className="widget-title">Popular</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                  <li>
                    <Link to="#">Milk & Flavoured Milk</Link>
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
                    <Link to="#">Tea & Kombucha</Link>
                  </li>
                  <li>
                    <Link to="#">Cheese</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-link-widget widget-install-app col">
                <h4 className="widget-title">Install App</h4>
                <p className="wow fadeIn animated">
                  From App Store or Google Play
                </p>
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
                  className="wow fadeIn animated"
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
                Ecommerce Template <br />
                All rights reserved
              </p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
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
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
              <div className="mobile-social-icon">
                <h6>Follow Us</h6>
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

export default LocationPage;
