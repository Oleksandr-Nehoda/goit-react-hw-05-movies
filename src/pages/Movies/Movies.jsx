import { ApiQuery } from '../../components/Api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {MovieList} from '../../components/MovieList/MovieList'
import css from './Movies.module.css';

const Movies = () => {
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
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault()
        if (query.trim() === '') {
            return alert('Input value can not be empty');
          }
        setParams({ query: query })
    }
 
    return <div className={css.container}>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" />
            <button type="submit">Search</button>
        </form>
        <MovieList movies={movie}/>
    </div>
}
export default Movies
