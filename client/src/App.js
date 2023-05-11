import "./App.css";
import Home from "./Views/Home/Home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "./Redux/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Views/Detail/Detail";
import SearchBar from "./Components/SearchBar/SearchBar"
import SearchResults from "./Components/SearchResults/SearchResults";
import CreateActivity from "./Views/CreateActivity/CreateActivity";

function App() {
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCountries.length === 0) {
      dispatch(getAllCountries());
    }
  }, [dispatch, allCountries]);

  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <SearchBar />
      <CreateActivity/>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/detail/:id" component={Detail} />
          <Route path="/home/search" component={SearchResults}/>
        </Switch>
      </Router>
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
