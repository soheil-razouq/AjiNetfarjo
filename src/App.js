import React from 'react';
import './App.scss';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WatchlistProvider } from './context/WatchlistContext';
import Header from './components/Header';
import HeaderAuth from './components/HeaderAuth';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';
import Banner from './components/Banner';
import List from './components/List';
import Footer from './components/Footer';
import MovieInfo from './components/MovieInfo';
import WatchList from './components/WatchList';

function App() {
  return (
    <React.Fragment>
      <WatchlistProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <React.Fragment>
                <Header />
                <HomeBanner />
              </React.Fragment>
            } />
            //authentification
            <Route path="/login" element={
              <React.Fragment>
                <Header />
                <Login />
              </React.Fragment>
            } />
            <Route path="/register" element={
              <React.Fragment>
                <Header />
                <Login />
              </React.Fragment>
            } />
            <Route path="/dashboard" element={
              <React.Fragment>
                <HeaderAuth />
                <Banner />
                <h2>Featured Now</h2>
                <List title="Trending Now" param="trending" />
                <List title="Now Playing" param="now_playing" />
                <h2>What To Watch</h2>
                <List title="popular" param="popular" />
                <List title="Top Rated" param="top_rated" />
                <h2>More To Explore</h2>
                <List title="Upcoming" param="upcoming" />
                <Footer />
              </React.Fragment>
            } />
            <Route path="/movie/:id" element={<MovieInfo />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </Router>
      </WatchlistProvider>
    </React.Fragment>
  );
}

export default App;
