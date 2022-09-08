import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../layout/Sidebar";
import { Grid } from '@chakra-ui/react'
import Main from "../layout/Main";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio LuchoQQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid
          autoFlow='column'
        >
        <Sidebar />
        <Main />
        </Grid>
      </main>
    </>
  );
};

export default Home;
