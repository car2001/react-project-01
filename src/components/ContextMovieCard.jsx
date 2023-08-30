import { useEffect, useState } from "react"
import { get } from "../data/httpClient.jsx"
import {MovieCard} from "./MovieCard.jsx"
import "./css/ContextMovieCard.css"

export function ContextMovieCard(){

    const [movies,setMovies] = useState([])

    useEffect(()=>{
        get("/discover/movie").then( data =>{
            setMovies(data.results)
        })
    },[])

   
    return(
        <ul className="container">
            {movies.map((item,index)=>(
                <MovieCard key={index} movie={item}/>
            ))}
        </ul>
    )
}