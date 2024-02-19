import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainStyles from '../styles/MainSection.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import trainerProf from '../img/trener.jpg';
import rehabProf from '../img/rehabilitant.jpg'
import dietProf from '../img/dietetyk.jpg'

const MainSection = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isSelected, setIsSelected] = useState(null)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  const displayContact = (name, phoneNumber, email) => {
    if(isSelected === name) {
      setName(name)
      setPhoneNumber(phoneNumber)
      setEmail(email)
      setIsSelected(null)
    } else {
      setName(name)
      setPhoneNumber(phoneNumber)
      setEmail(email)
      setIsSelected(name)
    }
  }

  return (
    <>
      <section className={MainStyles['options-boxes']}>
        <h1 className={MainStyles.offers}>Oferujemy</h1>
        <div className={MainStyles['options-container']}>
          <div className={MainStyles['options-box']}>
            <h3>Dieta</h3>
            <div className={classNames(MainStyles['options-box-img'], MainStyles.diet)}></div>
            <div className={MainStyles['options-box-info']}>
              <p className={MainStyles['options-box-text']}>
                Kalkulatory BMI oraz zapotrzebowania kalorycznego, 
                zwizualizowany progres wagi
              </p>
            </div>
            <Link to="/recipes" className={MainStyles['check-btn']}><p>Sprawdź</p></Link>
          </div>
          <div className={MainStyles['options-box']}>
            <h3>Trening</h3>
            <div className={classNames(MainStyles['options-box-img'], MainStyles.gym)}></div>
            <div className={MainStyles['options-box-info']}>
              <p className={MainStyles['options-box-text']}>
                Plany treningowe rozwijające wydolność, wyskok oraz umiejętności gry w koszykówkę, przykładowe plany na siłownię
              </p>
            </div>
            <Link to="/training" className={MainStyles['check-btn']}>Sprawdź</Link>
          </div>
          <div className={MainStyles['options-box']}>
            <h3>Rehabilitacja</h3>
            <div className={classNames(MainStyles['options-box-img'], MainStyles.rehab)}></div>
            <div className={MainStyles['options-box-info']}>
              <p className={MainStyles['options-box-text']}>
                Interaktywny szkielet z mięśniami, propozycje bezpiecznego zażegnania bólu na własną rękę 
              </p>
            </div>
            <Link to="/rehabilitation" className={MainStyles['check-btn']}>Sprawdź</Link>
          </div>
        </div>
      </section>
      <section className={MainStyles['about']}>
        <h1>Osiągaj cele</h1>
        <div className={MainStyles['about-container']}>
          <div className={classNames(MainStyles['about-box'], MainStyles['diet-box'])}>
            <h3>Zadbaj o zdrowie</h3>
          </div>
          <div className={classNames(MainStyles['about-box'], MainStyles['gym-box'])}>
            <h3>Osiągnij wymarzoną sylwetkę</h3>
          </div>
          <div className={classNames(MainStyles['about-box'], MainStyles['rehab-box'])}>
            <h3>Zażegnaj ból</h3>
          </div>
        </div>
      </section>
      <section className={MainStyles.professionals}>
        <div className={MainStyles.wrapper}>
          <h1>Wsparcie profesjonalistów</h1>
          <Slider {...settings} className={MainStyles['professionals-container']}>
            <div className={MainStyles['professional-box']} onClick={() => displayContact('Aleksander', '123456789', 'aleksander@gmail.com')}>
              <div className={MainStyles['professional-img']}>
                <img src={dietProf} alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Dietetyk</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']} onClick={() => displayContact('Konrad', '123456789', 'konrad@gmail.com')}>
              <div className={MainStyles['professional-img']}>
                <img src={trainerProf} alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Trener</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']} onClick={() => displayContact('Paweł', '123456789', 'paweł@gmail.com')}>
              <div className={MainStyles['professional-img']}>
                <img src={rehabProf} alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']} onClick={() => displayContact('Emil', '123456789', 'emil@gmail.com')}>
              <div className={MainStyles['professional-img']}>
                <img src={rehabProf} alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']} onClick={() => displayContact('Kasia', '123456789', 'kasia@gmail.com')}>
              <div className={MainStyles['professional-img']}>
                <img src={rehabProf} alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']} onClick={() => displayContact('Maciej', '123456789', 'maciej@gmail.com')}>
              <div className={MainStyles['professional-img']}>
                <img src={rehabProf} alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
          </Slider>
          <div className={MainStyles['contact-info-container']}>
          {isSelected &&
              <div className={MainStyles['contact-info-box']}>
                <div className={MainStyles['info']}>
                  <p>{name}</p>
                  <p>{phoneNumber}</p>
                  <p>{email}</p>
                </div>
              </div>
          }
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
