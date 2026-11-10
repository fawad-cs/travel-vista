
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "./About";
import Contact from "./Contact";
import Destinations from "./Destinations";

function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Destinations />
      <About/>
      <Contact/>
    </>
  );
}

export default Home;

