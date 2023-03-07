import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import TestImage from "./pages/TestImage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/image" element={<TestImage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
