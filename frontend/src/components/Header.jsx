import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
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
                            <i className="fi fi-rs-heart mr-10"></i>My Wishlist
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
                            <i className="fi fi-rs-sign-out mr-10"></i>Sign out
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
  );
}

export default Header;
