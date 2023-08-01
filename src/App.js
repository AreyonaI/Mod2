
import "./App.css";

import Share from './components/share.js'
import music from "./gospel.mp3"
import React, { useState, useEffect } from "react";
import './Roman-Thin.ttf';
import './Roman-Regular.ttf';
import right from './arrow-r.png';
import left from './arrow-l.png';


const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",  
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5117913/pexels-photo-5117913.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=900"
];


function getRandomVerse(verses) {
  return verses[Math.floor(Math.random() * verses.length)];
}
function App() {
  const [current, setCurrent] = useState(0);

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    fetch("https://bible-api.com/romans+1:1-16:25")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json.verses || []);
      });
  }, []);
  function getNewVerse() {
    setQuote(getRandomVerse(quotes));
  }

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }


  return (
    <div>
      <h1>Verse Generator</h1>
    <div className="App">
      

      
        <div className="left-arrow" onClick={prevSlide}>
        <img src={left}/>
        </div>
        
        
     
      
      {images.map(
          (image, index) =>
            current === index && (
              <section key={image} style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundPosition:"center",
              backgroundSize:"fit"}}>
              <div>
              {quote && (
          <div id="versetext">
            <h3>
              <span>“</span>
              {quote.text}
              <span>“</span>
            </h3>
            <i>
              - {quote.book_name} {quote.chapter}:{quote.verse}
            </i>
          </div>
          
        )}
              </div>
              
              </section>
            )
        )}
        <div className="right-arrow" onClick={nextSlide}>
         <img src={right}/>
        </div>
        
      
      
    </div>
    <button onClick={getNewVerse}>New Verse</button>

    <Share/>
    <div>
       <audio useRef="audio_tag"src={music} controls autoPlay/>
    </div>
    
    
    </div>
   
  );
}
export default App;