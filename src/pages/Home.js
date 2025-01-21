import trand_day from '../trend_day.json'
import { useLocation, Link } from "react-router-dom";
//console.log('trand data:', typeof(trand_day.results));

export default function Home() {

    const location = useLocation()
    //console.log('location Home: ', location);
    

    return (
        <div>
            <h1>Trending today</h1>
            {trand_day &&
                <ul>
                    {trand_day?.results.map((movie) => (
                        <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{from: location.pathname}}>{movie.title}</Link></li>
                    ))}
                </ul>
            }
        </div>
    )
}