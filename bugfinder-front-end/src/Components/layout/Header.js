import React from "react";
import "./Header.css";

function Header() {
  return (
    <div class="Header">
      <div class="HeaderBoard">
        <a href="/">Board</a>
      </div>
      <div></div>
      <div class="HeaderEnd">
        <a class="Button" href="/about">
          Release
        </a>
        <a class="DotOptions" href="/about">
          ...
        </a>
      </div>
    </div>
  );
}

export default Header;
