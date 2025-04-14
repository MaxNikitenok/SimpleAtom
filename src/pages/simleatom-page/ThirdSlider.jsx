import { useState, useEffect, useRef } from 'react';
import styles from './ThirdSlider.module.css';
import cn from 'classnames';
import graph_ultra from '../../assets/graph_ultra.png';
import graph_ultra_more from '../../assets/graph_ultra_more.png';
import graph_conservative from '../../assets/graph_conservative.png';
import graph_conservative_more from '../../assets/graph_conservative_more.png';
import graph_medium_2021_color from '../../assets/graph_medium_2021_color.png';
import graph_medium_2021_bw from '../../assets/graph_medium_2021_bw.png';
import graph_medium_2021_more from '../../assets/graph_medium_2021_more.png';
import graph_medium_2022_color from '../../assets/graph_medium_2022_color.png';
import graph_medium_2022_bw from '../../assets/graph_medium_2022_bw.png';
import graph_medium_2022_more from '../../assets/graph_medium_2022_more.png';
import graph_medium_2023_color from '../../assets/graph_medium_2023_color.png';
import graph_medium_2023_bw from '../../assets/graph_medium_2023_bw.png';
import graph_medium_2023_more from '../../assets/graph_medium_2023_more.png';
import graph_medium_2024_color from '../../assets/graph_medium_2024_color.png';
import graph_medium_2024_bw from '../../assets/graph_medium_2024_bw.png';
import graph_medium_2024_more from '../../assets/graph_medium_2024_more.png';
import stats2021 from '../../assets/stats2021.png';
import stats2022 from '../../assets/stats2022.png';
import stats2023 from '../../assets/stats2023.png';
import stats2024 from '../../assets/stats2024.png';

