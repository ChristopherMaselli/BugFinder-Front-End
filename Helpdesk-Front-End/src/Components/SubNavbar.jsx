import React from "react";
import "./SubNavbar.css";
import styled from "styled-components";

const List = styled.ul`
  overflow-x: auto;
  list-style: none;
  white-space: nowrap;
  padding: 0;
`;
const ListItem = styled.li`
  display: inline-block;
  background: red;
  padding: 8px 16px;
  margin-right: 16px;
`;

export default function SubNavbar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-sm-3 mr-0 col-md-2" href="#">
          Company name
        </a>
        <input
          class="form-control form-control w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul class="navbar-nav px-3">
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
