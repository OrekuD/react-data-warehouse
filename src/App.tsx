import React from "react";
import "./App.scss";
import { About, Banner, Features, Footer, Header } from "./components";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Banner />
        <About />
        <Features />
      </div>
      <Footer />
    </>
  );
}

export default App;
