import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    // empty segment in react
    // used when we have multiple components
    <>
      <Navbar></Navbar>
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
