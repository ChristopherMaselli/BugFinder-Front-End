import React from "react";
import "./PostForm.css";
import { useState, useEffect } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const PostForm = props => {
  const [formInfo, setFormInfo] = useState({
    postId: props.postdata.id,
    postName: props.postdata.name,
    postDesc: props.postdata.desc,
    postStatus: props.postdata.status,
    postColor: props.postdata.color,
    postState: props.postdata.state,
    postUpArrow: props.postdata.upArrow,
    postNumber: props.postdata.number,
    postLetters: props.postdata.letters,
    postOwner: props.postdata.owner
  });

  const postNameRef = React.createRef();
  const postDescRef = React.createRef();
  const postStatusRef = React.createRef();
  const postColorRef = React.createRef();
  const postStateRef = React.createRef();
  const postUpArrowRef = React.createRef();
  const postNumberRef = React.createRef();
  const postLettersRef = React.createRef();

  /*
  componentDidMount() {
    this.name.current.focus();
  }
  */

  const handleChange = e => {
    const tempFormInfo = { ...formInfo };
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    tempFormInfo[name] = value;
    setFormInfo(tempFormInfo);
  };

  const handleDelete = e => {
    const id = formInfo.postName;
    //await axios.delete("https://localhost:5001/api/Postitems/" + id);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const obj = {
      id: 7,
      name: formInfo.postName,
      desc: formInfo.postDesc,
      status: formInfo.postStatus,
      color: formInfo.postColor,
      state: parseInt(formInfo.postState),
      upArrow: parseInt(formInfo.postUpArrow),
      number: parseInt(formInfo.postNumber),
      letters: formInfo.postLetters,
      owner: "Test"
    };

    //await axios.post("https://localhost:5001/api/PostItems", obj);
  };

  const dataObj = {
    postName: props.postdata.name,
    postDesc: props.postdata.desc,
    postStatus: props.postdata.status,
    postColor: props.postdata.color,
    postState: props.postdata.state,
    postUpArrow: props.postdata.upArrow,
    postNumber: props.postdata.number,
    postLetters: props.postdata.letters,
    postOwner: props.postdata.owner
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={postNameRef}
            autoFocus
            value={formInfo.postName}
            onChange={postNameRef => handleChange(postNameRef)}
            name="postName"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="Status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            ref={postStatusRef}
            value={formInfo.postStatus}
            onChange={postStatusRef => handleChange(postStatusRef)}
            name="postStatus"
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Code Review</option>
            <option>Done</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="Desc">
        <Form.Label>Desc</Form.Label>
        <Form.Control
          as="textarea"
          rows="4"
          ref={postDescRef}
          value={formInfo.postDesc}
          onChange={postDesc => handleChange(postDesc)}
          name="postDesc"
        />
      </Form.Group>

      <Form.Group controlId="Color">
        <Form.Label>Color</Form.Label>
        <Form.Control
          as="select"
          ref={postColorRef}
          value={formInfo.postColor}
          onChange={postColorRef => handleChange(postColorRef)}
          name="postColor"
        >
          <option>Red</option>
          <option>Orange</option>
          <option>Yellow</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Purple</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="Letters">
        <Form.Label>Letters</Form.Label>
        <Form.Control
          ref={postLettersRef}
          value={formInfo.postLetters}
          onChange={postLettersRef => handleChange(postLettersRef)}
          name="postLetters"
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="State">
          <Form.Label>State</Form.Label>
          <Form.Control
            as="select"
            ref={postStateRef}
            value={formInfo.postState}
            onChange={postStateRef => handleChange(postStateRef)}
            name="postState"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="upArrow">
          <Form.Label>Up Arrow</Form.Label>
          <Form.Control
            as="select"
            ref={postUpArrowRef}
            value={formInfo.postUpArrow}
            onChange={postUpArrowRef => handleChange(postUpArrowRef)}
            name="postUpArrow"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Number</Form.Label>
          <Form.Control
            as="select"
            ref={postNumberRef}
            value={formInfo.postNumber}
            onChange={postNumberRef => handleChange(postNumberRef)}
            name="postNumber"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <div className="wrapper">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="danger">Delete Post</Button>
      </div>
    </Form>
  );
};

export default PostForm;
