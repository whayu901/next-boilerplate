import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          height: 700,
          backgroundImage: `url(https://pixabay.com/get/g44be457b9786e80c5e604a7cab69f4a65f6a03614a18ad6e1185c89e9d00abef1df9f7c1f90d60d9b6c52155c7a5e4170c9ed036d24711193b57bb4dc57152d0dd4bcd7c7a62cad1a87ecc20eface55d_1280.png)`,
        }}
      >
        <h1 className="text-3xl font-medium text-white pt-3 pl-5">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
