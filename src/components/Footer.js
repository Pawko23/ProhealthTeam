import React from 'react';
import FooterStyles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <p className={FooterStyles['footer-text']}>
        {' '}
        &copy; <span className={FooterStyles['footer-year']}>2023</span> ProhealthTeam, Aleksander
        Pawlak{' '}
      </p>
    </footer>
  );
};

export default Footer;
