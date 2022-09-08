import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../layout/Sidebar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio LuchoQQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
       
      </main>
    </>
  );
};

export default Home;
