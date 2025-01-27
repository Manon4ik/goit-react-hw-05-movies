import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
//import Home from '../pages/Home'
//import Movies from '../pages/Movies'
//import MovieDetails from '../pages/MovieDetails'
//import NotFound from '../pages/NotFound'

//import Cast from "components/Cast";
//import Reviews from "components/Reviews";

const Home = lazy(() => import("../pages/Home" /* webpackChunkName: "home" */))
const Movies = lazy(() => import("../pages/Movies" /* webpackChunkName: "movies" */))
const MovieDetails = lazy(() => import("../pages/MovieDetails" /* webpackChunkName: "movieDetails" */))
const NotFound = lazy(() => import("../pages/NotFound" /* webpackChunkName: "notFound" */))
const Cast = lazy(() => import("components/Cast" /* webpackChunkName: "cast" */))
const Reviews = lazy(() => import("components/Reviews" /* webpackChunkName: "reviews" */))

export default function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};
