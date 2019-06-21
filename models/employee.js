const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required: true
    },
    position: { type: String},
    office: { type: String },
    salary: { type: Number}
});

module.exports = { Employee }; 