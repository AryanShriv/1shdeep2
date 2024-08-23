import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import revealer from "circular-revealer";
import Logo from "../../Assets/Logos/WHITE 1S.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const navRef = useRef(null);
  const actionBtnRef = useRef(null);

  useEffect(() => {
    const actionBtn = actionBtnRef.current;
    const nav = navRef.current;
    const links = nav.querySelectorAll("a"); // Select all links within the nav

    const revealerNav = revealer({
      revealElementSelector: ".nav-js",
      options: {
        anchorSelector: ".nav-btn-js",
      },
    });

    const toggleNav = () => {
      setIsRevealed((prev) => !prev);
      if (!isRevealed) {
        revealerNav.reveal();
      } else {
        revealerNav.hide();
      }
    };

    actionBtn.addEventListener("click", toggleNav);

    // Add click event to each link to close the nav
    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (isRevealed) {
          toggleNav(); // Close the nav if a link is clicked
        }
      });
    });

    

    return () => {
      actionBtn.removeEventListener("click", toggleNav);
      links.forEach((link) => {
        link.removeEventListener("click", toggleNav);
      });
    };
  }, [isRevealed]);

  useEffect(() => {
    if (navRef.current) {
      navRef.current.setAttribute("data-active", isRevealed ? "true" : "false");
      actionBtnRef.current.setAttribute(
        "data-open",
        isRevealed ? "true" : "false"
      );
    }
  }, [isRevealed]);

  

  return (
    <header>
      <a href="/" className="logo">
        <img src={Logo} alt="1shdeep" />
      </a>
      <div>
        <button
          className="header__button nav-btn-js"
          type="button"
          ref={actionBtnRef}
        ></button>
        <nav className="header__nav nav-js" ref={navRef}>
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="header__menu-item">
              <a href="/#Clients">Clients</a>
            </li>
            <li className="header__menu-item">
              <a href="/#Blogs">Blogs</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
