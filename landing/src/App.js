import About from "./comopnents/About/About";
import Header from "./comopnents/Header/Header";
import React from "react";
import Roadmap from "./comopnents/Roadmap/Roadmap";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Banner /> */}
      <About />
      <Roadmap />
    </div>
  );
}

export default App;
