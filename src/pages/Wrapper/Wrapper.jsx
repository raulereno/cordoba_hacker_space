import React from "react";
import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Jobs from "../../components/Jobs/Jobs";
import Location from "../../components/Location/Location";
import Partner from "../../components/Partner/Partner";
import Footer from "../../components/Footer/Footer";

const Wrapper = () => {
  return (
    <>
      <Header />
      <About />
      <Jobs />
      <Location />
      <Partner />
      <Footer />
    </>
  );
};

export default Wrapper;
