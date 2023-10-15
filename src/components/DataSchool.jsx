import { useState } from "react";
import { dataSchool } from "../data/data_sekolah.js";
import Pagination from "./Pagination.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2"; // Import the Bar component
import Accordion from "./Accordion.jsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DataSchool = () => {
  const [selected, setSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state
  const itemsPerPage = 10; // Set the number of items per page

  // Filter the data based on the 'selected' state and search query
  const filteredData = dataSchool.filter((item) => {
    // Filter by "Sudah Selesai Eksplorasi" and search query
    return (
      (selected
        ? item["Sudah Selesai Eksplorasi"] === "Sudah"
        : item["Sudah Selesai Eksplorasi"] === "Belum") &&
      item["Nama Sekolah"].toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Create separate arrays for "Sudah" and "Belum" data
  const sudahData = dataSchool.filter(
    (item) => item["Sudah Selesai Eksplorasi"] === "Sudah"
  );

  const belumData = dataSchool.filter(
    (item) => item["Sudah Selesai Eksplorasi"] === "Belum"
  );
  // Get the length of "Sudah" and "Belum" data
  const lengthSudah = sudahData.length;
  const lengthBelum = belumData.length;

  // Define data for the bar chart
  const chartData = {
    labels: ["Sudah Selesai Ekspolrasi", "Belum Selesai Ekspolrasi"],
    datasets: [
      {
        label: "Data Sekolah",
        data: [lengthSudah, lengthBelum],
        backgroundColor: ["#f87171", "#dc2626"], // Bar colors
      },
    ],
  };

  // Calculate the starting and ending index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page data
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };
  return (
    <>
      <Accordion>
        <Bar data={chartData} width={200} height={200} />
      </Accordion>
      <div className="flex items-center justify-center mt-4">
        <div className="sm:w-96 lg:w-[480px] xl:w-[800px]">
          <div className="flex items-center justify-center w-full py-2 mx-auto font-semibold bg-white border rounded-full">
            <div
              onClick={() => setSelected(false)}
              className={`text-center px-6 py-2 ${
                selected === false
                  ? "bg-[#C81E1E] text-white"
                  : "bg-white text-[#C81E1E]"
              } rounded-3xl xl:px-11 cursor-pointer`}
            >
              Belum Selesai Eksplorasi
            </div>
            <div
              onClick={() => setSelected(true)}
              className={`text-center px-6 py-2 ${
                selected === true
                  ? "bg-[#C81E1E] text-white"
                  : "bg-white text-[#C81E1E]"
              } rounded-3xl xl:px-11 cursor-pointer`}
            >
              Sudah Selesai Eksplorasi
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 xl:flex xl:justify-end">
        <input
          type="text"
          placeholder="Cari berdasarkan nama sekolah"
          className="w-full p-2 mb-4 border rounded-lg xl:w-1/2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="relative p-2 mt-4 overflow-x-auto shadow-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Sekolah
              </th>
              <th scope="col" className="px-6 py-3">
                Kabupaten/Kota
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr className="bg-white border-b" key={item.id}>
                <td className="px-6 py-4">{item["Nama Sekolah"]}</td>
                <td className="px-6 py-4">{item["Kabupaten/Kota"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default DataSchool;
