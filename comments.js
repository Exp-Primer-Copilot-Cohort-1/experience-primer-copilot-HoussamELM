// create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// connect to the database
mongoose.connect('mongodb://localhost:27017/comments');

// read the data from the file
var data = fs.readFileSync('comments.json');

// parse the data
var comments = JSON.parse(data);

// create schema for comments
var commentSchema = new Schema({
    name: String,
    comment: String,
});

// create model for comments
var Comment = mongoose.model('Comment', commentSchema);

// create schema for users
var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

// create model for users
var User = mongoose.model('User', userSchema);

// create schema for posts
var postSchema = new Schema({
    title: String,