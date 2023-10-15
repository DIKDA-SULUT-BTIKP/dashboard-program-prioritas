import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import DataSchool from "./components/DataSchool";
import DataSMK from "./components/DataSMK";
import DataSMA from "./components/DataSMA";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mt-[100px] px-10 py-4">
          <Routes>
            <Route path="/" element={<DataSchool />} />
            <Route path="/sma" element={<DataSMA />} />
            <Route path="/smk" element={<DataSMK />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
