import './App.css';
import { Link } from 'react-router-dom';
import Logout from './Logout';


function NavBar() {

  // username useState()

  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand" href="#">Job Board</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
        <Link class="text-muted" to={{pathname: "/myFavorites"}}>Favorites</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Jobs
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="dropdown-item" to={{pathname: "/list"}}>All Jobs</Link>
            <Link class="dropdown-item" to={{pathname: "/create"}}>Create New Job</Link>
            <Link class="dropdown-item" to={{pathname: "/myJobs"}}>My Posted Jobs</Link>
          </div>
        </li>
      </ul>
      <button type="button" class="btn btn-outline-light my-2 my-sm-0">
        <Link class="btn btn-outline-success" to={{pathname: "/login"}}>Login</Link>
      </button>
      <button type="button" class="btn btn-outline-light my-2 my-sm-0">
        <Link class="btn btn-outline-success" to={{pathname: "/register"}}>Register</Link>
      </button>
      <li><Logout /></li>
    </div>
  </nav>);
  }

  export default NavBar;