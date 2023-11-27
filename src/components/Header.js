import React from 'react';
import HeaderStyles from '../styles/Header.module.css'

const Header = ( {heroImage, gradient, title} ) => {
    const image = {
        backgroundImage: `${gradient}, url(${heroImage})`
    }

    return (
        <div className={HeaderStyles.header} style={image}>
            <h1> {title} </h1>
        </div>
    )
}

export default Header;