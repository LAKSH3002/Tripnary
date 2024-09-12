import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "../Assets/atlantis.jpg";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    // empty segment in react
    // used when we have multiple components
    <>
      <Navbar />
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;
