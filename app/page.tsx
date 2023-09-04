"use client";

import { useContext } from "react";
import HpNav from "./components/atoms/hpNav";
import PageDefContext from "./context/pageContext";
import Header from "./components/atoms/header";

const Home = () => {
  const pageDef = useContext(PageDefContext);
  return (
    <>
      <HpNav />

      <div className="relative z-[80] border p-4 mt-4 rounded-lg shadow-xl tile">
        <Header title="welcome" />
        <p className="pt-[150px]">
          Welcome to tylersouthgate.com, the home of.. well, me!
          <br />
          Take some time and have a look around, not that there's much to see,
          you understand!
        </p>
      </div>
    </>
  );
};

export default Home;
