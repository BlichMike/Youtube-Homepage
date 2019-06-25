import React from "react";
import "./App.css";
import TopNav from "./components/topNav/TopNav";
import SideNav from "./components/sideNav/SideNav";
import HomePage from "./components/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <TopNav />
      <SideNav />
      <HomePage />
    </div>
  );
}

export default App;
