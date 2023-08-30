import styles from "./css/MovieCard.module.css"
import {Link} from "react-router-dom"

export function MovieCard({movie}){
    const imgUrl = "https://image.tmdb.org/t/p/w500"+ movie.poster_path;
    return(
        <li className={styles.movieCard}>
            <Link to={"/movies/"+ movie.id}>
                <img src={imgUrl} alt={movie.title} width={230} height={345} className={styles.movieImg} />
            </Link>
            <div>{movie.title}</div>
        </li>
    )
}