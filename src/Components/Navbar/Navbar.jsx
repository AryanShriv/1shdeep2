import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import revealer from "circular-revealer";

import Logo from "../../Assets/Logos/BLACK 1S.png"

const Header = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const navRef = useRef(null);
  const actionBtnRef = useRef(null);

  useEffect(() => {
    const actionBtn = actionBtnRef.current;
    const nav = navRef.current;

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

    return () => {
      actionBtn.removeEventListener("click", toggleNav);
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
              <a href="#">Works</a>
            </li>
            <li className="header__menu-item">
              <a href="#">News</a>
            </li>
            <li className="header__menu-item">
              <a href="#">About</a>
            </li>
            <li className="header__menu-item">
              <a href="#">Help</a>
            </li>
            <li className="header__menu-item">
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
