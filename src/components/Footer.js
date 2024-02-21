import React from 'react';
import FooterStyles from '../styles/Footer.module.css';

const Footer = () => {

  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <p className={FooterStyles['footer-text']}>
        {' '}
        &copy; <span className={FooterStyles['footer-year']}>{currentYear}</span> ProhealthTeam, Aleksander
        Pawlak{' '}
      </p>
    </footer>
  );
};

export default Footer;
