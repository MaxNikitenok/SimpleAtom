import styles from './FirstSlider.module.css';
import { useRef } from 'react';
import { useState } from 'react';

export const FirstSlider = () => {
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

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      e.currentTarget.scrollLeft += e.currentTarget.clientWidth;
    } else {
      e.currentTarget.scrollLeft -= e.currentTarget.clientWidth;
    }
  };

  return (
    <>
      <div
        className={styles.firstSlider_container}
        ref={itemsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >
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
          // onClick={() => {
          //   navigate('/aboutUs');
          //   window.scrollTo(0, 0);
          //   setTimeout(scrollToPartnersRef, 1000);
          // }}
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
      </div>
      <div className={styles.dots__container}>
        <div className={styles.dots__wrapper}>
          <div className={styles.dots__dot}></div>
          <div className={styles.dots__dot}></div>
          <div className={styles.dots__dot}></div>
          <div className={styles.dots__dot}></div>
        </div>
      </div>
    </>
  );
};
