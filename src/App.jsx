import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import "./styles/main.scss";
import { Purpose } from "./sections/Purpose";
import { About } from "./sections/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Purpose />
      <About />
    </>
  );
}

export default App;
