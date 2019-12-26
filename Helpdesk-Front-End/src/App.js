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
      status: "To Do",
      color: "Red",
      state: 1,
      upArrow: 1,
      number: 1,
      letters: "",
      owner: ""
    },
    newPostData: {
      id: 0,
      name: "",
      desc: "",
      status: "To Do",
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

  handlePopup = (d = this.state.currentPostData) => {
    this.setState({
      addModalShow: true,
      currentPostData: d
    });
  };

  async componentDidMount() {
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

  /*
  filterState = status => {
    this.setState({
      tempPosts: [...this.state.posts.filter(post => post.status === status)]
    });
  };
  */

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
              />
              <Header
                onPopupChange={() => this.handlePopup()}
                postData={this.state.newPostData}
              />
              <SubNavbar />
              <div class="container">
                <div class="card-deck mb-3 text-center">
                  <div
                    class="card mb-4 shadow-sm"
                    width="292px"
                    max-height="164px"
                  >
                    <p>TO DO</p>
                    {this.state.todoPosts.map(todoPost => (
                      <Post
                        key={todoPost.id}
                        desc={todoPost.desc}
                        name={todoPost.name}
                        status={todoPost.status}
                        color={todoPost.color}
                        state={todoPost.state}
                        upArrow={todoPost.upArrow}
                        number={todoPost.number}
                        letters={todoPost.letters}
                        owner={todoPost.owner}
                        onPopupChange={this.handlePopup}
                      />
                    ))}
                  </div>

                  <div
                    class="card mb-4 shadow-sm"
                    class="card mb-4 shadow-sm"
                    width="292px"
                    max-height="164px"
                  >
                    <p>IN PROGRESS</p>
                    {this.state.inProgressPosts.map(inProgressPost => (
                      <Post
                        key={inProgressPost.id}
                        desc={inProgressPost.desc}
                        name={inProgressPost.name}
                        status={inProgressPost.status}
                        color={inProgressPost.color}
                        state={inProgressPost.state}
                        upArrow={inProgressPost.upArrow}
                        number={inProgressPost.number}
                        letters={inProgressPost.letters}
                        owner={inProgressPost.owner}
                        onPopupChange={(e, d) => this.handlePopup(e, d)}
                      />
                    ))}
                  </div>

                  <div class="card mb-4 shadow-sm">
                    <p>CODE REVIEW</p>
                    {this.state.codeReviewPosts.map(codeReviewPost => (
                      <Post
                        key={codeReviewPost.id}
                        desc={codeReviewPost.desc}
                        name={codeReviewPost.name}
                        status={codeReviewPost.status}
                        color={codeReviewPost.color}
                        state={codeReviewPost.state}
                        upArrow={codeReviewPost.upArrow}
                        number={codeReviewPost.number}
                        letters={codeReviewPost.letters}
                        owner={codeReviewPost.owner}
                        onPopupChange={(e, d) => this.handlePopup(e, d)}
                      />
                    ))}
                  </div>

                  <div class="card mb-4 shadow-sm">
                    <p>DONE</p>
                    {this.state.donePosts.map(donePost => (
                      <Post
                        key={donePost.id}
                        desc={donePost.desc}
                        name={donePost.name}
                        status={donePost.status}
                        color={donePost.color}
                        state={donePost.state}
                        upArrow={donePost.upArrow}
                        number={donePost.number}
                        letters={donePost.letters}
                        owner={donePost.owner}
                        onPopupChange={(e, d) => this.handlePopup(e, d)}
                      />
                    ))}
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
