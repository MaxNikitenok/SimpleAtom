import styles from './SecondSlider.module.css';
import logo_black from '../../assets/logo_black.jpg';
import Trading_Frequency from '../../assets/Trading_Frequency.mp4';
import Safety from '../../assets/Safety.mp4';
import Currency from '../../assets/currency.mov';
import Trading_pair from '../../assets/trading_pair.mov';
import { useRef, useState } from 'react';

export const SecondSlider = () => {
  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    console.log(1);
    setIsMouseDown(true);
    setStartX(e.pageX - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    console.log(2);
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    console.log(3);
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    console.log(4);
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  // const handleWheel = (e) => {
  //   if (e.deltaY > 0) {
  //     e.currentTarget.scrollLeft += e.currentTarget.clientWidth;
  //   } else {
  //     e.currentTarget.scrollLeft -= e.currentTarget.clientWidth;
  //   }
  // };
  return (
    <div
      className={styles.secondSlider_container}
      ref={itemsRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      // onWheel={handleWheel}
    >
      <div className={styles.card}>
        <div className={styles.card__content}>
          <div className={styles.content__title}>Trading Frequency</div>
          <div className={styles.content__subTitle}>
            <p>Low to mid-frequency</p>
          </div>
          <div className={styles.content__video_1}>
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
            <p>
              FSA, FCA, DFSA UAE, CySEC,
              <br />
              AFSA, FSCA
            </p>
          </div>
          <div className={styles.content__video_2}>
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
          <div className={styles.content__video_3}>
            <video
              playsInline
              autoPlay
              poster={logo_black}
              muted
              type="video/mp4"
              src={Trading_pair}
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
          <div className={styles.content__video_4}>
            <video
              playsInline
              autoPlay
              poster={logo_black}
              muted
              type="video/mp4"
              src={Currency}
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};
