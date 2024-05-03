import styles from './ContactUsModal.module.css';
import logo_black from '../../assets/logo_black.jpg';
import logo_white from '../../assets/logo_white.jpg';
import video_logo_black from '../../assets/video_logo_black.mp4';
import video_logo_white from '../../assets/video_logo_white.mp4';
import Close from '../../assets/Close_gray.png';
import { useEffect, useState } from 'react';

export const ContactUsModal = ({
  showContactModal,
  setShowContactModal,
  theme,
  contactUsData,
  setContactUsData,
  postData,
}) => {
  if (showContactModal) {
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const onValidation = (name, reg) => email?.match(reg);

  const submitHandler = () => {
    if (Object.keys(contactUsData).length !== 0) {
      postData({
        // telegramUserName: contactUsData,
        email: contactUsData,
      });
    }
  };

  useEffect(() => {
    setEmailValid(!!onValidation('email', emailReg));
    console.log(emailValid)
  }, [email]);

  return showContactModal ? (
    <div className={styles.wrapper} onClick={() => setShowContactModal(false)}>
      <div className={styles.container}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
              Leave your Email, and we reply to you shortly
            </span>
            <div
              className={styles.form}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setContactUsData(e.target.value);
                }}
              />
              <button
                disabled={!agree || !emailValid}
                onClick={() => submitHandler()}
              >
                Send
              </button>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                name="agreeCheck"
                id="agreeCheck"
              />
              <label htmlFor="agreeCheck">
                Do you agree to receive notifications by email?
              </label>
            </div>
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
