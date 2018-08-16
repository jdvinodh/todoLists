var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var todoOp = require("./model/todo.model");
var router = express.Router();
var cors = require('cors');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database'); // get db config file
var User = require('./model/user'); // get the mongoose model
var jwt = require('jwt-simple');
var port = process.env.PORT || 8080;

var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
var url = "mongodb://vinodh:vinodh@ds255309.mlab.com:55309/techdb";

router.get('/', function (req, res, next) {
    res.render('index');
});

//for cross domain origin
app.use(cors());

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// Use the passport package in our application
app.use(passport.initialize());

// route to authenticate a user (POST http://localhost:3000/authenticate)
router.post('/authenticate', function (req, res) {
    User.findOne({
        name: req.body.name
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            return res.json({ success: false, msg: 'User not found.' });
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {

                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.encode(user, config.secret);
                    return res.json({ success: true, token: 'JWT ' + token, userDetails: user});
                } else {
                    return res.json({ success: false, msg: 'Wrong password.' });
                }
            });
        }
    });
});

// TodoLists

router.route("/getTodoLists").get(function (req, res) {
    var response = {};
    todoOp.find({}, function (err, data) {
        if (err) {
            response = { "error": true, "message": "Error fetching data" };
        } else {
            response = { "message": data };
        }
        res.json(response);
    });
});

// delete TodoLists

router.post('/deleteTodo', function (req, res, next) {

    MongoClient.connect(url, function (err, db) {
        var dbo = db.db("techdb");
        dbo.collection("todolists").remove({  title: req.body.title }, function (err, obj) {
            if (err) throw err;
            db.close();
        });
        res.status(200).send({ success: "deleted successfully" });
    });
});

// create todo

router.post('/createTodo', function (req, res, next) {
    var item = {
        title: req.body.title,
        details: req.body.details,
        assignTo: req.body.assignTo,
        assignedBy: req.body.assignedBy,
    };
    MongoClient.connect(url, function (err, db) {
        if (err) {
        }
        var dbo = db.db("techdb");

            dbo.collection('todolists').insertOne(item, function (err, result) {
                if (err) {
                    return res.status(500).send(err);
                  }
                  else {
                    res.status(200).send({ success: "saved successfully" });
                  }
            });
    });
   
});

module.exports = router;
