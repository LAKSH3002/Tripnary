import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function contact() {
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

export default contact;
