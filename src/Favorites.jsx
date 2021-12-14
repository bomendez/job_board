import axios from 'axios';
import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import NavBar from './navbar';

export default (props) => {
    const [myFavIDs, setMyFavIDs] = useState([]);
    const [myFavorites, setMyFavorites] = useState([]);
    const navigate = useNavigate;

    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then(() => console.log("Success"))
            .catch(() => navigate('/register'))
    }
    useEffect(checkLogin, []);

    function convertIDs() {
        myFavIDs.map( (id) => {
            console.log("id", id)
            axios.get('/api/pokemon/find/' + id)
                .then((idResponse) => 
                    {setMyFavorites({
                        ...myFavorites,
                        idResponse
                    })
                    console.log(myFavorites)
                })
                .catch(error => console.error(error));
        })
    }

    function getMyFavorites() {
        axios.get('/api/users/user/myFavorites')
            .then(response => {
                setMyFavIDs(response.data);
            })
            .catch(error => console.log(error));
    }
    useEffect(getMyFavorites, []);
    useEffect(() => {

        console.log(myFavIDs);
        convertIDs();
        
        }, [myFavIDs]);


    const jobElement = [];
    for (let job of myFavorites) {
        jobElement.push(
            <div>
                <p></p>
                <Link to={"../pokemon/" + job._id.toString()}>{<h5>{job.title}</h5>}</Link>
                <ul class="navbar-nav mr-auto">
                    <li>{job.companyName}</li>
                    <li>{job.description}</li>
                </ul>
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