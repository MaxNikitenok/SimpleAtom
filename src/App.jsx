import styles from './App.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import aboutUs from './assets/menu-about-us.png';
import simpleatom from './assets/menu-simpleatom.svg';
import letsTalk from './assets/menu-lets-talk.svg';
import telegram from './assets/menu-telegram.svg';
import linkedIn from './assets/menu-linkedin.svg';
import Lock from './assets/Lock.png';
import Red_circle from './assets/Red_circle.svg';
import Red_circle_cross from './assets/Red_circle_cross.svg';
import Yellow_circle from './assets/Yellow_circle.svg';
import Yellow_circle_minus from './assets/Yellow_circle_minus.svg';
import Gray_circle from './assets/Gray_circle.svg';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { ContactUsModal } from './components/Contact-us/ContactUsModal';
import { useTheme } from './hooks/use-theme';
import themeLogo from './assets/light-theme-icon.png';
import { Clock } from './components/Clock/Clock';
import { ConversationalFormModal } from './components/form-modal/Form-modal';

export const App = () => {
  const navigate = useNavigate();
  const headerMenuItems = [
    { id: 1, tile: 'Main', path: '/main' },
    { id: 2, tile: 'Simpleatom', path: '/simpleatom' },
    { id: 3, tile: 'About us', path: '/aboutUs' },
    { id: 4, tile: 'Contact us', path: '/contactUs' },
    { id: 5, tile: 'Form', path: '/form' },
  ];

  const locationPath = useLocation().pathname;

  const { theme, setTheme } = useTheme();
  const [activePage, setActivePage] = useState(locationPath);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showConversationalModal, setShowConversationalModal] = useState(false);

  useEffect(() => {
    if (locationPath === '/') {
      navigate('/main');
      window.scrollTo(0, 0);
    }
    setActivePage(locationPath);
  }, [locationPath]);

  const changeThemeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navHandler = (path) => {
    if (path === '/contactUs') {
      setShowContactModal(true);
    } else {
      setActivePage(path);
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__menuContainer}>
          <div className={cn(styles.header__logo, styles.dropdown)}>
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_33_118825)">
                <path
                  d="M12.0241 12.3204L10.8102 12.3122C10.5492 12.2823 10.2817 12.1966 10.2652 11.8828C10.2581 11.7469 10.3007 11.678 10.3891 11.6103C10.3891 11.6103 10.3473 11.5982 10.323 11.6103C10.29 11.6268 10.2735 11.6351 10.2735 11.6351C10.1496 11.6516 10.1992 11.5938 10.1083 11.602C10.0423 11.602 10.0526 11.5817 10.034 11.5607C9.90189 11.4121 9.96015 11.3076 9.99273 11.313C10.0423 11.3213 10.0423 11.346 10.0588 11.3543C10.0767 11.3632 10.067 11.3037 10.067 11.2379C10.067 11.1884 10.1661 11.2304 10.1909 11.2387C10.2118 11.2457 10.3643 11.2635 10.4552 11.2717C10.4712 11.2732 10.4779 11.2541 10.4882 11.2387C10.5708 11.1148 10.6121 11.0157 10.7937 10.7763C10.8434 10.7108 10.8928 10.6524 10.9506 10.6028C10.9926 10.5668 10.9637 10.5211 10.9671 10.4212C10.9704 10.3255 10.9754 10.2147 10.9836 10.1156C10.9899 10.0411 10.9754 10.0165 10.9754 10.0165L10.9589 9.82662C10.9424 9.59541 11.0497 9.39723 11.1736 9.32291C11.2974 9.24859 11.5121 9.11647 11.5699 9.08344C11.6277 9.0504 11.7599 8.91828 11.7599 8.79442C11.7599 8.67055 11.7645 8.68707 11.7516 8.67055C11.6483 8.53843 11.5369 8.21638 11.6112 7.98517C11.6855 7.75395 11.8424 7.67138 12.0241 7.67963M11.2892 10.9001C11.3293 10.8624 11.3387 10.7711 11.3552 10.6606C11.3552 10.6606 11.3757 10.5852 11.413 10.4294C11.4213 10.3634 11.4419 10.3631 11.4461 10.3881C11.4791 10.5863 11.4956 10.5285 11.4956 10.6441C11.4956 10.8129 11.3759 10.9291 11.3222 11.09C11.314 11.1148 11.2892 11.2304 11.2644 11.2387C10.8763 11.2722 10.8515 11.2882 10.8515 11.2882C10.8515 11.2882 11.0827 11.0942 11.2892 10.9001Z"
                  stroke="#7EFFFF"
                  strokeWidth="0.132122"
                />
              </g>
              <g filter="url(#filter1_f_33_118825)">
                <path
                  d="M12.0157 12.3204L13.2296 12.3122C13.4906 12.2823 13.7581 12.1966 13.7746 11.8828C13.7817 11.7469 13.7391 11.678 13.6507 11.6103C13.6507 11.6103 13.6925 11.5982 13.7168 11.6103C13.7498 11.6268 13.7663 11.6351 13.7663 11.6351C13.8902 11.6516 13.8406 11.5938 13.9315 11.602C13.9975 11.602 13.9872 11.5817 14.0058 11.5607C14.1379 11.4121 14.0796 11.3076 14.0471 11.313C13.9975 11.3213 13.9975 11.346 13.981 11.3543C13.9631 11.3632 13.9727 11.3037 13.9727 11.2379C13.9727 11.1884 13.8737 11.2304 13.8489 11.2387C13.828 11.2457 13.6755 11.2635 13.5846 11.2717C13.5686 11.2732 13.5619 11.2541 13.5516 11.2387C13.469 11.1148 13.4277 11.0157 13.2461 10.7763C13.1964 10.7108 13.147 10.6524 13.0892 10.6028C13.0472 10.5668 13.0761 10.5211 13.0727 10.4212C13.0694 10.3255 13.0644 10.2147 13.0562 10.1156C13.0499 10.0411 13.0644 10.0165 13.0644 10.0165L13.0809 9.82662C13.0974 9.59541 12.9901 9.39723 12.8662 9.32291C12.7424 9.24859 12.5277 9.11647 12.4699 9.08344C12.4121 9.0504 12.2799 8.91828 12.2799 8.79442C12.2799 8.67055 12.2753 8.68707 12.2882 8.67055C12.3915 8.53843 12.5029 8.21638 12.4286 7.98517C12.3542 7.75395 12.1974 7.67138 12.0157 7.67963M12.7506 10.9001C12.7105 10.8624 12.7011 10.7711 12.6846 10.6606C12.6846 10.6606 12.6641 10.5852 12.6268 10.4294C12.6185 10.3634 12.5979 10.3631 12.5937 10.3881C12.5607 10.5863 12.5442 10.5285 12.5442 10.6441C12.5442 10.8129 12.6639 10.9291 12.7176 11.09C12.7258 11.1148 12.7506 11.2304 12.7754 11.2387C13.1635 11.2722 13.1883 11.2882 13.1883 11.2882C13.1883 11.2882 12.9571 11.0942 12.7506 10.9001Z"
                  stroke="#7EFFFF"
                  strokeWidth="0.132122"
                />
              </g>
              <path
                d="M18.8101 4.99258C18.8101 4.6759 19.459 2.20425 18.3576 1.36234C17.1202 0.416536 15.2593 1.55332 14.3019 2.15018C9.74237 4.99256 5.98547 11.8591 5.43903 14.0991C5.15064 15.2812 4.61079 17.4821 5.44756 18.4862C5.90457 19.0346 6.83078 19.2123 8.12008 18.6793C8.84411 18.38 9.30692 18.0537 9.87045 17.6598"
                stroke="#FFD310"
                strokeWidth="0.3"
              />
              <path
                d="M10.6753 1.45673C9.53615 0.549444 8.26488 -0.216524 7.16698 0.371216C6.15161 0.914767 6.12706 2.70469 6.11034 3.0202C5.92877 6.44685 9.24726 15.2363 14.1589 18.914C15.0882 19.6098 16.1566 20.04 17.0647 19.6188C17.4774 19.4273 17.9088 18.8108 18.0883 17.8447C18.5367 15.4307 17.1803 11.3154 15.9338 8.74749"
                stroke="#14D6A1"
                strokeWidth="0.3"
              />
              <path
                d="M20.386 12.9516C21.5999 12.4066 22.8303 11.6552 23.0037 10.5239C23.2227 9.09528 21.6548 8.1649 20.8567 7.72451C17.6692 5.96562 9.94006 4.57834 3.73857 6.85745C2.43186 7.33768 1.38313 7.97223 1.04657 9.22744C0.741038 10.367 2.00446 11.5561 2.92106 11.9525"
                stroke="#622C8B"
                strokeWidth="0.3"
              />
              <defs>
                <filter
                  id="filter0_f_33_118825"
                  x="9.8606"
                  y="7.58826"
                  width="2.19127"
                  height="4.82298"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.0123865"
                    result="effect1_foregroundBlur_33_118825"
                  />
                </filter>
                <filter
                  id="filter1_f_33_118825"
                  x="11.9879"
                  y="7.58826"
                  width="2.19127"
                  height="4.82298"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="0.0123865"
                    result="effect1_foregroundBlur_33_118825"
                  />
                </filter>
              </defs>
            </svg>
            <ul className={styles.dropdown__content}>
              <li
                className={styles.dropdown__item}
                onClick={() => navigate('/main')}
              >
                Main
              </li>
              <li
                className={styles.dropdown__item}
                onClick={() => navigate('/simpleatom')}
              >
                Simpleatom
              </li>
              <li
                className={styles.dropdown__item}
                onClick={() => navigate('/aboutUs')}
              >
                About us
              </li>
              <li
                className={styles.dropdown__item}
                onClick={() => setShowContactModal(true)}
              >
                Contact us
              </li>
              <a href="https://t.me/simpleatomfund" target="blanc">
                <li className={styles.dropdown__item}>Join our Telegram</li>
              </a>
              <a
                href="https://www.linkedin.com/company/simpleatom/"
                target="blanc"
              >
                <li className={styles.dropdown__item}>Join our Linkedin</li>
              </a>
              <li
                className={styles.dropdown__item}
                onClick={changeThemeHandler}
              >
                Appearance
              </li>
            </ul>
          </div>
          <nav>
            <ul className={styles.header__menu}>
              {headerMenuItems.map((item) => {
                return (
                  <li
                    className={cn(
                      styles.header__menu_item,
                      item.path === activePage ? styles.active : ''
                    )}
                    key={item.id}
                    onClick={() => navHandler(item.path)}
                  >
                    <span>{item.tile}</span>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className={styles.header__clockContainer}>
          <div
            className={styles.header__clockContainer_changeThemeButton}
            onClick={changeThemeHandler}
          >
            <img src={themeLogo} alt="change theme icon" />
          </div>
          <Clock className={styles.clock} />
        </div>
      </header>
      {locationPath !== '/main' && (
        <div className={styles.pageTitle}>
          <div className={styles.pageTitle__controls}>
            <img
              src={Red_circle_cross}
              alt="red circle"
              onClick={() => {
                navigate('/main');
                window.scrollTo(0, 0);
              }}
            />
            <img
              src={Yellow_circle_minus}
              alt="yellow circle"
              onClick={() => {
                navigate('/main');
                window.scrollTo(0, 0);
              }}
            />
            <img src={Gray_circle} alt="gray circle" />
          </div>
          <div className={styles.pageTitle__controls_2}>
            <img
              src={Red_circle}
              alt="red circle"
              onClick={() => {
                navigate('/main');
                window.scrollTo(0, 0);
              }}
            />
            <img
              src={Yellow_circle}
              alt="yellow circle"
              onClick={() => {
                navigate('/main');
                window.scrollTo(0, 0);
              }}
            />
            <img src={Gray_circle} alt="gray circle" />
          </div>
          <div className={styles.pageTitle__container}>
            <img src={Lock} alt="lock" />
            {locationPath === '/simpleatom' && <span>Simpleatom is</span>}
            {locationPath === '/aboutUs' && <span>Our team</span>}
          </div>
        </div>
      )}

      <Outlet context={{theme, setShowConversationalModal}} />

      <footer>
        <nav className={styles.footer__nav}>
          <ul className={styles.footer__menu}>
            <li
              className={cn(
                styles.footer__menu_item,
                locationPath === '/simpleatom' ? styles.active_menu_item : ''
              )}
              onClick={() => navHandler('/simpleatom')}
            >
              <img src={simpleatom} alt="simpleatom" />
              <span className={styles.footer__menu_item_title}>Simpleatom</span>
            </li>
            <li
              className={cn(
                styles.footer__menu_item,
                locationPath === '/aboutUs' ? styles.active_menu_item : ''
              )}
              onClick={() => navHandler('aboutUs')}
            >
              <img src={aboutUs} alt="about us" />
              <span className={styles.footer__menu_item_title}>
                About&#160;us
              </span>
            </li>
            <li
              className={cn(
                styles.footer__menu_item,
                locationPath === '/contactUs' ? styles.active_menu_item : ''
              )}
              onClick={() => setShowContactModal(true)}
            >
              <img src={letsTalk} alt="let's talk" />
              <span className={styles.footer__menu_item_title}>
                Contact&#160;us
              </span>
            </li>
            <li className={cn(styles.footer__menu_item, styles.hide_menu_item)}>
              <a href="https://t.me/simpleatomfund" target="blanc">
                <img src={telegram} alt="telegram" />
                <span className={styles.footer__menu_item_title}>Telegram</span>
              </a>
            </li>
            <li className={cn(styles.footer__menu_item, styles.hide_menu_item)}>
              <a
                href="https://www.linkedin.com/company/simpleatom/"
                target="blanc"
              >
                <img src={linkedIn} alt="linkedin" />
                <span className={styles.footer__menu_item_title}>Linkedin</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
      <ContactUsModal
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
        theme={theme}
      />
      {showConversationalModal && <ConversationalFormModal setShowConversationalModal={setShowConversationalModal}/>}
    </>
  );
};
