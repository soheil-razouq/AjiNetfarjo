import React from 'react';
import '../components-style/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <h3>About US</h3>
        <p>
          This is a small movies applicatoin builded using reactjs,html,css and firebase.
          I hope you find it useful by exploring the Trending Now, Must popular and the Upcoming movies,Series and TV Shows.
        </p>
      </div>
      <div className='footer__center'>
        <h3>Get In Touch</h3>
        <ul>
          <li>mail@mail.com</li>
          <li>+21260000000</li>
          <li>Mediouna,Casablanca Morocco</li>
        </ul>
      </div>
      <div className='footer__right'>
        <h3>Useful Links</h3>
        <ul>
          <li><a href="/dashboard">Home</a></li>
          {/* <li><a href="/">Movies</a></li>
          <li><a href="/">TV Series</a></li>
          <li><a href="/">My Watchlist</a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Footer