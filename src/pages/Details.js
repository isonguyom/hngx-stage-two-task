import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Sidenav() {
  return (
    <nav className="Details-sidenav">
      <span>MovieBox</span>
      <ul className="sidenav-menu">
        <li>
          <a href="https//">Home</a>
        </li>
        <li>
          <a href="https//">Movies</a>
        </li>
        <li>
          <a href="https//">TV Series</a>
        </li>
        <li>
          <a href="https//">Upcoming</a>
        </li>
      </ul>
      <div className="sidenav-ads">
      <div className="ads-block">
        <h5>Play movie quizes and earn free tickets</h5>
        <p>50k people are playing now</p>
        <a href="https//">Start playing</a>
        </div>
      </div>
      <button className="logout-btn">Log out</button>
    </nav>
  );
}

function MovieDetails({ movie }) {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      const apiKey = "157f8b6f3dd6720eb58c49ebb5454947";
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovieDetails();
  }, [id]);
  return (
    <main className="Details-main">
    <img src="./logo.svg" alt="Trailer" />
    <div className="Movie-description">
        <div className="production-details">
          <p className="movie-properties">
          <span className="movie-title" data-testid="movie-title">{movieDetails.title}</span>• 
          <span className="movie-release-date" data-testid="movie-release-date">{movieDetails.release_date}</span>• 
          <span>PG-13</span>• 
          <span className="movie-runtime" data-testid="movie-runtime">2h 10m</span>
          <a href="https//" className="movie-genre">Action</a>
          <a href="https//" className="movie-genre">Drama</a>
          </p>
          <p className="movie-overview" data-testid="movie-overview">
           {movieDetails.overview}
          </p>
          <div>
            <div className="movie-meta"><span className="meta-key">Director:</span> <a href="https//" className="meta-value">Joseph Kosinski</a></div>
            <div className="movie-meta"><span className="meta-key">Writers:</span> <a href="https//" className="meta-value">Jim Cash, Jack Epps Jr, Peter Craig</a></div>
            <div className="movie-meta"><span className="meta-key">Stars:</span> <a href="https//" className="meta-value">Tom Cruise, Jennifer Connelly, Miles Teller</a></div>
          </div>
          <div className="meta-tabs">
            <a href="https//" className="meta-tab rating-tab">Top rated movie #65</a>
            <a href="https//" className="meta-tab award-tab">Awards 9 nominations</a>
          </div>
        </div>
        <div className="movie-suggestions">
          <div>
            <p className="details-rating">8.5 | 350k</p>
            <a className="suggestions-tab see-tab" href="https">See Showtimes</a>
            <a className="suggestions-tab more-tab" href="https">More watch options</a>
          </div>
          <div className="suggestion-movies">
            <a href="https" className="suggestion-movie-card"><img className="suggestion-movie-poster" src="./logo.svg" alt="movie" /></a>
            <a href="https" className="suggestion-movie-card"><img className="suggestion-movie-poster" src="./logo.svg" alt="movie" /></a>
            <a href="https" className="suggestion-movie-card"><img className="suggestion-movie-poster" src="./logo.svg" alt="movie" /></a>
            </div>
            <p className="suggestion-movie-des">The Best Movies and Shows in September</p>
        </div>
    </div>
  </main>
  )
}

function Details() {
  return (
    <div className="Details">
    <Sidenav />
   <MovieDetails />
    </div>
  );
}

export default Details;
