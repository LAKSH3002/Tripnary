import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "../Assets/london_bridge.jpg";
import Hero from "../components/Hero";
import Trip from "../components/Trip";

function Service() {
  return (
    // empty segment in react
    // used when we have multiple components
    <>
      <Navbar></Navbar>
      <Hero
        cName="aboutclass"
        heroImg={AboutImg}
        title="All Service Provided"
        text="Booking Tickets, Itenary Set Up!!"
        btntext=""
        url="/"
      />
      <Trip></Trip>
      <Footer />
    </>
  );
}

export default Service;
