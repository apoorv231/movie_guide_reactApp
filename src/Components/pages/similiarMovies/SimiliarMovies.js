import React, { useState, useEffect } from 'react'
import './SimiliarMovies'
import MovieCard from '../MovieCard/MovieCard'
import SimiliarMovieCard from './similiarMovieCard/SimiliarMovieCard'

function SimiliarMovies({ moviId }) {


  const [movies, setMovies] = useState([])
  useEffect(() => {

    const url = `https://api.themoviedb.org/3/movie/${moviId}/similar?api_key=69cea534042a0e788d43bb54e5c6fcf6`

    fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      

      setMovies(data.results)
    }).catch((e) => {
      console.log(e);
    })
  }, [moviId])

  return (
    <div className='similiarMovies'>

      <div className='similiar-movies-heading-container'>

      </div>
      <div className=''>
        <div className='movies_container'>
          <div className='movies'>
            {
              movies.map((movie) => {
                return <SimiliarMovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  backdrop_path={movie.backdrop_path}
                  poster_path={movie.poster_path}
                  overview={movie.overview}

                />
              })
            }


          </div>

        </div>

      </div>


    </div>
  )
}

export default SimiliarMovies
