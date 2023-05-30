import React, { useState } from "react";

export default function Table(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = props.recordsPerPage;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = props.data.slice(firstIndex, lastIndex);
  const noOfPages = Math.ceil(props.data.length / recordsPerPage);
  const maxPagesToShow = props.maxPagesToShow;
  const totalPages = Math.min(noOfPages, maxPagesToShow);
  const [startPage, setStartPage] = useState(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
    if (currentPage - 1 < startPage) {
      setStartPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== noOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
    if (currentPage + 1 > startPage + maxPagesToShow - 1) {
      setStartPage((prev) => prev + 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleNextSet = () => {
    const nextPage = startPage + maxPagesToShow;
    const lastPage = Math.min(nextPage + maxPagesToShow - 1, noOfPages);
    setCurrentPage(nextPage);
    setStartPage(nextPage);
    setStartPage(lastPage - maxPagesToShow + 1);
  };

  const handlePreviousSet = () => {
    const previousPage = startPage - maxPagesToShow;
    const newStartPage = Math.max(previousPage, 1);
    setCurrentPage(newStartPage);
    setStartPage(newStartPage);
  };

  return (
    <div className="table-responsive table-component">
      <table className="table align-middle table-bordered border-primary">
        <thead>
          <tr>
            {props.columns.map((col, i) => (
              <th scope="col" key={i}>
                {col.field.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((row, i) => (
            <tr key={i}>
              {props.columns.map((col, i) => (
                <td key={i}>{row[col.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="d-flex justify-content-evenly">
        <ul className="pagination pagination-lg mb-0">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={prevPage}>
              Prev
            </button>
          </li>

          {startPage > 1 && (
            <li className="page-item">
              <button className="page-link" onClick={handlePreviousSet}>
                &laquo;
              </button>
            </li>
          )}
          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = startPage + index;
            return (
              <li
                className={`page-item ${
                  currentPage === pageNumber ? "active" : ""
                }`}
                key={index}
              >
                <button
                  className="page-link"
                  onClick={() => goToPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
          {startPage + maxPagesToShow <= noOfPages && (
            <li className="page-item">
              <button className="page-link" onClick={handleNextSet}>
                &raquo;
              </button>
            </li>
          )}

          <li
            className={`page-item ${
              currentPage === noOfPages ? "disabled" : ""
            }`}
          >
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
        <div
          className="border border-3 border-primary rounded-3 py-2 px-2"
          style={{ background: "cyan" }}
        >
          Total No. Of Pages: {noOfPages}
        </div>
      </nav>
    </div>
  );
}
