import { useInView } from 'react-intersection-observer';
import { createRef, useState } from 'react';

import styles from './Simpleatom.module.css';
// import logo from '../../assets/Logo-2.png';
import logo_black from '../../assets/logo_black.jpg';
import logo_white from '../../assets/logo_white.jpg';
import video_logo_black from '../../assets/video_logo_black.mp4';
import video_logo_white from '../../assets/video_logo_white.mp4';
import QR1 from '../../assets/QR_Atom_1.png';
import QR2 from '../../assets/QR_Atom_2.png';
import iphone_img from '../../assets/iphone_img.png';
import screenshot from '../../assets/screenshot.png';
import mac_img from '../../assets/mac_img.png';
import video_on_iphone from '../../assets/video_on_iphone.mp4';
import video_on_mac from '../../assets/video_on_mac.mp4';
import cn from 'classnames';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { partnersRef } from '../about-us-page/AboutUs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SecondSlider } from './SecondSlider';
import { ThirdSlider } from './ThirdSlider';
import { FirstSlider } from './FirstSlider';

export const Simpleatom = () => {
  const { theme } = useOutletContext();
  const isDarkTheme = theme !== 'light';

  // const [isConservative, setConservative] = useState(true);

  // const { setShowConversationalModal } = useOutletContext();

  const navigate = useNavigate(),
    { ref: sectionOneRef, inView: sectionOneInView } = useInView({
      threshold: 0.4,
      rootMargin: '1110px 0px 0px 0px',
    }),
    { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
      threshold: 0.8,
      rootMargin: '1110px 0px -100px 0px',
    }),
    { ref: sectionTwoNewRef, inView: sectionTwoNewInView } = useInView({
      threshold: 0.8,
      rootMargin: '1110px 0px -100px 0px',
    }),
    { ref: graphOneRef, inView: graphOneInView } = useInView({
      threshold: 0.9,
      rootMargin: '1110px 0px 0px 0px',
    }),
    { ref: graphTwoRef, inView: graphTwoInView } = useInView({
      threshold: 0.9,
      rootMargin: '1110px 0px 0px 0px',
    }),
    { ref: ref1, inView: ref1InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref2, inView: ref2InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref2a, inView: ref2aInView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref3, inView: ref3InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref4, inView: ref4InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref5, inView: ref5InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref6, inView: ref6InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref7, inView: ref7InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref8, inView: ref8InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref9, inView: ref9InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref10, inView: ref10InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref11, inView: ref11InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref12, inView: ref12InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref13, inView: ref13InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref14, inView: ref14InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px 350px 0px',
    }),
    { ref: ref15, inView: ref15InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref16, inView: ref16InView } = useInView({
      threshold: 0.9,
      rootMargin: '1200px 0px -100px 0px',
    }),
    { ref: ref17, inView: ref17InView } = useInView({
      threshold: 1,
      rootMargin: '1200px 0px -100px 0px',
    }),
    // conservativeRef = createRef(),
    scrollToPartnersRef = () => {
      window.scrollTo({
        top: partnersRef.current.offsetTop,
        left: 100,
        behavior: 'smooth',
      });
    };

  return (
    <main className={styles.simpleatom}>
      <div className={styles.simpleatom__logo}>
        {/* <img alt="logo" src={logo} /> */}
        {isDarkTheme && (
          <video
            playsInline
            autoPlay
            poster={logo_black}
            muted
            type="video/mp4"
            src={video_logo_black}
            loop
          />
        )}
        {!isDarkTheme && (
          <video
            playsInline
            autoPlay
            poster={logo_white}
            muted
            type="video/mp4"
            src={video_logo_white}
            loop
          />
        )}
      </div>

      <h1 className={styles.simpleatom__description}>
        <span>Simpleatom </span>
        is a <span>software development</span> company specializing{' '}
        <span>in money management solutions</span>, using its own trading
        algorithms.
      </h1>

      {/* <section className={styles.section1}>
        <div className={styles.section1__text_wrapper}>
          <p>
            Our software will multiply your investment automatically and with
            fully controllable risks. It is the perfect solution to diversify
            your capital with over 100%
            <sup>1</sup> returns per year.
          </p>
        </div>
      </section> */}

      <section ref={sectionOneRef} className={styles.section2}>
        <div className={styles.section2__text_wrapper}>
          <h1 className={sectionOneInView ? styles.view_anim : ''}>
            Get the <span>highlights</span>
          </h1>
        </div>

        <FirstSlider />
      </section>

      <div ref={sectionTwoRef}>
        <section
          className={cn(
            styles.section3,
            sectionTwoInView ? styles.view_anim : ''
          )}
        >
          <p>
            Simpleatom incorporates the knowledge and experience of market
            leaders. It eliminates emotions, fears, weaknesses, and human error
            from trading - all situations where a person may make mistakes.
          </p>
        </section>
      </div>

      <section className={styles.section2}>
        <div className={styles.section2__text_wrapper}>
          <h1 className={sectionOneInView ? styles.view_anim : ''}>
            Simpleatom overview
          </h1>
        </div>
        <SecondSlider />
      </section>
      <div ref={sectionTwoNewRef}>
        <section
          className={cn(
            styles.section3,
            sectionTwoNewInView ? styles.view_anim : ''
          )}
        >
          <p>
            Simpleatom is the result of 4 years of data analysis and
            systematization, development of a unique trading strategy, including
            work with 4 assets: BTC, SOL, XAU, JPY, as well as 16 algorithms for
            rising and falling asset prices (without averaging), long and short
            strategies.
          </p>
        </section>
      </div>
      <section className={styles.section4}>
        <div className={styles.section4__title}>
          <h1 className={sectionOneInView ? styles.view_anim : ''}>
            All strategies. <span>Take your pick.</span>
          </h1>
        </div>
        <ThirdSlider />
      </section>
      <section className={styles.section5}>
        <div className={styles.section5__content}>
          <div className={styles.section5__title}>SECURITY</div>
          <div className={styles.section5__subTitle}>No compromises.</div>
          <div className={styles.section5__descriptions}>
            <div className={styles.section5__description}>
              <div className={styles.section5__description_line}></div>
              <p>
                Our trading software works with MT4 and MT5 and only on{' '}
                <span>top-rated and regulated platforms</span>, such as Bybit,
                IC Markets, Exness, Pepperstone, Tickmill, Vantage, Fusion
                Markets, RannForex.
              </p>
            </div>
            <div className={styles.section5__description}>
              <div className={styles.section5__description_line}></div>
              <p>
                <span>Your money is always on your personal account</span>, you
                do not need to transfer it anywhere. You have instant access to
                your funds. We can work with any regulators supported by the
                broker (FSA, FCA, DFSA UAE, CySEC, AFSA, and FSCA).
              </p>
            </div>
            <div className={styles.section5__description}>
              <div className={styles.section5__description_line}></div>
              <p>
                We do not buy assets, we trade futures. That's how{' '}
                <span>you make money on both the rise and fall</span> of the
                exchange rate.
              </p>
            </div>
          </div>
          <div className={styles.section5__image}>
            <div className={styles.section5__macBook}>
              <div className={styles.section5__videoWrapper}>
                <video
                  playsInline
                  autoPlay
                  poster={logo_black}
                  muted
                  type="video/mp4"
                  loop
                  src={video_on_mac}
                ></video>
              </div>
              <img src={mac_img} alt="macbook" />
            </div>
          </div>
          <div className={styles.section5__descriptions}>
            <div className={styles.section5__description}>
              <div className={styles.section5__description_line}></div>
              <p>
                <span>Full automation of trading</span> with global assist and
                control by the Simpleatom team.
              </p>
            </div>
            <div className={styles.section5__description}>
              <div className={styles.section5__description_line}></div>
              <p>
                Very <span>strict risk management</span>: the risk per trade
                does not exceed 0.3%.
              </p>
            </div>
            <div className={styles.section5__description}>
              <div className={styles.section5__description_line}></div>
              <p>
                Our software will <span>only</span> be accessed for{' '}
                <span>trading</span> transactions on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section6}>
        <div className={styles.section6__iphone}>
          <video
            playsInline
            autoPlay
            poster={logo_black}
            muted
            type="video/mp4"
            loop
            src={video_on_iphone}
          ></video>

          <img src={iphone_img} alt="iphone" />
        </div>
      </section>

      <section className={styles.section7}></section>

      <section className={styles.section8}>
        <h2>The best because</h2>

        <div className={styles.section8__container}>
          <div className={styles.section8__container_one}>
            <div ref={ref3}>
              <p className={ref3InView ? styles.view_anim : ''}>
                <span>You transfer </span>
                us the reward only
                <span> after you make a profit.</span>
              </p>
            </div>

            <div ref={ref5}>
              <p className={ref5InView ? styles.view_anim : ''}>
                Simpleatom developed by the team of professionals with{' '}
                <span>12 years trading experience.</span>
              </p>
            </div>

            <div ref={ref6}>
              <p className={ref6InView ? styles.view_anim : ''}>
                Controlled risks and <span>solid profit on the distance</span> -
                confirmed by statistics.
              </p>
            </div>
            <div ref={ref10}>
              <p className={ref10InView ? styles.view_anim : ''}>
                Suitable for <span>novice</span> investors, professionals,{' '}
                <span>funds</span> wishing to diversify capital
              </p>
            </div>
          </div>

          <div className={styles.section8__container_two}>
            <div ref={ref11}>
              <p className={ref11InView ? styles.view_anim : ''}>Stable</p>
            </div>
            <div ref={ref16}>
              <h3 className={ref16InView ? styles.view_anim : ''}>
                Passive income
              </h3>
            </div>
            <div ref={ref17}>
              <p className={ref17InView ? styles.view_anim : ''}>
                Up to 700% profit in a year for long term investing
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section8__second_container}>
          <div className={styles.section8__second_container_left}></div>

          <div className={styles.section8__second_container_right}></div>
        </div>
      </section>

      <section className={styles.page__footer}>
        <ol value='1'>
          <p>
            The data presented is derived from the performance statistics of
            the{' '}
            <span
              onClick={() => {
                window.scrollTo({
                  top: conservativeRef.current.offsetTop - 90,
                  behavior: 'smooth',
                });
              }}
            >
              Conservative Strategy
            </span>{' '}
            managed account for the year 2023. The account has been active on
            the exchange since August 22, 2022, and data is available for
            viewing from that date to the present.
          </p>
        </ol>
        <ol>
          <p>
            The software supports integration with any brokers that comply
            with the requirements of relevant regulatory authorities and offer
            MetaTrader-4 or MetaTrader-5 accounts. It is the sole responsibility
            of the broker to ensure full compliance with all applicable
            regulatory standards and obligations.
          </p>
        </ol>
        <p className={styles.page__footer_contacts}>
          SIMPLEATOM SOFTWARE - FZCO
          <br />
          Dubai Silicon Oasis, Dubai Digital Park, Building A1, Dubai, UAE
          <br />
          Premises number: 54194-001
        </p>
      </section>
    </main>
  );
};
