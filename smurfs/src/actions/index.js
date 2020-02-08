import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAIL = "SMURF_FAIL";

export const getData = () => {
  const get = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    get
      .then(res => {
        console.log("smurf data", res);
        dispatch({ type: SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: SMURF_FAIL, payload: err }));
  };
};

export const POST_SMURF = "POST_SMURF";
export const POST_FAIL = "POST_FAIL";

export const postData = data => {
  const post = axios.post("http://localhost:3333/smurfs", data);
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    post
      .then(res => {
        console.log(res);
        dispatch({ type: POST_SMURF, payload: res.data });
      })
      .catch(err => dispatch({ type: POST_FAIL, payload: err }));
  };
};

export const NEW_ARRAY = "NEW_ARRAY";
export const DELETE_FAIL = "DELETE_FAIL";

export const deleteSmurf = data => {
  const destroy = axios.delete(`http://localhost:3333/smurfs/${data}`);
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    destroy
      .then(res => {
        console.log(res);
        dispatch({ type: NEW_ARRAY, payload: res.data });
      })
      .catch(err => dispatch({ type: DELETE_FAIL, payload: err }));
  };
};
