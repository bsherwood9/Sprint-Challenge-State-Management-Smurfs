import React, { useState } from "react";
import { connect } from "react-redux";
import { postData } from "../actions";
import "./App.css";

const Form = props => {
  const [smurfData, setSmurfData] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChange = e => {
    setSmurfData({
      ...smurfData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.postData(smurfData);
    setSmurfData({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <div className="fields">
          <label>Name:</label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            value={smurfData.name}
          />
          <label>Age:</label>
          <input
            name="age"
            onChange={handleChange}
            type="number"
            value={smurfData.age}
          />
          <label>Height:</label>
          <input
            name="height"
            onChange={handleChange}
            type="text"
            value={smurfData.height}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  { postData }
)(Form);
