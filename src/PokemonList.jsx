import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';

export default function PokemonSearchBar() {
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
                <label class="list-group-item d-flex gap-2 text-center">
                    <p class="flex-shrink-0 text-black">Favorite</p>
                    <input class="form-check-input flex-shrink-0" type="checkbox" value="" />
                    <span>
                        <Link class="text-center" to={"../pokemon/" + job._id.toString()}>{<h5>{job.title}</h5>}</Link>
                        <small class="d-block text-muted">
                            <ul class="navbar-nav mr-auto">
                                <li>Company Name: {job.companyName}</li>
                                <li>Description: {job.description}</li>
                            </ul>
                        </small>
                    </span>
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