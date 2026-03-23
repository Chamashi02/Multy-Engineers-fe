import React from "react";
import Header from "./components/Header";  
import Footer from "./components/Footer";
import Home from "./pages/Home"; 
import AboutUs from "./pages/AboutUs";
import "../src/css/multy.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="multy-app">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>

      <Footer />
    
    </div>
  );
}
export default App;