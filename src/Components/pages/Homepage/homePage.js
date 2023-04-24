import './homepage.css'
import React, { useEffect, useState } from 'react'

import { useParams, Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'
function HomePage() {
    const [pageNo, setPageNo] = useState()

    const [prev, setPrev] = useState()
    const [next, setNext] = useState()

    const [movies, setMovies] = useState([]);



    const params = useParams()

    useEffect(() => {
        const current = parseInt(params.pageNumber);


        console.log("current : ", current);
        if (!current) {
            //  mean this page will  be the first page 

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=69cea534042a0e788d43bb54e5c6fcf6&page=1`).then((response) => {
                return response.json()
            }).then((data) => {

                console.log(data);
                setMovies((prevData) => {
                    return data.results;

                })

            })
            

            setNext(2)
        }
        else {
            fetch(fetch(`https://api.themoviedb.org/3/discover/movie?api_key=69cea534042a0e788d43bb54e5c6fcf6&page=${current}`).then((response) => {
                return response.json()
            }).then((data) => {
                
                setMovies((prevData) => {
                    return data.results;

                })

            })
            )

            //  this means that this page  index will be greater than 1 
            setNext(parseInt(current) + 1)
            setPrev(parseInt(current) - 1)
        }


    }, [params.pageNumber])
    return (
        <div >

            <div className='movies_container'>
                <div className='movies'>
                    {
                        movies.map((movie) => {
                            return <MovieCard
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
            <div className='pagination_container'>
                <div className='pagination'>
                    {
                        (prev) ?
                            <div className='pagination_prev'>
                                <Link
                                    style={{ textDecoration: "none", color: "black" }}
                                    to={`/movies/${prev}`}> {`Prev Page : ${prev}`}
                                </Link>

                            </div>
                            :
                            <></>
                    }

                    <div className='pagination_next'>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={`/movies/${next}`}> {`Next Page : ${next}`}
                        </Link>


                    </div>

                </div>


            </div>
        </div>
    )
}

export default HomePage
