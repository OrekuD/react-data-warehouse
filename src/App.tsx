import React from "react";
import "./App.scss";
import { About, Banner, Header } from "./components";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <About />
    </div>
  );
}

export default App;
