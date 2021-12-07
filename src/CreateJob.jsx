import axios from 'axios';
import React, {useState} from 'react';
import NavBar from './navbar';
import {BrowserRouter as Redirect} from 'react-router-dom';
import { response } from 'express';

export default (props) => {
    const [job, setJob] = useState({});
    const [jobData, setJobData] = useState({
        title: '',
        companyName: '',
        location: '',
        description: '',
        email: '',
        website: '',
    });


    function convertTitletoId() {
        axios.get("http://localhost:8000/api/pokemon/" + jobData.title)
            .then(response => {
                setJob(response.data)
            })
            .catch(error => console.error(error));

        return job._id.toString();
    }

    function handleClick() {
        axios.post('/api/pokemon/create', jobData)
            .then(response => console.log(response))
            .catch(error => console.log(error));

            // return <Redirect to={{pathname: "/list"}} />
        // <Redirect to={{pathname: "/pokemon/" + convertTitletoId}} />
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
                
                <button onClick={handleClick} >Create New Job</button>
            </div>
        </div>
    )
}