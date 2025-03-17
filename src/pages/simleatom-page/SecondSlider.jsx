// import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
// import styles from './Simpleatom.module.css';
import styles from './SecondSlider.module.css';
import { useNavigate } from 'react-router-dom';
import { partnersRef } from '../about-us-page/AboutUs';
import logo_black from '../../assets/logo_black.jpg';
import Trading_Frequency from '../../assets/Trading_Frequency.mp4';
import Safety from '../../assets/Safety.mp4';

export const SecondSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: '#373739',
          borderRadius: '50px',
          padding: '0px',
          // width: '300px',
          bottom: '-70px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        className={styles.dddot}
        // style={{
        //   width: '0px',
        //   color: '#CFCED1',
        //   border: '6px #CFCED1 solid',
        //   borderRadius: '10px',
        //   opacity: '0.8',
        // }}
      >
        {}
      </div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...sliderSettings} className={styles.slider}>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <div className={styles.content__title}>Trading Frequency</div>
            <div className={styles.content__subTitle}>
              <p>Low to mid-frequency</p>
            </div>
            <div className={styles.content__video}>
              <video
                playsInline
                autoPlay
                poster={logo_black}
                muted
                type="video/mp4"
                src={Trading_Frequency}
                loop
              />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <div className={styles.content__title}>Safety</div>
            <div className={styles.content__subTitle}>
              <p>FSA, FCA, DFSA UAE, CySEC, AFSA, FSCA</p>
            </div>
            <div className={styles.content__video}>
              <video
                playsInline
                autoPlay
                poster={logo_black}
                muted
                type="video/mp4"
                src={Safety}
                loop
              />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <div className={styles.content__title}>Trading Pair</div>
            <div className={styles.content__subTitle}>
              <p>BTC, ETH, XAU, JPY</p>
            </div>
            <div className={styles.content__video}>
              <video
                playsInline
                autoPlay
                poster={logo_black}
                muted
                type="video/mp4"
                // src={Trading_Frequency}
                loop
              />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__content}>
            <div className={styles.content__title}>Currency</div>
            <div className={styles.content__subTitle}>
              <p>USD</p>
            </div>
            <div className={styles.content__video}>
              <video
                playsInline
                autoPlay
                poster={logo_black}
                muted
                type="video/mp4"
                // src={Trading_Frequency}
                loop
              />
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};
