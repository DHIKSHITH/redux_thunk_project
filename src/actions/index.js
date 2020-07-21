import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPostAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userId = _.uniq(_.map(getState().posts, "userId"));
  userId.forEach(id => dispatch(fetchUsers(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUsers = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
};
