import { Cards } from "./sections/Cards";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
