import { useNavigate, useOutletContext } from 'react-router-dom';
import logo_black from '../../assets/logo_black.jpg';
import logo_white from '../../assets/logo_white.jpg';
import video_logo_black from '../../assets/video_logo_black.mp4';
import video_logo_white from '../../assets/video_logo_white.mp4';
import styles from './Main.module.css';

export const Main = () => {
  const navigate = useNavigate();
  const {theme} = useOutletContext();
  const isDarkTheme = theme !== 'light';

  return (
    <main className={styles.main}>
      <div className={styles.main__logo}>
        {/* <img src={logo} alt="logo" /> */}
        {isDarkTheme && <video
          playsInline
          autoPlay
          poster={logo_black}
          muted
          type="video/mp4"
          src={video_logo_black}
          loop
        />}
        {!isDarkTheme && <video
          playsInline
          autoPlay
          poster={logo_white}
          muted
          type="video/mp4"
          src={video_logo_white}
          loop
        />}
      </div>
      <h1 className={styles.main__description}>
      SimpleAtom Software - FZCO is a software development company based in the UAE, specializing in copy trading solutions.
      </h1>
      <button
        className={styles.main__button}
        onClick={() => {
          navigate('/simpleatom');
        }}
      >
        Read more
      </button>
    </main>
  );
};
