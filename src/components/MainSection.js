import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/MainSection.css';

const MainSection = () => {
//   useEffect(() => {
//     const slickOptions = {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2500,
//       arrows: false,
//       mobileFirst: true,
//       responsive: [
//         {
//           breakpoint: 700,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };

//     const sliderContainer = document.querySelector('.professionals-container');

//     if(sliderContainer) {
//         const sliderInstance = new Slider(sliderContainer, slickOptions);

//         return () => {
//             sliderInstance.destroy();
//         }
//     }
//   }, []);

  return (
    <>
      <section className='options-boxes'>
        <h1 className='offers'>Oferujemy</h1>
        <div className='options-container'>
          <div className='options-box'>
            <h3>Dieta</h3>
            <div className='options-box-img diet'></div>
            <div className='options-box-info'>
              <p className='options-box-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus vero natus sequi eligendi velit repellat laudantium
                cum rerum molestiae ipsam.
              </p>
            </div>
            <a href='#' className='check-btn'>
              Sprawdź
            </a>
          </div>
          <div className='options-box'>
            <h3>Trening</h3>
            <div className='options-box-img gym'></div>
            <div className='options-box-info'>
              <p className='options-box-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus vero natus sequi eligendi velit repellat laudantium
                cum rerum molestiae ipsam.
              </p>
            </div>
            <a href='#' className='check-btn'>
              Sprawdź
            </a>
          </div>
          <div className='options-box'>
            <h3>Rehabilitacja</h3>
            <div className='options-box-img rehab'></div>
            <div className='options-box-info'>
              <p className='options-box-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus vero natus sequi eligendi velit repellat laudantium
                cum rerum molestiae ipsam.
              </p>
            </div>
            <a href='#' className='check-btn'>
              Sprawdź
            </a>
          </div>
        </div>
      </section>
      <section className='about'>
        <h1>Osiągaj cele</h1>
        <div className='about-container'>
          <div className='about-box diet-box'>
            <h3>Zadbaj o zdrowie</h3>
          </div>
          <div className='about-box gym-box'>
            <h3>Osiągnij wymarzoną sylwetkę</h3>
          </div>
          <div className='about-box rehab-box'>
            <h3>Zażegnaj ból</h3>
          </div>
        </div>
      </section>
      <section className='professionals'>
        <div className='wrapper'>
          <h1>Wsparcie profesjonalistów</h1>
          <div className='professionals-container'>
            <div className='professional-box'>
              <div className='professional-img'>
                <img src='img/dietetyk.jpg' alt=''></img>
              </div>
              <div className='professional-info'>
                <div className='professional-text'>
                  <p>Dietetyk</p>
                </div>
              </div>
            </div>
            <div className='professional-box'>
              <div className='professional-img'>
                <img src='img/trener.jpg' alt=''></img>
              </div>
              <div className='professional-info'>
                <div className='professional-text'>
                  <p>Trener</p>
                </div>
              </div>
            </div>
            <div className='professional-box'>
              <div className='professional-img'>
                <img src='img/rehabilitant.jpg' alt=''></img>
              </div>
              <div className='professional-info'>
                <div className='professional-text'>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className='professional-box'>
              <div className='professional-img'>
                <img src='img/rehabilitant.jpg' alt=''></img>
              </div>
              <div className='professional-info'>
                <div className='professional-text'>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className='professional-box'>
              <div className='professional-img'>
                <img src='img/rehabilitant.jpg' alt=''></img>
              </div>
              <div className='professional-info'>
                <div className='professional-text'>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
            <div className='professional-box'>
              <div className='professional-img'>
                <img src='img/rehabilitant.jpg' alt=''></img>
              </div>
              <div className='professional-info'>
                <div className='professional-text'>
                  <p>Fizjoterapeuta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
