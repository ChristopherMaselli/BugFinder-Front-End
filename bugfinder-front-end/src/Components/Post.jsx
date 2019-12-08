import React from "react";
import { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    const {
      key,
      desc,
      name,
      color,
      state,
      upArrow,
      number,
      letters,
      owner
    } = this.props;
    return (
      <div class="card mb-4 shadow-sm">
        <div class="card-body">
          <div>
            <p class="card-title pricing-card-title">{desc}</p>
            <div class="card-project-name" background-color={color}>
              {name}
            </div>
            <nav class="navbar navbar-dark flex-md-nowrap p-0 shadow">
              <ul class="navbar-nav px-3">
                <li>{state}</li>
                <li>{upArrow}</li>
                <li>{number}</li>
              </ul>
              <ul class="navbar-nav px-3">
                <li>{state}</li>
                <li>{upArrow}</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
// Add Margins to bottom
