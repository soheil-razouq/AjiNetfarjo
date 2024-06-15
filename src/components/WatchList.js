import React, { useContext } from 'react';
import "../components-style/WatchList.css";
import { WatchlistContext } from '../context/WatchlistContext';
import HeaderAuth from './HeaderAuth';

const Watchlist = () => {
    const { watchlist } = useContext(WatchlistContext);
    const { removeFromWatchList } = useContext(WatchlistContext);

    return (
        <>
            <HeaderAuth />
            <br /><br /><br /><br />
            <div className="list">
                <div className="row">
                    <div className="col">
                        <div className="movie-list">
                            {watchlist.map((movie, index) => (
                                <div className="movie-card" key={index}>
                                    <img className="row__poster row__posterLarge" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                                    <div className="movie-details">
                                        <p>{movie.original_name || movie.original_title}</p>
                                        <p className="text-left">
                                            <span style={{ fontSize: "125%", color: "yellow", paddingRight: "5px" }}>&#9733;</span>
                                            {movie.vote_average}
                                        </p>
                                    </div>
                                    <button className="btn btn-danger" onClick={() => removeFromWatchList(movie.id)}>Remove</button>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Watchlist;
