import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import Button from '../Button';

import { ThemeContext } from '../../context/ThemeContext';

export default function Header({ 
    title, 
    children,
}) {
    const { onToggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <Title>{title}</Title>
            <Button onClick={onToggleTheme}>Mudar tema</Button>
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