import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'

import Cast from "components/Cast";
import Reviews from "components/Reviews";

export default function App() {



  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
