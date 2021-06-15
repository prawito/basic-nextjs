import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles['title-homepage']}>Welcome Prawito</h1>
    </Layout>
  );
}
