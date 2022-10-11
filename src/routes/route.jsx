import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Watch from "../pages/Watch";

const Routering = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routering;
