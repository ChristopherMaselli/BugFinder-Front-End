import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import "./Post.css";

const Post = props => {
  const [sizeInfo, setSizeInfo] = useState({
    background: props.backgroundColorValue,
    width: 292,
    maxHeight: 164,
    minHeight: 164,
    transform: "scale(1)"
  });

  const [colorInfo, setColorInfo] = useState({
    background: props.midColorValue,
    color: props.textColorValue
  });

  const List = styled.ul`
    overflow-x: auto;
    list-style: none;
    white-space: nowrap;
    padding: 0;
  `;
  const ListItem = styled.li`
    display: inline-block;
    background: red;
  `;

  const handleScaleGrow = () => {
    setSizeInfo({
      background: props.hoverBackgroundColorValue,
      transform: "scale(1.1)"
    });
    setColorInfo({
      background: props.hoverMidColorValue,
      color: props.hoverTextColorValue
    });
  };

  const handleScaleShrink = () => {
    setSizeInfo({
      background: props.backgroundColorValue,
      transform: "scale(1)"
    });
    setColorInfo({
      background: props.midColorValue,
      color: props.textColorValue
    });
  };

  const d = {
    id: props.id,
    name: props.name,
    desc: props.desc,
    status: props.status,
    backgroundColorValue: props.backgroundColorValue,
    hoverBackgroundColorValue: props.hoverBackgroundColorValue,
    midColorValue: props.midColorValue,
    hoverMidColorValue: props.hoverMidColorValue,
    textColorValue: props.textColorValue,
    hoverTextColorValue: props.hoverTextColorValue,
    state: props.state,
    upArrow: props.upArrow,
    number: props.number,
    letters: props.letters,
    owner: props.owner
  };

  const handlePopupData = () => {
    const obj = d;
    props.onPopupChange(obj);
  };

  return (
    <div class="card mb-4 shadow-sm">
      <button
        class="card-body"
        onClick={handleScaleShrink}
        onClick={() => handlePopupData()}
        onMouseEnter={handleScaleGrow}
        onMouseLeave={handleScaleShrink}
        style={sizeInfo}
      >
        <div>
          <p class="card-title pricing-card-title">{props.desc}</p>
          <div class="card-project-name" style={colorInfo}>
            {props.name}
          </div>
          <nav class="navbar navbar-dark flex-md-nowrap p-0 shadow">
            <List>
              <ListItem>{props.state}</ListItem>
              <ListItem>{props.upArrow}</ListItem>
              <ListItem>{props.number}</ListItem>
            </List>
            <List class="navbar-nav px-3">
              <ListItem>{props.state}</ListItem>
              <ListItem>{props.upArrow}</ListItem>
            </List>
          </nav>
        </div>
      </button>
    </div>
  );
};

export default Post;
// Add Margins to bottom
