import React from "react";
import "./App.scss";
import { About, Banner, Features, Header } from "./components";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <About />
      <Features />
    </div>
  );
}

export default App;
