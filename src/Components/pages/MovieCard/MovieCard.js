import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'
function MovieCard({ id, poster_path, backdrop_path, title }) {
  return (
    <div className='MovieCard_container'>

      <div className='Card_container'>
        <div className='image_Container'>
          <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />

        </div>
        <div className='title_Container'>
          <h4>{title}</h4>

        </div>
        <div className='play_button_Container'>
          <div>
            <Link
              style={{ textDecoration: "none", color:"#2de59c" }}
              to={`/movies/movie/${id}`}>
                <div className='MovieCard_link'>
                Play Now
                </div>


            </Link>

          </div>

        </div>

      </div>



    </div>
  )
}

export default MovieCard
