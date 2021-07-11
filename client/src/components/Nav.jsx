import React from "react";
import { Link } from "react-router-dom";
import css from "./style.css";

function Nav() {
  return (
    <nav className={css.nav}>
      <Link to="/">
        <img src="https://i.pinimg.com/originals/37/a8/d8/37a8d8ddeb69604f4a042ddfa345a577.png" className={css.logoImg} alt="" />
      </Link>
      <ul className={css.navLinks}>
        <li>
          <Link to="/about">
            <button type="button" className={css.myButton}>About</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
