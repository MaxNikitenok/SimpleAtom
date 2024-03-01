import styles from './ContactUsModal.module.css';
import logo from '../../assets/Logo.png';
import Close from '../../assets/Close_gray.png';

export const ContactUsModal = ({ showContactModal, setShowContactModal }) => {
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
          <img src={logo} alt="logo" />
          <div className={styles.content}>
            <p>Contact us</p>
            <span>
              Leave your Telegram username, and we reply to you shortly
            </span>
            <form className={styles.form}>
              <input type="email" placeholder="Enter your @telegram" />
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
