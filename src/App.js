import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/layought/NavBar";
import Footer from "./components/layought/Footer";
import Alert from "./components/layought/Alert";
import About from "./Pages/About";
import Home from "./Pages/Home";
import User from "./Pages/User";
import NotFound from "./Pages/NotFound";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";

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
                <Route path="/user/:login" element={<User /> } />
                <Route path="/notfound" element={<NotFound />} />
                <Route element={<NotFound /> } />
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
