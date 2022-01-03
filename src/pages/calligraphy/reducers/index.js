import { combineReducers } from "redux";

export const nibWidthReducer = (nibWidth = 3.6, action) => {
  switch (action.type) {
    case "SET_NIB_WIDTH":
      return action.payload;
    default:
      return nibWidth;
  }
};

export default combineReducers({
  nibWidth: nibWidthReducer,
});
