import React from "react";
import "./MainSidebar.css";

function MainSidebar() {
  return (
    <div class="MainViewport">
      <div class="MainSidebar">
        <div class="nav-top">
          <div>
            <a href="#">DSL</a>
          </div>
          <div>
            <a href="#">SS</a>
          </div>
          <div>
            <a href="#">PS</a>
          </div>
        </div>
        <div class="nav"> &nbsp;</div>
        <div class="nav-bottom">
          <div>
            <a href="#">QM</a>
          </div>
          <div>
            <a href="#">YPP</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSidebar;
