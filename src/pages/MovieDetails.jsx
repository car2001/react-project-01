import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import {get} from "../data/httpClient.jsx"
import {getMovieImg} from "../utils/getMovieImg.jsx"
import "../pages/MovieDetails.css"

export function MovieDetails(){

    const { movieId } = useParams()
    const [movie,setMovie] = useState([]);
    const [generos,setGeneros] = useState([]);

    useEffect(()=> {
        get("/movie/"+movieId).then(data => {
            setMovie(data)
            setGeneros(data.genres.at(0))
        })
    },[movieId]);
    
    const imgUrl = getMovieImg(movie.poster_path,300);
    

    return(
        <div className="detailsContainer">
            <img src={imgUrl} alt={movie.title} className=" col movieImage" ></img>
            <div className="col movieDetails">
                <p className="title">Title : {movie.title}</p>
                <p>Genero: {generos.name}</p>
                <p>Description: {movie.overview}</p>
            </div>
        </div>
    )
}