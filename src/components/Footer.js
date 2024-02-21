import React from 'react';
import FooterStyles from '../styles/Footer.module.css';

const Footer = ( { gradient } ) => {

  const currentYear = new Date().getFullYear()

  const footerGradient = {
    background: gradient ? gradient : 'linear-gradient(45deg, rgba(8, 206, 255, 0.75), rgba(8, 24, 255, 0.75))'
  }

  return (
    <footer style={footerGradient}>
      <p className={FooterStyles['footer-text']}>
        {' '}
        &copy; <span className={FooterStyles['footer-year']}>{currentYear}</span> ProhealthTeam, Aleksander
        Pawlak{' '}
      </p>
    </footer>
  );
};

export default Footer;
