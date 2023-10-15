import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import DataSchool from "./components/DataSchool";
import Progress from "./components/Progress";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mt-[100px] px-10 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raport" element={<DataSchool />} />
            <Route path="/school" element={<Progress />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
