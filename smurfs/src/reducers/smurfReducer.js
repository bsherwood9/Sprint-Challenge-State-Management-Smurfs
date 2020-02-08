import {
  SMURF_SUCCESS,
  SMURF_FAIL,
  FETCH_DATA,
  POST_SMURF,
  POST_FAIL,
  DELETE_FAIL,
  NEW_ARRAY
} from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true
      };
    case SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    case SMURF_FAIL:
      return {
        ...state,
        error: "I'm sorry. We have encountered a problem",
        isFetching: false
      };
    case POST_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    case POST_FAIL:
      return {
        ...state,
        error:
          "I'm sorry. Your smurf was not found worthy of creation. Try again.",
        isFetching: false
      };
    case DELETE_FAIL:
      return {
        ...state,
        error: "Unable to delete this smurf.",
        isFetching: false
      };
    case NEW_ARRAY:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
