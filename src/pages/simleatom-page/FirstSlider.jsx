// import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
// import styles from './Simpleatom.module.css';
import styles from './FirstSlider.module.css';

import { useNavigate } from 'react-router-dom';
import { partnersRef } from '../about-us-page/AboutUs';

export const FirstSlider = () => {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '50px',
          padding: '0px',

          bottom: '-75px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className={styles.dot}>{}</div>,
  };

  const scrollToPartnersRef = () => {
    window.scrollTo({
      top: partnersRef.current.offsetTop,
      left: 100,
      behavior: 'smooth',
    });
  };

  const navigate = useNavigate();

  return (
    <div className={styles.slider_container}>
      <Slider {...sliderSettings} className={styles.slider1}>
        <div className={styles.card}>
          <div className={styles.card__span}>
            <span>Over</span>
          </div>

          <div className={styles.card__content}>
            <div className={styles.content__title}>
              100
              <div className={styles.title_2_subWrappers}>
                <span>%</span>
              </div>
            </div>
            <div className={styles.content__subTitle}>
              <p>Annual yield</p>
            </div>
            <div className={styles.content__description}>
              <p>For 2024 achieved by clients using our software</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__span}>
            <span>Over</span>
          </div>

          <div className={styles.card__content}>
            <div className={styles.content__title_2}>
              <div className={styles.title_2_wrapper}>25</div>
              <div className={styles.title_2_subWrappers}>
                <div className={styles.title_2_subWrapper}>M</div>
                <div className={styles.title_2_subSubWrapper}>USD</div>
              </div>
            </div>
            <div className={styles.content__subTitle}>
              <p>AUM</p>
            </div>
            <div className={styles.content__description}>
              <p>Assets under our software management</p>
            </div>
          </div>
        </div>
        <div
          className={styles.card}
          onClick={() => {
            navigate('/aboutUs');
            window.scrollTo(0, 0);
            setTimeout(scrollToPartnersRef, 1000);
          }}
        >
          <div className={styles.card__span}>
            <span>Over</span>
          </div>

          <div className={styles.card__content}>
            <div className={styles.content__title}>
              <p>137</p>
            </div>
            <div className={styles.content__subTitle}>
              <p>Clients</p>
            </div>
            <div className={styles.content__description}>
              <p>Individual investors, trusts and funds</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__span}>
            <span>Over</span>
          </div>

          <div className={styles.card__content}>
            <div className={styles.content__title}>
              <p>5</p>
            </div>
            <div className={styles.content__subTitle}>
              <p>
                Partner
                <br />
                countries
              </p>
            </div>
            <div className={styles.content__description}>
              {/* <p>Individual investors, trusts and funds</p> */}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
