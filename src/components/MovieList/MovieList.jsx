import { NavLink, useLocation } from 'react-router-dom';

import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const locations = useLocation();

  return (
    <ul className={css.homeList}>
      {movies.map(({ original_name, original_title, poster_path, id }) => (
        <li className={css.homeItem} key={id}>
          <NavLink
            className={css.navLink}
            to={`/movies/${id}`}
            state={{ from: locations }}
          >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : `https://media.istockphoto.com/id/1173410059/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BA%D1%96%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80%D1%83-%D0%B7-%D1%85%D0%BB%D0%BE%D0%BF%D1%8F%D0%B2%D0%BA%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0-%D0%B3%D1%80%D0%B0%D1%84%D1%96%D0%BA%D0%B0.jpg?s=1024x1024&w=is&k=20&c=MKN_Tj2J3AcHjQ24a5TaYn1s3UR-VWtWB_NLSlNeIWs=`
              }
              alt={original_title}
              width={300}
              height={450}
            />
            <h2 className={css.homeItemTitle}>
              {original_title || original_name}
            </h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
