const Schema = require('mongoose').Schema;

exports.JobSchema = new Schema({
    title: String,
    companyName: String,
    location: String,
    description: String,
    email: String,
    postingDate: {
        type: Date,
        default: Date.now,
    },
    website: String,
    owner: String,
// this explicitly declares what collection we're using
}, { collection : 'jobs' });