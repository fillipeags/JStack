import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { ThemeContext } from './ThemeContext';

import styles from './Header.scss';

export default function Header({ 
    title, 
    children,
}) {
    const { onToggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <h1 className={styles.title}>{title}</h1>
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