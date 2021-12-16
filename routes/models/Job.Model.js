const mongoose = require("mongoose")
const JobSchema = require('../schema/Jobs.Schema').JobSchema

const JobModel = mongoose.model("Jobs", JobSchema);

function insertJob(job) {
    return JobModel.create(job);
}

function getAllJobs() {
    return JobModel.find().exec();
}

function findJobByName(title) {
    return JobModel.find({title: title}).exec();
}

function findJobById(id) {
    return JobModel.findById(id).exec();
}

function findJobByOwner(owner) {
    return JobModel.find({
        owner: owner
    }).exec();
}

function findJobByPartialName(partialUserString) {
    return JobModel.find({ "title": { "$regex": partialUserString, "$options": "i" } }).exec();
}

// Make sure to export a function after you create it!
module.exports = {
    insertJob,
    findJobByName,
    getAllJobs,
    findJobById,
    findJobByOwner,
    findJobByPartialName,
};