import React, { useContext } from 'react';
import "../components-style/WatchList.css";
import { WatchlistContext } from '../context/WatchlistContext';

const Watchlist = () => {
    const { watchlist } = useContext(WatchlistContext);

    return (
        <>
        <div className='watch-list'>
            <h1>My Watchlist</h1>
            {watchlist.length === 0 ? (
                <p>No movies in watchlist</p>
            ) : (
                watchlist.map((movie, index) => (
                    <div key={index}>
                        <h1>{movie.title}</h1>
                        <p>{movie.details}</p>
                    </div>
                ))
            )}
        </div>
        </>
    );
};

export default Watchlist;
