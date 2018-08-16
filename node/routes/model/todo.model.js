var mongoose = require("mongoose");
mongoose.connect('mongodb://vinodh:vinodh@ds255309.mlab.com:55309/techdb');
//mongoose.connect('mongodb://localhost:27017/techDB');
// create instance of Schema
var mongoSchema = mongoose.Schema;
// create schema
var todoSchema = {
    "title": String,
    "Details": String,
    "AssignTo": String,
    "AssignedBy": String
};
module.exports = mongoose.model('todo', todoSchema, 'todolists');