const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('../models/employee.js');

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });

    emp.save((err, docs) => {
        if(!err) { req.send(docs); }
        else { console.log('Error in Saving employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    
    var emp = {
        name: req.params.name,
        position: req.params.position,
        office: req.params.office,
        salary: req.params.salary
    };

    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, res ) => {
        if(!err) { req.send(docs); }
        else { console.log('Error in employee update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, res) => {
        if(!err) { req.send(docs); }
        else { console.log('Error in employee delete :' + JSON.stringify(err, undefined, 2)); }
    })
})

module.exports = router;
