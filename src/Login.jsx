import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import NavBar from './navbar';


export default (props) => {

    const navigator = useNavigate();

    const [userData, setUserData] = useState({
        password: '',
        username: '',
    })
    const [loggedInName, setLoggedInName] = useState('');


    return (
        <div class="d-flex h-100 text-center text-white bg-dark">
            <div class="d-flex h-100 p-3 mx-auto flex-column">
                <NavBar />
                <main class="px-3 mx-auto">
                    <h3>Login</h3>
                    <form class="form-inline my-2 my-lg-0">
                        <h5>Username:</h5>
                        <input value={userData.username} onChange={(e) => {
                            const username = e.target.value;
                            setUserData({
                                ...userData,
                                username: username
                            })
                        }}/>
                        <h5>Password:</h5>
                        <input value={userData.password} onChange={(e) => {
                            const password = e.target.value;
                            setUserData({
                                ...userData,
                                password: password
                            })
                        }} type='password' />
                        <button
                            type="button"
                            onClick={() => {
                                axios.post('/api/users/authenticate', userData)
                                    .then(response => {
                                        console.log("login successful!")
                                        console.log(response)
                                        navigator("/myJobs")
                                    })
                                    .catch(error => {
                                        console.log("catch entered")
                                        console.log(error)});
                            }}
                        >Login</button>
                        <button
                        type="button"
                        onClick={
                            () => {
                                axios.get('/api/users/whoIsLoggedIn')
                                    .then(response => setLoggedInName(response.data))
                                    .catch(error => console.log(error));
                            }
                        }
                        >Who is logged in?</button>
                    </form>
                    {loggedInName && <div>{loggedInName}</div>}
                </main>
            </div>
        </div>
    );


} 