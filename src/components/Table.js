import React, { useState } from "react";

export default function Table(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = props.data.slice(firstIndex, lastIndex);
  const noOfPages = Math.ceil(props.data.length / recordsPerPage);
  const numbers = [...Array(noOfPages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== noOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="table-responsive">
      <table className="table align-middle table-bordered border-primary">
        <thead>
          <tr>
            {props.columns.map((col, i) => {
              return (
                <th scope="col" key={i}>
                  {col.field.toUpperCase()}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {records.map((row, i) => {
            return (
              <tr key={i}>
                {props.columns.map((col, i) => {
                  return <td key={i}>{row[col.field]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={prevPage}
              disabled={currentPage === 1 ? true : false}
            >
              Prev
            </button>
          </li>
          {numbers.map((n, i) => {
            return (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <button
                  className="page-link"
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={nextPage}
              disabled={currentPage === noOfPages ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
