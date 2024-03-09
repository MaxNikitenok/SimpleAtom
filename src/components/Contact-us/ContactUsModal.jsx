import styles from './ContactUsModal.module.css';
import logo from '../../assets/Logo.png';
import logo_black from '../../assets/logo_black.jpg';
import logo_white from '../../assets/logo_white.jpg';
import video_logo_black from '../../assets/video_logo_black.mp4';
import video_logo_white from '../../assets/video_logo_white.mp4';
import Close from '../../assets/Close_gray.png';

export const ContactUsModal = ({ showContactModal, setShowContactModal, theme }) => {
  
  if (showContactModal) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  return showContactModal ? (
    <div className={styles.wrapper} onClick={() => setShowContactModal(false)}>
      <div className={styles.container}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {/* <img src={logo} alt="logo" /> */}
          {theme === 'dark' && (
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
          {theme !== 'dark' && (
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
          <div className={styles.content}>
            <p>Contact us</p>
            <span>
              Leave your Telegram username, and we reply to you shortly
            </span>
            <form className={styles.form}>
              <input type="text" placeholder="Enter your @telegram" pattern='.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*' />
              <button type="button">Send</button>
            </form>
            <img
              src={Close}
              className={styles.closeButton}
              onClick={() => setShowContactModal(false)}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};
