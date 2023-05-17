import { NavLink } from "react-router-dom";
import validate from "./validate";
import React from "react";


const Login = (props) => {
  
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError(
      validate({ ...state, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    props.login(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>

        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <p>{error.email}</p>

        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <p>{error.password}</p>

        <button
          disabled={
            !state.email ||
            !state.password ||
            error.email ||
            error.password
          }
          type="submit"
        >
          Submit
        </button>

        <p>Do not you have an account yet? <NavLink to='/register' >Sign up here</NavLink></p>
      </form>
    </div>
  );
};

export default Login;
