import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import '../components-style/MovieInfo.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";

function MovieInfo() {
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState([]);
  const [cast, setCast] = useState([]);
  let { id } = useParams();
  // const userId = localStorage.getItem("userId");
  useEffect(() => {
    let movie_details = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=442550cd8b9af02519751fd601c5cd5c`);
    let movie_video = axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=442550cd8b9af02519751fd601c5cd5c`);
    let movie_cast = axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=442550cd8b9af02519751fd601c5cd5c`);
    axios.all([movie_details, movie_video, movie_cast]).then(
      axios.spread((...allData) => {
        const details = allData[0].data
        const video = allData[1].data.results.slice(-1)[0]
        const cast = allData[2].data.cast.slice(0, 10)
        setMovie(details);
        setVideo(video);
        setCast(cast);
      })
    )

  }, []);

  const opts = {
    height: '300',
    width: '640',
    playerVars: {
      autoplay: 0,
    }
  }

  return (
    <>
      {movie.title &&
        <>
          <Header />
          <div className="movieInfo">
            <div className="movieInfo__banner">
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
            </div>
            <div className="movieInfo__info">
              <div className="movieInfo__left">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
              </div>
              <div className="movieInfo__right">
                <p className="title">{movie.name || movie.title}</p>
                <div className="buttons">
                  {movie.imdb_id && <a className="imdb" href={`https://www.imdb.com/title/${movie.imdb_id}/`}><button>IMDb</button></a>}
                  {movie.homepage && <a className="homepage" href={movie.homepage}><button>Homepage</button></a>}
                </div>
                <div className="genres">
                  {movie.genres.map((g, key) => {
                    return (
                      <span className="genre" key={key}><span className="sep">&#8226;</span>{g.name}</span>
                    )
                  })}
                  <span className="sep">&#8226;</span>
                </div>
                <p className="tagline">{movie.tagline}</p>
                <p className="overview">{movie.overview}</p>
                <p className="vote">{movie.vote_average}&nbsp;|&nbsp;{movie.vote_count}&nbsp;votes</p>
                <p className="date">Release Date : {movie.release_date}</p>
                <p className="duration">Duration : {movie.runtime} m</p>
              </div>
            </div>
            <>
              {cast.length > 0 &&
                <>
                  <h2 className="cast__title">Cast</h2>
                  <div className="cast__list">
                    {cast.map((c) => {
                      return (
                        <div className='cast'>
                          <img src={`https://image.tmdb.org/t/p/original/${c.profile_path}`} alt={c.name || c.original_name} />
                          <p>{c.name || c.original_name}</p>
                          <span>{c.character}</span>
                        </div>
                      )
                    })}
                  </div>
                </>
              }
            </>
            <div className="movieInfo__video">
              <h2>{video?.name}</h2>
              <YouTube
                className='video'
                opts={opts}
                videoId={video?.key}
              />
            </div>
          </div>
          <Footer />
        </>
      }
    </>
  );
}

export default MovieInfo;
