import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainStyles from '../styles/MainSection.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus vero natus sequi eligendi velit repellat laudantium
                cum rerum molestiae ipsam.
              </p>
            </div>
            <Link to="/recipes" className={MainStyles['check-btn']}>Sprawdź</Link>
          </div>
          <div className={MainStyles['options-box']}>
            <h3>Trening</h3>
            <div className={classNames(MainStyles['options-box-img'], MainStyles.gym)}></div>
            <div className={MainStyles['options-box-info']}>
              <p className={MainStyles['options-box-text']}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus vero natus sequi eligendi velit repellat laudantium
                cum rerum molestiae ipsam.
              </p>
            </div>
            <Link to="/training" className={MainStyles['check-btn']}>Sprawdź</Link>
          </div>
          <div className={MainStyles['options-box']}>
            <h3>Rehabilitacja</h3>
            <div className={classNames(MainStyles['options-box-img'], MainStyles.rehab)}></div>
            <div className={MainStyles['options-box-info']}>
              <p className={MainStyles['options-box-text']}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus vero natus sequi eligendi velit repellat laudantium
                cum rerum molestiae ipsam.
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
            <div className={MainStyles['professional-box']}>
              <div className={MainStyles['professional-img']}>
                <img src='' alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Dietetyk</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']}>
              <div className={MainStyles['professional-img']}>
                <img src='img/trener.jpg' alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Trener</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']}>
              <div className={MainStyles['professional-img']}>
                <img src='img/rehabilitant.jpg' alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']}>
              <div className={MainStyles['professional-img']}>
                <img src='img/rehabilitant.jpg' alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']}>
              <div className={MainStyles['professional-img']}>
                <img src='img/rehabilitant.jpg' alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className={MainStyles['professional-box']}>
              <div className={MainStyles['professional-img']}>
                <img src='../img/rehabilitant.jpg' alt=''></img>
              </div>
              <div className={MainStyles['professional-info']}>
                <div className={MainStyles['professional-text']}>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default MainSection;
