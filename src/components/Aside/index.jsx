import styles from './aside.module.css';
import logo from './logo.png';
import Image from 'next/image';
export const Aside = () => {
  return (
    <aside className={styles.aside}>
        {/* <img src={logo} alt="Logo Code Connect" /> */}
        <Image src={logo} alt="Logo Code Connect" />
    </aside>
  );
};
