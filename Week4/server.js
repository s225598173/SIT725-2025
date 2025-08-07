var express = require('express');
const mongoose = require('mongoose');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

const ProjectSchema = new mongoose.Schema({
title: String,
image: String,
link: String,
description: String,
});
const Project = mongoose.model('Project', ProjectSchema);


app.listen(port, () => {
    console.log("Server is running on port " + port);
});