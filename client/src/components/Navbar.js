import React from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import "./Navbar.css";
import { logout } from "../services/auth";

const handleLogout = (props) => {
  logout().then(() => {
    props.setUser(null);
  });
};

const Navbar = (props) => {
  return (
    <Nav className="nav row" bg="info">
      <div className="col-6 pl-3">
        <img
          className="MoodsLogo"
          src=".\Plutchik-wheel.png"
          alt="Logo Moods of Berlin"
        ></img>
        <Nav.Brand>MOODS OF BERLIN</Nav.Brand>

        {props.user && <Nav.Brand>Welcome {props.user.username}</Nav.Brand>}
      </div>

      <div className="col-6">
        <Nav.Brand>
          <Link to="/">Home</Link>
        </Nav.Brand>

        <Nav.Brand>
          <Link to="/about">About</Link>
        </Nav.Brand>

        {props.user ? (
          <React.Fragment>
            <Nav.Brand>
              <Link to="/places">Places By Mood</Link>
            </Nav.Brand>

            <Nav.Brand>
              <Link to="/" onClick={() => handleLogout(props)}>
                Logout
              </Link>
            </Nav.Brand>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Nav.Brand>
              <Link to="/signup">Signup</Link>
            </Nav.Brand>

            <Nav.Brand>
              <Link to="/login">Login</Link>
            </Nav.Brand>
          </React.Fragment>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
