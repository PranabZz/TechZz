import React, { useEffect, useState } from "react";
import Button from "./Buttons"; 
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuStack, setSubMenuStack] = useState([]);
  const [subMenuTitleStack, setSubMenuTitleStack] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && menuActive) {
        toggleMenu();
      }
      console.log("Window resized to:", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    console.log("Menu toggled. Active status:", !menuActive);
  };

  const showSubMenu = (hasChildren, menuTitle) => {
    for (let submenu of document.querySelectorAll(".sub-menu")) {
      submenu.classList.remove("active");
    }

    const subMenu = hasChildren.querySelector(".sub-menu");
    setSubMenuStack([...subMenuStack, subMenu.id]);
    setSubMenuTitleStack([...subMenuTitleStack, menuTitle]);

    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";

    document.querySelector(".current-menu-title").innerHTML = menuTitle;
    document.querySelector(".mobile-menu-head").classList.add("active");
  };

  const handleGoBack = () => {
    const lastSubMenuId = subMenuStack[subMenuStack.length - 1];
    const secondLastSubMenuTitle =
      subMenuTitleStack[subMenuTitleStack.length - 2];

    setSubMenuStack(subMenuStack.slice(0, -1));
    setSubMenuTitleStack(subMenuTitleStack.slice(0, -1));

    if (subMenuStack.length >= 0) {
      const lastSubMenu = document.getElementById(lastSubMenuId);
      lastSubMenu.style.animation = "slideRight 0.5s ease forwards";
      document.querySelector(".current-menu-title").innerHTML =
        secondLastSubMenuTitle;

      setTimeout(() => {
        lastSubMenu.classList.remove("active");
      }, 300);
    }

    if (subMenuStack.length === 0) {
      document.querySelector(".mobile-menu-head").classList.remove("active");
    }
  };

  return (
    <header
      className="site-header sofax-header-section site-header--menu-center"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          <div className="brand-logo">
            <a href="index.html"><img src="asstes/vertex.png" height="50px" width="50px" /></a>
          </div>

          <div className="menu-block-wrapper">
            <div
              className={`menu-overlay ${menuActive ? "active" : ""}`}
              onClick={toggleMenu}
            ></div>
            <nav
              className={`menu-block ${menuActive ? "active" : ""}`}
              id="append-menu-header"
            >
              <div className="mobile-menu-head">
                <div className="go-back" onClick={handleGoBack}>
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close" onClick={toggleMenu}>
                  &times;
                </div>
              </div>
              <ul
                className="site-menu-main"
                onClick={(e) => {
                  if (!menuActive) return;
                  const hasChildren = e.target.closest(
                    ".nav-item-has-children"
                  );
                  if (hasChildren) {
                    const menuTitle =
                      hasChildren.querySelector(".drop-trigger").textContent;
                    console.log(
                      "Clicked on nav item with children:",
                      hasChildren.className
                    );
                    showSubMenu(hasChildren, menuTitle);
                  }
                }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link-item drop-trigger">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-us" className="nav-link-item">
                    About Us
                  </Link>
                </li>
               
                <li className="nav-item nav-item-has-children">
                  <Link to="/blog" className="nav-link-item drop-trigger">
                    Blog
                  </Link>
                 
                </li>
                <li className="nav-item">
                  <Link to="/contact-us" className="nav-link-item">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Button text="Get Started" link="#"></Button>
          </div>

          <div className="mobile-menu-trigger" onClick={toggleMenu}>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
