import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ryder from "../../images/ryder.svg";
import { LinkContainer } from "react-router-bootstrap";
import { BsBell } from "react-icons/bs";

const RiderNavbar = ({ riderData }) => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={ryder}
            alt="Rider Logo"
            className="d-inline-block align-top rider-image"
          />
          {/* {riderData.name} */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/bidding">
              <Nav.Link className="nav-link">Bidding</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ride-history">
              <Nav.Link className="nav-link">Ride History</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/earnings">
              <Nav.Link className="nav-link">Earnings</Nav.Link>
            </LinkContainer>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="transparent" className="nav-link">
                <i className="fas fa-bell"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>{/* Notification items */}</Dropdown.Menu>
            </Dropdown>
            <Button
              variant={isOnline ? "success" : "danger"}
              onClick={toggleOnlineStatus}
              className="ml-3"
            >
              {isOnline ? "Online" : "Offline"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RiderNavbar;
