import React from "react";
import "./Nav.css";
export const Nav = () => {
  return (
    <header>
      <a class="logo">MK❤️WebDeveloper</a>
      <nav>
        <ul class="nav_links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
        </ul>
      </nav>
      <a class="cta" href="/">
        <button>Contact</button>
      </a>
    </header>
  );
};
