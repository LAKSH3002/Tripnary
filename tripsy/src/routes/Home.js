import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Home() {
  return (
    // empty segment in react
    // used when we have multiple components
    // Unsplash.com for images
    // copy image address
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1646770923436-4d01cf43f08b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey, Your Story"
        text="Choose your favourite destination"
        btntext="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}

export default Home;
