import { useState, useEffect } from 'react';
import { ApiCast } from '../Api';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ApiCast(movieId).then(res => {
      const { data } = res;

      if (data.cast.length === 0) {
        return;
      }
      setActors(data.cast);
    });
  }, [movieId]);

  return (
    <>
      {actors.length > 0 ? (
        <>
          <h2 className={css.cast__title}>Series Cast</h2>
          <ul className={css.cast__list}>
            {actors.map(({ id, original_name, character, profile_path }) => (
              <li className={css.cast__item} key={id}>
                <h3 className={css.cast__itemTitle}>{original_name}</h3>
                <h4 className={css.cast__itemCharacter}>{character}</h4>

                <img
                  className={css.cast__img}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`
                  }
                  alt={original_name}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        'Did not have any results'
      )}
    </>
  );
};

export default Cast;
