"use client";

import Header from "../components/atoms/header";
import HpNav from "../components/atoms/hpNav";
import AboutContent from "../components/organisms/aboutContent";

const About = () => {
  return (
    <>
      <HpNav />

      <div className="relative z-[40] border p-4 mt-4 rounded-lg shadow-xl tile">
        <Header title="about" />
        <p className="pt-[150px]">
          {" "}
          All about the wonderful world of me!
          <br />
          Where down is up and up is almost sideways.
        </p>
      </div>
      <AboutContent />
    </>
  );
};

export default About;
