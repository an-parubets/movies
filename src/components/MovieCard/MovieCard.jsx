import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import { styles } from './MovieCardStyles';

export const MovieCard = (props) => {
    const { id, title, overview, poster_path, vote_average, release_date } = props.data;
    const poster = `http://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <Link className={css(styles.movie)} to={`/movie/${id}`}>
            <div className={css(styles.info)}>
                <span>Rate: {vote_average}</span>
                <span>{release_date}</span>
            </div>
            <div className={css(styles.title)}>
                <h2>{title}</h2>
            </div>
            <div className={css(styles.picture)}>
                <img className={css(styles.img)} src={poster} alt={title} />
            </div>
            <div className={css(styles.overview)}>
                <span>{overview}</span>
            </div>
        </Link>
    );
};