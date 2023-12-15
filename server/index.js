const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lab11",
})

app.get("/", (req, res) => {
    const sql = "Select * from employee";
    db.query(sql, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
});

app.post('/create', (req, res) => {
    const sql = 'insert into employee(`first_name`,`last_name`) values(?)';
    const values = [
        req.body.firstName,
        req.body.lastName
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json('error');
        return res.json(data);
    });
});


app.use(express.json());
app.use(cors);