import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ 
    title, 
    children 
}) {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

Header.defaultProps = {
    title: "JStack's Blog"
}