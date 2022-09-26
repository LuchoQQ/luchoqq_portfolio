import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../layout/Sidebar";
import { Grid } from "@chakra-ui/react";
import Main from "../layout/Main";
import ParticlesBackground from "../components/ParticlesBackground";
import particles2 from "../utils/particles2.json";
import About from "../layout/About";
import Portfolio from "../layout/Portfolio";
import Contact from "../layout/Contact";
import { useState } from "react";

const Home: NextPage = () => {
  const [nav, setNav] = useState("/");

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio LuchoQQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid autoFlow="column" justifyContent="center">
        <Sidebar setNav={setNav} />
        <Grid
          w={["100vw", "100vw", "100vw", "75vw", "75vw", "75vw"]}
          h="auto"
          justifyContent="center"
          alignContent="center"
        >
          <Main setNav={setNav} />
          {/* <About setNav={setNav} />
          <Portfolio setNav={setNav} />
          <Contact setNav={setNav} /> */}
        </Grid>
      </Grid>

      <ParticlesBackground particles={particles2} />
    </>
  );
};

export default Home;
