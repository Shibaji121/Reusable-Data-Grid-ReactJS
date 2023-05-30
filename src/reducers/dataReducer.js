import { FETCH_COMMENTS, FETCH_POSTS, FETCH_USERS } from "../actions/action";

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
    default:
      return state;
  }
}
