import React from "react";
import "./App.css";
import Hedaer from "./components/hedaer/Header";
import Post from "./components/post/Post";

function App() {
  return (
    <div className="container">
      <Hedaer />
      <Post />
    </div>
  );
}

export default App;
