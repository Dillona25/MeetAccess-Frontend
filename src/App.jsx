import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import "./styles/main.scss";
import { Purpose } from "./sections/Purpose";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Purpose />
      <Footer />
    </>
  );
}

export default App;
