import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App bg-white dark:bg-slate-950 transition-colors duration-500">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
