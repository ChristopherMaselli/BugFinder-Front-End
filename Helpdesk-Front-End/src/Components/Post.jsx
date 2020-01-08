import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import "./Post.css";

const Post = props => {
  const [postBackgroundInfo, setPostBackgroundInfo] = useState({
    background: props.backgroundColorValue,
    width: 292,
    maxHeight: 164,
    minHeight: 164,
    transform: "scale(1)"
  });

  const List = styled.ul`
    overflow-x: auto;
    list-style: none;
    white-space: nowrap;
    padding: 0;
  `;
  const ListItem = styled.li`
    display: inline-block;
    background: black;
  `;

  const handleMouseEnter = () => {
    setPostBackgroundInfo({
      background: props.backgroundColorValue,
      transform: "scale(1.1)"
    });
  };

  const handleMouseExit = () => {
    setPostBackgroundInfo({
      background: props.backgroundColorValue,
      transform: "scale(1)"
    });
  };

  const d = {
    id: props.id,
    name: props.name,
    desc: props.desc,
    status: props.status,
    backgroundColorValue: props.backgroundColorValue,
    midColorValue: props.midColorValue,
    textColorValue: props.textColorValue,
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
        onClick={handleMouseExit}
        onClick={() => handlePopupData()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseExit}
        style={postBackgroundInfo}
      >
        <div
          style={{
            background: props.midColorValue,
            color: props.textColorValue
          }}
        >
          <p class="card-title pricing-card-title">{props.desc}</p>
          <div
            class="card-project-name"
            style={{ color: props.textColorValue }}
          >
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
