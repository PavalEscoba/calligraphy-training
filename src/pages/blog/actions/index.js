import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const uniqIds = _.uniq(_.map(getState().posts, 'userId'));
  uniqIds.forEach(async(id) => {
    return await dispatch(fetchUser(id));
  });
};

// approach to solve multiple request issue
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());

//   const userIds = _.uniq(_.map(getState().posts, "userId"));
//   userIds.forEach((id) => dispatch(fetchUser(id)));
// };

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`users/${id}`);

  dispatch({ type: "FETCH_USERS", payload: response.data });
};

// another approach to solve multiple request issue
// export const fetchUser = (id) => async (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`users/${id}`);

//   dispatch({ type: "FETCH_USERS", payload: response.data });
// });
