import { Routes, Route, NavLink } from "react-router-dom";
import Home from '../pages/Home/Home';
import  Movies  from '../pages/Movies/Movies';

import css from './App.module.css'


export const App = () => {
  return (
    
    <div className={css.App}>
      <nav className={css.navigation}>
        <NavLink className={css.navLink} to='/'>Home</NavLink>
        <NavLink className={css.navLink} to='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies/>} />
        {/* <Route path='/movies/:movieId' element={<MovieDetails />} >
          <Route path='cast' element={<Cast />} />
          <Route path='rewievs' element={<Rewievs />} />
        </Route>
        <Route path='*' element={<Home />} /> */}
      </Routes>
    </div>
  
  );
};
