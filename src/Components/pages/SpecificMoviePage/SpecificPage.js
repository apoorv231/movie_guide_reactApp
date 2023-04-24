import './SpecificPage.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SimiliarMovies from '../similiarMovies/SimiliarMovies'

function SpecificPage() {

    const [movie, setMovies] = useState({})
    const params = useParams()
    const id = params.movieId;




    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=69cea534042a0e788d43bb54e5c6fcf6`

        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {

            console.log(data);
            setMovies(data)

        }).catch((e) => {
            console.log(e);
        })


    }, [params.movieId])


    console.log(movie);
    return (
        <div>
            <div className='specific_movie_detail'>


                <div className='movie_heading_detail' >
                    <div className='left_portion'>
                        {/* left portion  */}
                        <div className='left_portion_image_content'>

                            {/* image Container */}
                            <div className='movie_poster_container'>
                                {
                                    (JSON.stringify(movie) === '{}') ? <></> : <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                }


                            </div>
                        </div>


                    </div>
                    {/*right portion  */}
                    <div className='right_portion'>

                        <div className='upper_lower_container'>
                            {/* upper_ part */}
                            <div className='movie_text_details'>
                                {/* heading  */}
                                <div className='movie_title'>

                                    {
                                        (movie !== undefined) ? <h4>{movie.original_title}</h4> : <></>
                                    }


                                </div>
                                {/* genere  */}
                                <div className='movie_genere'>
                                    <h5> Movie Genere </h5>
                                </div>
                                {/* duration  */}
                                <div className='movie_duration'>
                                    <h5> Movie Duration </h5>
                                </div>
                            </div>

                            {/* lower part  */}
                            <div className='play_button_container'>
                                <div className='watch_now'>
                                    <h4>Watch Now</h4>
                                </div>
                                <div className='watch_later'>
                                    <h4>Watch Later</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='movie_details_container'>
                    <div className='movie_detail'>

                        <p>
                            {movie.overview}
                        </p>
                        <p>
                            {movie.overview}
                        </p>
                        <p>
                            {movie.overview}
                        </p>



                    </div>



                </div>




            </div>
            <SimiliarMovies moviId={id} />
        </div>
    )
}

export default SpecificPage
