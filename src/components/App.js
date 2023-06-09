import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  filterData,
  handleFetchComments,
  handleFetchPosts,
  handleFetchUser,
} from "../actions/action";

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const recordsPerPage = 5;
  const maxPagesToShow = 5;

  useEffect(() => {
    dispatch(handleFetchUser());
  }, [dispatch]);

  const data = useSelector((state) => state.dataReducer.data);
  const columns = useSelector((state) => state.dataReducer.column);

  return (
    <div className="App">
      <h1 className="text-center">Re-Usable Data Grid</h1>
      <div className="btn-group btn-group-lg d-flex justify-content-center mb-3 mx-5">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(handleFetchUser())}
        >
          Users
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(handleFetchPosts())}
        >
          Posts
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(handleFetchComments())}
        >
          Comments
        </button>
      </div>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(filterData(query))}
        >
          search
        </button>
      </div>
      <Table
        data={data}
        columns={columns}
        recordsPerPage={recordsPerPage}
        maxPagesToShow={maxPagesToShow}
      />
    </div>
  );
}

export default App;
