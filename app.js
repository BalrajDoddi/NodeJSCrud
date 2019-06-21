const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var emloyeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());

const port =  3000;
app.listen(port, () => {
    console.log("Server started at port no : " + port)
});

// localhost:3000/employee
app.use('/employees', emloyeeController);