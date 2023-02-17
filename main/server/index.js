const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "soen_341_database",
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT * FROM soen_341_database.jobs"
    db.query(sqlSelect, (err,result)=>{
    res.send(result)    
    })
}) 

app.post("/api/insert", (req, res)=>{ 

    const job_title = req.body.job_title;
    const job_description = req.body.job_description;


    const sqlInsert = 
    "INSERT INTO jobs (job_title, job_description) VALUES (?,?)"
    db.query(sqlInsert,[job_title,job_description], (err,result)=>{})
    console.log(err)
    })

app.get('/', (req, res)=>{ 
//The '/' is the url. This function gets called when people want to go to that url.
//Below is test code to see if the database works  
/*
    const sqlInsert = 
    "INSERT INTO jobs (job_title, job_description) VALUES ('Software Engineer', 'Get coding boi');"
  
  
    db.query(sqlInsert, (err, result)=>{
        if (err) {
            console.log(err);
          } else {
            res.send('Inserted the data');
          }
    })
*/
})

app.listen(3001, ()=>{
    console.log("running on port 3001")
})