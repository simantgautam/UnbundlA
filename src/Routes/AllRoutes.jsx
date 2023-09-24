import React from "react";
import { Route, Routes } from "react-router-dom";
import BoxCard from "../Components/BoxCard";
import Pack from "../Components/Pack";
import Home from "../Home";

function AllRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Pack />} />
    </Routes>
  );
}

export default AllRoutes;
