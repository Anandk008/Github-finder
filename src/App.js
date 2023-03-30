import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layought/NavBar";
import Footer from "./components/layought/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar title={"Github Finder"} />
        <main className="container mx-auto pb-12 px-3">Content</main>
        <Footer />
      </div>
      <Routes>
        <Route exact path="/" element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;
