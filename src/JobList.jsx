import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';

export default function JobList() {
    const [allJobs, setAllJobs] = useState([]);


    function findAllJobs() {
        axios.get('/api/pokemon/findAll')
            .then(response => {
                setAllJobs(response.data)
            })
            .catch(error => console.error(error));
    }
    useEffect(findAllJobs, []);

    const jobListComponent = allJobs.map(job => {
        return (<>
        <p></p>
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
        </>)
    })

    return (
        <div class="d-flex h-100 text-center text-white bg-dark">
            <div class="d-flex h-100 p-3 mx-auto flex-column">
                <NavBar />
                <div class="b-example-divider"></div>
                <h1>All Jobs:</h1>
                <div class="d-flex gap-5 justify-content-center">
                    <div class="list-group mx-0">
                        {jobListComponent}
                    </div>
                </div>
            </div>
        </div>
    )
}