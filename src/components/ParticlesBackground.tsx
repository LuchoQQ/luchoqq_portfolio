import React, { useState } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticlesBackground = ({ particles }: any) => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        params={particles}
      />
    </>
  );
};

export default ParticlesBackground;
