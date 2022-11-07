import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header className="header"></header>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
          alt="user-bg"
        />
        <div className="user-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png"
            alt="user avatar"
          />
          <div className="user-details">user details</div>
        </div>
        <div className="posts-container">
          <div className="create-post-container">create post</div>
          <div className="posts">
            <div className="post">post 1</div>
            <div className="post">post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
