import React, { useState } from "react";
import Navbar from "./nav-bar"
import CardSpace from "./card-space"
import Footer from "./footer"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="space-wrapper">
      <CardSpace />
      </div>
      <div className="app-component">
        <Footer />
      </div>
    </div>
  );
}
