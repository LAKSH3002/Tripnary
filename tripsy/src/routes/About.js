import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/1.jpg";
import Footer from "../components/Footer";

function About() {
  return (
    // empty segment in react
    // used when we have multiple components
    <>
     <Navbar />
      <Hero
        cName="aboutclass"
        heroImg={AboutImg}
        title="About Us"
        text="Best In the Industry Since 2024"
        btntext=""
        url="/"
      />
      <Footer/>
    </>
  );
}

export default About;
