import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import JobDetails from './JobDetails';
import PokemonList from './PokemonList';
import PokemonSearch from './PokemonSearch';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import Landing from './Landing';
import CreateJob from './CreateJob';
import Login from './Login';



ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/list" element={<PokemonList />} />
      <Route path="/pokemon/:pokemonId" element={<JobDetails />} />
      <Route path="/create" element={<CreateJob />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  </Router>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
