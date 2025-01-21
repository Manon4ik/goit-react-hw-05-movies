import { useLocation, Link, Outlet } from "react-router-dom";

import movie from '../movie_993710.json'
//console.log('movie:', movie);

const secure_base_url = 'https://image.tmdb.org/t/p/w300'

//console.log('image:', secure_base_url + movie.poster_path);



export default function MovieDetails() {

    const location = useLocation();
  //console.log('location Movie Single: ',location);

  const reliase_year = movie?.release_date?.split("-")[0];

    return(
        <main>
            <nav>
                <Link to={location.state.from}>Go back</Link>
            </nav>
            <section className="movie">
                <div className="movieImage">
                    <img src={secure_base_url + movie.poster_path} alt={movie.original_title}/>
                </div>
                <div className="movieInfo">
                    <h1>{movie.title} ({reliase_year})</h1>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>
                    {movie.genres.map((genre, index)=>(
                        <span key={index}>{genre.name} </span>
                    ))}
                    </p>
                </div>
            </section>
            <section >
                <h4>Additional information</h4>
                <ul>
                    <li><Link to="cast" state={{from: location.state.from}}>Cast</Link></li>
                    <li><Link to="reviews" state={{from: location.state.from}}>Reviews</Link></li>
                </ul>
                <Outlet />
            </section>
        </main>
    )
}