import "./App.css";
import {
  Home,
  Detail,
  SearchBar,
  SearchResults,
  CreateActivity,
  Landing,
  Login,
  Register
} from "./Views/index";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, setAccess } from "./Redux/actions";
import { Routes, Route } from "react-router-dom";

function App() {
  
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const allCountries = useSelector((state) => state.allCountries);
  const access = useSelector((state) => state.access);
  const dispatch = useDispatch();

  const login = async (state) => {
    const { email, password } = state;
    const URL = `http://localhost:3001/login?email=${email}&password=${password}`;
    try {
      const response = await axios.get(URL);
      const { access } = response.data;

      dispatch(setAccess(access));

      access && navigate("/home");

      !access && window.alert("Los datos ingresados son incorrectos");
    } catch (error) {
      window.alert("No estás logueado");
    }
  };

  useEffect(() => {
    !access &&
      (pathname === "/home" ||
        pathname === "/create" ||
        pathname === "/home/search") &&
      navigate("/login");

    if (allCountries.length === 0) {
      dispatch(getAllCountries());
    }

  }, [dispatch, allCountries, access, navigate, pathname]);

  return (
    <div className="App">
      {pathname === "/" && <Landing />}

      {(pathname === "/home" || pathname === "/home/search") && <SearchBar />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateActivity />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';

// function FileUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     fetch('/api/upload', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit">Upload</button>
//     </form>
//   );
// }

// export default FileUpload;
