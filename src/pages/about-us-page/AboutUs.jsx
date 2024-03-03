import logo from '../../assets/Logo.png';

import Dmitry from '../../assets/Dmitry.png';
import Yulia from '../../assets/Yulia.png';
import Viktar from '../../assets/Viktar.png';
import Alexander_B from '../../assets/Alexander_B.png';
import Alexander_K from '../../assets/Alexander_K.png';
import Dubai_night from '../../assets/Dubai_night.png';
import Dubai from '../../assets/Dubai.png';
import Pakistan from '../../assets/Pakistan.png';
import Pakistan_night from '../../assets/Pakistan_night.png';
import Norway from '../../assets/Norway.png';
import Norway_night from '../../assets/Norway_night.png';
import Brazil from '../../assets/Brazil.png';
import Brazil_night from '../../assets/Brazil_night.png';
import Singapore from '../../assets/Singapore.png';
import Singapore_night from '../../assets/Singapore_night.png';

import styles from './AboutUs.module.css';
import cn from 'classnames';
import { createRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useOutletContext } from 'react-router-dom';

export const partnersRef = createRef();

const profiles = [
  {
    id: 1,
    image: Dmitry,
    name: 'Dmitry',
    position: 'Co-founder & CBDO',
    desc: '6+ years of trading at financial markets. Deep knowledge of market analysis, venture investment, blockchain projects, financial accounting. Successful cooperation with clients and partners.',
  },
  {
    id: 2,
    image: Yulia,
    name: 'Yulia',
    position: 'Head of PR and influencer marketing',
    desc: '6+ years of trading at financial markets. Deep knowledge of market analysis, venture investment, blockchain projects, financial accounting. Successful cooperation with clients and partners.',
  },
  {
    id: 3,
    image: Viktar,
    name: 'Viktar',
    position: 'Co-founder & CSM',
    desc: '12+ years of experience in developing and optimizing trading algorithms and trading strategies. Expert in ensuring technical security of financial markets.',
  },
  {
    id: 4,
    image: Alexander_B,
    name: 'Alexander',
    position: 'Managing Director',
    desc: '16 years of Management. Highly skilled in creative marketing, direct sales, project management, operational management. Specialization - creation and development of digital projects.',
  },
  {
    id: 5,
    image: Alexander_K,
    name: 'Alexander',
    position: 'Head of Corporate department',
    desc: '7+ years of experience in working with investors at the international level. Deep knowledge of investment projects analysis, business development and communication.',
  },
];

const partners = [
  { id: 1, title: 'Singapore', image: Singapore, imageNight: Singapore_night },
  { id: 2, title: 'Brazil', image: Brazil, imageNight: Brazil_night },
  { id: 3, title: 'Norway', image: Norway, imageNight: Norway_night },
  { id: 4, title: 'Pakistan', image: Pakistan, imageNight: Pakistan_night },
];

const ProfileItem = ({ item }) => {
  const [hidePhoto, setHidePhoto] = useState(false);

  return (
    <div className={styles.profiles__item} key={item.id}>
      <div
        className={cn(
          styles.profiles__item_imageContainer,
          hidePhoto ? styles.hideElem : styles.showElem
        )}
        onClick={() => {
          setHidePhoto(true);
        }}
      >
        <img src={item.image} alt={item.name} />
      </div>

      <span className={styles.profiles__item_name}>{item.name}</span>
      <span className={styles.profiles__item_position}>{item.position}</span>

      <p
        className={hidePhoto ? styles.showElem : styles.hideElem}
        onClick={() => {
          setHidePhoto(false);
        }}
      >
        {item.desc}
      </p>
    </div>
  );
};

export const AboutUs = () => {
  const [isProfilesVisible, setIsProfilesVisible] = useState(false);
  const {theme} = useOutletContext();
  const isDarkTheme = theme !== 'light';

  const { ref: teamRef, inView: teamRefInView } = useInView({
    threshold: 1,
    rootMargin: '500px 0px 0px 0px',
  });

  return (
    <section className={styles.aboutUs}>
      <article className={styles.aboutUs__main}>
        <img src={logo} alt="logo" className={styles.main__logo} />
        <p className={styles.main__title}>
          S<span>IMPLEATOM</span>
        </p>
      </article>
      <article className={styles.aboutUs__team}>
        <h1 className={styles.team__title}>Professional team</h1>
        <p className={styles.team__subTitle}>Top Managers and Founders</p>
        <div className={styles.team__container}>
          {!isProfilesVisible && (
            <div
              ref={teamRef}
              className={cn(
                styles.team__photos,
                teamRefInView ? styles.view_anim : ''
              )}
              onClick={() => {
                setIsProfilesVisible(true);
              }}
            >
              <div className={styles.team__photos_container}>
                {profiles.map((item) => {
                  return (
                    <img
                      src={item.image}
                      className={styles.team__photos_item}
                      alt={item.name}
                      key={item.id}
                    />
                  );
                })}
              </div>
              <p
                className={cn(styles.photos__link, styles.link)}
                onClick={() => {
                  setIsProfilesVisible(true);
                }}
              >
                Let`s get acquainted &gt;
              </p>
            </div>
          )}
          {isProfilesVisible && (
            <div className={styles.team__profiles}>
              {profiles.map((item) => {
                return <ProfileItem item={item} key={item.id} />;
              })}
            </div>
          )}
        </div>
      </article>
      <article className={styles.aboutUs__meetUs}>
        <h2 className={styles.meetUs__title}>Meet us</h2>
        <p className={styles.meetUs__subTitle}>
          Book your meeting with <span>Simpleatom</span> today
        </p>
        <div className={styles.meetUs__image_container}>
          <span className={styles.meetUs__image_title}>Dubai, UAE</span>
          {isDarkTheme ? (
            <img
              className={styles.meetUs__image}
              src={Dubai_night}
              alt="dubai"
            />
          ) : (
            <img className={styles.meetUs__image} src={Dubai} alt="dubai" />
          )}
        </div>
        <p className={cn(styles.meetUs__link, styles.link)}>
          Make an appointment &gt;
        </p>
      </article>
      <article ref={partnersRef} className={styles.AboutUs__partners}>
        <h3 className={styles.partners__title}>Or visit our partners</h3>
        <div className={styles.partners__images}>
          {partners.map((item) => {
            return (
              <div
                className={cn(styles.partners__item, styles.hide_item)}
                key={item.id}
              >
                <p className={styles.partners__item_title}>{item.title}</p>
                {isDarkTheme ? (
                  <img src={item.imageNight} alt={item.title} />
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
              </div>
            );
          })}
          <p className={cn(styles.partners__link, styles.link)}>
            Make an appointment &gt;
          </p>
        </div>
      </article>
      <article className={styles.AboutUs__mission}>
        <h3 className={styles.mission__title}>Our Mission</h3>
        <p className={styles.mission__text}>
          Our mission is to make the investment world transparent and safe.
          <br /> We help people:{' '}
          <li>Distinguish scam projects from real investment opportunities.</li>
          <li>Understand how financial markets work.</li>
          <li>Preserve and grow their savings.</li>We do this by:
          <li>
            Creating educational materials and reviews of investment projects.
          </li>
          <li>Sharing our experience and knowledge.</li>
          <li>Promoting honest and transparent investment principles.</li>We
          believe that everyone should have access to reliable information about
          the investment world. <br />
          We are working to make the investment world more accessible,
          understandable, and safe for everyone.
        </p>
      </article>
    </section>
  );
};
