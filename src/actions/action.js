import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const SORT_DATA = "SORT_DATA";

export const handleFetchUser = () => {
  return (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((response) => {
      const fetchedData = response.data;
      dispatch(fetchUsers(fetchedData));
    });
  };
};

export const handleFetchPosts = () => {
  return (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url).then((response) => {
      const fetchedData = response.data;
      dispatch(fetchPosts(fetchedData));
    });
  };
};

export const handleFetchComments = () => {
  return (dispatch) => {
    const url =
      "https://jsonplaceholder.typicode.com/comments?_start=0&_end=100";
    axios.get(url).then((response) => {
      const fetchedData = response.data;
      dispatch(fetchComments(fetchedData));
    });
  };
};

export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    users,
  };
};

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POSTS,
    posts,
  };
};

export const fetchComments = (comments) => {
  return {
    type: FETCH_COMMENTS,
    comments,
  };
};

export const sortRecords = (sortColumn, sortOrder) => {
  return {
    type: SORT_DATA,
    sortColumn,
    sortOrder,
  };
};
