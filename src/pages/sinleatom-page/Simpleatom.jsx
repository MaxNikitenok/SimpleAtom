import { useInView } from 'react-intersection-observer';

import styles from './Simpleatom.module.css';
import logo from '../../assets/Logo-2.png';
import QR1 from '../../assets/QR_Atom_1.png';
import QR2 from '../../assets/QR_Atom_2.png';
import devices from '../../assets/devices.png';
import screenshot from '../../assets/screenshot.png';
import Video from '../../assets/video.mp4';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { partnersRef } from '../about-us-page/AboutUs';
import { createRef } from 'react';

export const Simpleatom = () => {
  const navigate = useNavigate();

  const { ref: sectionOneRef, inView: sectionOneInView } = useInView({
    threshold: 0.9,
    rootMargin: '1110px 0px 0px 0px',
  });

  const { ref: sectionTwoRef, inView: sectionTwoInView } = useInView({
    threshold: 0.9,
    rootMargin: '1110px 0px 0px 0px',
  });

  const { ref: graphOneRef, inView: graphOneInView } = useInView({
    threshold: 0.9,
    rootMargin: '1110px 0px 0px 0px',
  });

  const { ref: graphTwoRef, inView: graphTwoInView } = useInView({
    threshold: 0.9,
    rootMargin: '1110px 0px 0px 0px',
  });

  const { ref: ref1, inView: ref1InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref2, inView: ref2InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref3, inView: ref3InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref4, inView: ref4InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref5, inView: ref5InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref6, inView: ref6InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref7, inView: ref7InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref8, inView: ref8InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref9, inView: ref9InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref10, inView: ref10InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref11, inView: ref11InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref12, inView: ref12InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref13, inView: ref13InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref14, inView: ref14InView } = useInView({
    threshold: 0.7,
    rootMargin: '1200px 0px 0px 0px',
  });
  const { ref: ref15, inView: ref15InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref16, inView: ref16InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref17, inView: ref17InView } = useInView({
    threshold: 1,
    rootMargin: '200px 0px 0px 0px',
  });

  const conservativeRef = createRef();

  const scrollToPartnersRef = () => {
    window.scrollTo({
      top: partnersRef.current.offsetTop,
      left: 100,
      behavior: 'smooth',
    });
  };

  return (
    <main className={styles.simpleatom}>
      <div className={styles.simpleatom__logo}>
        <img src={logo} alt="logo" />
      </div>
      <h1 className={styles.simpleatom__description}>
        <span>Simpleatom</span>
        <br /> is a <span>money management</span> using algorithmic trading
        software.
      </h1>
      <section className={styles.section1}>
        <div className={styles.section1__text_wrapper}>
          <p>
            We multiply your investment automatically and with fully
            controllable risks. It is the perfect solution to diversify your
            capital with over 240%<sup>1</sup> returns per year.
          </p>
        </div>
      </section>
      <section className={styles.section2}>
        <h1
          ref={sectionOneRef}
          className={sectionOneInView ? styles.view_anim : ''}
        >
          Get the highlights.
        </h1>
        <div className={styles.section2__container}>
          <div className={styles.container__left}>
            <div className={styles.container__left_1}>7</div>
            <div className={styles.container__left_2}>
              <span>M</span>
              <span>USD</span>
            </div>
          </div>
          <div className={styles.container__right}>
            <h3>Assets under management</h3>
            <p>
              Funds managed by SimpleAtom and provided by our investors and VCs
            </p>
          </div>
        </div>
      </section>
      <section
        ref={sectionTwoRef}
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
        <p>
          Simpleatom is the result of 4 years of data analysis and
          systematization, development of a unique trading strategy, including
          work with 4 assets: BTC, SOL, XAU, JPY, as well as 16 algorithms for
          rising and falling asset prices (without averaging), long and short
          strategies.
        </p>
      </section>
      <section className={styles.section4}>
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
              <span>240</span>
              <span>%</span>
            </div>
            <div className={styles.container__right}>
              <span>Annual yield</span>
              <span>
                For 2023 on the{' '}
                <span className={styles.conservative}>“Conservative”</span>{' '}
                strategy
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.graph1}>
        <div className={styles.graph1__big_container}>
          <p className={styles.graph1__title}>ATOM</p>
          <p className={styles.graph1__sub_title}>Trading strategy</p>

          <div className={styles.graph1__top_container}>
            <div className={styles.graph1__captions_left}>
              <p>Growth&#160;%</p>
              <p>Drawdown&#160;%</p>
            </div>
            <div
              ref={graphOneRef}
              className={cn(
                styles.graph1__graph,
                graphOneInView ? styles.view_anim : ''
              )}
            >
              <div className={styles.graph1__graph_top}>
                <div className={styles.graph1__svg_graph}>
                  <svg
                    className={styles.graph1__full}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1584"
                    height="431"
                    viewBox="0 0 1584 431"
                    fill="none"
                  >
                    <path
                      d="M11.5912 423.363L3.41013 424.863V427.863L1580.83 425.918V29.8309V27.8307L1576.23 21.8302L1569.58 15.3297L1561.4 13.3295L1554.75 13.8296L1551.68 11.3294L1541.97 4.82886L1536.85 42.8319L1531.23 86.8355L1525.09 85.3354L1518.96 77.3347L1507.2 56.8331L1498.5 54.3329L1487.26 36.8314L1479.59 28.8308L1473.96 34.8313L1467.83 69.3341L1461.18 88.3356L1453.51 106.837L1446.35 97.8364L1442.77 200.845L1435.61 225.347L1429.48 241.848L1411.58 233.347L1397.26 226.347L1384.99 220.346L1379.37 218.346L1372.21 208.345L1361.47 191.344L1353.8 186.344H1346.64L1341.02 202.345L1334.37 222.346L1328.75 215.846H1321.08L1316.48 208.345L1309.83 202.345L1303.69 195.344L1296.53 176.343L1289.38 176.843L1283.24 170.342L1275.57 176.343L1270.46 172.842L1263.81 162.342V163.842L1258.7 200.845L1251.03 196.844L1246.42 194.344L1238.75 188.344L1233.13 365.358L1227.51 362.358L1220.35 359.858L1214.21 356.357H1207.56L1200.92 354.857L1195.8 360.358L1190.18 360.858L1182 361.358L1179.95 358.357L1171.77 355.357L1157.46 348.857L1144.67 368.358L1128.31 360.358H1121.15L1101.72 357.857L1085.36 349.857L1075.13 347.857L1071.04 343.356L1056.73 342.356L1050.59 340.356L1027.58 334.856L1018.89 326.855L1005.59 325.355L999.969 331.355L992.811 341.356L986.164 339.856L979.005 332.855L975.426 328.855L957.53 325.355L938.1 319.854L931.453 320.354L923.783 321.855L916.113 327.855L909.977 325.355L890.547 318.354L885.434 330.855L873.674 327.855L861.913 327.355L855.266 322.855L846.574 318.354L840.949 315.854L834.814 311.854L827.655 309.854L821.519 309.354L814.872 318.354L808.225 311.854L805.157 338.856L801.578 340.856L795.953 338.856H790.329L783.682 333.855L778.057 346.857L771.41 366.858L765.786 364.858H759.138L752.491 363.358L746.355 362.358L739.197 362.858L733.061 368.858L726.414 367.358H719.767L713.631 364.358L706.473 363.358L700.848 362.858L695.735 362.358L690.622 361.858L682.952 360.358L676.816 366.858L671.192 365.858L657.386 365.358C656.193 365.025 653.296 364.358 651.25 364.358C649.205 364.358 646.648 364.691 645.626 364.858L638.467 362.858H631.82L625.684 360.358L619.037 361.358L613.924 360.358L608.3 357.857L601.141 357.357L594.494 352.857L588.358 355.357L581.711 352.357L575.064 350.357L569.951 347.857L562.281 351.857L556.145 357.357L548.475 361.858L542.34 359.858L536.715 356.357L530.068 355.357L524.443 354.357H518.308L512.172 352.357L506.036 351.857L499.9 349.857H492.742L486.606 348.357L480.981 346.357L473.823 344.356L466.664 345.856L461.04 343.856H454.393L448.257 341.856H441.61L435.474 344.856L428.316 355.357L422.18 350.857L420.646 349.857L417.578 347.357L410.931 345.356L404.795 344.356L398.148 342.356L392.012 341.856L385.876 340.356L378.206 336.856L372.071 335.856L365.935 343.356L360.31 359.358H359.288L352.64 357.857L346.505 356.857L339.858 357.857L333.722 356.357L327.075 352.857L322.473 354.857L316.337 351.857L309.69 353.357L303.554 350.857L296.907 349.857L290.771 349.357L284.124 347.357L276.965 352.357L272.363 351.357H269.807H264.694L258.047 350.357L251.399 349.357L244.752 347.857L238.105 348.857L234.015 355.357L228.39 359.858L221.232 361.358L214.073 360.358L208.449 364.358L201.802 367.358L195.666 364.858L189.019 360.358L181.86 359.358L175.724 365.858L169.077 362.358L162.941 361.358L156.806 373.859L156.294 373.359L149.647 370.858L143.511 378.359L138.909 389.86L132.774 397.361H125.615L119.479 395.861L113.344 401.361L106.185 400.361L100.049 402.361L93.9135 417.862L87.2663 416.362L80.6192 415.362L74.4834 424.863L67.8362 425.863L61.1891 424.863H54.542L48.4061 424.363H44.3156H37.6684L31.0213 423.363H24.3742H18.2384H11.5912Z"
                      fill="url(#paint0_linear_121_4638)"
                      stroke="#14D6A1"
                      strokeWidth="5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_121_4638"
                        x1="792.118"
                        y1="4.82886"
                        x2="792.363"
                        y2="499.869"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#14D6A1" />
                        <stop
                          offset="0.599464"
                          stopColor="#14D6A1"
                          stopOpacity="0.602907"
                        />
                        <stop offset="1" stopColor="#14D6A1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className={styles.graph1__min}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="404"
                    height="111"
                    viewBox="0 0 404 111"
                    fill="none"
                  >
                    <path
                      d="M3.42861 108.558L1.34546 108.94V109.704L403.003 109.209V8.35332V7.84402L401.831 6.31611L400.138 4.66089L398.055 4.15159L396.363 4.27891L395.581 3.64229L393.108 1.98706L391.806 11.6638L390.373 22.8684L388.811 22.4864L387.249 20.4492L384.254 15.2289L382.041 14.5922L379.176 10.1359L377.224 8.09867L375.791 9.62657L374.229 18.412L372.536 23.2504L370.583 27.9614L368.761 25.6695L367.849 51.8985L366.027 58.1374L364.464 62.3392L359.907 60.1746L356.262 58.3921L353.137 56.8642L351.705 56.3549L349.882 53.8084L347.148 49.4793L345.195 48.2061H343.372L341.94 52.2805L340.248 57.3735L338.815 55.7183H336.863L335.691 53.8084L333.998 52.2805L332.436 50.4979L330.613 45.6596L328.79 45.7869L327.228 44.1317L325.275 45.6596L323.973 44.7683L322.281 42.0945V42.4765L320.979 51.8985L319.026 50.8799L317.854 50.2433L315.901 48.7154L314.469 93.7885L313.037 93.0245L311.214 92.3879L309.651 91.4966H307.959L306.266 91.1147L304.964 92.5152L303.532 92.6426L301.449 92.7699L300.928 92.0059L298.845 91.242L295.2 89.5868L291.945 94.5524L287.778 92.5152H285.956L281.008 91.8786L276.842 89.8414L274.238 89.3321L273.196 88.1862L269.551 87.9315L267.988 87.4222L262.13 86.0217L259.916 83.9844L256.531 83.6025L255.099 85.1304L253.276 87.6769L251.584 87.2949L249.761 85.5123L248.85 84.4937L244.293 83.6025L239.345 82.2019L237.653 82.3292L235.7 82.7112L233.747 84.2391L232.184 83.6025L227.237 81.8199L225.935 85.003L222.94 84.2391L219.946 84.1118L218.253 82.9658L216.04 81.8199L214.608 81.1833L213.045 80.1647L211.223 79.6554L209.66 79.5281L207.968 81.8199L206.275 80.1647L205.494 87.0402L204.583 87.5495L203.15 87.0402H201.718L200.026 85.767L198.594 89.0774L196.901 94.1705L195.469 93.6612H193.776L192.084 93.2792L190.521 93.0245L188.699 93.1519L187.136 94.6798L185.444 94.2978H183.751L182.189 93.5338L180.366 93.2792L178.934 93.1519L177.632 93.0245L176.33 92.8972L174.377 92.5152L172.815 94.1705L171.382 93.9158L167.867 93.7885C167.563 93.7036 166.826 93.5338 166.305 93.5338C165.784 93.5338 165.133 93.6187 164.873 93.6612L163.05 93.1519H161.357L159.795 92.5152L158.102 92.7699L156.8 92.5152L155.368 91.8786L153.545 91.7513L151.853 90.6053L150.291 91.242L148.598 90.478L146.905 89.9687L145.603 89.3321L143.651 90.3507L142.088 91.7513L140.135 92.8972L138.573 92.3879L137.141 91.4966L135.448 91.242L134.016 90.9873H132.454L130.891 90.478L129.329 90.3507L127.767 89.8414H125.944L124.381 89.4594L122.949 88.9501L121.126 88.4408L119.304 88.8228L117.872 88.3135H116.179L114.617 87.8042H112.924L111.362 88.5681L109.539 91.242L107.977 90.096L107.586 89.8414L106.805 89.2048L105.112 88.6955L103.55 88.4408L101.857 87.9315L100.295 87.8042L98.7326 87.4222L96.7797 86.5309L95.2173 86.2763L93.655 88.1862L92.2228 92.2606H91.9624L90.2699 91.8786L88.7075 91.624L87.0149 91.8786L85.4526 91.4966L83.76 90.6053L82.5882 91.1147L81.0259 90.3507L79.3333 90.7327L77.771 90.096L76.0784 89.8414L74.516 89.7141L72.8235 89.2048L71.0007 90.478L69.829 90.2234H69.178H67.876L66.1835 89.9687L64.4909 89.7141L62.7983 89.3321L61.1058 89.5868L60.0642 91.242L58.632 92.3879L56.8093 92.7699L54.9865 92.5152L53.5544 93.5338L51.8618 94.2978L50.2994 93.6612L48.6069 92.5152L46.7841 92.2606L45.2218 93.9158L43.5292 93.0245L41.9669 92.7699L40.4045 95.953L40.2743 95.8257L38.5817 95.1891L37.0194 97.0989L35.8476 100.027L34.2852 101.937H32.4625L30.9001 101.555L29.3378 102.956L27.515 102.701L25.9527 103.211L24.3903 107.158L22.6977 106.776L21.0052 106.521L19.4428 108.94L17.7503 109.195L16.0577 108.94H14.3651L12.8028 108.813H11.7612H10.0686L8.37609 108.558H6.68353H5.12117H3.42861Z"
                      fill="url(#paint0_linear_296_6308)"
                      stroke="#14D6A1"
                      strokeWidth="1.27315"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_296_6308"
                        x1="202.174"
                        y1="1.98706"
                        x2="202.236"
                        y2="128.039"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#14D6A1" />
                        <stop
                          offset="0.599464"
                          stopColor="#14D6A1"
                          stopOpacity="0.602907"
                        />
                        <stop offset="1" stopColor="#14D6A1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className={styles.graph1__info}>
                    <div className={styles.graph1__info_gold}>
                      <p>233%</p>
                    </div>
                    <div className={styles.graph1__info_gold}>
                      <p>327%</p>
                    </div>
                    <div className={styles.graph1__info_gold}>
                      <p>416%</p>
                    </div>
                    <div className={styles.graph1__info_gold}>
                      <p>973%</p>
                    </div>
                    <div className={styles.graph1__info_gold}>
                      <p>1469%</p>
                    </div>
                    <div className={styles.graph1__info_gold}>
                      <p>1561%</p>
                    </div>
                    <div className={styles.graph1__info_green}>
                      <p></p>
                    </div>
                    <div className={styles.graph1__info_green}>
                      <p></p>
                    </div>
                    <div className={styles.graph1__info_green}>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className={styles.graph1__svg_peaks}></div>
                <div className={styles.graph1__svg_signatures_green}></div>
              </div>
              <div className={styles.graph1__graph_bottom}>
                <div className={styles.graph1__svg_graph}>
                  <svg
                    className={styles.graph1__full_bottom}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1584"
                    height="201"
                    viewBox="0 0 1584 201"
                    fill="none"
                  >
                    <path
                      d="M10.0573 18.8645L3.41013 12.864V4.36332L1580.83 3.86328V28.8653L1571.11 19.3645L1564.46 13.8641L1558.33 10.8638H1549.64L1542.99 8.36365L1536.34 18.3645L1528.16 65.3683L1521.51 63.3681L1516.4 54.3674L1507.71 38.3661L1501.06 31.8656L1492.37 29.8654L1485.72 20.3646L1479.07 9.86377L1470.89 14.8642L1464.76 63.3681L1457.6 102.871L1449.93 126.873L1443.28 125.373L1436.12 118.373L1427.94 114.872L1421.81 107.872L1416.18 105.372L1406.98 97.3709L1400.84 93.8706L1394.2 90.3703L1386.53 74.369L1379.88 58.3677L1373.74 46.8668L1364.54 40.8663H1358.91L1352.27 69.3686L1343.06 98.871L1337.44 88.3701L1330.79 87.37L1322.1 74.369L1315.96 65.8683L1308.81 51.3671L1301.14 23.8649L1295 26.3651L1288.86 15.3642L1279.66 23.8649L1273.52 19.8646L1266.88 21.8647L1258.19 17.3644L1252.05 12.864L1245.4 184.378L1237.22 175.377L1230.06 170.377L1224.95 158.376L1216.26 156.376L1209.61 153.875L1203.47 170.377H1193.76H1188.13L1181.49 158.376L1173.31 150.875L1166.66 140.874L1160.01 134.874L1151.32 158.876L1146.72 194.879L1139.56 186.878L1130.87 177.877L1124.73 169.377L1117.57 170.377L1109.9 167.377L1102.74 162.376L1097.12 158.876L1088.43 148.875L1082.29 138.374L1076.16 130.874L1066.95 128.373L1060.31 115.872L1054.17 113.372L1045.99 111.872L1039.34 103.371L1032.69 98.871L1024.51 93.3705L1018.38 87.8701L1012.24 82.3696L1003.55 62.368L997.413 56.8676L990.766 57.8677L982.585 79.3694L975.426 105.372L969.29 104.371L961.109 78.3693L953.951 66.8684L947.815 63.3681L939.634 59.3678L934.009 53.8673L927.362 48.3669L919.181 44.3666L911.511 36.866L905.376 39.8662L896.683 45.3666L890.036 60.8679L884.412 54.8674L876.23 47.3668L869.583 41.3663L862.936 36.866L854.755 72.8689L848.619 66.8684L841.972 63.3681L833.28 62.368L826.121 54.8674L819.985 44.3666L811.293 29.8654L805.157 23.3649L799.021 10.8638L790.84 7.36356L784.193 20.3646L778.057 24.865L769.365 21.3647L763.229 18.3645L756.582 48.3669L747.889 122.373L741.242 116.872L735.107 114.372L727.437 112.372L720.79 105.872L712.097 109.872L705.45 132.874L699.314 126.373L690.622 128.873L684.486 115.372L677.839 112.372L669.147 109.872L663.011 108.372L656.364 103.871L648.694 100.871L642.047 124.873L635.911 122.873L627.218 119.373H621.083L613.924 117.372L605.232 112.872H599.096L592.449 106.872L585.29 102.871L578.643 102.371L571.485 95.8707L563.815 89.8703L557.168 84.8699L550.009 71.8688L541.317 76.3692L535.181 68.8686L529.045 58.3677L520.353 49.867L513.706 66.8684L507.57 86.87L499.9 102.371L493.253 98.3709L487.117 84.3698L478.425 80.3695L471.266 74.869L465.642 73.3689L456.949 67.3684L450.302 63.8681L444.166 55.8675H435.474L429.338 48.3669L423.202 40.3662L414.51 36.3659L408.374 41.8664L401.727 33.3657L393.035 32.3656L386.899 26.8651L379.74 27.8652L371.559 36.3659L365.935 79.8694L358.776 59.8678L351.107 46.8668L344.459 40.8663L337.812 35.3658L329.631 28.3653L322.984 25.8651L316.337 19.3645L312.246 4.36332L307.645 7.86361L300.997 53.3673L295.373 47.8668L286.68 42.8664L280.545 45.8667L274.409 40.8663L265.716 27.8652L259.069 33.3657L252.933 21.8647L243.73 25.8651L237.594 16.8643L231.458 10.8638L222.254 7.36356L217.141 4.86336L210.494 22.8648L201.802 18.3645H195.666L188.507 14.3641L180.326 9.86377L174.19 6.86352L167.543 14.3641L158.851 9.86377L153.226 26.8651L146.579 43.3665L137.887 30.3654L131.751 7.86361L125.104 21.8647L116.923 8.86369L110.276 16.3643L104.14 13.3641L95.4474 11.8639L88.8003 7.36356L82.6645 31.8656L74.4834 15.3642L67.8362 36.3659L61.7004 54.3674L52.4967 39.3662L46.8722 37.366L39.7137 34.3658L31.0213 43.3665L24.3742 37.366L18.2384 24.3649L10.0573 18.8645Z"
                      fill="url(#paint0_linear_121_4636)"
                      stroke="#9747FF"
                      strokeWidth="5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_121_4636"
                        x1="797.999"
                        y1="194.879"
                        x2="797.297"
                        y2="3.86403"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.315122" stopColor="#9747FF" />
                        <stop
                          offset="0.9999"
                          stopColor="#A55FDB"
                          stopOpacity="0.5"
                        />
                        <stop offset="1" stopColor="#622C8B" stopOpacity="0" />
                        <stop offset="1" stopColor="#622C8B" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className={styles.graph1__min_bottom}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="404"
                    height="52"
                    viewBox="0 0 404 52"
                    fill="none"
                  >
                    <path
                      d="M3.03802 5.28753L1.34546 3.75963V1.5951L403.003 1.46777V7.83403L400.529 5.41485L398.836 4.01428L397.274 3.25033H395.061L393.368 2.6137L391.675 5.1602L389.592 17.1288L387.9 16.6195L386.598 14.3276L384.384 10.2532L382.692 8.59798L380.478 8.08868L378.786 5.6695L377.093 2.99568L375.01 4.26893L373.448 16.6195L371.625 26.6782L369.672 32.7898L367.98 32.4078L366.157 30.6252L364.074 29.734L362.511 27.9514L361.079 27.3148L358.736 25.2776L357.173 24.3863L355.481 23.495L353.528 19.4206L351.835 15.3462L350.273 12.4177L347.929 10.8898H346.497L344.805 18.1474L342.461 25.6595L341.029 22.9857L339.336 22.7311L337.123 19.4206L335.561 17.2561L333.738 13.5637L331.785 6.56078L330.223 7.1974L328.66 4.39625L326.317 6.56078L324.754 5.54218L323.062 6.05148L320.848 4.90555L319.286 3.75963L317.593 47.4321L315.51 45.1403L313.688 43.867L312.386 40.8112L310.172 40.3019L308.48 39.6653L306.917 43.867H304.444H303.011L301.319 40.8112L299.236 38.9014L297.543 36.3549L295.851 34.827L293.637 40.9386L292.465 50.106L290.643 48.0688L288.429 45.7769L286.867 43.6124L285.044 43.867L283.091 43.1031L281.268 41.8298L279.836 40.9386L277.623 38.3921L276.061 35.7182L274.498 33.8084L272.155 33.1717L270.462 29.9886L268.9 29.352L266.817 28.97L265.124 26.8055L263.432 25.6595L261.348 24.259L259.786 22.8584L258.224 21.4578L256.01 16.3648L254.448 14.9642L252.755 15.2189L250.672 20.6939L248.85 27.3148L247.287 27.0601L245.204 20.4392L243.381 17.5107L241.819 16.6195L239.736 15.6009L238.304 14.2003L236.611 12.7997L234.528 11.7811L232.575 9.87123L231.013 10.6352L228.799 12.0358L227.107 15.9828L225.674 14.4549L223.591 12.5451L221.899 11.0172L220.206 9.87123L218.123 19.0386L216.561 17.5107L214.868 16.6195L212.655 16.3648L210.832 14.4549L209.27 11.7811L207.056 8.08868L205.494 6.43345L203.932 3.25033L201.848 2.35905L200.156 5.6695L198.594 6.81543L196.38 5.92415L194.818 5.1602L193.125 12.7997L190.912 31.6438L189.219 30.2433L187.657 29.6066L185.704 29.0973L184.012 27.4421L181.798 28.4607L180.106 34.3177L178.543 32.6624L176.33 33.2991L174.768 29.8613L173.075 29.0973L170.862 28.4607L169.299 28.0787L167.607 26.9328L165.654 26.1688L163.961 32.2805L162.399 31.7712L160.186 30.8799H158.623L156.8 30.3706L154.587 29.2247H153.025L151.332 27.6968L149.509 26.6782L147.817 26.5508L145.994 24.8956L144.041 23.3677L142.349 22.0944L140.526 18.784L138.312 19.9299L136.75 18.02L135.188 15.3462L132.974 13.1817L131.282 17.5107L129.719 22.6037L127.767 26.5508L126.074 25.5322L124.512 21.9671L122.298 20.9485L120.476 19.5479L119.043 19.166L116.83 17.6381L115.137 16.7468L113.575 14.7096H111.362L109.799 12.7997L108.237 10.7625L106.024 9.74391L104.461 11.1445L102.769 8.97996L100.555 8.72531L98.993 7.32473L97.1703 7.57938L95.0871 9.74391L93.655 20.8212L91.8322 15.7282L89.8793 12.4177L88.1867 10.8898L86.4941 9.48926L84.411 7.70671L82.7184 7.07008L81.0259 5.41485L79.9843 1.5951L78.8125 2.48637L77.12 14.073L75.6878 12.6724L73.4745 11.3991L71.9121 12.1631L70.3497 10.8898L68.1364 7.57938L66.4438 8.97996L64.8815 6.05148L62.5379 7.07008L60.9756 4.77823L59.4132 3.25033L57.0697 2.35905L55.7677 1.72242L54.0752 6.30613L51.8618 5.1602H50.2994L48.4767 4.1416L46.3935 2.99568L44.8312 2.23172L43.1386 4.1416L40.9253 2.99568L39.4931 7.32473L37.8006 11.5265L35.5872 8.21601L34.0248 2.48637L32.3323 6.05148L30.2491 2.74102L28.5566 4.6509L26.9942 3.88695L24.7809 3.50498L23.0883 2.35905L21.526 8.59798L19.4428 4.39625L17.7503 9.74391L16.1879 14.3276L13.8443 10.5079L12.4122 9.99856L10.5894 9.23461L8.37608 11.5265L6.68353 9.99856L5.12117 6.6881L3.03802 5.28753Z"
                      fill="url(#paint0_linear_296_6307)"
                      stroke="#9747FF"
                      strokeWidth="1.27315"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_296_6307"
                        x1="203.671"
                        y1="50.106"
                        x2="203.493"
                        y2="1.46797"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.315122" stopColor="#9747FF" />
                        <stop
                          offset="0.9999"
                          stopColor="#A55FDB"
                          stopOpacity="0.5"
                        />
                        <stop offset="1" stopColor="#622C8B" stopOpacity="0" />
                        <stop offset="1" stopColor="#622C8B" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.graph1__captions_right}>
              <div className={styles.graph1__captions_growth}>
                <p>2000%</p>
                <p>1500%</p>
                <p>1000%</p>
                <p>500%</p>
              </div>
              <div className={styles.graph1__captions_drawdown}>
                <p>0%</p>
                <p>10%</p>
                <p>20%</p>
                <p>30%</p>
                <p>40%</p>
              </div>
            </div>
          </div>
          <div className={styles.graph1__bottom_container}>
            <div className={styles.graph1__months_top_row}>
              <div className={styles.graph1__months}>
                <p>Jan</p>
                <p>237.15%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Feb</p>
                <p>7.99%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Mar</p>
                <p>9.26%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Apr</p>
                <p>-15.54%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>May</p>
                <p>-1.89%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Jun</p>
                <p>58.5%</p>
              </div>
            </div>

            <div className={styles.graph1__months_bottom_row}>
              <div className={styles.graph1__months}>
                <p>Jul</p>
                <p>-5.97%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Aug</p>
                <p>-10.66%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Sep</p>
                <p>-25.16%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Oct</p>
                <p>226.7%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Nov</p>
                <p>-23.09%</p>
              </div>
              <div className={styles.graph1__months}>
                <p>Dec</p>
                <p>98.91%</p>
              </div>
            </div>
          </div>
          <div className={styles.graph1__text_container}>
            <div className={styles.graph1__text}>
              <div className={styles.graph1__text_left_side}>
                <div className={styles.graph1__text_left_side_row}>
                  <span>Annual ROI</span>
                  <span>Max. drawdown</span>
                </div>
                <div className={styles.graph1__text_left_side_row}>
                  <span>1470.75%</span>
                  <span>-41.18%</span>
                </div>
                <div className={styles.graph1__text_left_side_row}>
                  <span>Volatility</span>
                  <span>Monthly</span>
                </div>
                <div className={styles.graph1__text_left_side_row}>
                  <span>Medium</span>
                  <span>25.61%</span>
                </div>
              </div>
              <div className={styles.graph1__text_right_side}>
                <p>
                  Best solution for individuals for quick investments multiply
                </p>
                <div className={styles.graph1__links_container}>
                  <div className={styles.graph1__link_container}>
                    <span className={styles.link}>
                      <a
                        href="https://www.myfxbook.com/members/Milkivays/atom-pull-el/9908947"
                        target="blanc"
                      >
                        Check it &gt;
                      </a>
                    </span>
                    <span>Track record: Since 25.11.2022</span>
                  </div>
                  <div className={styles.button_full}>
                    <a href="https://www.myfxbook.com/members/Milkivays/atom-pull-el/9908947">
                      <img src={QR1} alt="qr-code" />
                    </a>
                  </div>
                  <a
                    target="blanc"
                    href="https://www.myfxbook.com/members/Milkivays/atom-pull-el/9908947"
                    className={cn(styles.graph1__button, styles.button_min)}
                  >
                    Try it
                  </a>
                </div>
              </div>
            </div>
            <a
              target="blanc"
              href="https://www.myfxbook.com/members/Milkivays/atom-pull-el/9908947"
              className={cn(styles.graph1__button, styles.button_full)}
            >
              Try it
            </a>
          </div>
        </div>
      </section>
      <section className={styles.section5}>
        <div
          className={styles.section5__container_first}
          onClick={() => {
            navigate('/aboutUs');
            window.scrollTo(0, 0);
            setTimeout(scrollToPartnersRef, 1000);
          }}
        >
          <p>over</p>
          <div className={styles.container_second}>
            <div className={styles.container__left}>
              <span>80</span>
            </div>
            <div className={styles.container__right}>
              <span>Clients worldwide</span>
              <span>Individual investors and venture capital funds</span>
            </div>
          </div>
        </div>
      </section>
      <section ref={conservativeRef} className={styles.graph2}>
        <div className={styles.graph2__big_container}>
          <p className={styles.graph2__title}>Conservative</p>
          <p className={styles.graph2__sub_title}>Trading strategy</p>

          <div className={styles.graph2__top_container}>
            <div className={styles.graph2__captions_left}>
              <p>Growth&#160;%</p>
              <p>Drawdown&#160;%</p>
            </div>
            <div
              ref={graphTwoRef}
              className={cn(
                styles.graph2__graph,
                graphTwoInView ? styles.view_anim : ''
              )}
            >
              <div className={styles.graph2__graph_top}>
                <div className={styles.graph2__svg_graph}>
                  <svg
                    className={styles.graph2__full}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1565"
                    height="463"
                    viewBox="0 0 1565 463"
                    fill="none"
                  >
                    <path
                      d="M2.50363 458.957L15.2928 454.161L40.8711 458.957L48.8644 457.358L66.0911 460.49L66.7126 460.49L72.8441 458.957L79.2386 436.576L92.0278 441.372L96.8237 415.793L103.218 412.596L109.613 414.195L116.007 407.8H128.797L147.98 372.63L154.375 375.827L159.171 356.644L173.559 361.439L178.355 355.045L197.538 363.038L210.328 355.045L218.321 356.644L223.117 353.446L231.11 350.249L234.307 342.256L253.491 345.453H267.879L274.273 343.854L291.859 347.052L298.253 348.65L304.648 347.052L309.444 350.249L317.437 347.052L323.831 351.848H330.226H336.621L343.015 353.446L349.41 355.045L355.804 335.861L360.6 327.868L381.383 332.664L398.968 334.262L411.757 340.657L418.152 343.854L429.342 335.861L442.131 337.46L453.322 339.058H459.716L469.308 340.657L480.499 345.453L496.485 348.65L517.268 351.848L526.859 355.045L531.655 358.242L538.05 359.841L554.036 345.453L571.622 355.045L579.615 351.848L587.608 356.644L621.18 361.439L643.561 364.637L661.146 366.235L669.139 363.038L681.928 364.637L699.513 366.235L704.309 371.031L710.704 369.433L717.098 371.031L728.289 363.038L737.881 366.235L755.466 367.834L758.663 366.235L761.86 343.854L768.255 327.868L776.248 332.664H787.439L792.235 302.29L800.228 308.684L806.623 299.092L813.017 303.888H821.01L827.405 307.086L840.194 313.48L852.983 319.875L862.575 316.677L873.766 321.473H875.364L880.16 307.086L892.949 308.684L905.739 313.48L913.732 308.684L926.521 307.086L950.501 313.48L968.086 316.677L976.079 326.269L982.474 327.868L987.27 315.079L995.263 308.684L1006.45 311.881L1014.45 318.276L1038.43 323.072L1043.22 326.269H1057.61L1062.41 329.467L1070.4 331.065L1081.59 335.861L1087.98 340.657H1094.38L1100.77 342.256L1108.77 343.854H1113.56H1118.36L1121.56 347.052L1127.95 348.65L1131.15 351.848L1132.75 353.446L1139.14 342.256L1145.54 331.065L1153.53 335.861L1158.32 340.657L1164.72 342.256L1171.11 348.65H1177.51L1182.3 345.453L1188.7 342.256H1196.69L1203.09 343.854L1206.28 347.052L1214.28 350.249L1220.67 353.446L1222.27 348.65L1225.47 198.378L1231.86 185.588L1238.26 187.187H1241.45L1246.25 177.595L1251.05 145.622L1257.44 152.017L1263.84 155.214L1270.23 142.425L1276.62 148.82L1283.02 147.221L1289.41 158.411L1295.81 164.806L1302.2 169.602L1308.6 175.997L1314.99 174.398L1321.39 180.792L1327.78 166.405L1330.98 147.221L1338.97 148.82L1346.96 150.418L1366.15 168.003L1374.14 172.799L1385.33 175.997H1390.13L1396.52 180.792H1402.92L1409.31 187.187H1415.71L1422.1 177.595L1425.3 174.398L1426.9 169.602V163.207L1433.29 65.69L1439.69 73.6832L1446.08 62.4927L1452.48 46.5062L1458.87 33.717H1465.26L1471.66 35.3157L1478.05 44.9076L1486.05 48.1049L1492.44 49.7035L1498.84 54.4994L1503.63 60.894L1510.03 65.69L1514.82 67.2886L1516.42 64.0913L1521.22 30.5198L1526.01 3.34277L1532.41 8.13871L1540.4 9.73736H1546.8L1553.19 11.336L1559.58 14.5333L1562.78 457.358V458.957L66.7126 460.49L66.4495 460.556L66.0911 460.49L2.50363 460.556V458.957Z"
                      fill="url(#paint0_linear_147_12975)"
                      stroke="#14D6A1"
                      strokeWidth="3.19729"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_147_12975"
                        x1="782.643"
                        y1="3.34277"
                        x2="784.241"
                        y2="564.592"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#14D6A1" />
                        <stop
                          offset="0.670135"
                          stopColor="#14D6A1"
                          stopOpacity="0.500722"
                        />
                        <stop offset="1" stopColor="#14D6A1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className={styles.graph2__min}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="399"
                    height="119"
                    viewBox="0 0 399 119"
                    fill="none"
                  >
                    <path
                      d="M0.970703 117.706L4.2272 116.485L10.7402 117.706L12.7755 117.299L17.162 118.097L17.3202 118.097L18.8815 117.706L20.5097 112.007L23.7662 113.229L24.9874 106.716L26.6156 105.901L28.2439 106.308L29.8722 104.68H33.1287L38.0134 95.7248L39.6417 96.5389L40.8628 91.6542L44.5264 92.8754L45.7476 91.2471L50.6323 93.2824L53.8888 91.2471L55.9242 91.6542L57.1453 90.8401L59.1807 90.0259L59.9948 87.9906L64.8795 88.8048H68.5431L70.1713 88.3977L74.649 89.2118L76.2773 89.6189L77.9055 89.2118L79.1267 90.0259L81.162 89.2118L82.7903 90.433H84.4185H86.0468L87.675 90.8401L89.3033 91.2471L90.9315 86.3624L92.1527 84.3271L97.4445 85.5483L101.922 85.9553L105.179 87.5836L106.807 88.3977L109.656 86.3624L112.913 86.7694L115.762 87.1765H117.391L119.833 87.5836L122.682 88.8048L126.753 89.6189L132.045 90.433L134.487 91.2471L135.708 92.0612L137.337 92.4683L141.407 88.8048L145.885 91.2471L147.92 90.433L149.956 91.6542L158.504 92.8754L164.203 93.6895L168.681 94.0966L170.716 93.2824L173.972 93.6895L178.45 94.0966L179.671 95.3178L181.299 94.9107L182.928 95.3178L185.777 93.2824L188.22 94.0966L192.697 94.5036L193.511 94.0966L194.325 88.3977L195.954 84.3271L197.989 85.5483H200.838L202.06 77.8141L204.095 79.4423L205.723 76.9999L207.351 78.2211H209.387L211.015 79.0353L214.272 80.6635L217.528 82.2918L219.97 81.4776L222.82 82.6988H223.227L224.448 79.0353L227.705 79.4423L230.961 80.6635L232.996 79.4423L236.253 79.0353L242.359 80.6635L246.837 81.4776L248.872 83.92L250.5 84.3271L251.721 81.0706L253.757 79.4423L256.606 80.2564L258.641 81.8847L264.747 83.1059L265.968 83.92H269.632L270.853 84.7341L272.889 85.1412L275.738 86.3624L277.366 87.5836H278.994L280.623 87.9906L282.658 88.3977H283.879H285.1L285.915 89.2118L287.543 89.6189L288.357 90.433L288.764 90.8401L290.392 87.9906L292.021 85.1412L294.056 86.3624L295.277 87.5836L296.905 87.9906L298.534 89.6189H300.162L301.383 88.8048L303.011 87.9906H305.046L306.675 88.3977L307.489 89.2118L309.524 90.0259L311.152 90.8401L311.56 89.6189L312.374 51.355L314.002 48.0985L315.63 48.5056H316.444L317.665 46.0632L318.887 37.9219L320.515 39.5502L322.143 40.3643L323.771 37.1078L325.4 38.7361L327.028 38.329L328.656 41.1784L330.284 42.8067L331.913 44.0279L333.541 45.6561L335.169 45.2491L336.797 46.8773L338.426 43.2137L339.24 38.329L341.275 38.7361L343.31 39.1431L348.195 43.6208L350.23 44.842L353.08 45.6561H354.301L355.929 46.8773H357.558L359.186 48.5056H360.814L362.442 46.0632L363.256 45.2491L363.664 44.0279V42.3996L365.292 17.5688L366.92 19.6041L368.548 16.7547L370.177 12.684L371.805 9.42755H373.433L375.061 9.83461L376.69 12.277L378.725 13.0911L380.353 13.4982L381.981 14.7194L383.203 16.3476L384.831 17.5688L386.052 17.9759L386.459 17.1617L387.68 8.61342L388.901 1.69336L390.53 2.91455L392.565 3.32161H394.193L395.821 3.72867L397.45 4.5428L398.264 117.299V117.706L17.3202 118.097L17.2532 118.113L17.162 118.097L0.970703 118.113V117.706Z"
                      fill="url(#paint0_linear_301_9875)"
                      stroke="#14D6A1"
                      strokeWidth="0.814125"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_301_9875"
                        x1="199.617"
                        y1="1.69336"
                        x2="200.024"
                        y2="144.604"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#14D6A1" />
                        <stop
                          offset="0.670135"
                          stopColor="#14D6A1"
                          stopOpacity="0.500722"
                        />
                        <stop offset="1" stopColor="#14D6A1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className={styles.graph2__info}>
                    <div className={styles.graph2__info_gold}>
                      <p>64%</p>
                    </div>
                    <div className={styles.graph2__info_gold}>
                      <p>72%</p>
                    </div>
                    <div className={styles.graph2__info_gold}>
                      <p>87%</p>
                    </div>
                    <div className={styles.graph2__info_gold}>
                      <p>173%</p>
                    </div>
                    <div className={styles.graph2__info_gold}>
                      <p>236%</p>
                    </div>
                    <div className={styles.graph2__info_gold}>
                      <p>252%</p>
                    </div>
                    <div className={styles.graph2__info_green}>
                      <p></p>
                    </div>
                    <div className={styles.graph2__info_green}>
                      <p></p>
                    </div>
                    <div className={styles.graph2__info_green}>
                      <p></p>
                    </div>
                    <div className={styles.graph2__info_green}>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className={styles.graph2__svg_peaks}></div>
                <div className={styles.graph2__svg_signatures_green}></div>
              </div>
              <div className={styles.graph2__graph_months}>
                <p>Jan 01,’23</p>
                <p>Feb 26,’23</p>
                <p>May 02,’23</p>
                <p>Aug 01,’23</p>
                <p>Oct 25,’23</p>
                <p>Dec 26,’23</p>
              </div>
              <div className={styles.graph2__graph_bottom}>
                <div className={styles.graph2__svg_graph}>
                  <svg
                    className={styles.graph2__full_bottom}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1565"
                    height="185"
                    viewBox="0 0 1565 185"
                    fill="none"
                  >
                    <path
                      d="M10.4965 54.9096L2.50363 67.6988V3.75294L1562.78 2.1543V21.338L1556.39 14.9435L1546.8 11.7462H1540.4L1534.01 10.1475L1527.61 69.2974L1519.62 66.1001L1510.03 56.5083L1505.23 38.9231L1498.84 35.7259L1489.24 32.5286L1484.45 19.7394L1478.05 6.95023C1476.45 8.54888 1472.3 12.3856 1468.46 14.9435C1464.62 17.5013 1462.6 44.7849 1462.07 58.1069L1455.67 93.2771L1449.28 110.862L1441.28 107.665L1433.29 96.4744L1426.9 93.2771L1418.9 85.2839L1412.51 82.0866L1404.52 75.692L1396.52 70.8961L1390.13 62.9028L1383.73 46.9164L1375.74 30.9299L1369.35 19.7394L1361.35 14.9435H1354.96L1346.96 61.3042L1340.57 94.8758L1334.18 82.0866H1326.18L1318.19 66.1001L1311.79 53.311L1303.8 42.1204L1297.41 13.3448L1292.61 14.9435L1283.02 21.338L1276.62 18.1408L1268.63 5.35159L1260.64 178.005L1254.24 166.815L1247.85 160.42L1241.45 146.032L1235.06 142.835L1225.47 138.039L1220.67 155.624L1211.08 162.019L1204.69 160.42L1198.29 141.236L1190.3 134.842L1183.9 117.257L1175.91 107.665L1169.51 141.236L1163.12 181.203L1155.13 171.611L1148.73 158.822L1142.34 150.828H1134.34L1126.35 149.23L1118.36 142.835L1110.36 139.638L1105.57 125.25L1097.58 112.461L1091.18 104.468L1084.79 101.27L1075.19 88.4812L1070.4 86.8825H1060.81L1056.01 77.2906L1049.62 72.4947L1040.02 67.6988L1033.63 62.9028L1025.64 56.5083L1017.64 35.7259L1012.85 30.9299H1004.85L996.861 50.1137L990.467 94.8758L982.473 91.6785L976.079 62.9028L968.085 51.7123L961.691 48.515L947.303 38.9231L934.514 27.7326L924.922 21.338L921.725 24.5353L910.534 30.9299L904.14 46.9164L897.745 38.9231L889.752 32.5286L881.759 24.5353L875.364 21.338L868.969 78.8893L862.575 67.6988L854.582 62.9028L848.187 64.5015L841.792 62.9028L832.201 56.5083L825.806 43.7191L817.813 29.3313L811.418 21.338L806.622 10.1475L797.03 8.54888L790.636 18.1408L781.044 19.7394L776.248 16.5421L769.853 14.9435L761.86 64.5015L755.466 158.822L749.071 154.026L739.479 150.828H733.085L725.091 144.434L720.295 150.828L712.302 171.611L705.908 168.413L696.316 171.611L691.52 157.223L683.526 154.026L677.132 150.828L667.54 152.427L661.145 144.434L656.349 142.835L646.758 152.427L640.363 149.23L633.968 146.032H625.975L619.581 142.835L611.587 136.441L605.193 138.039L598.798 131.645L590.805 128.447H584.41L576.417 118.855L568.424 115.658L562.029 110.862L554.036 93.2771L547.642 102.869L541.247 94.8758L531.655 78.8893L525.261 69.2974L517.267 91.6785L512.471 112.461L506.077 125.25L496.485 120.454L491.689 102.869L482.097 98.073L474.104 91.6785L467.709 86.8825L461.315 82.0866L453.321 74.0934L450.124 69.2974L438.934 67.6988L432.539 59.7055L424.546 46.9164L418.151 43.7191L411.757 48.515L403.763 40.5218L398.967 42.1204L389.376 34.1272L382.981 35.7259L376.586 46.9164L366.995 62.9028L362.199 43.7191L355.804 32.5286L347.811 29.3313L339.818 24.5353L331.824 21.338L325.43 19.7394L319.035 13.3448L311.042 5.35159L304.647 53.311L298.253 48.515L290.26 40.5218L282.266 45.3177L274.273 38.9231L269.477 26.134L261.484 32.5286L251.892 26.134L247.096 29.3313L237.504 19.7394L232.708 16.5421L226.314 13.3448L218.321 11.7462L211.926 19.7394L205.531 14.9435L195.939 16.5421L191.144 13.3448L181.552 8.54888L175.157 5.35159L168.762 10.1475L160.769 29.3313L154.375 21.338L147.98 5.35159L138.388 18.1408L133.592 6.95023L124 11.7462L117.606 6.95023H111.211L103.218 5.35159L98.4221 22.9367L88.8302 8.54888L82.4356 75.692L76.041 85.2839L66.4491 72.4947L60.0546 67.6988L55.2586 66.1001L47.2654 72.4947L40.8708 67.6988L32.8776 61.3042L24.8843 54.9096L18.4898 45.3177L10.4965 54.9096Z"
                      fill="url(#paint0_linear_147_12974)"
                      stroke="#9747FF"
                      strokeWidth="3.19729"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_147_12974"
                        x1="781.044"
                        y1="221.294"
                        x2="781.044"
                        y2="2.27918"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.570244" stopColor="#9747FF" />
                        <stop
                          offset="1"
                          stopColor="#9747FF"
                          stopOpacity="0.71"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    className={styles.graph2__min_bottom}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="399"
                    height="48"
                    viewBox="0 0 399 48"
                    fill="none"
                  >
                    <path
                      d="M3.00593 13.9536L0.970703 17.2101V0.92757L398.264 0.520508V5.40526L396.635 3.77701L394.193 2.96288H392.565L390.937 2.55582L389.308 17.6171L387.273 16.803L384.831 14.3606L383.609 9.88295L381.981 9.06882L379.539 8.2547L378.318 4.9982L376.689 1.7417C376.282 2.14876 375.224 3.12571 374.247 3.77701C373.27 4.42831 372.754 11.3755 372.619 14.7677L370.991 23.7231L369.362 28.2008L367.327 27.3866L365.292 24.5372L363.663 23.7231L361.628 21.6878L360 20.8736L357.965 19.2454L355.929 18.0242L354.301 15.9889L352.673 11.9183L350.637 7.84763L349.009 4.9982L346.974 3.77701H345.346L343.31 15.5818L341.682 24.1301L340.054 20.8736H338.018L335.983 16.803L334.355 13.5465L332.32 10.6971L330.691 3.36995L329.47 3.77701L327.028 5.40526L325.4 4.59113L323.364 1.33463L321.329 45.2974L319.701 42.448L318.072 40.8197L316.444 37.1561L314.816 36.342L312.374 35.1208L311.152 39.5985L308.71 41.2268L307.082 40.8197L305.453 35.935L303.418 34.3067L301.79 29.829L299.755 27.3866L298.126 35.935L296.498 46.1115L294.463 43.6691L292.835 40.4126L291.206 38.3773H289.171L287.136 37.9703L285.1 36.342L283.065 35.5279L281.844 31.8643L279.809 28.6078L278.18 26.5725L276.552 25.7584L274.11 22.5019L272.888 22.0948H270.446L269.225 19.6524L267.597 18.4313L265.154 17.2101L263.526 15.9889L261.491 14.3606L259.455 9.06882L258.234 7.84763H256.199L254.164 12.7324L252.535 24.1301L250.5 23.316L248.872 15.9889L246.836 13.1394L245.208 12.3253L241.545 9.88295L238.288 7.03351L235.846 5.40526L235.032 6.21938L232.182 7.84763L230.554 11.9183L228.926 9.88295L226.89 8.2547L224.855 6.21938L223.227 5.40526L221.599 20.0595L219.97 17.2101L217.935 15.9889L216.307 16.3959L214.678 15.9889L212.236 14.3606L210.608 11.1041L208.573 7.44057L206.944 5.40526L205.723 2.55582L203.281 2.14876L201.652 4.59113L199.21 4.9982L197.989 4.18407L196.361 3.77701L194.325 16.3959L192.697 40.4126L191.069 39.1915L188.626 38.3773H186.998L184.963 36.7491L183.742 38.3773L181.706 43.6691L180.078 42.855L177.636 43.6691L176.415 40.0056L174.379 39.1915L172.751 38.3773L170.309 38.7844L168.68 36.7491L167.459 36.342L165.017 38.7844L163.389 37.9703L161.76 37.1561H159.725L158.097 36.342L156.061 34.7138L154.433 35.1208L152.805 33.4926L150.77 32.6785H149.141L147.106 30.2361L145.071 29.4219L143.443 28.2008L141.407 23.7231L139.779 26.1654L138.151 24.1301L135.708 20.0595L134.08 17.6171L132.045 23.316L130.824 28.6078L129.195 31.8643L126.753 30.6431L125.532 26.1654L123.089 24.9443L121.054 23.316L119.426 22.0948L117.798 20.8736L115.762 18.8383L114.948 17.6171L112.099 17.2101L110.47 15.1748L108.435 11.9183L106.807 11.1041L105.179 12.3253L103.143 10.29L101.922 10.6971L99.4798 8.66176L97.8515 9.06882L96.2233 11.9183L93.7809 15.9889L92.5597 11.1041L90.9315 8.2547L88.8961 7.44057L86.8608 6.21938L84.8255 5.40526L83.1973 4.9982L81.569 3.36995L79.5337 1.33463L77.9055 13.5465L76.2772 12.3253L74.2419 10.29L72.2066 11.5112L70.1713 9.88295L68.9501 6.62645L66.9148 8.2547L64.4724 6.62645L63.2512 7.44057L60.8088 4.9982L59.5876 4.18407L57.9594 3.36995L55.9241 2.96288L54.2958 4.9982L52.6676 3.77701L50.2252 4.18407L49.004 3.36995L46.5616 2.14876L44.9334 1.33463L43.3051 2.55582L41.2698 7.44057L39.6416 5.40526L38.0133 1.33463L35.5709 4.59113L34.3498 1.7417L31.9074 2.96288L30.2791 1.7417H28.6509L26.6156 1.33463L25.3944 5.81232L22.952 2.14876L21.3237 19.2454L19.6955 21.6878L17.2531 18.4313L15.6249 17.2101L14.4037 16.803L12.3684 18.4313L10.7401 17.2101L8.70481 15.5818L6.6695 13.9536L5.04125 11.5112L3.00593 13.9536Z"
                      fill="url(#paint0_linear_301_9874)"
                      stroke="#9747FF"
                      strokeWidth="0.814125"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_301_9874"
                        x1="199.21"
                        y1="56.3199"
                        x2="199.21"
                        y2="0.552308"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.570244" stopColor="#9747FF" />
                        <stop
                          offset="1"
                          stopColor="#9747FF"
                          stopOpacity="0.71"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.graph2__captions_right}>
              <div className={styles.graph2__captions_growth}>
                <p>300%</p>
                <p>250%</p>
                <p>200%</p>
                <p>150%</p>
                <p>100%</p>
                <p>50%</p>
              </div>
              <div className={styles.graph2__captions_drawdown}>
                <p>0%</p>
                <p>5%</p>
                <p>10%</p>
                <p>20%</p>
              </div>
            </div>
          </div>
          <div className={styles.graph2__bottom_container}>
            <div className={styles.graph2__months_top_row}>
              <div className={styles.graph2__months}>
                <p>Jan</p>
                <p>56,35%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Feb</p>
                <p>3%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Mar</p>
                <p>3.1%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Apr</p>
                <p>7%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>May</p>
                <p>-2.1%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Jun</p>
                <p>23.21%</p>
              </div>
            </div>

            <div className={styles.graph2__months_bottom_row}>
              <div className={styles.graph2__months}>
                <p>Jul</p>
                <p>-1.29%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Aug</p>
                <p>-2.94%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Sep</p>
                <p>-9.13%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Oct</p>
                <p>69.03%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Nov</p>
                <p>-6.47%</p>
              </div>
              <div className={styles.graph2__months}>
                <p>Dec</p>
                <p>38.1%</p>
              </div>
            </div>
          </div>
          <div className={styles.graph2__text_container}>
            <div className={styles.graph2__text}>
              <div className={styles.graph2__text_left_side}>
                <div className={styles.graph2__text_left_side_row}>
                  <span>Annual ROI</span>
                  <span>Max. drawdown</span>
                </div>
                <div className={styles.graph2__text_left_side_row}>
                  <span>247.57%</span>
                  <span>-15.35%</span>
                </div>
                <div className={styles.graph2__text_left_side_row}>
                  <span>Volatility</span>
                  <span>Monthly</span>
                </div>
                <div className={styles.graph2__text_left_side_row}>
                  <span>Low</span>
                  <span>10.81%</span>
                </div>
              </div>
              <div className={styles.graph2__text_right_side}>
                <p>
                  Best solution for large capital (family funds, asset managers)
                  with a stable grow
                </p>
                <div className={styles.graph2__links_container}>
                  <div className={styles.graph2__link_container}>
                    <span className={styles.link}>
                      <a
                        href="https://www.myfxbook.com/members/Milkivays/conserve-a/9947281"
                        target="blanc"
                      >
                        Check it &gt;
                      </a>
                    </span>
                    <span>Track record: Since 22.08.2022</span>
                  </div>
                  <div className={styles.button_full}>
                    <a
                      href="https://www.myfxbook.com/members/Milkivays/conserve-a/9947281"
                      target="blanc"
                    >
                      <img src={QR2} alt="qr-code" />
                    </a>
                  </div>
                  <a
                    href="https://www.myfxbook.com/members/Milkivays/conserve-a/9947281"
                    target="blanc"
                    className={cn(styles.graph2__button, styles.button_min)}
                  >
                    Try it
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://www.myfxbook.com/members/Milkivays/conserve-a/9947281"
              target="blanc"
              className={cn(styles.graph2__button, styles.button_full)}
            >
              Try it
            </a>
          </div>
        </div>
      </section>
      <section className={styles.section6}>
        <div
          className={styles.section6__container_first}
          onClick={() => {
            navigate('/aboutUs');
            window.scrollTo(0, 0);
            setTimeout(scrollToPartnersRef, 1000);
          }}
        >
          <p>over</p>
          <div className={styles.container_second}>
            <div className={styles.container__left}>
              <span>5</span>
            </div>
            <div className={styles.container__right}>
              <span>Partner countries</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section7}>
        <img src={devices} alt="devices" />
      </section>
      <section className={styles.section8}>
        <h2>The best because</h2>
        <div className={styles.section8__container}>
          <div className={styles.section8__container_one}>
            <p ref={ref1} className={ref1InView ? styles.view_anim : ''}>
              Trading on <span>BYBIT</span> - one of top-3 exchanges.
            </p>
            <p ref={ref2} className={ref2InView ? styles.view_anim : ''}>
              <span>Your money is always on your personal account</span>, you do
              not need to transfer it anywhere. You have instant access to your
              funds.
            </p>
            <p ref={ref3} className={ref3InView ? styles.view_anim : ''}>
              <span>You transfer </span>
              us the reward only
              <span> after you make a profit.</span>
            </p>
            <p ref={ref4} className={ref4InView ? styles.view_anim : ''}>
              Our software will <span>only</span> be accessed for{' '}
              <span>trading</span> transactions on your behalf.
            </p>
            <p ref={ref5} className={ref5InView ? styles.view_anim : ''}>
              Simpleatom developed by the team of professionals with{' '}
              <span>12 years trading experience.</span>
            </p>
            <p ref={ref6} className={ref6InView ? styles.view_anim : ''}>
              Controlled risks and <span>solid profit on the distance</span> -
              confirmed by statistics.
            </p>
            <p ref={ref7} className={ref7InView ? styles.view_anim : ''}>
              We have a very <span>strict risk management.</span> On a
              conservative account the risk per trade does not exceed 0.3%
            </p>
          </div>
          <div className={styles.section8__container_two}>
            <p ref={ref11} className={ref11InView ? styles.view_anim : ''}>
              Highest level of
            </p>
            <h3 ref={ref12} className={ref12InView ? styles.view_anim : ''}>
              Security
            </h3>
            <p ref={ref13} className={ref13InView ? styles.view_anim : ''}>
              With Metatrader (MT4)
            </p>
          </div>
          <div
            ref={ref14}
            className={cn(
              ref14InView ? styles.view_anim : '',
              styles.video_container
            )}
          >
            <video width="270" height="600" autoPlay poster={screenshot} muted>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.section8__second_container}>
          <div className={styles.section8__second_container_left}>
            <p ref={ref8} className={ref8InView ? styles.view_anim : ''}>
              <span>Full automation of trading</span> - you don’t need to study
              tons of materials or sit on the stock exchange for days.
            </p>
            <p ref={ref9} className={ref9InView ? styles.view_anim : ''}>
              We do not buy assets, we trade futures. That's how{' '}
              <span>you make money on both the rise and fall</span> of the
              exchange rate.
            </p>
            <p ref={ref10} className={ref10InView ? styles.view_anim : ''}>
              Suitable for <span>novice</span> investors, professionals,{' '}
              <span>funds</span> wishing to diversify capital
            </p>
          </div>
          <div className={styles.section8__second_container_right}>
            <p ref={ref15} className={ref15InView ? styles.view_anim : ''}>
              Unbelievable
            </p>
            <h3 ref={ref16} className={ref16InView ? styles.view_anim : ''}>
              Passive income
            </h3>
            <p ref={ref17} className={ref17InView ? styles.view_anim : ''}>
              Up to 1470,75% profit in a year for long term investing
            </p>
          </div>
        </div>
      </section>
      <section className={styles.connect__button}>
        <button>
          <a href="https://dev.fcm.by/form/home/" target="blanc">
            Connect
          </a>
        </button>
      </section>
      <section className={styles.page__footer}>
        <ol type="1">
          <li>
            The data presented is derived from the performance statistics of the
            <span
              onClick={() => {
                window.scrollTo({
                  top: conservativeRef.current.offsetTop - 90,
                  behavior: 'smooth',
                });
              }}
            >
              {' '}
              "Conservative Strategy"
            </span>{' '}
            managed account for the year 2023. Account verification is confirmed
            by data from{' '}
            <span className={styles.footer__link}>
              <a
                href="https://www.myfxbook.com/members/Milkivays/conserve-a/9947281"
                target="blanc"
              >
                myfxbook.
              </a>
            </span>{' '}
            The account has been active on the exchange since August 22, 2022,
            and data is available for viewing from that date to the present.
          </li>
        </ol>
      </section>
    </main>
  );
};
