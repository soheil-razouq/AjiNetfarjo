import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components-style/Banner.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Banner() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=442550cd8b9af02519751fd601c5cd5c").then((res) => setData(res.data.results));
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  let movies = [];
  if (data.length > 0) {
    data.forEach((m) => {
      let movie =
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.212), rgba(0, 0, 0, 0.8)),url(https://image.tmdb.org/t/p/original/${m.backdrop_path})`,
          }}
          className="carousel__item"
        >
          <p>{m.original_name || m.original_title}</p>
          <div>
            <p className="text-left">
              <span style={{ fontSize: "125%", color: "yellow", paddingRight: "5px" }}>&#9733;</span>
              {m.vote_average}
            </p>
          </div>
          <p>{truncate(m.overview, 150)}</p>
        </div>
      movies.push(movie);
    })
  }
  return (
    <AliceCarousel
      infinite
      autoPlay
      disableButtonsControls
      disableDotsControls
      mouseTracking
      items={movies}
      autoPlayInterval={5000}
    />
  );
}
export default Banner;