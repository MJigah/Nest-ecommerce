import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { appendScript } from "../utils/appendScript";

function Dashboard() {
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
      <main className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>{" "}
              <span></span> My Account
            </div>
          </div>
        </div>
        <div className="page-content pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="row">
                  <div className="col-md-3">
                    <div className="dashboard-menu">
                      <ul className="nav flex-column" role="tablist">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            id="dashboard-tab"
                            data-bs-toggle="tab"
                            to="#dashboard"
                            role="tab"
                            aria-controls="dashboard"
                            aria-selected="false"
                          >
                            <i className="fi-rs-settings-sliders mr-10"></i>
                            Dashboard
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            id="orders-tab"
                            data-bs-toggle="tab"
                            to="#orders"
                            role="tab"
                            aria-controls="orders"
                            aria-selected="false"
                          >
                            <i className="fi-rs-shopping-bag mr-10"></i>Orders
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            id="track-orders-tab"
                            data-bs-toggle="tab"
                            to="#track-orders"
                            role="tab"
                            aria-controls="track-orders"
                            aria-selected="false"
                          >
                            <i className="fi-rs-shopping-cart-check mr-10"></i>
                            Track Your Order
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            id="address-tab"
                            data-bs-toggle="tab"
                            to="#address"
                            role="tab"
                            aria-controls="address"
                            aria-selected="true"
                          >
                            <i className="fi-rs-marker mr-10"></i>My Address
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            id="account-detail-tab"
                            data-bs-toggle="tab"
                            to="#account-detail"
                            role="tab"
                            aria-controls="account-detail"
                            aria-selected="true"
                          >
                            <i className="fi-rs-user mr-10"></i>Account details
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/login">
                            <i className="fi-rs-sign-out mr-10"></i>Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content account dashboard-content pl-50">
                      <div
                        className="tab-pane fade active show"
                        id="dashboard"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">Hello Rosie!</h3>
                          </div>
                          <div className="card-body">
                            <p>
                              From your account dashboard. you can easily check
                              &amp; view your <Link to="#">recent orders</Link>,
                              <br />
                              manage your{" "}
                              <Link to="#">
                                shipping and billing addresses
                              </Link> and{" "}
                              <Link to="#">
                                edit your password and account details.
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="orders"
                        role="tabpanel"
                        aria-labelledby="orders-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">Your Orders</h3>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>#1357</td>
                                    <td>March 45, 2020</td>
                                    <td>Processing</td>
                                    <td>$125.00 for 2 item</td>
                                    <td>
                                      <Link to="#" className="btn-small d-block">
                                        View
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>#2468</td>
                                    <td>June 29, 2020</td>
                                    <td>Completed</td>
                                    <td>$364.00 for 5 item</td>
                                    <td>
                                      <Link to="#" className="btn-small d-block">
                                        View
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>#2366</td>
                                    <td>August 02, 2020</td>
                                    <td>Completed</td>
                                    <td>$280.00 for 3 item</td>
                                    <td>
                                      <Link to="#" className="btn-small d-block">
                                        View
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="track-orders"
                        role="tabpanel"
                        aria-labelledby="track-orders-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">Orders tracking</h3>
                          </div>
                          <div className="card-body contact-from-area">
                            <p>
                              To track your order please enter your OrderID in
                              the box below and press "Track" button. This was
                              given to you on your receipt and in the
                              confirmation email you should have received.
                            </p>
                            <div className="row">
                              <div className="col-lg-8">
                                <form
                                  className="contact-form-style mt-30 mb-50"
                                  action="#"
                                  method="post"
                                >
                                  <div className="input-style mb-20">
                                    <label>Order ID</label>
                                    <input
                                      name="order-id"
                                      placeholder="Found in your order confirmation email"
                                      type="text"
                                    />
                                  </div>
                                  <div className="input-style mb-20">
                                    <label>Billing email</label>
                                    <input
                                      name="billing-email"
                                      placeholder="Email you used during checkout"
                                      type="email"
                                    />
                                  </div>
                                  <button
                                    className="submit submit-auto-width"
                                    type="submit"
                                  >
                                    Track
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="address"
                        role="tabpanel"
                        aria-labelledby="address-tab"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="card mb-3 mb-lg-0">
                              <div className="card-header">
                                <h3 className="mb-0">Billing Address</h3>
                              </div>
                              <div className="card-body">
                                <address>
                                  3522 Interstate
                                  <br />
                                  75 Business Spur,
                                  <br />
                                  Sault Ste. <br />
                                  Marie, MI 49783
                                </address>
                                <p>New York</p>
                                <Link to="#" className="btn-small">
                                  Edit
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card">
                              <div className="card-header">
                                <h5 className="mb-0">Shipping Address</h5>
                              </div>
                              <div className="card-body">
                                <address>
                                  4299 Express Lane
                                  <br />
                                  Sarasota, <br />
                                  FL 34249 USA <br />
                                  Phone: 1.941.227.4444
                                </address>
                                <p>Sarasota</p>
                                <Link to="#" className="btn-small">
                                  Edit
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="account-detail"
                        role="tabpanel"
                        aria-labelledby="account-detail-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h5>Account Details</h5>
                          </div>
                          <div className="card-body">
                            <p>
                              Already have an account?{" "}
                              <Link to="/login">Log in instead!</Link>
                            </p>
                            <form method="post" name="enq">
                              <div className="row">
                                <div className="form-group col-md-6">
                                  <label>
                                    First Name{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    required=""
                                    className="form-control"
                                    name="name"
                                    type="text"
                                  />
                                </div>
                                <div className="form-group col-md-6">
                                  <label>
                                    Last Name{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    required=""
                                    className="form-control"
                                    name="phone"
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <label>
                                    Display Name{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    required=""
                                    className="form-control"
                                    name="dname"
                                    type="text"
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <label>
                                    Email Address{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    required=""
                                    className="form-control"
                                    name="email"
                                    type="email"
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <label>
                                    Current Password{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    required=""
                                    className="form-control"
                                    name="password"
                                    type="password"
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <label>
                                    New Password{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    required=""
                                    className="form-control"
                                    name="npassword"
                                    type="password"
                                  />
                                </div>
                                <div className="form-group col-md-12">
                                  <label>
                                    Confirm Password{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <input
                                    required=""
                                    className="form-control"
                                    name="cpassword"
                                    type="password"
                                  />
                                </div>
                                <div className="col-md-12">
                                  <button
                                    type="submit"
                                    className="btn btn-fill-out submit font-weight-bold"
                                    name="submit"
                                    value="Submit"
                                  >
                                    Save Change
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
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
        <section className="featured section-padding"></section>
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

export default Dashboard;
