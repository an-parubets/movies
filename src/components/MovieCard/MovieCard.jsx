import React from 'react';
import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite';
import { POSTER_URL } from '../../constants';
import { styles } from './MovieCardStyles';

const { Meta } = Card;

export const MovieCard = (props) => {
    const {
        id,
        title,
        poster_path,
        vote_average,
        release_date
    } = props.data;

    return (
        <Link to={`/movie/${id}`}>
            <Card hoverable cover={<Poster poster_path={poster_path} title={title} />} >
                <Meta title={title} description={<Info average={vote_average} release={release_date} />} />
            </Card>
        </Link>
    );
};

export const Info = ({ average, release }) => (
    <div className={css(styles.info)}>
        <Rate allowHalf value={average / 2} disabled={true} />
        <span>{release}</span>
    </div>
);

export const Poster = ({ poster_path, title }) => {
    const poster = `${POSTER_URL}${poster_path}`;

    return <img className={css(styles.img)} src={poster} alt={title} />;
};
