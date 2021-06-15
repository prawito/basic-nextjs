import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={styles['title-homepage']}>Welcome Prawito</h1>
    </Layout>
  );
}
