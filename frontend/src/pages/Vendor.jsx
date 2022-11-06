import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { appendScript } from "../utils/appendScript";

function Vendor() {
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
                      <Link to="/product" className="text-heading">
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
        <div className="header-middle header-middle-ptb-1 sticky-bar d-none d-lg-block">
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
                              <Link to="/product">
                                <img
                                  alt="Nest"
                                  src="assets/imgs/shop/thumbnail-3.jpg"
                                />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link to="/product">Daisy Casual Bag</Link>
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
                              <Link to="/product">
                                <img
                                  alt="Nest"
                                  src="assets/imgs/shop/thumbnail-2.jpg"
                                />
                              </Link>
                            </div>
                            <div className="shopping-cart-title">
                              <h4>
                                <Link to="/product">Corduroy Shirts</Link>
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
                            <Link to="/checkout5">Checkout</Link>
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
                    <Link to="/">Home</Link>
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
                            <Link to="/product">Product – Right Sidebar</Link>
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
                        <Link to="#">Shop – Filter</Link>
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
                        <Link to="/">Shop – Compare</Link>
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
                        <Link to="vendor-details-1.html">
                          Vendor Details 01
                        </Link>
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
                            <Link to="/product">Dresses</Link>
                          </li>
                          <li>
                            <Link to="/product">Blouses & Shirts</Link>
                          </li>
                          <li>
                            <Link to="/product">Hoodies & Sweatshirts</Link>
                          </li>
                          <li>
                            <Link to="/product">Women's Sets</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Men's Fashion</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/product">Jackets</Link>
                          </li>
                          <li>
                            <Link to="/product">Casual Faux Leather</Link>
                          </li>
                          <li>
                            <Link to="/product">Genuine Leather</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Technology</Link>
                        <ul className="dropdown">
                          <li>
                            <Link to="/product">Gaming Laptops</Link>
                          </li>
                          <li>
                            <Link to="/product">Ultraslim Laptops</Link>
                          </li>
                          <li>
                            <Link to="/product">Tablets</Link>
                          </li>
                          <li>
                            <Link to="/product">Laptop Accessories</Link>
                          </li>
                          <li>
                            <Link to="/product">Tablet Accessories</Link>
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
              <span></span> [Location Name] <span></span> [Vendor Name]
            </div>
          </div>
        </div>
        <div className="container mb-30">
          <div className="archive-header-2 text-center pt-80 pb-50">
            <h1 className="display-2 mb-50">[Vendor Name]</h1>
            <div className="row">
              <div className="col-lg-5 mx-auto">
                <div className="sidebar-widget-2 widget_search mb-50">
                  <div className="search-form">
                    <form action="#">
                      <input type="text" placeholder="Search for items..." />
                      <button type="submit">
                        <i className="fi-rs-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-lg-4-5">
              <div className="shop-product-fillter">
                <div className="totall-product">
                  <p>
                    We found <strong className="text-brand">29</strong> items
                    for you!
                  </p>
                </div>
                <div className="sort-by-product-area">
                  <div className="sort-by-cover mr-10">
                    <div className="sort-by-product-wrap">
                      <div className="sort-by">
                        <span>
                          <i className="fi-rs-apps"></i>Show:
                        </span>
                      </div>
                      <div className="sort-by-dropdown-wrap">
                        <span>
                          {" "}
                          50 <i className="fi-rs-angle-small-down"></i>
                        </span>
                      </div>
                    </div>
                    <div className="sort-by-dropdown">
                      <ul>
                        <li>
                          <Link className="active" to="#">
                            50
                          </Link>
                        </li>
                        <li>
                          <Link to="#">100</Link>
                        </li>
                        <li>
                          <Link to="#">150</Link>
                        </li>
                        <li>
                          <Link to="#">200</Link>
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
                          Featured <i className="fi-rs-angle-small-down"></i>
                        </span>
                      </div>
                    </div>
                    <div className="sort-by-dropdown">
                      <ul>
                        <li>
                          <Link className="active" to="#">
                            Featured
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Price: Low to High</Link>
                        </li>
                        <li>
                          <Link to="#">Price: High to Low</Link>
                        </li>
                        <li>
                          <Link to="#">Release Date</Link>
                        </li>
                        <li>
                          <Link to="#">Avg. Rating</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-grid">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-1-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-1-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Snack</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Seeds of Change Organic Quinoe
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
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
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Hodo Foods</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          All Natural Italian-Style Chicken Meatballs
                        </Link>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (3.5)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">Stouffer</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$52.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-3-1.jpg"
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
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Snack</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Angie’s Boomchickapop Sweet & Salty
                        </Link>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">StarKist</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$48.85</span>
                          <span className="old-price">$52.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
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
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Vegetables</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Foster Farms Takeout Crispy Classic
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$17.85</span>
                          <span className="old-price">$19.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-5-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-5-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">-14%</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Pet Foods</Link>
                      </div>
                      <h2>
                        <Link to="/product">Blue Diamond Almonds Lightly</Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-6-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-6-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Hodo Foods</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Chobani Complete Vanilla Greek
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$54.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-7-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-7-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Meats</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Canada Dry Ginger Ale – 2 L Bottle
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-8-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-8-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Snack</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Encore Seafoods Stuffed Alaskan
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$35.85</span>
                          <span className="old-price">$37.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-9-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-9-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Coffes</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Gorton’s Beer Battered Fish Fillets
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By
                          <Link to="vendor-details-1.html">Old El Paso</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-10-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-10-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Cream</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Haagen-Dazs Caramel Cone Ice Cream
                        </Link>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (2.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">Tyson</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$22.85</span>
                          <span className="old-price">$24.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-1-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-1-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Snack</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Seeds of Change Organic Quinoe
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
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
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Hodo Foods</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          All Natural Italian-Style Chicken Meatballs
                        </Link>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (3.5)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">Stouffer</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$52.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-3-1.jpg"
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
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="new">New</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Snack</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Angie’s Boomchickapop Sweet & Salty
                        </Link>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">StarKist</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$48.85</span>
                          <span className="old-price">$52.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
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
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Vegetables</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Foster Farms Takeout Crispy Classic
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$17.85</span>
                          <span className="old-price">$19.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-5-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-5-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="best">-14%</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Pet Foods</Link>
                      </div>
                      <h2>
                        <Link to="/product">Blue Diamond Almonds Lightly</Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-6-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-6-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Hodo Foods</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Chobani Complete Vanilla Greek
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$54.85</span>
                          <span className="old-price">$55.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-7-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-7-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Meats</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Canada Dry Ginger Ale – 2 L Bottle
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-8-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-8-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="sale">Sale</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Snack</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Encore Seafoods Stuffed Alaskan
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$35.85</span>
                          <span className="old-price">$37.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-9-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-9-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Coffes</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Gorton’s Beer Battered Fish Fillets
                        </Link>
                      </h2>
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
                      <div>
                        <span className="font-small text-muted">
                          By
                          <Link to="vendor-details-1.html">Old El Paso</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$23.85</span>
                          <span className="old-price">$25.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                  <div className="product-cart-wrap">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="/product">
                          <img
                            className="default-img"
                            src="assets/imgs/shop/product-10-1.jpg"
                            alt=""
                          />
                          <img
                            className="hover-img"
                            src="assets/imgs/shop/product-10-2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="/"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Cream</Link>
                      </div>
                      <h2>
                        <Link to="/product">
                          Haagen-Dazs Caramel Cone Ice Cream
                        </Link>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (2.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By <Link to="vendor-details-1.html">Tyson</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$22.85</span>
                          <span className="old-price">$24.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="/cart">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--end product card--> */}
              </div>
              {/* <!--product grid--> */}
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

              {/* <!--End Deals--> */}
            </div>
            <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
              <div className="sidebar-widget widget-category-2 mb-30">
                <h5 className="section-title style-1 mb-30">Category</h5>
                <ul>
                  <li>
                    {/* <img
                        src="assets/imgs/theme/icons/category-1.svg"
                        alt=""
                      /> */}
                    <input
                      type="radio"
                      value="Milks & Dairies"
                      name="category"
                    />{" "}
                    Milks & Dairies
                    {/* <span className="count">30</span> */}
                  </li>
                  <li>
                    {/* <img
                        src="assets/imgs/theme/icons/category-2.svg"
                        alt=""
                      /> */}
                    <input type="radio" value="Clothing" name="category" />{" "}
                    Clothing
                    {/* <span className="count">35</span> */}
                  </li>
                  <li>
                    {/* <img
                        src="assets/imgs/theme/icons/category-3.svg"
                        alt=""
                      /> */}
                    <input type="radio" value="Pet Foods" name="category" /> Pet
                    Foods
                    {/* <span className="count">42</span> */}
                  </li>
                  <li>
                    {/* <img
                        src="assets/imgs/theme/icons/category-4.svg"
                        alt=""
                      /> */}
                    <input
                      type="radio"
                      value="Baking material"
                      name="category"
                    />{" "}
                    Baking material
                    {/* <span className="count">68</span> */}
                  </li>
                  <li>
                    {/* <img
                        src="assets/imgs/theme/icons/category-5.svg"
                        alt=""
                      /> */}
                    <input type="radio" value="Fresh Fruit" name="category" />{" "}
                    Fresh Fruit
                    {/* <span className="count">87</span> */}
                  </li>
                </ul>
              </div>
              {/* <!-- Fillter By Price --> */}
              <div className="sidebar-widget price_range range mb-30">
                <h5 className="section-title style-1 mb-30">Fill by price</h5>
                <div className="price-filter">
                  <div className="price-filter-inner">
                    <div id="slider-range" className="mb-20"></div>
                    <div className="d-flex justify-content-between">
                      <div className="caption">
                        From:
                        <strong
                          id="slider-range-value1"
                          className="text-brand"
                        ></strong>
                      </div>
                      <div className="caption">
                        To:
                        <strong
                          id="slider-range-value2"
                          className="text-brand"
                        ></strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-group">
                  <div className="list-group-item mb-10 mt-10">
                    <label className="fw-900 mt-15">Item Condition</label>
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox11"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox11"
                      >
                        <span>New (1506)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox21"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox21"
                      >
                        <span>Refurbished (27)</span>
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox31"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox31"
                      >
                        <span>Used (45)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <Link to="#" className="btn btn-sm btn-default">
                  <i className="fi-rs-filter mr-5"></i> Fillter
                </Link>
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
      </main>
      <footer className="main">
        <section class="newsletter mb-15 wow animate__animated animate__fadeIn">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="position-relative newsletter-inner">
                  <div class="newsletter-content">
                    <h2 class="mb-20">
                      Stay home & get your daily <br />
                      needs from our shop
                    </h2>
                    <p class="mb-45">
                      Start You'r Daily Shopping with{" "}
                      <span class="text-brand">Nest Mart</span>
                    </p>
                    <form class="form-subcriber d-flex">
                      <input type="email" placeholder="Your emaill address" />
                      <button class="btn" type="submit">
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
                          data-cfemail="c8bba9a4ad8886adbbbce6aba7a5"
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

export default Vendor;
