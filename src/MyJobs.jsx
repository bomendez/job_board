import axios from 'axios';
import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import NavBar from './navbar';

export default (props) => {
    const [myJobs, setMyJob] = useState([]);
    const navigate = useNavigate;

    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then(() => console.log("Success"))
            .catch(() => navigate('/register'))
    }
    useEffect(checkLogin, []);

    function getMyJobs() {
        axios.get('/api/job/myJobs')
            .then(response => setMyJob(response.data))
            .catch(error => console.log(error));
    }
    useEffect(getMyJobs, []);

    const jobElement = [];
    for (let job of myJobs) {
        jobElement.push(
            <div>
                <p></p>
                <label class="list-group-item d-flex gap-2 text-center bg-secondary">
                    <div class="ml-4">
                        <Link class="text-left text-light" to={"../job/" + job._id.toString()}>{<h5>{job.title}</h5>}</Link>
                        <small class="d-block text-light text-left">
                            <ul class="navbar-nav mr-auto">
                                <li>Company Name: {job.companyName}</li>
                                <li>Description: {job.description}</li>
                            </ul>
                        </small>
                    </div>
                </label>
            </div>
        )
    }

    return (
        <div class="d-flex h-100 text-center text-white bg-dark">
            <div class="d-flex h-100 p-3 mx-auto flex-column">
            <NavBar />
            <h1>Your Posted Jobs:</h1>
            {jobElement}
            </div>
        </div>
    )

}