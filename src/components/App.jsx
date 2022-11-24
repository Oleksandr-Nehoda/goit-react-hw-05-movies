import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from '../pages/Home/Home';
import css from './App.module.css';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.App}>
      <nav className={css.navigation}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.navLink} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="rewievs" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      </Suspense>
    </div>
  );
};
