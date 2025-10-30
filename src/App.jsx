import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Benefits from "./Components/Benefits/Benefits";
import Courses from "./Components/Courses/Courses";
import Testimonials from "./Components/Testimonials/Testimonials";
import FaqSec from "./Components/FaqSec/FaqSec";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Benefits />
        <Courses />
        <Testimonials />
        <FaqSec />
      </main>
        <Footer />
    </>
  );
};

export default App;
