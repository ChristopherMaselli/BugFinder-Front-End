import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import SidebarMain from "./Components/SidebarMain";
import SubNavbar from "./Components/SubNavbar";
import Grid from "./Components/Grid";
import Post from "./Components/Post";
import "./App.css";

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        desc: "Engage Jupiter Express for outer solar system travel",
        name: "SPACE TRAVEL PARTERNERS",
        color: "Yellow",
        state: 1,
        upArrow: 2,
        number: 5,
        letters: "TIS-25",
        owner: "Chris"
      },
      {
        id: 2,
        desc: "Create 90 day plans for all departments in the Mars Office",
        name: "LOCAL MARS OFFICE",
        color: "Orange",
        state: 2,
        upArrow: 0,
        number: 9,
        letters: "TIS-12",
        owner: "NA"
      },
      {
        id: 3,
        desc: "Engage Saturn's Rings Resort as a preferred provider",
        name: "SPACE TRAVEL PARTERNERS",
        color: "Yellow",
        state: 2,
        upArrow: 2,
        number: 3,
        letters: "TIS-17",
        owner: "Sam"
      },
      {
        id: 4,
        desc: "Requesting available flights is now taking > 5 seconds",
        name: "SEESPACEEZ PLUS",
        color: "Blue",
        state: 3,
        upArrow: 2,
        number: 3,
        letters: "TIS-8",
        owner: "John"
      }
    ]
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div class="row">
            <SidebarMain />
            <main role="main" class="col-md-2 ml-sm-auto col-lg-10 px-4">
              <Header />
              <SubNavbar />
              <div class="container">
                <div class="card-deck mb-3 text-center">
                  <div class="card mb-4 shadow-sm">
                    <p>TO DO</p>
                    {this.state.posts.map(post => (
                      <Post
                        key={post.id}
                        desc={post.desc}
                        name={post.name}
                        color={post.color}
                        state={post.state}
                        upArrow={post.upArrow}
                        number={post.number}
                        letters={post.letters}
                        owner={post.owner}
                      />
                    ))}
                  </div>

                  <div class="card mb-4 shadow-sm">
                    <p>IN PROGRESS</p>
                    {this.state.posts.map(post => (
                      <Post
                        key={post.id}
                        desc={post.desc}
                        name={post.name}
                        color={post.color}
                        state={post.state}
                        upArrow={post.upArrow}
                        number={post.number}
                        letters={post.letters}
                        owner={post.owner}
                      />
                    ))}
                  </div>

                  <div class="card mb-4 shadow-sm">
                    <p>CODE REVIEW</p>
                    {this.state.posts.map(post => (
                      <Post
                        key={post.id}
                        desc={post.desc}
                        name={post.name}
                        color={post.color}
                        state={post.state}
                        upArrow={post.upArrow}
                        number={post.number}
                        letters={post.letters}
                        owner={post.owner}
                      />
                    ))}
                  </div>

                  <div class="card mb-4 shadow-sm">
                    <p>DONE</p>
                    {this.state.posts.map(post => (
                      <Post
                        key={post.id}
                        desc={post.desc}
                        name={post.name}
                        color={post.color}
                        state={post.state}
                        upArrow={post.upArrow}
                        number={post.number}
                        letters={post.letters}
                        owner={post.owner}
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
