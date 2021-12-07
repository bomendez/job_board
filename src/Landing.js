import NavBar from "./navbar";
import './App.css';
import App from "./PokemonSearch";

function Landing() {
    return (
        <>
        <body class="d-flex h-100 text-center text-white bg-dark">
    
            <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <NavBar />

            <main class="px-3">
                <h1>Find your next job</h1>
                <p class="lead">Enter a keyword to get started.</p>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <form class="form-inline my-2 my-lg-0">
                    <App />
                </form>
            </main>

            <footer class="mt-auto text-white-50">
                <p>Created from a<a href="https://getbootstrap.com/" class="text-white">Bootstrap template</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
            </footer>
            </div>
  </body>
  </>
    );
}

export default Landing;