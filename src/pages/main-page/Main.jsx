import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import styles from './Main.module.css';

export const Main = () => {
const navigate = useNavigate()

  return (
    <main className={styles.main}>
      <div className={styles.main__logo}>
        <img src={logo} alt="logo" />
      </div>
      <h1 className={styles.main__description}>
        SimpleAtom is an investment management company specializing in
        cryptocurrency trading
      </h1>
      <button className={styles.main__button} onClick={()=>{navigate('/simpleatom')}}>Read more</button>
    </main>
  );
};
