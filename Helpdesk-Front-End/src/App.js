import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SidebarMain from "./Components/SidebarMain";
import SubNavbar from "./Components/SubNavbar";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Grid from "./Components/Grid";
import Post from "./Components/Post";
import Popup from "./Components/Popup";
import PostForm from "./Components/PostForm";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todoPosts: [],
    inProgressPosts: [],
    codeReviewPosts: [],
    donePosts: [],
    addModalShow: false,
    currentPostData: {
      id: 0,
      name: "",
      desc: "",
      status: "TO DO",
      color: "Red",
      state: 1,
      upArrow: 1,
      number: 1,
      letters: "",
      owner: ""
    },
    newPostData: {
      id: -1,
      name: "",
      desc: "",
      status: "TO DO",
      color: "Red",
      state: 1,
      upArrow: 1,
      number: 1,
      letters: "",
      owner: ""
    }
  };

  /*
  getPosts = async postStatus => {
    const result = await axios.get("https://localhost:5001/api/Postitems", {
      params: {
        status: postStatus
      }
    });
    return result;
  };
  */

  handlePopup = d => {
    this.setState({
      addModalShow: true,
      currentPostData: d
    });
  };

  async UpdatePosts() {
    // pending > resolved (success) OR rejected (failure)
    const { data: todoPosts } = await axios.get(
      "https://localhost:5001/api/Postitems",
      {
        params: {
          status: "TO DO"
        }
      }
    );
    /*const { data: todoPosts } = this.getPosts("TODO");*/

    const { data: inProgressPosts } = await axios.get(
      "https://localhost:5001/api/Postitems",
      {
        params: {
          status: "IN PROGRESS"
        }
      }
    );

    const { data: codeReviewPosts } = await axios.get(
      "https://localhost:5001/api/Postitems",
      {
        params: {
          status: "CODE REVIEW"
        }
      }
    );

    const { data: donePosts } = await axios.get(
      "https://localhost:5001/api/Postitems",
      {
        params: {
          status: "DONE"
        }
      }
    );
    this.setState({
      todoPosts,
      inProgressPosts,
      codeReviewPosts,
      donePosts
    });
  }

  async componentDidMount() {
    this.UpdatePosts();
  }

  /*
  filterState = status => {
    this.setState({
      tempPosts: [...this.state.posts.filter(post => post.status === status)]
    });
  };
  */

  createPosts = e => {
    return e.map(f => (
      <Post
        key={f.id}
        id={f.id}
        desc={f.desc}
        name={f.name}
        status={f.status}
        color={f.color}
        state={f.state}
        upArrow={f.upArrow}
        number={f.number}
        letters={f.letters}
        owner={f.owner}
        onPopupChange={d => this.handlePopup(d)}
      />
    ));
  };

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div class="row">
            <SidebarMain />
            <main role="main" class="ml-sm-auto col-lg-10  px-3">
              <Popup
                show={this.state.addModalShow}
                onHide={addModalClose}
                existent={this.state.currentPostExistent}
                postdata={this.state.currentPostData}
                refreshposts={this.UpdatePosts()}
              />
              <Header
                onPopupChange={d => this.handlePopup(d)}
                postData={this.state.newPostData}
              />
              <SubNavbar />
              <div class="container">
                <div class="card-deck mb-3 text-center">
                  <div class="card mb-4 shadow-sm">
                    <p>TO DO</p>
                    <div>{this.createPosts(this.state.todoPosts)}</div>
                  </div>

                  <div class="card mb-4 shadow-sm">
                    <p>IN PROGRESS</p>
                    <div>{this.createPosts(this.state.inProgressPosts)}</div>
                  </div>

                  <div class="card mb-4 shadow-sm">
                    <p>CODE REVIEW</p>
                    <div>{this.createPosts(this.state.codeReviewPosts)}</div>
                  </div>

                  <div class="card mb-4 shadow-sm">
                    <p>DONE</p>
                    <div>{this.createPosts(this.state.donePosts)}</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
