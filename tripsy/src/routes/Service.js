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
      <Trip></Trip>
      <Footer />
    </>
  );
}

export default Service;
