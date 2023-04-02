import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layought/NavBar";
import Footer from "./components/layought/Footer";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layought/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <NavBar />                                                           
            <main className="container mx-auto pb-12 px-3">
              <Alert />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
