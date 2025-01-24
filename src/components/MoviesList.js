import { Link, useLocation } from "react-router-dom"

export default function MoviesList({movies}){
    const location = useLocation()

    return(
        movies && movies.length > 0 &&
                <ul>
                    {movies.map((movie) => (
                        <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{ from: location.pathname + location.search }}>{movie.title}</Link></li>
                    ))}
                </ul>
    )
}