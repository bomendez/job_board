import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import App from './PokemonSearch';
import Logout from './Logout';


function NavBar() {

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
          <a class="nav-link" href="#">Favorites</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Jobs
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="dropdown-item" to={{pathname: "/list"}}>All Jobs</Link>
            <Link class="dropdown-item" to={{pathname: "/create"}}>Create New Job</Link>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <App />
      </form>
      <li><Logout /></li>
    </div>
  </nav>);
  }

  export default NavBar;