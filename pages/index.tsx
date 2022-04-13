import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import List from "../components/List";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header name="header component"/>
        <List/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/tonyjemba/news_weather_application"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{" "}
          <span className="font-bold ml-1">
              Group 12
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
