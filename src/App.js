import React from "react";
import { BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from "./components/layought/NavBar";
import Footer from "./components/layought/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="container mx-auto pb-12 px-3">Content</main>
        <Footer />
      </div>
      <Routes exact path="/" Component={<App />} />
    </Router>
  );
}

export default App;
