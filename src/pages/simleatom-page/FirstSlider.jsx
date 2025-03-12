// import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import styles from './Simpleatom.module.css';

export const FirstSlider = (conservativeRef) => {
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
          backgroundColor: 'transparent',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: '30px',
          color: 'blue',
          border: '1px blue solid',
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="slider-container">
      <h4>First Slider</h4>
      <Slider {...sliderSettings}>
        <div>
          <div>
            <div className={styles.section2__container}>
              <div className={styles.container__left}>
                <div className={styles.container__left_1}>20+</div>

                <div className={styles.container__left_2}>
                  <span>M</span>

                  <span>USD</span>
                </div>
              </div>

              <div className={styles.container__right}>
                <h3>Assets under our software management</h3>

                <p>Assets under our software management</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={styles.section4__container_first}
            onClick={() => {
              window.scrollTo({
                top: conservativeRef.current.offsetTop - 90,
                behavior: 'smooth',
              });
            }}
          >
            <p className={styles.__newTitle}>SIMPLEATOM OVERVIEW</p>

            <div className={styles.container_second}>
              <div className={styles.container__left__new}>
                <span>Trading Frequency</span>
                <span>Trading pair</span>
                <span>Starting Date</span>
                <span>Currency</span>

                {/* <span>%</span> */}
              </div>

              <div className={styles.container__right__new}>
                <span>Low to mid-frequency</span>
                <span>BTC, ETH, XAU, JPY</span>
                <span>Live since Aug 2022</span>
                <span>USD</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={styles.section4__container_first}
            onClick={() => {
              window.scrollTo({
                top: conservativeRef.current.offsetTop - 90,
                behavior: 'smooth',
              });
            }}
          >
            <p>over</p>

            <div className={styles.container_second}>
              <div className={styles.container__left}>
                <span>100</span>

                <span>%</span>
              </div>

              <div className={styles.container__right}>
                <span>Annual yield</span>

                <span>
                  For 2024 achieved by clients using our software.
                  {/* <span className={styles.conservative}>“Conservative”</span>{' '} */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
