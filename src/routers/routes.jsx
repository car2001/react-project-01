import {BrowserRouter, Routes, Route} from "react-router-dom"
import { LandingPage } from "../pages/LandingPage.jsx"
import { MovieDetails } from "../pages/MovieDetails.jsx"

export function MyRoutes(){ 
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element= { <LandingPage/> } />
                <Route exact path="/movies/:movieId" element= { <MovieDetails/> } />
            </Routes>
        </BrowserRouter>
    )
}