import { ApiQuery } from '../../components/Api';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
    const locations = useLocation()
    const [query, setQuery] = useState('')
    const [movie, setMovie] = useState([])
    const [params, setParams] = useSearchParams()

    useEffect(() => {
        const movieName = params.get('query')
        if (!movieName) return
        ApiQuery(movieName).then(resp => {
            const {data} = resp;
            if (data.results.length === 0) {
                return alert(`No Movies found with that name ${movieName}`)
            }
            setMovie(data.results)})
    }, [params])

    const onChange = e => {
        setQuery(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        if (query.trim() === '') {
            return alert('Input value can not be empty');
          }
        setParams({ query })
    }
 
    return <div className={css.container}>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" />
            <button type="submit">Search</button>
        </form>
        <ul className={css.list}>
            {movie.map(({ id, title, poster_path, name}) => 
            <li className={css.item} key={id} >
                <Link className={css.linkFilm} to={`/movies/${id}`} state={{ from: locations }}>
                <img className={css.image} src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                 <h3>{title || name}</h3>   
                </Link>
            </li>)}
        </ul>
    </div>
}
export default Movies

