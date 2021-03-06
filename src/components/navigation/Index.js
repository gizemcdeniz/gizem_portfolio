import React from 'react'
import { NavLink } from 'react-router-dom';
import "./style.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import i18next from "i18next";
import { useTranslation } from "react-i18next";


const Navigation =() =>  {

const { t } = useTranslation();
    return (
      <>
        <Navbar id="navSection" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <NavLink exact activeClassName="link-active" className="link p-0 mt-3 mr-5 text-uppercase font-weight-bold" to="/">Home</NavLink> */}
              <Navbar.Brand><i class="fas fa-2x fa-code"></i></Navbar.Brand>
              <NavLink exact activeClassName="link-active" className="link p-0 mt-3 mr-5 text-uppercase font-weight-bold" to="/">{t("navbar.links.link0")}</NavLink>
              <NavLink exact activeClassName="link-active" className="link p-0 mt-3 mr-5 text-uppercase font-weight-bold" to="/about">{t("navbar.links.link1")}</NavLink>
              <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-5 text-uppercase font-weight-bold" to="/projects" >{t("navbar.links.link2")}</NavLink>
              <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-5 text-uppercase font-weight-bold" to="/contact"  >{t("navbar.links.link3")}</NavLink>
              <NavLink activeClassName="link-active" className="link p-0 mt-3 mr-5 text-uppercase font-weight-bold" to="/resume" target="_blank" >{t("navbar.links.link4")}</NavLink> 
            </Nav>
            <NavDropdown title={t("navbar.links.link5")} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => {
                i18next.changeLanguage("en");
              }} href="#translate/3.1">{t("navbar.links.link6")}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                i18next.changeLanguage("tr");
              }} href="#translate/3.2">{t("navbar.links.link7")} </NavDropdown.Item>
            </NavDropdown>
            
          </Navbar.Collapse>
        </Navbar>
      </>
    )
}
export default Navigation;