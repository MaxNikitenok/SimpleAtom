import { useNavigate, useOutletContext } from 'react-router-dom';
import logo_black from '../../assets/logo_black.jpg';
import logo_white from '../../assets/logo_white.jpg';
import video_logo_black from '../../assets/video_logo_black.mp4';
import video_logo_white from '../../assets/video_logo_white.mp4';
import styles from './NotFound.module.css';
import { useEffect } from 'react';

export const NoMatch = () => {
  useEffect(() => {
    navigate('/404');
  }, []);

  const navigate = useNavigate();
  return <></>;
};

export const NotFound = () => {
  const { theme } = useOutletContext();
  const isDarkTheme = theme !== 'light';

  return (
    <main className={styles.notFound}>
      <div className={styles.notFound__logo}>
        {/* <img src={logo} alt="logo" /> */}
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
      <h1 className={styles.notFound__404}>Error 404</h1>
      <h2 className={styles.notFound__description}>
        Everything is fine
        <br />
        But such a page does not exist
        <br />
        Use the menu
      </h2>
    </main>
  );
};
