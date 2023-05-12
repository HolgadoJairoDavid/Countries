import { useNavigate, NavLink } from "react-router-dom";
import validate from "./validate";
import React from "react";
import axios from "axios";

const Register = (props) => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError(validate({ ...state, [event.target.name]: event.target.value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = state;
    const URL = "http://localhost:3001/register";
    const { data } = await axios.post(URL, { email, password });
    
    if (data.result === "Successful registration") {
      navigate("/login");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome!</h1>

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

        <label htmlFor="password">Confirm password </label>
        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
        />
        <p>{error.confirmPassword}</p>

        <button
          disabled={
            !state.email ||
            !state.password ||
            !state.confirmPassword ||
            error.email ||
            error.password ||
            error.confirmPassword
          }
          type="submit"
        >
          Submit
        </button>
        <p>Do you already have an account? <NavLink to='/login' >Sign in here</NavLink></p>
      </form>
    </div>
  );
};

export default Register;
