import Header from './Header.jsx';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import HomePage from './HomePage/Home.jsx';
// import Cast from './MovieDetails/Cast.jsx';
// import { MovieDetails } from './MovieDetails/MovieDetails.jsx';
// import Reviews from './MovieDetails/Reviews.jsx';
// import Movies from './Movies/Movies.jsx';

const Movies = lazy(() => import('./Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const HomePage = lazy(() => import('./HomePage/Home.jsx'));
const Cast = lazy(() => import('./MovieDetails/Cast.jsx'));
const Reviews = lazy(() => import('./MovieDetails/Reviews.jsx'));

export const App = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