export const ThirdSlider = () => {
  const [strategy, setStrategy] = useState(null);
  const [year, setYear] = useState(null);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showMoreStats, setShowMoreStats] = useState(false);
  const graphsTrackRef = useRef(null);
  const graphsRef = useRef(null);

  useEffect(() => {
    setStrategy('conservative');
    setYear('2021');
  }, []);

  
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      e.currentTarget.scrollLeft += e.currentTarget.clientWidth;
    } else {
      e.currentTarget.scrollLeft -= e.currentTarget.clientWidth;
    }
  };

  const moreStats2021 = {
    strategy: [
      { title: 'Wins / Losses Ratio', description: '0.95' },
      { title: 'Payout Ratio (Avg Win/Loss)', description: '1.97' },
      { title: 'Average # of Bars in Trade', description: '0' },
      { title: 'AHPR', description: '0.01' },
      { title: 'Z-Score', description: '-12.03' },
      { title: 'Z-Probability', description: '99.9 %' },
      { title: 'Expectancy', description: '1322.94' },
      { title: 'Deviation', description: '$ 7026.86' },
      { title: 'Max Pos. Exposure', description: '118' },
      { title: 'Stagnation in Days', description: '48' },
      { title: 'Stagnation in %', description: '13.22 %' },
      { title: 'Max Lots Exposure', description: '994.2' },
    ],
    trades: [
      { title: '# of Wins', description: '1322' },
      { title: '# of Losses', description: '1386' },
      { title: '# of Cancelled/Expired', description: '0' },
      { title: 'Gross Profit', description: '$ 7660285.36' },
      { title: 'Gross Loss', description: '$ -4077763.28' },
      { title: 'Average Win', description: '$ 5794.47' },
      { title: 'Average Loss', description: '$ -2942.11' },
      { title: 'Largest Win', description: '$ 94359.08' },
      { title: 'Largest Loss', description: '$ -11034.79' },
      { title: 'Max Consec Wins', description: '45' },
      { title: 'Max Consec Losses', description: '13' },
      { title: 'Avg Consec Wins', description: '2.54' },
      { title: 'Avg Consec Loss', description: '2.66' },
      { title: 'Avg # of Bars in Wins', description: '0' },
      { title: 'Avg # of bars in Losses', description: '0' },
    ],
  };

  const moreStats2022 = {
    strategy: [
      { title: 'Wins / Losses Ratio', description: '1.14' },
      { title: 'Payout Ratio (Avg Win/Loss)', description: '2.38' },
      { title: 'Average # of Bars in Trade', description: '0' },
      { title: 'AHPR', description: '0.02' },
      { title: 'Z-Score', description: '-15.23' },
      { title: 'Z-Probability', description: '99.9 %' },
      { title: 'Expectancy', description: '2767.6' },
      { title: 'Deviation', description: '$ 10975.52' },
      { title: 'Max Pos. Exposure', description: '126' },
      { title: 'Stagnation in Days', description: '34' },
      { title: 'Stagnation in %', description: '9.39 %' },
      { title: 'Max Lots Exposure', description: '1434.96' },
    ],
    trades: [
      { title: '# of Wins', description: '1614' },
      { title: '# of Losses', description: '1421' },
      { title: '# of Cancelled/Expired', description: '0' },
      { title: 'Gross Profit', description: '$ 13320289.9' },
      { title: 'Gross Loss', description: '$ -4920621.21' },
      { title: 'Average Win', description: '$ 8252.97' },
      { title: 'Average Loss', description: '$ -3462.79' },
      { title: 'Largest Win', description: '$ 92314.12' },
      { title: 'Largest Loss', description: '$ -15643.44' },
      { title: 'Max Consec Wins', description: '46' },
      { title: 'Max Consec Losses', description: '20' },
      { title: 'Avg Consec Wins', description: '2.95' },
      { title: 'Avg Consec Loss', description: '2.59' },
      { title: 'Avg # of Bars in Wins', description: '0' },
      { title: 'Avg # of bars in Losses', description: '0' },
    ],
  };

  const moreStats2023 = {
    strategy: [
      { title: 'Wins / Losses Ratio', description: '0.93' },
      { title: 'Payout Ratio (Avg Win/Loss)', description: '2.34' },
      { title: 'Average # of Bars in Trade', description: '0' },
      { title: 'AHPR', description: '0.01' },
      { title: 'Z-Score', description: '-15.36' },
      { title: 'Z-Probability', description: '99.9 %' },
      { title: 'Expectancy', description: '1874.54' },
      { title: 'Deviation', description: '$ 11852.43' },
      { title: 'Max Pos. Exposure', description: '111' },
      { title: 'Stagnation in Days', description: '122' },
      { title: 'Stagnation in %', description: '33.8 %' },
      { title: 'Max Lots Exposure', description: '1413.34' },
    ],
    trades: [
      { title: '# of Wins', description: '1434' },
      { title: '# of Losses', description: '1539' },
      { title: '# of Cancelled/Expired', description: '0' },
      { title: 'Gross Profit', description: '$ 10300270.53' },
      { title: 'Gross Loss', description: '$ -4727262.8' },
      { title: 'Average Win', description: '$ 7182.89' },
      { title: 'Average Loss', description: '$ -3071.65' },
      { title: 'Largest Win', description: '$ 258107.84' },
      { title: 'Largest Loss', description: '$ -13522.41' },
      { title: 'Max Consec Wins', description: '29' },
      { title: 'Max Consec Losses', description: '25' },
      { title: 'Avg Consec Wins', description: '2.69' },
      { title: 'Avg Consec Loss', description: '2.88' },
      { title: 'Avg # of Bars in Wins', description: '0' },
      { title: 'Avg # of bars in Losses', description: '0' },
    ],
  };

  const moreStats2024 = {
    strategy: [
      { title: 'Wins / Losses Ratio', description: '1.17' },
      { title: 'Payout Ratio (Avg Win/Loss)', description: '1.7' },
      { title: 'Average # of Bars in Trade', description: '0' },
      { title: 'AHPR', description: '0.01' },
      { title: 'Z-Score', description: '-14.38' },
      { title: 'Z-Probability', description: '99.9 %' },
      { title: 'Expectancy', description: '1458.71' },
      { title: 'Deviation', description: '$ 7464.14' },
      { title: 'Max Pos. Exposure', description: '107' },
      { title: 'Stagnation in Days', description: '37' },
      { title: 'Stagnation in %', description: '12.25 %' },
      { title: 'Max Lots Exposure', description: '1167.89' },
    ],
    trades: [
      { title: '# of Wins', description: '1362' },
      { title: '# of Losses', description: '1169' },
      { title: '# of Cancelled/Expired', description: '0' },
      { title: 'Gross Profit', description: '$ 7471826.56' },
      { title: 'Gross Loss', description: '$ -3779827.98' },
      { title: 'Average Win', description: '$ 5485.92' },
      { title: 'Average Loss', description: '$ -3233.39' },
      { title: 'Largest Win', description: '$ 148348.32' },
      { title: 'Largest Loss', description: '$ -14870.22' },
      { title: 'Max Consec Wins', description: '31' },
      { title: 'Max Consec Losses', description: '16' },
      { title: 'Avg Consec Wins', description: '3.03' },
      { title: 'Avg Consec Loss', description: '2.6' },
      { title: 'Avg # of Bars in Wins', description: '0' },
      { title: 'Avg # of bars in Losses', description: '0' },
    ],
  };

  // const track = document.getElementById("image-track");

  // window.onmousedown = (e) => {
  //   track.dataset.mouseDownAt = e.clientX;
  // };
  // window.onmouseup = () => {
  //   track.dataset.mouseDownAt = "0";
  //   track.dataset.prevPercentage = track.dataset.percentage;
  //   console.log(track.dataset.percentage)
  // }

  // window.onmousemove = e => {
  //   if(track.dataset.mouseDownAt === "0") return;

  //   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  //         maxDelta = window.innerWidth / 2;

  //   const percentage = (mouseDelta / maxDelta) * -100,
  //         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
  //         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  //   track.dataset.percentage = nextPercentage;

  //   track.animate({
  //     transform: `translate(${nextPercentage}%, 0%)`
  //   }, { duration: 1200, fill: "forwards" });

  //   for(const image of track.getElementsByClassName("image")) {
  //     image.animate({
  //       objectPosition: `${100 + nextPercentage}% center`
  //     }, { duration: 1200, fill: "forwards" });
  //   }
  // }

  // const setP = (x)=>{
  //   track.animate({
  //     transform: `translate(${x}%, 0%)`
  //   }, { duration: 1200, fill: "forwards" });
  //   track.dataset.percentage = x;
  // }

  return (
    <div className={styles.thirdSlider__container}>
      <div className={styles.thirdSlider__minCardsWrapper}>
        <div
          className={cn(
            styles.thirdSlider__minCardsContainer,
            strategy === 'ultra' && styles.cardMin__activeRight,
            strategy === 'medium' && styles.cardMin__activeLeft
          )}
        >
          <div
            className={
              strategy === 'ultra'
                ? styles.thirdSlider__cardMin_activeWrapper
                : styles.thirdSlider__cardMin_wrapper
            }
          >
            <div
              className={styles.thirdSlider__cardMin}
              onClick={() => setStrategy('ultra')}
            >
              <div className={styles.cardMin__content}>
                <div className={styles.cardMin__titles}>
                  <div
                    className={
                      strategy === 'ultra'
                        ? styles.cardMin__activeTitle
                        : styles.cardMin__title
                    }
                  >
                    ULTRA-CONSERVATIVE STRATEGY
                  </div>
                  <div className={styles.cardMin__subTitle}>
                    Maximum safety, low drawdowns - protect your wealth with
                    reliable returns.
                  </div>
                </div>
                <div className={styles.cardMin__description}>
                  <div className={styles.cardMin__description_text}>
                    <p>Average Annual Income</p>
                    <p>Average Monthly Income</p>
                  </div>
                  <div className={styles.cardMin__description_numbers}>
                    <p>59.70%</p>
                    <p>4.98%</p>
                  </div>
                </div>
                <div className={styles.cardMin__subDescription}>
                  <div className={styles.cardMin__subDescription_text}>
                    <p>Profit Factor</p>
                    <p>Recovery Factor</p>
                    <p>Sharpe Ratio</p>
                    <p>Max Equity Drawdown</p>
                    <p>Max Stagnation, days</p>
                  </div>
                  <div className={styles.cardMin__subDescription_numbers}>
                    <p>1.94</p>
                    <p>16.73</p>
                    <p>0.21</p>
                    <p>5.60%</p>
                    <p>92</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              strategy === 'conservative'
                ? styles.thirdSlider__cardMin_activeWrapper
                : styles.thirdSlider__cardMin_wrapper
            }
          >
            <div
              className={styles.thirdSlider__cardMin}
              onClick={() => setStrategy('conservative')}
            >
              <div className={styles.cardMin__content}>
                <div className={styles.cardMin__titles}>
                  <div
                    className={
                      strategy === 'conservative'
                        ? styles.cardMin__activeTitle
                        : styles.cardMin__title
                    }
                  >
                    CONSERVATIVE STRATEGY
                  </div>
                  <div className={styles.cardMin__subTitle}>
                    Steady growth with minimal risk - your capital grows safely
                    over time.
                  </div>
                </div>
                <div className={styles.cardMin__description}>
                  <div className={styles.cardMin__description_text}>
                    <p>Average Annual Income</p>
                    <p>Average Monthly Income</p>
                  </div>
                  <div className={styles.cardMin__description_numbers}>
                    <p>72.55%</p>
                    <p>6.05%</p>
                  </div>
                </div>
                <div className={styles.cardMin__subDescription}>
                  <div className={styles.cardMin__subDescription_text}>
                    <p>Profit Factor</p>
                    <p>Recovery Factor</p>
                    <p>Sharpe Ratio</p>
                    <p>Max Equity Drawdown</p>
                    <p>Max Stagnation, days</p>
                  </div>
                  <div className={styles.cardMin__subDescription_numbers}>
                    <p>2.01</p>
                    <p>10.44</p>
                    <p>0.16</p>
                    <p>9.20%</p>
                    <p>49</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              strategy === 'medium'
                ? styles.thirdSlider__cardMin_activeWrapper
                : styles.thirdSlider__cardMin_wrapper
            }
          >
            <div
              className={styles.thirdSlider__cardMin}
              onClick={() => setStrategy('medium')}
            >
              <div className={styles.cardMin__content}>
                <div className={styles.cardMin__titles}>
                  <div
                    className={
                      strategy === 'medium'
                        ? styles.cardMin__activeTitle
                        : styles.cardMin__title
                    }
                  >
                    MEDIUM-VOLATILITY STRATEGY
                  </div>
                  <div className={styles.cardMin__subTitle}>
                    Balanced risk, high returns - capitalize on market trends
                    for profit.
                  </div>
                </div>
                <div className={styles.cardMin__description}>
                  <div className={styles.cardMin__description_text}>
                    <p>Average Annual Income</p>
                    <p>Average Monthly Income</p>
                  </div>
                  <div className={styles.cardMin__description_numbers}>
                    <p>431.18%</p>
                    <p>35.93%</p>
                  </div>
                </div>
                <div className={styles.cardMin__subDescription}>
                  <div className={styles.cardMin__subDescription_text}>
                    <p>Profit Factor</p>

                    <p>Sharpe Ratio</p>
                    <p>Max Equity Drawdown</p>
                    <p>Max Stagnation, days</p>
                  </div>
                  <div className={styles.cardMin__subDescription_numbers}>
                    <p>2.19</p>
                    <p>0.23</p>
                    <p>17.05%</p>
                    <p>122</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thirdSlider__maxCardsContainer}>
        {strategy === 'ultra' && (
          <div className={styles.thirdSlider__cardMax}>
            <div className={styles.cardMax__content}>
              <div className={styles.cardMax__title}>
                <span>ULTRA-CONSERVATIVE</span> strategy details
              </div>
              <div className={styles.cardMax__subTitle}>
                MONTHLY PERFOMANCE COMPARISON
              </div>
              <div className={styles.cardMax__description}>
                Disclaimer: Past perfomance is mot anindicator of future
                perfomance. Please refer to the disclaimer statement page.
              </div>
              <div className={styles.cardMax__table_container} onWheel={(e)=>handleWheel(e)}>
                <div
                  className={cn(styles.cardMax__table, styles.table__text_text)}
                >
                  <div
                    className={cn(styles.table__year, styles.table__text_title)}
                  >
                    <div>YR</div>
                    <div>YTD</div>
                    <div>AMI</div>
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                    <div>Jul</div>
                    <div>Aug</div>
                    <div>Sep</div>
                    <div>Oct</div>
                    <div>Nov</div>
                    <div>Dec</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘25</div>
                    <div>-</div>
                    <div>-</div>
                    <div>1.05%</div>
                    <div>0.81%</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘24</div>
                    <div className={styles.table__text_normal}>34.89%</div>
                    <div className={styles.table__text_normal}>2.91%</div>
                    <div className={styles.table__text_low}>-0.31%</div>
                    <div>1.59%</div>
                    <div>5.96%</div>
                    <div>7.08%</div>
                    <div>2.57%</div>
                    <div className={styles.table__text_low}>-0.42%</div>
                    <div>3.33%</div>
                    <div>1.87%</div>
                    <div>2.29%</div>
                    <div>2.33%</div>
                    <div>3.37%</div>
                    <div>0.92%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘23</div>
                    <div className={styles.table__text_normal}>28.32%</div>
                    <div className={styles.table__text_normal}>2.36%</div>
                    <div>5.99%</div>
                    <div>1.55%</div>
                    <div>2.34%</div>
                    <div>1.34%</div>
                    <div>2.22%</div>
                    <div>1.10%</div>
                    <div className={styles.table__text_low}>-0.11%</div>
                    <div>1.45%</div>
                    <div className={styles.table__text_low}>-0.27%</div>
                    <div>2.14%</div>
                    <div>4.13%</div>
                    <div>3.47%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘22</div>
                    <div className={styles.table__text_normal}>77.33%</div>
                    <div className={styles.table__text_normal}>6.44%</div>
                    <div>5.96%</div>
                    <div>6.96%</div>
                    <div>16.05%</div>
                    <div>6.87%</div>
                    <div>2.32%</div>
                    <div>4.83%</div>
                    <div>1.40%</div>
                    <div>1.09%</div>
                    <div>4.83%</div>
                    <div>7.05%</div>
                    <div>0.78%</div>
                    <div>1.45%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘21</div>
                    <div className={styles.table__text_normal}>59.01%</div>
                    <div className={styles.table__text_normal}>4.92%</div>
                    <div>10.24%</div>
                    <div>7.05%</div>
                    <div>1.76%</div>
                    <div>0.51%</div>
                    <div>3.61%</div>
                    <div>4.00%</div>
                    <div>4.28%</div>
                    <div>4.07%</div>
                    <div>0.09%</div>
                    <div>6.47%</div>
                    <div>2.80%</div>
                    <div>2.83%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘20</div>
                    <div className={styles.table__text_normal}>98.43%</div>
                    <div className={styles.table__text_normal}>8.20%</div>
                    <div>10.01%</div>
                    <div>15.89%</div>
                    <div>6.97%</div>
                    <div>2.05%</div>
                    <div>3.62%</div>
                    <div>4.65%</div>
                    <div>1.31%</div>
                    <div>11.31%</div>
                    <div className={styles.table__text_low}>-0.09%</div>
                    <div>1.16%</div>
                    <div>10.32%</div>
                    <div>4.56%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘19</div>
                    <div className={styles.table__text_normal}>60.22%</div>
                    <div className={styles.table__text_normal}>5.05%</div>
                    <div>3.18%</div>
                    <div>8.17%</div>
                    <div className={styles.table__text_low}>-1.58%</div>
                    <div className={styles.table__text_low}>-5.93%</div>
                    <div>10.54%</div>
                    <div>23.47%</div>
                    <div>4.87%</div>
                    <div>7.81%</div>
                    <div className={styles.table__text_low}>-0.41%</div>
                    <div className={styles.table__text_low}>-0.27%</div>
                    <div className={styles.table__text_low}>-0.45%</div>
                    <div>1.63%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>AVG:</div>
                    <div className={styles.table__text_bright}>59.70%</div>
                    <div className={styles.table__text_bright}>4.98%</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>

              <div className={styles.cardMax__graphTitle}>
                DETAILED REPORT 2019-2025
              </div>
              <div className={styles.cardMax__graphSubTitle}>
                ULTRA-CONSERVATIVE strategy
              </div>
              <div className={styles.cardMax__graph}>
                <img
                  src={graph_ultra}
                  alt="graph"
                  className={!showMoreDetails ? '' : styles.hide}
                ></img>
                <img
                  src={graph_ultra_more}
                  alt="graph"
                  className={showMoreDetails ? '' : styles.hide}
                ></img>
                <div
                  className={styles.cardMax__graphButton}
                  onClick={() => {
                    setShowMoreDetails(!showMoreDetails);
                  }}
                >
                  {!showMoreDetails && <span>More details</span>}
                  {showMoreDetails && <span>Hide details</span>}
                </div>
              </div>
            </div>
          </div>
        )}
        {strategy === 'conservative' && (
          <div className={styles.thirdSlider__cardMax}>
            <div className={styles.cardMax__content}>
              <div className={styles.cardMax__title}>
                <span>CONSERVATIVE</span> strategy details
              </div>
              <div className={styles.cardMax__subTitle}>
                MONTHLY PERFOMANCE COMPARISON
              </div>
              <div className={styles.cardMax__description}>
                Disclaimer: Past perfomance is mot anindicator of future
                perfomance. Please refer to the disclaimer statement page.
              </div>
              <div className={styles.cardMax__table_container} onWheel={(e)=>handleWheel(e)}>
                <div
                  className={cn(styles.cardMax__table, styles.table__text_text)}
                >
                  <div
                    className={cn(styles.table__year, styles.table__text_title)}
                  >
                    <div>YR</div>
                    <div>YTD</div>
                    <div>AMI</div>
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                    <div>Jul</div>
                    <div>Aug</div>
                    <div>Sep</div>
                    <div>Oct</div>
                    <div>Nov</div>
                    <div>Dec</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘25</div>
                    <div>-</div>
                    <div>-</div>
                    <div>1.57%</div>
                    <div>2.08%</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                    <div>-</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘24</div>
                    <div className={styles.table__text_normal}>44.00%</div>
                    <div className={styles.table__text_normal}>3.67%</div>
                    <div className={styles.table__text_low}>-0.42%</div>
                    <div>2.17%</div>
                    <div>7.55%</div>
                    <div>8.39%</div>
                    <div>3.41%</div>
                    <div className={styles.table__text_low}>-0.87%</div>
                    <div>4.06%</div>
                    <div>2.18%</div>
                    <div>2.73%</div>
                    <div>2.88%</div>
                    <div>4.52%</div>
                    <div>0.84%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘23</div>
                    <div className={styles.table__text_normal}>52.13%</div>
                    <div className={styles.table__text_normal}>4.34%</div>
                    <div>14.63%</div>
                    <div>2.78%</div>
                    <div>3.99%</div>
                    <div>0.68%</div>
                    <div>2.67%</div>
                    <div>4.40%</div>
                    <div className={styles.table__text_low}>-0.45%</div>
                    <div>1.45%</div>
                    <div className={styles.table__text_low}>-0.92%</div>
                    <div>4.39%</div>
                    <div>4.95%</div>
                    <div>3.95%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘22</div>
                    <div className={styles.table__text_normal}>96.36%</div>
                    <div className={styles.table__text_normal}>8.03%</div>
                    <div>6.27%</div>
                    <div>6.32%</div>
                    <div>20.34%</div>
                    <div>8.36%</div>
                    <div>2.45%</div>
                    <div>6.45%</div>
                    <div>1.82%</div>
                    <div>1.33%</div>
                    <div>7.78%</div>
                    <div>7.70%</div>
                    <div>0.67%</div>
                    <div>1.36%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘21</div>
                    <div className={styles.table__text_normal}>54.24%</div>
                    <div className={styles.table__text_normal}>4.52%</div>
                    <div>8.30%</div>
                    <div>6.26%</div>
                    <div>1.73%</div>
                    <div>0.57%</div>
                    <div>2.00%</div>
                    <div>3.09%</div>
                    <div>5.68%</div>
                    <div>2.86%</div>
                    <div>1.29%</div>
                    <div>8.58%</div>
                    <div>2.57%</div>
                    <div>1.59%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘20</div>
                    <div className={styles.table__text_normal}>101.23%</div>
                    <div className={styles.table__text_normal}>8.44%</div>
                    <div>7.83%</div>
                    <div>13.93%</div>
                    <div>6.38%</div>
                    <div>1.87%</div>
                    <div>7.21%</div>
                    <div>2.96%</div>
                    <div>1.81%</div>
                    <div>11.61%</div>
                    <div>0.70%</div>
                    <div>3.14%</div>
                    <div>12.07%</div>
                    <div>3.57%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘19</div>
                    <div className={styles.table__text_normal}>87.27%</div>
                    <div className={styles.table__text_normal}>7.27%</div>
                    <div>1.91%</div>
                    <div>12.01%</div>
                    <div className={styles.table__text_low}>-3.93%</div>
                    <div className={styles.table__text_low}>-0.31%</div>
                    <div>17.95%</div>
                    <div>24.20%</div>
                    <div>4.39%</div>
                    <div>8.85%</div>
                    <div className={styles.table__text_low}>-0.11%</div>
                    <div>1.70%</div>
                    <div>1.07%</div>
                    <div>0.21%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>AVG:</div>
                    <div className={styles.table__text_bright}>72.55%</div>
                    <div className={styles.table__text_bright}>6.05%</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div />
              <div className={styles.cardMax__graphTitle}>
                DETAILED REPORT 2019-2025
              </div>
              <div className={styles.cardMax__graphSubTitle}>
                CONSERVATIVE strategy
              </div>
              <div className={styles.cardMax__graph}>
                <img
                  src={graph_conservative}
                  alt="graph"
                  className={!showMoreDetails ? '' : styles.hide}
                ></img>
                <img
                  src={graph_conservative_more}
                  alt="graph"
                  className={showMoreDetails ? '' : styles.hide}
                ></img>

                <div
                  className={styles.cardMax__graphButton}
                  onClick={() => {
                    setShowMoreDetails(!showMoreDetails);
                  }}
                >
                  {!showMoreDetails && <span>More details</span>}
                  {showMoreDetails && <span>Hide details</span>}
                </div>
              </div>
            </div>
          </div>
        )}
        {strategy === 'medium' && (
          <div className={styles.thirdSlider__cardMax}>
            <div className={styles.cardMax__content}>
              <div className={styles.cardMax__title}>
                <span>MEDIUM-VOLATILITY</span> strategy details
              </div>
              <div className={styles.cardMax__subTitle}>
                MONTHLY PERFOMANCE COMPARISON
              </div>
              <div className={styles.cardMax__description}>
                Disclaimer: Past perfomance is mot anindicator of future
                perfomance. Please refer to the disclaimer statement page.
              </div>
              <div className={styles.cardMax__table_container} onWheel={(e)=>handleWheel(e)}>
                <div
                  className={cn(styles.cardMax__table, styles.table__text_text)}
                >
                  <div
                    className={cn(styles.table__year, styles.table__text_title)}
                  >
                    <div>YR</div>
                    <div>YTD</div>
                    <div>AMI</div>
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                    <div>Jul</div>
                    <div>Aug</div>
                    <div>Sep</div>
                    <div>Oct</div>
                    <div>Nov</div>
                    <div>Dec</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘21</div>
                    <div>258.25%</div>
                    <div>21.52%</div>
                    <div className={styles.table__text_low}>-11.91%</div>
                    <div>16.74%</div>
                    <div>28.07%</div>
                    <div>3.28%</div>
                    <div>22.93%</div>
                    <div>16.49%</div>
                    <div>17.12%</div>
                    <div>12.77%</div>
                    <div>4.53%</div>
                    <div>28.6%</div>
                    <div>11.52%</div>
                    <div>18.82%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘22</div>
                    <div className={styles.table__text_normal}>739.97%</div>
                    <div className={styles.table__text_normal}>61.66%</div>
                    <div>11.75%</div>
                    <div>20.53%</div>
                    <div>108.91%</div>
                    <div>36.91%</div>
                    <div>9.15%</div>
                    <div>25.98%</div>
                    <div>8.22%</div>
                    <div>5.38%</div>
                    <div>27.25%</div>
                    <div>15.23%</div>
                    <div>4.54%</div>
                    <div>1.51%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘23</div>
                    <div className={styles.table__text_normal}>457.30%</div>
                    <div className={styles.table__text_normal}>38.11%</div>
                    <div>97.71%</div>
                    <div>13.75%</div>
                    <div>13.44%</div>
                    <div>10.65%</div>
                    <div>7.82%</div>
                    <div>24.67%</div>
                    <div>1.28%</div>
                    <div>11.35%</div>
                    <div>3.07%</div>
                    <div>17.55%</div>
                    <div>9.45%</div>
                    <div>15.83%</div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>‘24</div>
                    <div className={styles.table__text_normal}>269.20%</div>
                    <div className={styles.table__text_normal}>26.92%</div>
                    <div>4.15%</div>
                    <div>54.56%</div>
                    <div>32.58%</div>
                    <div>32.88%</div>
                    <div>24.67%</div>
                    <div>6.98%</div>
                    <div>11.35%</div>
                    <div>2.52%</div>
                    <div>0.59%</div>
                    <div>17.16%</div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className={styles.table__year}>
                    <div className={styles.table__text_normal}>AVG:</div>
                    <div className={styles.table__text_bright}>431.18%</div>
                    <div className={styles.table__text_bright}>35.93%</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className={styles.cardMax__graphTitle}>
                DETAILED REPORT 2021-2024
              </div>
              <div className={styles.cardMax__graphSubTitle}>
                MEDIUM-VOLATILITY strategy
              </div>
              <div className={styles.medium__container}>
                <div className={styles.medium__graphs_container}>
                  <div
                    ref={graphsTrackRef}
                    className={styles.medium__graphs}
                    // onWheel={(e) => {
                    //   console.log(e.target.offsetLeft);
                    //   if (e.deltaY > 0) {
                    //     e.currentTarget.scrollLeft +=
                    //       e.currentTarget.clientWidth;
                    //   } else {
                    //     e.currentTarget.scrollLeft -=
                    //       e.currentTarget.clientWidth;
                    //   }
                    // }}
                  >
                    <div
                      className={styles.medium__graph_wrapper}
                      ref={graphsRef}
                    >
                      <img
                        src={graph_medium_2021_color}
                        alt="graph"
                        id="graph"
                        className={
                          year === '2021' && !showMoreDetails ? '' : styles.hide
                        }
                      ></img>
                      <img
                        src={graph_medium_2021_bw}
                        alt="graph"
                        id="graph"
                        className={year !== '2021' ? '' : styles.hide}
                      ></img>
                      <img
                        src={graph_medium_2021_more}
                        alt="graph"
                        id="graph"
                        className={
                          year === '2021' && showMoreDetails ? '' : styles.hide
                        }
                      ></img>

                      <div
                        className={cn(
                          styles.cardMax__graphButton,
                          year === '2021' ? '' : styles.visibilityHidden
                        )}
                        onClick={() => {
                          setShowMoreDetails(!showMoreDetails);
                        }}
                      >
                        {!showMoreDetails && <span>More details</span>}
                        {showMoreDetails && <span>Hide details</span>}
                      </div>
                    </div>
                    <div className={styles.medium__graph_wrapper}>
                      <img
                        src={graph_medium_2022_color}
                        alt="graph"
                        id="graph"
                        className={
                          year === '2022' && !showMoreDetails ? '' : styles.hide
                        }
                      ></img>
                      <img
                        src={graph_medium_2022_bw}
                        alt="graph"
                        id="graph"
                        className={year !== '2022' ? '' : styles.hide}
                      ></img>
                      <img
                        src={graph_medium_2022_more}
                        alt="graph"
                        id="graph"
                        className={
                          year === '2022' && showMoreDetails ? '' : styles.hide
                        }
                      ></img>

                      <div
                        className={cn(
                          styles.cardMax__graphButton,
                          year === '2022' ? '' : styles.visibilityHidden
                        )}
                        onClick={() => {
                          setShowMoreDetails(!showMoreDetails);
                        }}
                      >
                        {!showMoreDetails && <span>More details</span>}
                        {showMoreDetails && <span>Hide details</span>}
                      </div>
                    </div>
                    <div className={styles.medium__graph_wrapper}>
                      <img
                        src={graph_medium_2023_color}
                        alt="graph"
                        id="graph"
                        className={
                          year === '2023' && !showMoreDetails ? '' : styles.hide
                        }
                      ></img>
                      <img
                        src={graph_medium_2023_bw}
                        alt="graph"
                        id="graph"
                        className={year !== '2023' ? '' : styles.hide}
                      ></img>
                      <img
                        src={graph_medium_2023_more}
                        alt="graph"
                        id="graph"
                        className={
                          year === '2023' && showMoreDetails ? '' : styles.hide
                        }
                      ></img>

                      <div
                        className={cn(
                          styles.cardMax__graphButton,
                          year === '2023' ? '' : styles.visibilityHidden
                        )}
                        onClick={() => {
                          setShowMoreDetails(!showMoreDetails);
                        }}
                      >
                        {!showMoreDetails && <span>More details</span>}
                        {showMoreDetails && <span>Hide details</span>}
                      </div>
                    </div>
                    <div className={styles.medium__graph_wrapper}>
                      <img
                        src={graph_medium_2024_color}
                        alt="graph"
                        id="graph"
                        className={
                          year === '2024' && !showMoreDetails ? '' : styles.hide
                        }
                      ></img>
                      <img
                        src={graph_medium_2024_bw}
                        alt="graph"
                        id="graph"
                        className={year !== '2024' ? '' : styles.hide}
                      ></img>
                      <img
                        src={graph_medium_2024_more}
                        alt="graph"
                        id="graph"
                        className={
                          year === '2024' && showMoreDetails ? '' : styles.hide
                        }
                      ></img>

                      <div
                        className={cn(
                          styles.cardMax__graphButton,
                          year === '2024' ? '' : styles.visibilityHidden
                        )}
                        onClick={() => {
                          setShowMoreDetails(!showMoreDetails);
                        }}
                      >
                        {!showMoreDetails && <span>More details</span>}
                        {showMoreDetails && <span>Hide details</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardMax__yearButtons}>
                <div
                  className={
                    year === '2021'
                      ? styles.cardMax__activeYearButton
                      : styles.cardMax__yearButton
                  }
                  onClick={(e) => {
                    setYear('2021');
                    graphsTrackRef.current.scrollLeft = 0;
                  }}
                >
                  2021
                </div>
                <div
                  className={
                    year === '2021' || year === '2022'
                      ? styles.cardMax__activeYearSeparator
                      : styles.cardMax__yearSeparator
                  }
                ></div>
                <div
                  className={
                    year === '2022'
                      ? styles.cardMax__activeYearButton
                      : styles.cardMax__yearButton
                  }
                  onClick={() => {
                    setYear('2022');
                    console.log(graphsRef);
                    graphsTrackRef.current.scrollLeft =
                      graphsRef.current.clientWidth;
                  }}
                >
                  2022
                </div>
                <div
                  className={
                    year === '2022' || year === '2023'
                      ? styles.cardMax__activeYearSeparator
                      : styles.cardMax__yearSeparator
                  }
                ></div>
                <div
                  className={
                    year === '2023'
                      ? styles.cardMax__activeYearButton
                      : styles.cardMax__yearButton
                  }
                  onClick={() => {
                    setYear('2023');
                    console.log(graphsRef);
                    graphsTrackRef.current.scrollLeft =
                      graphsRef.current.clientWidth * 2;
                  }}
                >
                  2023
                </div>
                <div
                  className={
                    year === '2023' || year === '2024'
                      ? styles.cardMax__activeYearSeparator
                      : styles.cardMax__yearSeparator
                  }
                ></div>
                <div
                  className={
                    year === '2024'
                      ? styles.cardMax__activeYearButton
                      : styles.cardMax__yearButton
                  }
                  onClick={() => {
                    setYear('2024');
                    graphsTrackRef.current.scrollLeft =
                      graphsRef.current.clientWidth * 3;
                  }}
                >
                  2024
                </div>
              </div>
              {year === '2021' && (
                <div className={styles.cardMax__stats}>
                  <div className={styles.cardMax__stats_column}>
                    <span># OF TRADES</span>
                    <p>2708</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>SHARPE RATIO</span>
                    <p>0.22</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>PROFIT FACTOR</span>
                    <p>1.88</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>RETURN / DD RATIO</span>
                    <p>24.49</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>WINNING PERCENTAGE</span>
                    <p>48.82 %</p>
                  </div>

                  <div className={styles.cardMax__stats_column}>
                    <span>DRAWDOWN</span>
                    <p>$ 146302.67</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>% DRAWDOWN</span>
                    <p>1.05 %</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>DAILY AVG PROFIT</span>
                    <p>$ 9842.09</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>MONTHLY AVG PROFIT</span>
                    <p>$ 298543.51</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>AVERAGE TRADE</span>
                    <p>$ 1322.94</p>
                  </div>

                  <div className={styles.cardMax__stats_column}>
                    <span>ANNUAL % / MAX DD %</span>
                    <p>24.37</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>R EXPECTANCY</span>
                    <p>0.45 R</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>R EXPECTANCY SCORE</span>
                    <p>1217.69 R</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>STR QUALITY NUMBER</span>
                    <p>9.8</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>SQN SCORE</span>
                    <p>47.9</p>
                  </div>
                </div>
              )}
              {year === '2022' && (
                <div className={styles.cardMax__stats}>
                  <div className={styles.cardMax__stats_column}>
                    <span># OF TRADES</span>
                    <p>3035</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>SHARPE RATIO</span>
                    <p>0.33</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>PROFIT FACTOR</span>
                    <p>2.71</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>RETURN / DD RATIO</span>
                    <p>65.65</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>WINNING PERCENTAGE</span>
                    <p>53.18 %</p>
                  </div>

                  <div className={styles.cardMax__stats_column}>
                    <span>DRAWDOWN</span>
                    <p>$ 127948.7</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>% DRAWDOWN</span>
                    <p>0.65 %</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>DAILY AVG PROFIT</span>
                    <p>$ 23139.58</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>MONTHLY AVG PROFIT</span>
                    <p>$ 699972.39</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>AVERAGE TRADE</span>
                    <p>$ 2767.6</p>
                  </div>

                  <div className={styles.cardMax__stats_column}>
                    <span>ANNUAL % / MAX DD %</span>
                    <p>92.3</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>R EXPECTANCY</span>
                    <p>0.8 R</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>R EXPECTANCY SCORE</span>
                    <p>22425.73 R</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>STR QUALITY NUMBER</span>
                    <p>13.89</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>SQN SCORE</span>
                    <p>75.09</p>
                  </div>
                </div>
              )}
              {year === '2023' && (
                <div className={styles.cardMax__stats}>
                  <div className={styles.cardMax__stats_column}>
                    <span># OF TRADES</span>
                    <p>2973</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>SHARPE RATIO</span>
                    <p>0.14</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>PROFIT FACTOR</span>
                    <p>2.18</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>RETURN / DD RATIO</span>
                    <p>33.16</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>WINNING PERCENTAGE</span>
                    <p>48.23 %</p>
                  </div>

                  <div className={styles.cardMax__stats_column}>
                    <span>DRAWDOWN</span>
                    <p>$ 158504.85</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>% DRAWDOWN</span>
                    <p>0.94 %</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>DAILY AVG PROFIT</span>
                    <p>$ 15352.64</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>MONTHLY AVG PROFIT</span>
                    <p>$ 464417.31</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>AVERAGE TRADE</span>
                    <p>$ 1874.54</p>
                  </div>

                  <div className={styles.cardMax__stats_column}>
                    <span>ANNUAL % / MAX DD %</span>
                    <p>42.35</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>R EXPECTANCY</span>
                    <p>0.61 R</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>R EXPECTANCY SCORE</span>
                    <p>1814.34 R</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>STR QUALITY NUMBER</span>
                    <p>8.62</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>SQN SCORE</span>
                    <p>49.33</p>
                  </div>
                </div>
              )}
              {year === '2024' && (
                <div className={styles.cardMax__stats}>
                  <div className={styles.cardMax__stats_column}>
                    <span># OF TRADES</span>
                    <p>2531</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>SHARPE RATIO</span>
                    <p>0.21</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>PROFIT FACTOR</span>
                    <p>1.98</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>RETURN / DD RATIO</span>
                    <p>26.36</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>WINNING PERCENTAGE</span>
                    <p>53.81 %</p>
                  </div>

                  <div className={styles.cardMax__stats_column}>
                    <span>DRAWDOWN</span>
                    <p>$ 140079.64</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>% DRAWDOWN</span>
                    <p>0.82 %</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>DAILY AVG PROFIT</span>
                    <p>$ 12144.73</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>MONTHLY AVG PROFIT</span>
                    <p>$ 369199.86</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>AVERAGE TRADE</span>
                    <p>$ 1458.71</p>
                  </div>

                  <div className={styles.cardMax__stats_column}>
                    <span>ANNUAL % / MAX DD %</span>
                    <p>32.16</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>R EXPECTANCY</span>
                    <p>0.45 R</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>R EXPECTANCY SCORE</span>
                    <p>1370.2 R</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>STR QUALITY NUMBER</span>
                    <p>9.83</p>
                  </div>
                  <div className={styles.cardMax__stats_column}>
                    <span>SQN SCORE</span>
                    <p>54.99</p>
                  </div>
                </div>
              )}
              <div
                className={styles.cardMax__stats_button}
                onClick={() => {
                  setShowMoreStats(!showMoreStats);
                }}
              >
                Learn more about Stats {'>'}
              </div>
              {showMoreStats && (
                <div>
                  {year === '2021' && (
                    <div className={styles.cardMax__moreStats}>
                      <div className={styles.cardMax__moreStats_title}>
                        <p>STATS</p>
                      </div>
                      <div className={styles.cardMax__moreStats_subTitle}>
                        <p>Strategy</p>
                        <div className={styles.moreStats_items}>
                          {moreStats2021.strategy.map((strategy, i) => (
                            <div className={styles.moreStats_item} key={i}>
                              <div>{strategy.title}</div>
                              <div>{strategy.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={styles.cardMax__moreStats_subTitle}>
                        <p>Trades</p>
                        <div className={styles.moreStats_items}>
                          {moreStats2021.trades.map((strategy, i) => (
                            <div className={styles.moreStats_item} key={i}>
                              <div>{strategy.title}</div>
                              <div>{strategy.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {year === '2022' && (
                    <div className={styles.cardMax__moreStats}>
                      <div className={styles.cardMax__moreStats_title}>
                        <p>STATS</p>
                      </div>
                      <div className={styles.cardMax__moreStats_subTitle}>
                        <p>Strategy</p>
                        <div className={styles.moreStats_items}>
                          {moreStats2022.strategy.map((strategy, i) => (
                            <div className={styles.moreStats_item} key={i}>
                              <div>{strategy.title}</div>
                              <div>{strategy.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={styles.cardMax__moreStats_subTitle}>
                        <p>Trades</p>
                        <div className={styles.moreStats_items}>
                          {moreStats2021.trades.map((strategy, i) => (
                            <div className={styles.moreStats_item} key={i}>
                              <div>{strategy.title}</div>
                              <div>{strategy.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {year === '2023' && (
                    <div className={styles.cardMax__moreStats}>
                      <div className={styles.cardMax__moreStats_title}>
                        <p>STATS</p>
                      </div>
                      <div className={styles.cardMax__moreStats_subTitle}>
                        <p>Strategy</p>
                        <div className={styles.moreStats_items}>
                          {moreStats2023.strategy.map((strategy, i) => (
                            <div className={styles.moreStats_item} key={i}>
                              <div>{strategy.title}</div>
                              <div>{strategy.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={styles.cardMax__moreStats_subTitle}>
                        <p>Trades</p>
                        <div className={styles.moreStats_items}>
                          {moreStats2021.trades.map((strategy, i) => (
                            <div className={styles.moreStats_item} key={i}>
                              <div>{strategy.title}</div>
                              <div>{strategy.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {year === '2024' && (
                    <div className={styles.cardMax__moreStats}>
                      <div className={styles.cardMax__moreStats_title}>
                        <p>STATS</p>
                      </div>
                      <div className={styles.cardMax__moreStats_subTitle}>
                        <p>Strategy</p>
                        <div className={styles.moreStats_items}>
                          {moreStats2024.strategy.map((strategy, i) => (
                            <div className={styles.moreStats_item} key={i}>
                              <div>{strategy.title}</div>
                              <div>{strategy.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={styles.cardMax__moreStats_subTitle}>
                        <p>Trades</p>
                        <div className={styles.moreStats_items}>
                          {moreStats2021.trades.map((strategy, i) => (
                            <div className={styles.moreStats_item} key={i}>
                              <div>{strategy.title}</div>
                              <div>{strategy.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
