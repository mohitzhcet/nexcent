import React from "react";
import Navbar from "./component/Navbar.js";
import Client from "./component/Client.js";
import Community from "./component/Community.js";
import Hero from "./component/Hero.js";
import Herobanner from "./component/Herobanner.js";
import Footer from "./component/Footer.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero/>
      <Herobanner/>
      <Client/>
      <Community/>
      <Footer/>
    </div>
  );
}

export default App;
