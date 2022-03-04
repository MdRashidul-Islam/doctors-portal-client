import React from "react";
import Contact from "../components/Home/Contact";
import Doctors from "../components/Home/Doctors";
import ExceptionalDental from "../components/Home/ExceptionalDental";
import Header from "../components/Home/Header";
import MakeAppointment from "../components/Home/MakeAppointment";
import Service from "../components/Home/Service";
import Testimonials from "../components/Home/Testimonials";
import Footer from "../shared/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Service />
      <ExceptionalDental />
      <MakeAppointment />
      <Testimonials />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
