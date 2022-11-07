import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { appendScript } from "../utils/appendScript";

function Product() {
  const reloadPage = () => {
    window.location.reload(false);
  };
  useEffect(() => {
    appendScript("../assets/js/main8c94.js");
  }, []);

  return (
    <>
      <div
        className="modal fade custom-modal"
        id="quickViewModal"
        tabindex="-1"
        aria-labelledby="quickViewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                  <div className="detail-gallery">
                    <span className="zoom-icon">
                      <i className="fi-rs-search"></i>
                    </span>
                    {/* <!-- MAIN SLIDES --> */}
                    <div className="product-image-slider">
                      <figure className="border-radius-10">
                        <img
                          src="assets/imgs/shop/product-16-2.jpg"
                          alt="product_image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="assets/imgs/shop/product-16-1.jpg"
                          alt="product_image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="assets/imgs/shop/product-16-3.jpg"
                          alt="product_image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="assets/imgs/shop/product-16-4.jpg"
                          alt="product_image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="assets/imgs/shop/product-16-5.jpg"
                          alt="product_image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="assets/imgs/shop/product-16-6.jpg"
                          alt="product_image"
                        />
                      </figure>
                      <figure className="border-radius-10">
                        <img
                          src="assets/imgs/shop/product-16-7.jpg"
                          alt="product_image"
                        />
                      </figure>
                    </div>
                    {/* <!-- THUMBNAILS --> */}
                    <div className="slider-nav-thumbnails">
                      <div>
                        <img
                          src="assets/imgs/shop/thumbnail-3.jpg"
                          alt="product_image"
                        />
                      </div>
                      <div>
                        <img
                          src="assets/imgs/shop/thumbnail-4.jpg"
                          alt="product_image"
                        />
                      </div>
                      <div>
                        <img
                          src="assets/imgs/shop/thumbnail-5.jpg"
                          alt="product_image"
                        />
                      </div>
                      <div>
                        <img
                          src="assets/imgs/shop/thumbnail-6.jpg"
                          alt="product_image"
                        />
                      </div>
                      <div>
                        <img
                          src="assets/imgs/shop/thumbnail-7.jpg"
                          alt="product_image"
                        />
                      </div>
                      <div>
                        <img
                          src="assets/imgs/shop/thumbnail-8.jpg"
                          alt="product_image"
                        />
                      </div>
                      <div>
                        <img
                          src="assets/imgs/shop/thumbnail-9.jpg"
                          alt="product_image"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Gallery --> */}
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div className="detail-info pr-30 pl-30">
                    <span className="stock-status out-stock"> Sale Off </span>
                    <h3 className="title-detail">
                      <Link to="/" className="text-heading">
                        Seeds of Change Organic Quinoa, Brown
                      </Link>
                    </h3>
                    <div className="product-detail-rating">
                      <div className="product-rate-cover text-end">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          (32 reviews)
                        </span>
                      </div>
                    </div>
                    <div className="clearfix product-price-cover">
                      <div className="product-price primary-color float-left">
                        <span className="current-price text-brand">$38</span>
                        <span>
                          <span className="save-price font-md color3 ml-15">
                            26% Off
                          </span>
                          <span className="old-price font-md ml-15">$52</span>
                        </span>
                      </div>
                    </div>
                    <div className="detail-extralink mb-30">
                      <div className="detail-qty border radius">
                        <Link to="#" className="qty-down">
                          <i className="fi-rs-angle-small-down"></i>
                        </Link>
                        <span className="qty-val">1</span>
                        <Link to="#" className="qty-up">
                          <i className="fi-rs-angle-small-up"></i>
                        </Link>
                      </div>
                      <div className="product-extra-link2">
                        <button
                          type="submit"
                          className="button button-add-to-cart"
                        >
                          <i className="fi-rs-shopping-cart"></i>Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="font-xs">
                      <ul>
                        <li className="mb-5">
                          Vendor: <span className="text-brand">Nest</span>
                        </li>
                        <li className="mb-5">
                          MFG:<span className="text-brand"> Jun 4.2021</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Detail Info --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                              <Link to="/">
                                <img
                                  alt="Nest"
                                  src="assets/imgs/shop/thumbnail-3.jpg"
                                />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link to="/">Daisy Casual Bag</Link>
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
                              <Link to="/">
                                <img
                                  alt="Nest"
                                  src="assets/imgs/shop/thumbnail-2.jpg"
                                />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link to="/">Corduroy Shirts</Link>
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
                            <Link to="/checkout">Checkout</Link>
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
                            <Link to="/">Product – Right Sidebar</Link>
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
                        <Link to="/">Shop – Wishlist</Link>
                      </li>
                      <li>
                        <Link to="/cart">Shop – Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Shop – Checkout</Link>
                      </li>
                      <li>
                        <Link to="/cart">Shop – Compare</Link>
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
                            <Link to="/">Dresses</Link>
                          </li>
                          <li>
                            <Link to="/">Blouses & Shirts</Link>
                          </li>
                          <li>
                            <Link to="/">Hoodies & Sweatshirts</Link>
                          </li>
                          <li>
                            <Link to="/">Women's Sets</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Men's Fashion</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/">Jackets</Link>
                          </li>
                          <li>
                            <Link to="/">Casual Faux Leather</Link>
                          </li>
                          <li>
                            <Link to="/">Genuine Leather</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Technology</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/">Gaming Laptops</Link>
                          </li>
                          <li>
                            <Link to="/">Ultraslim Laptops</Link>
                          </li>
                          <li>
                            <Link to="/">Tablets</Link>
                          </li>
                          <li>
                            <Link to="/">Laptop Accessories</Link>
                          </li>
                          <li>
                            <Link to="/">Tablet Accessories</Link>
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
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <span></span> <Link to="/vendor">[Vendor Name]</Link>
              <span></span> [Product Name]
            </div>
          </div>
        </div>
        <div className="container mb-30">
          <div className="row">
            <div className="col-xl-11 col-lg-12 m-auto">
              <div className="row">
                <div className="col-xl-9">
                  <div className="product-detail accordion-detail">
                    <div className="row mb-50 mt-30">
                      <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                        <div className="detail-gallery">
                          <span className="zoom-icon">
                            <i className="fi-rs-search"></i>
                          </span>
                          {/* <!-- MAIN SLIDES --> */}
                          <div className="product-image-slider">
                            <figure className="border-radius-10">
                              <img
                                src="assets/imgs/shop/product-16-2.jpg"
                                alt="product_image"
                              />
                            </figure>
                            <figure className="border-radius-10">
                              <img
                                src="assets/imgs/shop/product-16-1.jpg"
                                alt="product_image"
                              />
                            </figure>
                            <figure className="border-radius-10">
                              <img
                                src="assets/imgs/shop/product-16-3.jpg"
                                alt="product_image"
                              />
                            </figure>
                            <figure className="border-radius-10">
                              <img
                                src="assets/imgs/shop/product-16-4.jpg"
                                alt="product_image"
                              />
                            </figure>
                            <figure className="border-radius-10">
                              <img
                                src="assets/imgs/shop/product-16-5.jpg"
                                alt="product_image"
                              />
                            </figure>
                            <figure className="border-radius-10">
                              <img
                                src="assets/imgs/shop/product-16-6.jpg"
                                alt="product_image"
                              />
                            </figure>
                            <figure className="border-radius-10">
                              <img
                                src="assets/imgs/shop/product-16-7.jpg"
                                alt="product_image"
                              />
                            </figure>
                          </div>
                          {/* <!-- THUMBNAILS --> */}
                          <div className="slider-nav-thumbnails">
                            <div>
                              <img
                                src="assets/imgs/shop/thumbnail-3.jpg"
                                alt="product_image"
                              />
                            </div>
                            <div>
                              <img
                                src="assets/imgs/shop/thumbnail-4.jpg"
                                alt="product_image"
                              />
                            </div>
                            <div>
                              <img
                                src="assets/imgs/shop/thumbnail-5.jpg"
                                alt="product_image"
                              />
                            </div>
                            <div>
                              <img
                                src="assets/imgs/shop/thumbnail-6.jpg"
                                alt="product_image"
                              />
                            </div>
                            <div>
                              <img
                                src="assets/imgs/shop/thumbnail-7.jpg"
                                alt="product_image"
                              />
                            </div>
                            <div>
                              <img
                                src="assets/imgs/shop/thumbnail-8.jpg"
                                alt="product_image"
                              />
                            </div>
                            <div>
                              <img
                                src="assets/imgs/shop/thumbnail-9.jpg"
                                alt="product_image"
                              />
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Gallery --> */}
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="detail-info pr-30 pl-30">
                          <span className="stock-status out-stock">
                            {" "}
                            Sale Off{" "}
                          </span>
                          <h2 className="title-detail">
                            Seeds of Change Organic Quinoa, Brown
                          </h2>
                          <div className="product-detail-rating">
                            <div className="product-rate-cover text-end">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "90%" }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                (32 reviews)
                              </span>
                            </div>
                          </div>
                          <div className="clearfix product-price-cover">
                            <div className="product-price primary-color float-left">
                              <span className="current-price text-brand">
                                $38
                              </span>
                              <span>
                                <span className="save-price font-md color3 ml-15">
                                  26% Off
                                </span>
                                <span className="old-price font-md ml-15">
                                  $52
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="short-desc mb-30">
                            <p className="font-lg">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Aliquam rem officia, corrupti
                              reiciendis minima nisi modi, quasi, odio minus
                              dolore impedit fuga eum eligendi.
                            </p>
                          </div>
                          <div className="attr-detail attr-size mb-30">
                            <strong className="mr-10">Size / Weight: </strong>
                            <ul className="list-filter size-filter font-small">
                              <li>
                                <Link to="#">50g</Link>
                              </li>
                              <li className="active">
                                <Link to="#">60g</Link>
                              </li>
                              <li>
                                <Link to="#">80g</Link>
                              </li>
                              <li>
                                <Link to="#">100g</Link>
                              </li>
                              <li>
                                <Link to="#">150g</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="detail-extralink mb-50">
                            <div className="detail-qty border radius">
                              <Link to="#" className="qty-down">
                                <i className="fi-rs-angle-small-down"></i>
                              </Link>
                              <span className="qty-val">1</span>
                              <Link to="#" className="qty-up">
                                <i className="fi-rs-angle-small-up"></i>
                              </Link>
                            </div>
                            <div className="product-extra-link2">
                              <button
                                type="submit"
                                className="button button-add-to-cart"
                              >
                                <i className="fi-rs-shopping-cart"></i>Add to
                                cart
                              </button>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn hover-up"
                                to="/"
                              >
                                <i className="fi-rs-heart"></i>
                              </Link>
                              <Link
                                aria-label="Compare"
                                className="action-btn hover-up"
                                to="/cart"
                              >
                                <i className="fi-rs-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="font-xs">
                            <ul className="mr-50 float-start">
                              <li className="mb-5">
                                Type:{" "}
                                <span className="text-brand">Organic</span>
                              </li>
                              <li className="mb-5">
                                MFG:
                                <span className="text-brand"> Jun 4.2021</span>
                              </li>
                              <li>
                                LIFE:{" "}
                                <span className="text-brand">70 days</span>
                              </li>
                            </ul>
                            <ul className="float-start">
                              <li className="mb-5">
                                SKU: <Link to="#">FWM15VKT</Link>
                              </li>
                              <li className="mb-5">
                                Tags:{" "}
                                <Link to="#" rel="tag">
                                  Snack
                                </Link>
                                ,
                                <Link to="#" rel="tag">
                                  Organic
                                </Link>
                                ,
                                <Link to="#" rel="tag">
                                  Brown
                                </Link>
                              </li>
                              <li>
                                Stock:
                                <span className="in-stock text-brand ml-5">
                                  8 Items In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* <!-- Detail Info --> */}
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="tab-style3">
                        <ul className="nav nav-tabs text-uppercase">
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              id="Description-tab"
                              data-bs-toggle="tab"
                              to="#Description"
                            >
                              Description
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              id="Additional-info-tab"
                              data-bs-toggle="tab"
                              to="#Additional-info"
                            >
                              Additional info
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              id="Vendor-info-tab"
                              data-bs-toggle="tab"
                              to="#Vendor-info"
                            >
                              Vendor
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              id="Reviews-tab"
                              data-bs-toggle="tab"
                              to="#Reviews"
                            >
                              Reviews (3)
                            </Link>
                          </li>
                        </ul>
                        <div className="tab-content shop_info_tab entry-main-content">
                          <div
                            className="tab-pane fade show active"
                            id="Description"
                          >
                            <div className="">
                              <p>
                                Uninhibited carnally hired played in whimpered
                                dear gorilla koala depending and much yikes off
                                far quetzal goodness and from for grimaced
                                goodness unaccountably and meadowlark near
                                unblushingly crucial scallop tightly neurotic
                                hungrily some and dear furiously this apart.
                              </p>
                              <p>
                                Spluttered narrowly yikes left moth in yikes
                                bowed this that grizzly much hello on spoon-fed
                                that alas rethought much decently richly and wow
                                against the frequent fluidly at formidable
                                acceptably flapped besides and much circa far
                                over the bucolically hey precarious goldfinch
                                mastodon goodness gnashed a jellyfish and one
                                however because.
                              </p>
                              <ul className="product-more-infor mt-30">
                                <li>
                                  <span>Type Of Packing</span> Bottle
                                </li>
                                <li>
                                  <span>Color</span> Green, Pink, Powder Blue,
                                  Purple
                                </li>
                                <li>
                                  <span>Quantity Per Case</span> 100ml
                                </li>
                                <li>
                                  <span>Ethyl Alcohol</span> 70%
                                </li>
                                <li>
                                  <span>Piece In One</span> Carton
                                </li>
                              </ul>
                              <hr className="wp-block-separator is-style-dots" />
                              <p>
                                Laconic overheard dear woodchuck wow this
                                outrageously taut beaver hey hello far
                                meadowlark imitatively egregiously hugged that
                                yikes minimally unanimous pouted flirtatiously
                                as beaver beheld above forward energetic across
                                this jeepers beneficently cockily less a the
                                raucously that magic upheld far so the this
                                where crud then below after jeez enchanting
                                drunkenly more much wow callously irrespective
                                limpet.
                              </p>
                              <h4 className="mt-30">Packaging & Delivery</h4>
                              <hr className="wp-block-separator is-style-wide" />
                              <p>
                                Less lion goodness that euphemistically robin
                                expeditiously bluebird smugly scratched far
                                while thus cackled sheepishly rigid after due
                                one assenting regarding censorious while
                                occasional or this more crane went more as this
                                less much amid overhung anathematic because much
                                held one exuberantly sheep goodness so where rat
                                wry well concomitantly.
                              </p>
                              <p>
                                Scallop or far crud plain remarkably far by thus
                                far iguana lewd precociously and and less
                                rattlesnake contrary caustic wow this near alas
                                and next and pled the yikes articulate about as
                                less cackled dalmatian in much less well jeering
                                for the thanks blindly sentimental whimpered
                                less across objectively fanciful grimaced wildly
                                some wow and rose jeepers outgrew lugubrious
                                luridly irrationally attractively dachshund.
                              </p>
                              <h4 className="mt-30">Suggested Use</h4>
                              <ul className="product-more-infor mt-30">
                                <li>Refrigeration not necessary.</li>
                                <li>Stir before serving</li>
                              </ul>
                              <h4 className="mt-30">Other Ingredients</h4>
                              <ul className="product-more-infor mt-30">
                                <li>
                                  Organic raw pecans, organic raw cashews.
                                </li>
                                <li>
                                  This butter was produced using a LTG (Low
                                  Temperature Grinding) process
                                </li>
                                <li>
                                  Made in machinery that processes tree nuts but
                                  does not process peanuts, gluten, dairy or soy
                                </li>
                              </ul>
                              <h4 className="mt-30">Warnings</h4>
                              <ul className="product-more-infor mt-30">
                                <li>
                                  Oil separation occurs naturally. May contain
                                  pieces of shell.
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="Additional-info">
                            <table className="font-md">
                              <tbody>
                                <tr className="stand-up">
                                  <th>Stand Up</th>
                                  <td>
                                    <p>
                                      35″L x 24″W x 37-45″H(front to back wheel)
                                    </p>
                                  </td>
                                </tr>
                                <tr className="folded-wo-wheels">
                                  <th>Folded (w/o wheels)</th>
                                  <td>
                                    <p>32.5″L x 18.5″W x 16.5″H</p>
                                  </td>
                                </tr>
                                <tr className="folded-w-wheels">
                                  <th>Folded (w/ wheels)</th>
                                  <td>
                                    <p>32.5″L x 24″W x 18.5″H</p>
                                  </td>
                                </tr>
                                <tr className="door-pass-through">
                                  <th>Door Pass Through</th>
                                  <td>
                                    <p>24</p>
                                  </td>
                                </tr>
                                <tr className="frame">
                                  <th>Frame</th>
                                  <td>
                                    <p>Aluminum</p>
                                  </td>
                                </tr>
                                <tr className="weight-wo-wheels">
                                  <th>Weight (w/o wheels)</th>
                                  <td>
                                    <p>20 LBS</p>
                                  </td>
                                </tr>
                                <tr className="weight-capacity">
                                  <th>Weight Capacity</th>
                                  <td>
                                    <p>60 LBS</p>
                                  </td>
                                </tr>
                                <tr className="width">
                                  <th>Width</th>
                                  <td>
                                    <p>24″</p>
                                  </td>
                                </tr>
                                <tr className="handle-height-ground-to-handle">
                                  <th>Handle height (ground to handle)</th>
                                  <td>
                                    <p>37-45″</p>
                                  </td>
                                </tr>
                                <tr className="wheels">
                                  <th>Wheels</th>
                                  <td>
                                    <p>12″ air / wide track slick tread</p>
                                  </td>
                                </tr>
                                <tr className="seat-back-height">
                                  <th>Seat back height</th>
                                  <td>
                                    <p>21.5″</p>
                                  </td>
                                </tr>
                                <tr className="head-room-inside-canopy">
                                  <th>Head room (inside canopy)</th>
                                  <td>
                                    <p>25″</p>
                                  </td>
                                </tr>
                                <tr className="pa_color">
                                  <th>Color</th>
                                  <td>
                                    <p>Black, Blue, Red, White</p>
                                  </td>
                                </tr>
                                <tr className="pa_size">
                                  <th>Size</th>
                                  <td>
                                    <p>M, S</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane fade" id="Vendor-info">
                            <div className="vendor-logo d-flex mb-30">
                              <img
                                src="assets/imgs/vendor/vendor-18.svg"
                                alt=""
                              />
                              <div className="vendor-name ml-15">
                                <h6>
                                  <Link to="vendor-details-2.html">
                                    Noodles Co.
                                  </Link>
                                </h6>
                                <div className="product-rate-cover text-end">
                                  <div className="product-rate d-inline-block">
                                    <div
                                      className="product-rating"
                                      style={{ width: "90%" }}
                                    ></div>
                                  </div>
                                  <span className="font-small ml-5 text-muted">
                                    (32 reviews)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <ul className="contact-infor mb-50">
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
                                <strong>Contact Seller:</strong>
                                <span>(+91) - 540-025-553</span>
                              </li>
                            </ul>
                            <div className="d-flex mb-55">
                              <div className="mr-30">
                                <p className="text-brand font-xs">Rating</p>
                                <h4 className="mb-0">92%</h4>
                              </div>
                              <div className="mr-30">
                                <p className="text-brand font-xs">
                                  Ship on time
                                </p>
                                <h4 className="mb-0">100%</h4>
                              </div>
                              <div>
                                <p className="text-brand font-xs">
                                  Chat response
                                </p>
                                <h4 className="mb-0">89%</h4>
                              </div>
                            </div>
                            <p>
                              Noodles & Company is an American fast-casual
                              restaurant that offers international and American
                              noodle dishes and pasta in addition to soups and
                              salads. Noodles & Company was founded in 1995 by
                              Aaron Kennedy and is headquartered in Broomfield,
                              Colorado. The company went public in 2013 and
                              recorded a $457 million revenue in 2017.In late
                              2018, there were 460 Noodles & Company locations
                              across 29 states and Washington, D.C.
                            </p>
                          </div>
                          <div className="tab-pane fade" id="Reviews">
                            {/* <!--Comments--> */}
                            <div className="comments-area">
                              <div className="row">
                                <div className="col-lg-8">
                                  <h4 className="mb-30">
                                    Customer questions & answers
                                  </h4>
                                  <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex mb-30">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img
                                            src="assets/imgs/blog/author-2.png"
                                            alt=""
                                          />
                                          <Link
                                            to="#"
                                            className="font-heading text-brand"
                                          >
                                            Sienna
                                          </Link>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2021 at 3:12 pm
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "100%" }}
                                              ></div>
                                            </div>
                                          </div>
                                          <p className="mb-10">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?
                                            <Link to="#" className="reply">
                                              Reply
                                            </Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img
                                            src="assets/imgs/blog/author-3.png"
                                            alt=""
                                          />
                                          <Link
                                            to="#"
                                            className="font-heading text-brand"
                                          >
                                            Brenna
                                          </Link>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2021 at 3:12 pm
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "80%" }}
                                              ></div>
                                            </div>
                                          </div>
                                          <p className="mb-10">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?
                                            <Link to="#" className="reply">
                                              Reply
                                            </Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="single-comment justify-content-between d-flex">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img
                                            src="assets/imgs/blog/author-4.png"
                                            alt=""
                                          />
                                          <Link
                                            to="#"
                                            className="font-heading text-brand"
                                          >
                                            Gemma
                                          </Link>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">
                                                December 4, 2021 at 3:12 pm
                                              </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div
                                                className="product-rating"
                                                style={{ width: "80%" }}
                                              ></div>
                                            </div>
                                          </div>
                                          <p className="mb-10">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Delectus, suscipit exercitationem
                                            accusantium obcaecati quos voluptate
                                            nesciunt facilis itaque modi commodi
                                            dignissimos sequi repudiandae minus
                                            ab deleniti totam officia id
                                            incidunt?
                                            <Link to="#" className="reply">
                                              Reply
                                            </Link>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <h4 className="mb-30">Customer reviews</h4>
                                  <div className="d-flex mb-30">
                                    <div className="product-rate d-inline-block mr-15">
                                      <div
                                        className="product-rating"
                                        style={{ width: "90%" }}
                                      ></div>
                                    </div>
                                    <h6>4.8 out of 5</h6>
                                  </div>
                                  <div className="progress">
                                    <span>5 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow="50"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      50%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>4 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      25%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>3 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "45%" }}
                                      aria-valuenow="45"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      45%
                                    </div>
                                  </div>
                                  <div className="progress">
                                    <span>2 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuenow="65"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      65%
                                    </div>
                                  </div>
                                  <div className="progress mb-30">
                                    <span>1 star</span>
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "85%" }}
                                      aria-valuenow="85"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    >
                                      85%
                                    </div>
                                  </div>
                                  <Link to="#" className="font-xs text-muted">
                                    How are ratings calculated?
                                  </Link>
                                </div>
                              </div>
                            </div>
                            {/* <!--comment form--> */}
                            <div className="comment-form">
                              <h4 className="mb-15">Add a review</h4>
                              <div className="product-rate d-inline-block mb-30"></div>
                              <div className="row">
                                <div className="col-lg-8 col-md-12">
                                  <form
                                    className="form-contact comment_form"
                                    action="#"
                                    id="commentForm"
                                  >
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="form-group">
                                          <textarea
                                            className="form-control w-100"
                                            name="comment"
                                            id="comment"
                                            cols="30"
                                            rows="9"
                                            placeholder="Write Comment"
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            name="website"
                                            id="website"
                                            type="text"
                                            placeholder="Website"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <button
                                        type="submit"
                                        className="button button-contactForm"
                                      >
                                        Submit Review
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-60">
                      <div className="col-12">
                        <h2 className="section-title style-1 mb-30">
                          Related products
                        </h2>
                      </div>
                      <div className="col-12">
                        <div className="row related-products">
                          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                            <div className="product-cart-wrap hover-up">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <Link to="/" tabindex="0">
                                    <img
                                      className="default-img"
                                      src="assets/imgs/shop/product-2-1.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="assets/imgs/shop/product-2-2.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-action-1">
                                  <Link
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-search"></i>
                                  </Link>
                                  <Link
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    to="/"
                                    tabindex="0"
                                  >
                                    <i className="fi-rs-heart"></i>
                                  </Link>
                                  <Link
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    to="/cart"
                                    tabindex="0"
                                  >
                                    <i className="fi-rs-shuffle"></i>
                                  </Link>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="hot">Hot</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <h2>
                                  <Link to="/" tabindex="0">
                                    Ulstra Bass Headphone
                                  </Link>
                                </h2>
                                <div className="rating-result" title="90%">
                                  <span> </span>
                                </div>
                                <div className="product-price">
                                  <span>$238.85 </span>
                                  <span className="old-price">$245.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                            <div className="product-cart-wrap hover-up">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <Link to="/" tabindex="0">
                                    <img
                                      className="default-img"
                                      src="assets/imgs/shop/product-3-1.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="assets/imgs/shop/product-4-2.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-action-1">
                                  <Link
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-search"></i>
                                  </Link>
                                  <Link
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    to="/"
                                    tabindex="0"
                                  >
                                    <i className="fi-rs-heart"></i>
                                  </Link>
                                  <Link
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    to="/cart"
                                    tabindex="0"
                                  >
                                    <i className="fi-rs-shuffle"></i>
                                  </Link>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="sale">-12%</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <h2>
                                  <Link to="/product" tabindex="0">
                                    Smart Bluetooth Speaker
                                  </Link>
                                </h2>
                                <div className="rating-result" title="90%">
                                  <span> </span>
                                </div>
                                <div className="product-price">
                                  <span>$138.85 </span>
                                  <span className="old-price">$145.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                            <div className="product-cart-wrap hover-up">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <Link to="/" tabindex="0">
                                    <img
                                      className="default-img"
                                      src="assets/imgs/shop/product-4-1.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="assets/imgs/shop/product-4-2.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-action-1">
                                  <Link
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-search"></i>
                                  </Link>
                                  <Link
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    to="/"
                                    tabindex="0"
                                  >
                                    <i className="fi-rs-heart"></i>
                                  </Link>
                                  <Link
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    to="/cart"
                                    tabindex="0"
                                  >
                                    <i className="fi-rs-shuffle"></i>
                                  </Link>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="new">New</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <h2>
                                  <Link to="/product" tabindex="0">
                                    HomeSpeak 12UEA Goole
                                  </Link>
                                </h2>
                                <div className="rating-result" title="90%">
                                  <span> </span>
                                </div>
                                <div className="product-price">
                                  <span>$738.85 </span>
                                  <span className="old-price">$1245.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-12 col-sm-6 d-lg-block d-none">
                            <div className="product-cart-wrap hover-up mb-0">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <Link to="/" tabindex="0">
                                    <img
                                      className="default-img"
                                      src="assets/imgs/shop/product-5-1.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="assets/imgs/shop/product-3-2.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div className="product-action-1">
                                  <Link
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-search"></i>
                                  </Link>
                                  <Link
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    to="/"
                                    tabindex="0"
                                  >
                                    <i className="fi-rs-heart"></i>
                                  </Link>
                                  <Link
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    to="/cart"
                                    tabindex="0"
                                  >
                                    <i className="fi-rs-shuffle"></i>
                                  </Link>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="hot">Hot</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <h2>
                                  <Link to="/product" tabindex="0">
                                    Dadua Camera 4K 2021EF
                                  </Link>
                                </h2>
                                <div className="rating-result" title="90%">
                                  <span> </span>
                                </div>
                                <div className="product-price">
                                  <span>$89.8 </span>
                                  <span className="old-price">$98.8</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 primary-sidebar sticky-sidebar mt-30">
                  {/* <!-- Product sidebar Widget --> */}
                  <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                    <h5 className="section-title style-1 mb-30">
                      New products
                    </h5>
                    <div className="single-post clearfix">
                      <div className="image">
                        <img src="assets/imgs/shop/thumbnail-3.jpg" alt="#" />
                      </div>
                      <div className="content pt-10">
                        <h5>
                          <Link to="/product">Chen Cardigan</Link>
                        </h5>
                        <p className="price mb-0 mt-5">$99.50</p>
                        <div className="product-rate">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="single-post clearfix">
                      <div className="image">
                        <img src="assets/imgs/shop/thumbnail-4.jpg" alt="#" />
                      </div>
                      <div className="content pt-10">
                        <h6>
                          <Link to="/product">Chen Sweater</Link>
                        </h6>
                        <p className="price mb-0 mt-5">$89.50</p>
                        <div className="product-rate">
                          <div
                            className="product-rating"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="single-post clearfix">
                      <div className="image">
                        <img src="assets/imgs/shop/thumbnail-5.jpg" alt="#" />
                      </div>
                      <div className="content pt-10">
                        <h6>
                          <Link to="/product">Colorful Jacket</Link>
                        </h6>
                        <p className="price mb-0 mt-5">$25</p>
                        <div className="product-rate">
                          <div
                            className="product-rating"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none">
                    <img src="assets/imgs/banner/banner-11.png" alt="" />
                    <div className="banner-text">
                      <span>Oganic</span>
                      <h4>
                        Save 17% <br />
                        on <span className="text-brand">Oganic</span>
                        <br />
                        Juice
                      </h4>
                    </div>
                  </div>
                </div>
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
                    <p className="mb-45">
                      Start You'r Daily Shopping with{" "}
                      <span className="text-brand">Nest Mart</span>
                    </p>
                    <form className="form-subcriber d-flex">
                      <input type="email" placeholder="Your emaill address" />
                      <button className="btn" type="submit">
                        Subscribe
                      </button>
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
                <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
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
                <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
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
                <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
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
                <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
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
                <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
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
                <div className="banner-left-icon d-flex align-items-center wow fadeIn animated">
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

export default Product;
