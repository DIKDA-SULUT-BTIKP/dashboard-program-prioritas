import React, { useState } from "react";
import { dataSMK } from "../data/data_smk.js";
import Pagination from "./Pagination.jsx";

const DataSMK = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Add search query state
  const itemsPerPage = 10; // Set the number of items per page

  // Filter the data based on the 'selected' state and search query
  const filteredData = dataSMK.filter((item) => {
    // Filter by "Sudah Selesai Eksplorasi" and search query
    return item["Nama Sekolah"]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

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

  function getAktivasi(aktivasi) {
    if (aktivasi >= 67) {
      return "bg-red-800";
    } else if (aktivasi >= 34) {
      return "bg-red-700";
    } else {
      return "bg-red-600";
    }
  }

  function getStatus(aktivasi) {
    if (aktivasi >= 67) {
      return "Tinggi";
    } else if (aktivasi >= 34) {
      return "Sedang";
    } else {
      return "Rendah";
    }
  }

  return (
    <>
      <div className="xl:flex xl:justify-end">
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
              <th scope="col" rowSpan={2} className="px-6 py-3">
                Nama Sekolah
              </th>
              <th scope="col" rowSpan={2} className="px-6 py-3">
                Kabupaten/Kota
              </th>
              <th className="px-6 py-3 text-center">Data Akun</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr className="bg-white border-b" key={index}>
                <td className="px-6 py-4 border">{item["Nama Sekolah"]}</td>
                <td className="px-6 py-4 border">{item["Kabupaten/Kota"]}</td>
                <td className="px-6 py-4 text-center border">
                  {item.Akun.map((akun, akunIndex) => (
                    <React.Fragment key={akunIndex}>
                      <div className="px-6 py-4 mx-auto w-max">
                        <td className="px-6 py-4 text-center">
                          {akun["Tipe Akun"] === "PTK Teacher" ? "Guru" : ""}
                          {akun["Tipe Akun"] === "PTK Admin" ? "Admin" : ""}
                          {akun["Tipe Akun"] === "Peserta Didik" ? "Siswa" : ""}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {akun["Jumlah Akun Tersedia"]}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {akun["Total Akun Aktivasi"]}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div
                            className={`${getAktivasi(
                              (akun["% Aktivasi"] * 100).toFixed()
                            )} text-white text-xs font-medium w-16 px-2.5 py-0.5 rounded text-center`}
                            title={`Aktivasi: ${(
                              akun["% Aktivasi"] * 100
                            ).toFixed()} % `}
                          >
                            {(akun["% Aktivasi"] * 100).toFixed()} %
                          </div>
                          <div className="font-semibold text-center">
                            <span>
                              {getStatus((akun["% Aktivasi"] * 100).toFixed())}
                            </span>
                          </div>
                        </td>
                      </div>
                    </React.Fragment>
                  ))}
                </td>
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

export default DataSMK;
