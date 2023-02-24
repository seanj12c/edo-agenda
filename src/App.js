// @ts-nocheck
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mockup from "./components/Mockup";
import EdoFeatures from "./components/EdoFeatures";
import EdoImages from "./components/EdoImages";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Mockup />
      <EdoFeatures />
      <EdoImages />
      <Experience />
    </div>
  );
}

export default App;
