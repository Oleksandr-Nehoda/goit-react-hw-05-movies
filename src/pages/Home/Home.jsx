import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiTrending } from '../../components/Api';
import css from './Home.module.css';

const Home = () => {
  const locations = useLocation();
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
      <h2 className={css.homeTitle}>Trending Today</h2>
      {topMovies.length > 0 && (
        <ul className={css.homeList}>
          {topMovies.map(
            ({
              original_name,
              original_title,
              poster_path,
              id,
              backdrop_path,
            }) => (
              <li className={css.homeItem} key={id}>
                <NavLink to={`/movies/${id}`} state={{ from: locations }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : `https://image.tmdb.org/t/p/w300${backdrop_path}`
                    }
                    alt={original_title}
                  />
                  <h3 className={css.homeItemTitle}>
                    {original_title || original_name}
                  </h3>
                </NavLink>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Home;
