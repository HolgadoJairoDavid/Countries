import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
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
