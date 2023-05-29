import React, { useState, useEffect } from "react";

// Data-Grid Component
const DataGrid = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAttribute, setFilterAttribute] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Apply pagination, filtering, and sorting to the data
  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) =>
      filterAttribute && filterValue
        ? item[filterAttribute] === filterValue
        : true
    )
    .sort((a, b) => {
      if (sortColumn) {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];

        if (typeof valueA === "string" && typeof valueB === "string") {
          return sortOrder === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }

        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      }

      return 0;
    });

  // Get the current page of data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / pageSize);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Fetch data from the JSON Placeholder API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        // Store the data in state or pass it as a prop to the DataGrid component
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Pagination */}
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
        <span>Total Pages: {totalPages}</span>
      </div>

      {/* Global Search */}
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter */}
      <div>
        <select
          value={filterAttribute}
          onChange={(e) => setFilterAttribute(e.target.value)}
        >
          <option value="">Select Attribute</option>
          {/* Options for filter attributes */}
        </select>
        <input
          type="text"
          placeholder="Filter Value"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>

      {/* Sorting */}
      <table>
        <thead>
          <tr>{/* Table headers */}</tr>
        </thead>
        <tbody>{/* Table rows */}</tbody>
      </table>
    </div>
  );
};

export default DataGrid;
