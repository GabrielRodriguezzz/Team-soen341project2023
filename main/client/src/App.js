import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function App() {
  /* 
    This is where the main application exists. 
    In react, you can write HTML-like code in a javascript file.
    <div> is used to wrap blocks together to serve as a single element </div>
  */

    const [job_title, set_job_title] = useState('')
    const [job_description, set_job_description] = useState('')  
    const [jobList, set_jobList] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      set_jobList(response.data)
    })
  })

  const submitReview = () =>{
  Axios.post('http://localhost:3001/api/insert', {
    job_title: job_title, 
    job_description: job_description
  }).then(()=>{
    alert('successful insert')
  })
  };


  return (
    <div className="App">
      <h1>THE NEW INDEED</h1>

      <div className="jobApp">
        <label>Job Title:</label>
        <input type="text" name="jobTitle" onChange={(e)=>{
          set_job_title(e.target.value)
        }} />
        <label>Job Description:</label>
        <input type="text" name="jobDescription" onChange={(e)=>{
          set_job_description(e.target.value)
        }} />        


        <button onClick={submitReview}>Submit</button>



      </div>
    </div>
  );
}

export default App;
