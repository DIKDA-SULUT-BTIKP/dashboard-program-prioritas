import { useState } from "react";
import { data } from "../data/data_kombel.js";
import Pagination from "./Pagination.jsx";

const DataKombel = () => {
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

  const sortedData = [...data];

  if (sortColumn) {
    sortedData.sort((a, b) => {
      if (
        sortColumn === "Jumlah Komunitas" ||
        sortColumn === "Jumlah Webinar" ||
        sortColumn === "Jumlah Anggota Komunitas"
      ) {
        // Parse "Tahun" as numbers for comparison
        const columnA = parseInt(a[sortColumn], 10);
        const columnB = parseInt(b[sortColumn], 10);
        if (sortOrder === "asc") {
          return columnA - columnB;
        } else {
          return columnB - columnA;
        }
      } else {
        // For other columns, use the previous string comparison logic
        const columnA = a[sortColumn].toLowerCase();
        const columnB = b[sortColumn].toLowerCase();
        if (sortOrder === "asc") {
          return columnA.localeCompare(columnB);
        } else {
          return columnB.localeCompare(columnA);
        }
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
              <th className="px-6 py-3 text-center">
                <button
                  onClick={() => handleSort("Kabupaten")}
                  className="flex items-center uppercase"
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
              <th className="px-6 py-3 text-center">
                <button
                  onClick={() => handleSort("Nama Komunitas")}
                  className="flex items-center uppercase"
                >
                  <span>Nama Komunitas</span>
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
              <th className="px-6 py-3 text-center">
                <button
                  onClick={() => handleSort("Jumlah Komunitas")}
                  className="flex items-center uppercase"
                >
                  <span>Jumlah Komunitas</span>
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
              <th className="px-6 py-3 text-center">
                <button
                  onClick={() => handleSort("Jumlah Webinar")}
                  className="flex items-center uppercase"
                >
                  <span>Jumlah Webinar</span>
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
              <th className="px-6 py-3 text-center">
                <button
                  onClick={() => handleSort("Jumlah Anggota Komunitas")}
                  className="flex items-center uppercase"
                >
                  <span>Jumlah Anggota Komunitas</span>
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
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr className="bg-white border-b" key={index}>
                <td className="p-4 text-center border">{item["Kabupaten"]}</td>
                <td className="p-4 text-center border">
                  {item["Nama Komunitas"]}
                </td>
                <td className="p-4 text-center border">
                  {item["Jumlah Komunitas"]}
                </td>
                <td className="p-4 text-center border">
                  {item["Jumlah Webinar"]}
                </td>
                <td className="p-4 text-center border">
                  {item["Jumlah Anggota Komunitas"]}
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

export default DataKombel;
