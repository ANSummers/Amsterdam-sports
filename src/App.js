import React, { Component } from "react";
import MembersList from ".components/membersList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Amsterdam Sports Inc.</p>
      </header>
      <MembersList></MembersList>
    </div>
  );
}

export default App;
