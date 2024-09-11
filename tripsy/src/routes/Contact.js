import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "../Assets/atlantis.jpg";
import Hero from "../components/Hero";

function Contact() {
  return (
    // empty segment in react
    // used when we have multiple components
    <>
      <Navbar />
      <Hero
        cName="aboutclass"
        heroImg={AboutImg}
        title="Contact Us"
        text="Want to book an Extraordinary trip, Meet us!!!"
        btntext=""
        url="/"
      />
      <Footer />
    </>
  );
}

export default Contact;
