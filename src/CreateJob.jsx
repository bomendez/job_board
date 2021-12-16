import axios from 'axios';
import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import NavBar from './navbar';

export default (props) => {
    const navigate = useNavigate();
    const [myJobs, setMyJob] = useState([]);
    const [jobData, setJobData] = useState({
        title: '',
        companyName: '',
        location: '',
        description: '',
        email: '',
        website: '',
    });

    function getMyJobs() {
        axios.get('/api/job/myJobs')
            .then(response => setMyJob(response.data))
            .catch(error => console.log(error));
    }

    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then(() => console.log("Success"))
            .catch(() => navigate('/register'))
    }
    useEffect(checkLogin, []);

    useEffect(getMyJobs, []);

    const jobElement = [];
    for (let job of myJobs) {
        jobElement.push(<div>{job.title} - {job.companyName}</div>)
    }

    function handleClick() {
        axios.post('/api/job/create', jobData)
            .then(response => {
                getMyJobs()
                console.log(response)
            })
            .catch(error => console.error(error));
    }

    return(
        <div class="d-flex h-100 text-center text-white bg-dark">
            <div class="d-flex h-100 p-3 mx-auto flex-column">
                <NavBar />
                <h3>Create a Job Listing:</h3>
                <h5>Title:</h5>
                <input value={jobData.title} onChange={(e) => {
                    const title = e.target.value;
                    setJobData({
                        ...jobData,
                        title: title
                    })
                }} />
                <h5>Company Name:</h5>
                <input value={jobData.coname} onChange={(e) => {
                    const companyName = e.target.value;
                    setJobData({
                        ...jobData,
                        companyName: companyName
                    })
                }} />
                <h5>Location:</h5>
                <input value={jobData.location} onChange={(e) => {
                    const location = e.target.value;
                    setJobData({
                        ...jobData,
                        location: location
                    })
                }} />
                <h5>Description:</h5>
                <input value={jobData.description} onChange={(e) => {
                    const description = e.target.value;
                    setJobData({
                        ...jobData,
                        description: description
                    })
                }} />
                <h5>Email:</h5>
                <input value={jobData.email} onChange={(e) => {
                    const email = e.target.value;
                    setJobData({
                        ...jobData,
                        email: email
                    })
                }} />
                <h5>Website:</h5>
                <input value={jobData.website} onChange={(e) => {
                    const website = e.target.value;
                    setJobData({
                        ...jobData,
                        website: website
                    })
                }} />
                
                <button type="button" onClick={handleClick} >Create New Job</button>
                {jobElement}
            </div>
        </div>
    )
}