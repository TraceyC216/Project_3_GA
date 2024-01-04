const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    user: {type: mongoose.ObjectId, required: true},
    img: {type: [String], required: false},
    name: {type: String, required: true},
    repolink: {type: String, required: true},
    deployedlink: {type: String, required: true},
    techused: {type: [String], required: true},
    description: {type: String, required: false},
    tags: {type: [String], required: true},

});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project