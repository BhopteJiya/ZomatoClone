import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile></Profile>} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
