import { useState, useEffect } from 'react';
import { apiTrending } from '../../components/Api';
import {MovieList} from '../../components/MovieList/MovieList'
import css from './Home.module.css';

const Home = () => {
  // const locations = useLocation();
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const getTranding = async () => {
      const { data } = await apiTrending();
      setTopMovies(data.results);
    };
    getTranding();
  }, []);

  return (
    <div className={css.homeSection}>
      <h1 className={css.homeTitle}>Trending Today</h1>
      {topMovies.length > 0 && (
        <MovieList movies={topMovies}/>
      )}
    </div>
  );
};

export default Home;
