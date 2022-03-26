import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './main.css'
const Main = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch('http://www.omdbapi.com/?s=Game of Thrones&apikey=93c6cef1')
      .then(res => res.json())
      .then((data) => {
        setMovies(data.Search)
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  let navigate = useNavigate(); 
  const watchMovie = () =>{ 
      let path = `/singlemovie`; 
      navigate(path)
  }
  return (
    <div>
      <p className='title-list'>My Last Watch</p>
      <div className='movies'>
        {movies.map((movies, i) => <div onClick={watchMovie} className='rows'>
          <img src={movies.Poster} key={i} className='image'/>
          <p className='title'>{movies.Title}</p>
        </div>)} 
      </div>
    </div>
  );
}
export default Main;