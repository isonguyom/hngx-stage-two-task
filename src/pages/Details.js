import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {TbLogout} from "react-icons/tb"
import {GoHome} from "react-icons/go"
import {BiCameraMovie} from "react-icons/bi"
import {PiMonitorPlayBold} from "react-icons/pi"
import {BsCalendar2Week, BsListUl} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"
import {IoIosArrowDown} from "react-icons/io"
// import {IoIosArrowDown} from "react-icons/io"
import {IoTicketSharp} from "react-icons/io5"
import logo from "../logo_dark.svg";
import showsImages from "../shows-img.png";

function Sidenav() {
  return (
    <nav className="Details-sidenav">
      <a href="/moviebox" className="logo-wrapper">
        <img src={logo} alt="Logo" />
      </a>
      <ul className="sidenav-menu">
        <li>
          <a href="https//"><GoHome size="25" /><span className="icon-text-right">Home</span></a>
        </li>
        <li>
          <a className="active" href="https//"><BiCameraMovie size="25" /><span className="icon-text-right">Movies</span></a>
        </li>
        <li>
          <a href="https//"><PiMonitorPlayBold size="25" /><span className="icon-text-right">TV Series</span></a>
        </li>
        <li>
          <a href="https//"><BsCalendar2Week size="25" /><span className="icon-text-right">Upcoming</span></a>
        </li>
      </ul>
      <div className="sidenav-ads">
        <div className="ads-block">
          <h4>Play movie quizes and earn free tickets</h4>
          <p className="ads-text">50k people are playing now</p>
          <a className="ads-start-btn" href="https//">Start playing</a>
        </div>
      </div>
      <button className="logout-btn"><TbLogout size="25" /><span className="icon-text-right">Log out</span></button>
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
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
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
      <img className="cover-img" src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt="Trailer" />
      <div className="Movie-description">
        <div className="production-details">
          <p className="movie-properties">
            <span className="movie-title" data-testid="movie-title">
              {movieDetails.title}
            </span>
            •
            <span
              className="movie-release-date"
              data-testid="movie-release-date"
            >
              {movieDetails.release_date}
            </span>
            •<span>PG-13</span>•
            <span className="movie-runtime" data-testid="movie-runtime">
              2h 10m
            </span>
            <a href="https//" className="movie-genre">
              Action
            </a>
            <a href="https//" className="movie-genre">
              Drama
            </a>
          </p>
          <p className="movie-overview" data-testid="movie-overview">
            {movieDetails.overview}
          </p>
          <div>
            <div className="movie-meta">
              <span className="meta-key">Director:</span>{" "}
              <a href="https//" className="meta-value">
                Joseph Kosinski
              </a>
            </div>
            <div className="movie-meta">
              <span className="meta-key">Writers:</span>{" "}
              <a href="https//" className="meta-value">
                Jim Cash, Jack Epps Jr, Peter Craig
              </a>
            </div>
            <div className="movie-meta">
              <span className="meta-key">Stars:</span>{" "}
              <a href="https//" className="meta-value">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </a>
            </div>
          </div>
          <div className="meta-tabs">
            <a href="https//" className="meta-tab rating-tab">
              Top rated movie #65
            </a>
            <a href="https//" className="meta-tab award-tab">
              Awards 9 nominations
              <IoIosArrowDown size="30" />
            </a>
          </div>
        </div>
        <div className="movie-suggestions">
          <div>
            <p className="details-rating"><AiFillStar size="30" color="#FDCE32" /> <span className="faint-text">8.5 </span> | 350k</p>
            <a className="suggestions-tab see-tab" href="https">
             <IoTicketSharp size="23" /> See Showtimes
            </a>
            <a className="suggestions-tab more-tab" href="https">
              <BsListUl size="23" />More watch options
            </a>
          </div>
          <div className="suggestion-movies">
            <a href="https" className="suggestion-movie-card">
              <img
                className="suggestion-movie-poster"
                src={showsImages}
                alt="movie"
              />
            </a>
          <p className="suggestion-movie-des">
           <BsListUl size="23"/> <span>The Best Movies and Shows in September</span>
          </p>
          </div>
        </div>
      </div>
    </main>
  );
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
