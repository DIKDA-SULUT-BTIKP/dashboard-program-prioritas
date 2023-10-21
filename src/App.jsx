import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import DataSchool from "./components/DataSchool";
import Progress from "./components/Progress";
import Home from "./components/Home";
import DataVerval from "./components/DataVerval";
import DataKombel from "./components/DataKombel";
import DataPMM from "./components/DataPMM";

function App() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="mt-[180px] px-10 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raport" element={<DataSchool />} />
            <Route path="/school" element={<Progress />} />
            <Route path="/verval" element={<DataVerval />} />
            <Route path="/kombel" element={<DataKombel />} />
            <Route path="/merdeka-belajar" element={<DataPMM />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
