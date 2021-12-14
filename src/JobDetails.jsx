import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NavBar from './navbar';

export default function() {
    const jobId = useParams().pokemonId;
    const [isFavorite, markAsFavorite] = useState(false);

    function findJobDetails() {

        axios.get('/api/pokemon/find/' + jobId)
            .then(response => setJob(response.data))
            .catch(error => console.log("Could not find job"));

    }

    const [job, setJob] = useState(null);
    useEffect(findJobDetails, []);

    function addFavorite() {
        axios.post('/api/users/favorite', jobId)
            .then(markAsFavorite(true))
            .catch(error => console.error(error));
    }


    const jobComponent = job ? 
        (<div class="d-flex h-100 text-center text-white bg-dark">
            <div class="d-flex h-100 p-3 mx-auto flex-column">
                <NavBar />
                <label class="list-group-item d-flex gap-2 text-center bg-secondary">
                    <button type="button" class="flex-shrink-0 text-black btn btn-outline-light my-2 my-sm-0" onClick={addFavorite}>Favorite</button>
                    <div class="text-left ml-4">
                        <div>
                            Job Title: {job.title}
                        </div>
                        <div>
                            Company Name: {job.companyName}
                        </div>
                        <div>
                            Location: {job.location}
                        </div>
                        <div>
                            Description: {job.description}
                        </div>
                        <div class="text-light">
                            Email: <a href="{}">{job.email}</a>
                        </div>
                        <div>
                            Posting Date: {job.postingDate}
                        </div>
                        <div>
                            {job.website ? "Company Website: " + job.website : "none"}
                        </div>
                    </div>
                </label>
            </div>
        </div>) :
        (<div> No Job found </div>);

    return (
        <div>
            {jobComponent}
        </div>
    )
}