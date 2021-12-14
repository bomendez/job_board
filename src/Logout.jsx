import React from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './App.css';


export default function Logout(props) {
    const navigate = useNavigate();
    return (<button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => axios.post('/api/users/logout')
    .then(() => navigate('/'))
    .catch(console.error)
}>Logout</button>);
}