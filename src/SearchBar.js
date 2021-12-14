import { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

function SearchBar() {
  const [formInput, setFormInput] = useState('');
  const [matchingJobs, setMatchingJobs] = useState([]);
  const [errorMsg, setError] = useState(null);

  function onSearchButtonClick(e) {
    e.preventDefault();
    console.log("clicked");
    
    if (!formInput) {
      setError("You must type in a keyword.");
      return;
    }

    axios.get('/api/pokemon/search/' + formInput)
      .then(response => setMatchingJobs(response.data))
      .catch(error => setMatchingJobs({
        title: "No matching jobs found"
      }));

    console.log(matchingJobs);
    // doSomething();
  }

  const jobListComponent = matchingJobs.map(job => {
    return (
      <>
        <label class="list-group-item d-flex gap-2 text-center bg-secondary">
                    <div class="ml-4">
                        <Link class="text-left text-light" to={"../pokemon/" + job._id.toString()}>{<h5>{job.title}</h5>}</Link>
                        <small class="d-block text-light text-left">
                            <ul class="navbar-nav mr-auto">
                                <li>Company Name: {job.companyName}</li>
                                <li>Description: {job.description}</li>
                            </ul>
                        </small>
                    </div>
                </label>
      </>
    )
  })

  return (
    <div>
      {errorMsg}
      <input class="form-control mr-sm-2" type="search" 
      placeholder="Search" aria-label="Search"  value={formInput}
      onChange={(e) => {
        setError(null);
        setFormInput(e.target.value)
      
      }} />
      <button type="button" class="btn btn-outline-success my-2 my-sm-0"
      onClick={(e) => onSearchButtonClick(e)}>
        Search Jobs
      </button>
      {jobListComponent}
    </div>
 
  );
}

export default SearchBar;
