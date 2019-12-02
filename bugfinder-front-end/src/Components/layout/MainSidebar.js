import React from "react";
import "./MainSidebar.css";

function MainSidebar() {
  return (
    <div class="MainViewport">
      <div class="MainSidebar">
        <ul class="nav">
          <li>
            <a href="#">
              <i class="zmdi zmdi-view-dashboard"></i>DSL
            </a>
          </li>
          <li>
            <a href="#">
              <i class="zmdi zmdi-view-dashboard"></i>SS
            </a>
          </li>
          <li>
            <a href="#">
              <i class="zmdi zmdi-link"></i>PS
            </a>
          </li>
        </ul>
        <ul class="nav"> &nbsp; </ul>
        <ul class="nav">
          <li>
            <a href="#">
              <i class="zmdi zmdi-widgets"></i>QM
            </a>
          </li>
          <li>
            <a href="#">
              <i class="zmdi zmdi-calendar"></i>YPP
            </a>
          </li>
        </ul>
      </div>
      <div class="content">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav navbar-right"></ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default MainSidebar;
