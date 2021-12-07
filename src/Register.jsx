import axios from 'axios';
import React, {useState} from 'react';
import NavBar from './navbar';


export default (props) => {

    const [userData, setUserData] = useState({
        password: '',
        username: '',
    })


    return (
        <div class="d-flex h-100 text-center text-white bg-dark">
            <div class="d-flex h-100 p-3 mx-auto flex-column">
                <NavBar />
                <h3>Create a new account:</h3>
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
                    onClick={() => {
                        axios.post('/api/users', userData)
                            .then(response => console.log(response))
                            .catch(error => console.log(error));
                    }}
                >Register My Account</button>
            </div>
        </div>
    );


} 