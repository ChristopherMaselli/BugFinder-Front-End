import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import PostForm from "./PostForm";
import "./Popup.css";

const Popup = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostForm existent={props.existent} postdata={props.postdata} />
      </Modal.Body>
      <Modal.Footer>
        <Button varient="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
