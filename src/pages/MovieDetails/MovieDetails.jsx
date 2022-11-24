import css from './Movies.module.css';
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ApiMovieInfo } from '../../components/Api';
import { Suspense } from 'react';

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams('');
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    ApiMovieInfo(movieId).then(resp => {
      const { data } = resp;
      if (!data) {
        return;
      }
      setMovie(data);
    });
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/movies');
  };

  if (!movie) {
    return null;
  }

  const { release_date, vote_average, id, overview, genres, poster_path } =
    movie;

  return (
    <div className={css.films}>
      <button className={css.link} type="button" onClick={handleGoBack}>
        ← back
      </button>
      <div className={css.contain}>
        <img
          className={css.img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://media.istockphoto.com/id/1173410059/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BA%D1%96%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80%D1%83-%D0%B7-%D1%85%D0%BB%D0%BE%D0%BF%D1%8F%D0%B2%D0%BA%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0-%D0%B3%D1%80%D0%B0%D1%84%D1%96%D0%BA%D0%B0.jpg?s=1024x1024&w=is&k=20&c=MKN_Tj2J3AcHjQ24a5TaYn1s3UR-VWtWB_NLSlNeIWs=`
          }
          alt={id}
        />
        <div className={css.about}>
          <h1>
            {movie.title} ({`${release_date}`.slice(0, 4) || 'unknown'})
          </h1>
          <p className={css.text}>
            User Score: {(vote_average * 10).toFixed()}%
          </p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <p>
            {genres ? genres.map(e => e.name).join(', ') : 'not information'}
          </p>
        </div>
      </div>
      <div className={css.cast}>
        <h4>Additional information</h4>
        <ul className={css.list}>
          <li>
            <Link className={css.linkCast} to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.linkCast} to="rewievs" state={location.state}>
              Rewievs
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.about}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetails;
