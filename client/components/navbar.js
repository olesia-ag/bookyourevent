import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="navbar">
    <header id="header-navbar"></header>
    <nav>
      {isLoggedIn ? (
        <div className="navLinks">
          {/* The navbar will show these links after you log in */}

          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navLinks">
          {/* The navbar will show these links before you log in */}
          <Link to="/">Home</Link>
          <Link to="/login">Owner login</Link>
          {/* <Link to="/signup">Sign Up</Link> */}
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  //if user id exists, isLoggedIn will resolve to true
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
