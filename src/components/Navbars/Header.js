import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import {TypeaheadSearch} from "./../TypeaheadSearch/TypeaheadSearch";

import "./Header.scss";

const HeaderNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const onExiting = () => {
    setCollapseClasses("collapsing-out");
  };

  const onExited = () => {
    setCollapseClasses("");
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const handleSelection = (value) => {
    setSearchQuery(value);
    console.log("Handle Selection");
    handleSubmit();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the products page with the search query
    if (searchQuery) {
      navigate(`/products?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container className="fullwidth">
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              {/* logo CHANGE */}
              <img
                alt="..."
                src={require("assets/img/brand/ham_logo_bg.png")}
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/ham_logo_bg.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavItem className="ml-lg-2">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </NavItem>
                <NavItem className="ml-lg-2">
                  <Link className="nav-link" to="/services">
                    Products
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Services</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-spaceship" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            API Impurities/Reference standards
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Learn how to use Argon compiling Scss, change brand
                            colors and more.
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/colors?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <Media body className="ml-3">
                          <h6 className="heading text-primary mb-md-1">
                            Foundation
                          </h6>
                          <p className="description d-none d-md-inline-block mb-0">
                            Learn more about colors, typography, icons and the
                            grid system we used for Argon.
                          </p>
                        </Media>
                      </Media>
                      <Media
                        className="d-flex align-items-center"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alert?ref=adsr-navbar"
                        target="_blank"
                      >
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-ui-04" />
                        </div>
                        <Media body className="ml-3">
                          <h5 className="heading text-warning mb-md-1">
                            Components
                          </h5>
                          <p className="description d-none d-md-inline-block mb-0">
                            Browse our 50 beautiful handcrafted components
                            offered in the Free version.
                          </p>
                        </Media>
                      </Media>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem className="ml-lg-2">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </NavItem>
                <NavItem className="ml-lg-2">
                  <Link className="nav-link" to="/about-us">
                    AboutUs
                  </Link>
                </NavItem>
                <NavItem className="ml-lg-2">
                  <Link className="nav-link" to="/contact-us">
                    Contact Us
                  </Link>
                </NavItem>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem className="d-none d-lg-block ">
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip333589074"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip333589074">
                    Like us on Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-none d-lg-block ">
                  <NavLink
                    className="nav-link-icon"
                    href="https://www.instagram.com/creativetimofficial"
                    id="tooltip356693867"
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip356693867">
                    Follow us on Instagram
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem className="d-none d-lg-block ">
                  <NavLink
                    className="nav-link-icon"
                    href="https://twitter.com/creativetim"
                    id="tooltip184698705"
                    target="_blank"
                  >
                    <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                    </span>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip184698705">
                    Follow us on Twitter
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
              {/* Search Functionality */}
            </UncontrolledCollapse>
            <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
              {/* <input
                type="search"
                className="form-control"
                placeholder="Enter #CAS No, Name, Formula Name"
                aria-label="Search"
                onChange={handleChange}
              /> */}
              <TypeaheadSearch onChange={handleChange} onSelection={handleSelection}></TypeaheadSearch>
              <Button
                color="primary"
                type="submit"
                className="boder-left-radius-0"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-search mr-2 fa-1x" />
                </span>
              </Button>
            </form>
          </Container>
        </Navbar>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css"
        />
      </header>
    </>
  );
};

export default HeaderNavbar;
