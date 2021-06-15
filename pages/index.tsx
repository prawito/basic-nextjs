import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']}>Welcome Prawito</h1>
      <Footer />
    </>
  );
}
