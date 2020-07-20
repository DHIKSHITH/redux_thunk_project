import { combineReducers } from "redux";
import PostReducer from "./PostsReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  posts: PostReducer,
  users: UserReducer
});
