import React from "react";

import "app/App.css";
import logo from "app/logo.svg";
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import CommentList from "components/CommentList";

function App() {
  return (
    <>
      <Header />

      <CommentModal />

      <CommentList />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </>
  );
}

export default App;
