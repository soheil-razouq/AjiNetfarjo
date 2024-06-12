import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import YouTube from "react-youtube";
import "../components-style/List.css";
import { fetchData } from "../api/api";
import { useNavigate } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";


const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  const {AddToMyWatchList} = useContext(WatchlistContext);
  // const [myWatchList, setMyWatchList] = useState([]);
  const navigate = useNavigate();
  // const [currentTraler, setCurrentTrailer] = useState([]);

  // const opts = {
  //   height: '300',
  //   width: '640',
  //   playerVars: {
  //     autoplay: 0,
  //   }
  // }

  // const [currentSet, setCurrentSet] = useState(5);
  // const [animate, setAnimate] = useState(false);

  // const nextSet = () => {
  //   setAnimate(true);
  //   setTimeout(() => {
  //     setCurrentSet((prevSet) => (prevSet + 1) % list.length);
  //     setAnimate(false);
  //   }, 500);
  // };

  // const GetMovieTrailer = (movieId) => {
  //   axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=442550cd8b9af02519751fd601c5cd5c`).then(res => setCurrentTrailer(res.data.results));
  //   return (
  //     <YouTube
  //       className='video'
  //       opts={opts}
  //       videoId={currentTraler.key}
  //     />
  //   )
  // }

  const ToMovieInfo = (id) => {
    navigate(`/movie/${id}`)
  }

  // const AddToMyWatchList = (movie) => {
  //   setMyWatchList((prevWatchlist) => [...prevWatchlist, movie]);
  // }

  // console.log(myWatchList)

  useEffect(() => {
    fetchData(param).then(res => setList(res.data.results));
  }, []);

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title-section">{title}</h2>
        <div className="col">
          <div className="movie-list">
            {list.slice(0, 8).map((item) => (
              <div className="movie-card" >
                <div onClick={() => ToMovieInfo(item.id)}>
                  <img className="row__poster row__posterLarge" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} />
                  <div className="movie-details">
                    <p>{item.original_name || item.original_title}</p>
                    <p className="text-left">
                      <span style={{ fontSize: "125%", color: "yellow", paddingRight: "5px" }}>&#9733;</span>
                      {item.vote_average}
                    </p>
                  </div>
                </div>
                <button className="watchlist-btn" onClick={() => AddToMyWatchList(item)}>+ Watchlist</button>
                {/* <button className="trailer-btn" onClick={() =>ToMovieInfo(item.id)}>Trailer</button> */}
              </div>
            ))
            }
          </div>

          {/* <div className="movie-list">
            <div className={`movie-list ${animate ? 'slide-out' : 'slide-in'}`}>
              {list.slice(0,currentSet).map((item) => (
                <div className="movie-card">
                  <img className="row__poster row__posterLarge" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} />
                  <div className="movie-details">
                    <p>{item.original_name}</p>
                    <p className="text-left">
                      <span style={{ fontSize: "125%", color: "yellow", paddingRight: "5px" }}>&#9733;</span>
                      {item.vote_average}
                    </p>
                    <button className="watchlist-btn" style={{ backgroundColor: "rgb(13, 59, 102)" }}>+ Watchlist</button>
                    <button className="trailer-btn">Trailer</button>
                  </div>
                </div>
              ))
              }
              <div className="arrow-right" onClick={nextSet}>
                &gt;
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  )
}

export default List;