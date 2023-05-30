import {
  FETCH_COMMENTS,
  FETCH_POSTS,
  FETCH_USERS,
  SORT_DATA,
} from "../actions/action";

const initialState = {
  data: [],
  column: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      var columnData = [
        { field: "id" },
        { field: "name" },
        { field: "username" },
        { field: "email" },
        { field: "phone" },
      ];
      return {
        ...state,
        data: action.users,
        column: columnData,
      };
    case FETCH_POSTS:
      columnData = [
        { field: "userId" },
        { field: "id" },
        { field: "title" },
        { field: "body" },
      ];
      return {
        ...state,
        data: action.posts,
        column: columnData,
      };
    case FETCH_COMMENTS:
      columnData = [
        { field: "postId" },
        { field: "id" },
        { field: "name" },
        { field: "email" },
        { field: "body" },
      ];
      return {
        ...state,
        data: action.comments,
        column: columnData,
      };
    case SORT_DATA:
      let updatedData = state.data.sort((a, b) => {
        const aValue = a[action.sortColumn];
        const bValue = b[action.sortColumn];
        if (typeof aValue === "string" && typeof bValue === "string") {
          return action.sortOrder === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        return action.sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      });
      return {
        ...state,
        data: updatedData,
      };
    default:
      return state;
  }
}
