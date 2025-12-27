import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Help from "./Pages/Help";
import Setting from "./Pages/Setting";
import AllDetailedCollection from "./Pages/AllDetailedCollection";
import RestaurantDetail from "./Pages/RestaurantDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Home Page */}
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/setting" element={<Setting></Setting>} />
        <Route path="/detailedcollect" element={<AllDetailedCollection/>}  ></Route>
        <Route path="/resdetail/:id" element={<RestaurantDetail/>} ></Route>


      </Routes>
    </BrowserRouter>
  );
};

export default App;
