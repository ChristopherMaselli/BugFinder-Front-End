import React from "react";
import "./Grid.css";

export default function Grid() {
  return (
    <div className="container">
      <div class="card-deck mb-3 text-center">
        <div className="To-Do-Column">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Free</h4>
          </div>
          <div></div>
        </div>

        <div className="In-Progress-Column"></div>
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Free</h4>
        </div>
        <div></div>
        <div className="Code-Review-Column"></div>
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Free</h4>
        </div>
        <div></div>
        <div className="Done-Column"></div>
      </div>
    </div>
  );
}
