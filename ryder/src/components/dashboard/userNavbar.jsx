import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import ryder from "../../images/ryder.svg";

const UserNavbar = ({ userData }) => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={ryder}
            alt="User Logo"
            className="d-inline-block align-top user-image"
          />
          {/* {userData.name} */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Link to="/my-orders" className="nav-link">
              My Orders
            </Link>
            <Link to="/payment" className="nav-link">
              Payment
            </Link>
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="transparent" className="nav-link">
                <i className="fas fa-bell"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>{/* Notification items */}</Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
