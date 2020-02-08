import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData, deleteSmurf } from "../actions";
import Form from "./Form";
import "./App.css";

const App = props => {
  useEffect(() => {
    props.getData();
  }, []);

  const handleDelete = id => {
    props.deleteSmurf(id);
  };

  return (
    <div>
      <div className="App">
        <h1 className="title">WELCOME TO SMURF VILLAGE</h1>
        <Form />
      </div>
      <div className="smurfList">
        {props.isFetching ? (
          <h3>Processing...</h3>
        ) : (
          props.smurfs.map(item => (
            <div className="card" key={item.id}>
              <h3 className="name">{item.name}</h3>
              <h3>Age: {item.age}</h3>
              <h3>Height: {item.height}</h3>

              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))
        )}
        {props.error ? <h1 className="error">{props.error}</h1> : null}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData, deleteSmurf }
)(App);
