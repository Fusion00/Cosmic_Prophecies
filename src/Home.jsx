import React from "react";
import { useNavigate } from 'react-router-dom';
import "./App.css";
import About from "./About";

const Home = () => {

  const navigate = useNavigate();

  const scrolldown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth', 
    });
  };

  const youtubelink = () => {
    window.open("https://www.youtube.com/channel/UCwSbGziZg_IB0qkeY4PMo1A", "_blank");
  };
  const facebooklink = () => {
    window.open("https://www.facebook.com/people/CosmicProphecies108/61564309720642/", "_blank");
  };
  const instagramlink = () => {
    window.open("https://www.instagram.com/cosmicprophecies108/", "_blank");
};

  const handleNavigation = (path) => {
    navigate(path);
};


  return (
    <div className="home">
      <div className="back">
        <h1>Cosmic Prophecies</h1>
        <div className="logo"></div>
        <hr></hr>
        <button className="booking"onClick={() => handleNavigation('/Bookings')}>Book A Session</button>
        <div className="youtube" onClick={youtubelink}>
          <div className="yttri" onClick={youtubelink}></div>
        </div>
        <div className="facebook" onClick={facebooklink}>
          <div className="f" onClick={facebooklink}>f</div>
        </div>
        <div className="Instagram" onClick={instagramlink}>
          <div className="circle" onClick={instagramlink}></div>
          <div className="dot" onClick={instagramlink}></div>
        </div>
        <div className="zodiac"></div>

        <div className="Appbarlabel">
          <button className="AppButton" onClick={() => handleNavigation('/')}>Home</button>
          <button className="AppButton" onClick={() => handleNavigation('/About')}>About</button>
          <button className="AppButton" onClick={() => handleNavigation('/404')}>Blog</button>
          <button className="AppButton" onClick={() => handleNavigation('/404')}>Store</button>
          <button className="AppButton" onClick={scrolldown}>Contacts</button>
        </div>
        <div className="Home_Title">
          <div className="Home_head">The Journey</div>
          <div className="Home_head2">of Self-Discovery</div>
        </div>
        <div className="Home_Discription">
          <p>
            The world is a symphony of rhythm and frequency, intricately
            connected by stars, celestial bodies, planets, land, people, and
            time. We are part of this cosmic harmony, each of us vibrating with
            the energies around us. The stars and planets shape our destiny,
            while the land grounds us and time weaves our experiences. People,
            interconnected and interdependent, create the tapestry of our shared
            reality.
          </p>
          <p>
            This interplay of celestial and earthly forces guides our paths and
            determines our fate.
          </p>
        </div>
      </div>
      <div className="aboutsection">
        <About />
      </div>
    </div>
  );
};

export default Home;
