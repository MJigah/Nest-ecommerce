import React from "react";
import { Link } from "react-router-dom";

function MobileView() {
  return (
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
  );
}

export default MobileView;
