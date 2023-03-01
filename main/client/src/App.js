import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function App() {
  /* 
    This is where the main application exists. 
    In react, you can write HTML-like code in a javascript file.
    <div> is used to wrap blocks together to serve as a single element </div>
  */
 
  return (
    <div className="App">
      <h1>THE NEW INDEED</h1>

      <div className="jobApp">
        <label>Job Title:</label>
        <input type="text" name="jobTitle" onChange={(e)=>{
          
        }} />
        <label>Job Description:</label>
        <input type="text" name="jobDescription" onChange={(e)=>{
          
        }} />        


        <button >Submit</button>

      </div>
    </div>
  );
}

export default App;
