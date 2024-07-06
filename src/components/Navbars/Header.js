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
import { TypeaheadSearch } from "./../TypeaheadSearch/TypeaheadSearch";
import { scroller } from "react-scroll";
import "./Header.scss";
import useGlobalStore from "./../../store/global";

const HeaderNavbar = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const updateProductsCategory = useGlobalStore((state) => state.updateProductsCategory);

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
    handleSubmit();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the products page with the search query
    if (searchQuery) {
      updateProductsCategory(searchQuery);
      navigate(`/products?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleNavigation = (section) => {
    navigate("/services");
    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }, 500); // Delay to ensure the page has loaded
  };

  const navigateToProducts = (section) => {
    updateProductsCategory(section);
    navigate("/products");
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
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Products</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/products"
                      onClick={() => navigateToProducts("APIs")}
                    >
                      APIs
                    </Link>
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/products"
                      onClick={() => navigateToProducts("Impurities")}
                    >
                      Impurities
                    </Link>
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/products"
                      onClick={() => navigateToProducts("Metabolities")}
                    >
                      Metabolities
                    </Link>
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/products"
                      onClick={() => navigateToProducts("Nitrosamines")}
                    >
                      Nitrosamines
                    </Link>
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/products"
                      onClick={() => navigateToProducts("Building blocks")}
                    >
                      Building blocks
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-ui-04 d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Services</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    {/* <DropdownItem href="/services#APIImpurities">
                      API Impurities/Reference Standards
                    </DropdownItem> */}
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/services"
                      onClick={() => handleNavigation("APIImpurities")}
                    >
                      API Impurities/Reference Standards
                    </Link>
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/services"
                      onClick={() => handleNavigation("CustomSynthesis")}
                    >
                      CUSTOM SYNTHESIS
                    </Link>
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/services"
                      onClick={() => handleNavigation("CROCDMOservices")}
                    >
                      CRO/CDMO services
                    </Link>
                    <Link
                      className="nav-link dropdown-item"
                      role="menuitem"
                      to="/services"
                      onClick={() => handleNavigation("ChemicalSourcing")}
                    >
                      Chemical Sourcing
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
              <TypeaheadSearch
                id="typeaheadSearch"
                onChange={handleChange}
                onSelection={handleSelection}
              ></TypeaheadSearch>
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
