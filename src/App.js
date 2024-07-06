import React from "react";
import Navbar from "./component/Navbar.js";
import Client from "./component/Client.js";
import Community from "./component/Community.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Client/>
      <Community/>
    </div>
  );
}

export default App;
