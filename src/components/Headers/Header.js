import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-contents">
        <Link to="/" className="link">
          <h1>TANN TRIM</h1>
        </Link>
        <div className="header-items-container">
          <FaSearch className="header-itmes" />
          <FaRegUser className="header-itmes" />
          <FaRegBookmark className="header-itmes" />
          <MdOutlineShoppingBag className="header-itmes" />
        </div>
      </div>
      {/* products category */}
      <div className="header-category">
        <Link to="/" className="link">
          <p>Men's clothing</p>
        </Link>
        <Link to="/electronics" className="link">
          <p>Electronics</p>
        </Link>
        <Link to="/Women" className="link">
          <p>Women's Clothing</p>
        </Link>
        <Link to="/gifting" className="link">
          <p>Gifting</p>
        </Link>
        <Link to="/jewelery" className="link">
          <p>Jewelery</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
