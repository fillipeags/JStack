import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ 
    post: { title, subtitle },
    likes 
}) {
    return (
        <>
            <article>
                <strong>{title}</strong><br/>
                <small>{subtitle}</small><br/>
                Likes: {likes / 2}
            </article>
            <br/>
        </>
    )
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }).isRequired
};