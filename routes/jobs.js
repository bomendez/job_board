const { request } = require('express');
const express = require('express');
const auth_middleware = require('./auth_middleware');
const router = express.Router();
const JobAccessor = require('./models/Job.Model');


// Returns all known jobs
router.get('/findAll', function(request, response) {
  return JobAccessor.getAllJobs()
    .then(jobResponse => response.status(200).send(jobResponse))
    .catch(error => response.status(400).send(error))
})

router.get('/myJobs', auth_middleware, function(request, response){
  return JobAccessor.findJobByOwner(request.username)
    .then(jobResponse => response.status(200).send(jobResponse))
    .catch(error => response.status(400).send(error))
});

router.get('/find/:jobId', function(request, response) {
  console.log(request)
  return JobAccessor.findJobById(request.params.jobId)
    .then(jobResponse => response.status(200).send(jobResponse))
    .catch(error => response.status(400).send(error))
});

router.get('/title/:title', function(request, response) {
  return JobAccessor.findJobByName(request.params.title)
    .then(jobResponse => response.status(200).send(jobResponse))
    .catch(error => response.status(400).send(error))
});

router.get('/search/:searchQuery', function(request, response) {
  return JobAccessor.findJobByPartialName(request.params.searchQuery)
    .then(jobResponse => response.status(200).send(jobResponse))
    .catch(error => response.status(400).send(error))
});


router.post('/create', auth_middleware, (request, response) => {
  const job = request.body;

  if(!job.title || !job.companyName || !job.location || !job.description || !job.email) {
    return response.status(422).send("Missing data");
  }

  // // set the owner of the job as the session user!
  job.owner = request.session.username;

  JobAccessor.insertJob(request.body)
     .then(jobResponse => response.status(200).send(jobResponse))
     .catch(error => response.status(400).send(error))
})

router.get('/about', function(req, res) {
  res.send('Job Board is a place to view and manage jobs');
});

module.exports = router;