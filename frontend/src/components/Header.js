import React, { useState } from "react";
import Logo from "../components/Logo";
import SearchSVG from "../assets/img/svg/icon_search.svg";
import Person from "../assets/img/svg/ion_person.svg";
import Heart from "../assets/img/svg/ion_heart.svg";
import Cart from "../assets/img/svg/ion_cart.svg";
import { Link } from "react-router-dom";

function Header() {
  const [data, setData] = useState({
    isOpen: false,
    sortOpen: false,
  });

  const handleBurgerClick = () => {
    setData({
      ...data,
      isOpen: !data.isOpen,
    });
  };
  const handleSortClick = () => {
    setData({
      ...data,
      sortOpen: !data.sortOpen,
    });
  };

  return (
    <header>
      <div className="topHeader_container">
        <div className="wrapper">
          <div className="top_header">
            <Logo />
            <div className="header_search">
              <input
                type="text"
                placeholder="Search for more than 10,000 products"
                className="header_search_input"
              />
              <img src={SearchSVG} alt="search svg" className="search_svg" />
            </div>
            <div className="header_phone">
              <p className="phone_title">Phone</p>
              <p className="phone_num">+980-34984089</p>
            </div>
            <div className="header_email">
              <p className="email_title">Email</p>
              <p className="email_text">waggy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomHeader_container">
        <div className="wrapper">
          <div className="bottom_header">
            <div className="header_sort">
              <button onClick={handleSortClick} className="header_sort_btn">
                Shop by categories &#11167;
              </button>
              {data.sortOpen && (
                <div className="sort_nav">
                  {["Clothes", "Food", "Toy", "Best Sellers"].map(
                    (sortItem) => (
                      <a key={sortItem} href="#!" className="sort_nav_btns">
                        {sortItem}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="burger_menu" onClick={handleBurgerClick}>
              <button className="burger_btn">
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>

            <div className="header_nav">
              <Link to={"/"} className="header_nav_btn">
                Home
              </Link>
              <a href="#!" className="header_nav_btn">
                Page
              </a>
              <Link to={"/shop"} className="header_nav_btn">
                Shop
              </Link>
              <a href="#!" className="header_nav_btn">
                Blog
              </a>
              <a href="#!" className="header_nav_btn">
                Contact
              </a>
              <Link to="/users" className="header_nav_btn">
                Users
              </Link>
            </div>

            <div className="header_logos">
              {[Person, Heart, Cart].map((icon, index) => {
                const urls = ["/auth", "#!", "#!"];
                return (
                  <Link to={urls[index]} key={index}>
                    <img
                      src={icon}
                      className="header_ico"
                      alt={`logo ${index + 1} of bottom header`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {data.isOpen && (
        <div className="burger_nav">
          {["Home", "Page", "Shop", "Blog", "Contact", "Offers"].map(
            (navItem) => (
              <a key={navItem} href="#!" className="header_nav_btn">
                {navItem}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
