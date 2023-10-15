import React, { useState } from "react";
import { dataSMK } from "../data/data_smk.js";
import Pagination from "./Pagination.jsx";

const DataSMK = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 10;

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSort = (column) => {
    setSortColumn(column);
    toggleSortOrder();
  };

  const sortedData = [...dataSMK];

  if (sortColumn) {
    sortedData.sort((a, b) => {
      const columnA = a[sortColumn].toLowerCase();
      const columnB = b[sortColumn].toLowerCase();
      if (sortOrder === "asc") {
        return columnA.localeCompare(columnB);
      } else {
        return columnB.localeCompare(columnA);
      }
    });
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
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
                <button
                  onClick={() => handleSort("Nama Sekolah")}
                  className="flex items-center"
                >
                  <span>Nama Sekolah</span>
                  <span>
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </span>
                </button>
              </th>
              <th scope="col" rowSpan={2} className="px-6 py-3">
                <button
                  onClick={() => handleSort("Kabupaten/Kota")}
                  className="flex items-center"
                >
                  <span>Kabupaten/Kota</span>
                  <span>
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </span>
                </button>
              </th>
            </tr>
            <tr>
              <th className="px-6 py-3 text-center">Tipe Akun</th>
              <th className="px-6 py-3 text-center">Jumlah Akun Tersedia</th>
              <th className="px-6 py-3 text-center">Total Akun Aktivasi</th>
              <th className="px-6 py-3 text-center">% Aktivasi</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr className="bg-white border-b" key={index}>
                <td className="p-4 text-center border">
                  {item["Nama Sekolah"]}
                </td>
                <td className="p-4 text-center border">
                  {item["Kabupaten/Kota"]}
                </td>
                <td className="border">
                  <div className="grid items-center p-4 text-center place-items-center gap-y-7">
                    {item.Akun.map((akun, akunIndex) => (
                      <React.Fragment key={akunIndex}>
                        <tr className="text-center">
                          <div className="w-full text-center">
                            {akun["Tipe Akun"] === "PTK Teacher" ? "Guru" : ""}
                            {akun["Tipe Akun"] === "PTK Admin" ? "Admin" : ""}
                            {akun["Tipe Akun"] === "Peserta Didik"
                              ? "Siswa"
                              : ""}
                          </div>
                        </tr>
                      </React.Fragment>
                    ))}
                  </div>
                </td>
                <td className="border">
                  <div className="grid items-center p-4 text-center place-items-center gap-y-7">
                    {item.Akun.map((akun, akunIndex) => (
                      <React.Fragment key={akunIndex}>
                        <tr className="">
                          <td className="w-full text-center">
                            {akun["Jumlah Akun Tersedia"]}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </div>
                </td>

                <td className="border">
                  <div className="grid items-center p-4 text-center place-items-center gap-y-7">
                    {item.Akun.map((akun, akunIndex) => (
                      <React.Fragment key={akunIndex}>
                        <tr>
                          <td className="text-center ">
                            {akun["Total Akun Aktivasi"]}
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </div>
                </td>
                <td className="border">
                  <div className="grid items-center p-4 text-center place-items-center gap-y-7">
                    {item.Akun.map((akun, akunIndex) => (
                      <React.Fragment key={akunIndex}>
                        <tr>
                          <td className="text-center ">
                            <div
                              className={`${getAktivasi(
                                (akun["% Aktivasi"] * 100).toFixed()
                              )} text-white text-xs font-medium w-16 rounded text-center`}
                              title={`Aktivasi: ${(
                                akun["% Aktivasi"] * 100
                              ).toFixed()} % `}
                            >
                              {(akun["% Aktivasi"] * 100).toFixed()} %
                            </div>
                            <div className="font-semibold text-center">
                              <span>
                                {getStatus(
                                  (akun["% Aktivasi"] * 100).toFixed()
                                )}
                              </span>
                            </div>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalItems={sortedData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default DataSMK;
