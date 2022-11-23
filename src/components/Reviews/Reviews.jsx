import { useEffect, useState } from 'react';
import { ApiReview } from '../Api';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    ApiReview(movieId).then(res => {
      const { data } = res;
      if (!data) {
        return;
      }
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <div className={css.reviews__container}>
      {reviews.length > 0 ? (
        <ul className={css.Reviews__list}>
          {reviews.map(({ author, content, id }) => (
            <li className={css.Reviews__item} key={id}>
              <h3 className={css.Reviews__author}>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'Do not have any review'
      )}
    </div>
  );
};

export default Reviews;
