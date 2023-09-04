"use client";

import { useContext } from "react";
import PageDefContext from "../context/pageContext";
import HpNav from "../components/atoms/hpNav";
import Header from "../components/atoms/header";

const Contact = () => {
  const pageDef = useContext(PageDefContext);
  return (
    <>
      <HpNav />

      <div className="relative z-[80] border p-4 mt-4 rounded-lg shadow-xl tile">
        <Header title="contact" />
        <p className="pt-[150px]">words</p>
      </div>
    </>
  );
};

export default Contact;
