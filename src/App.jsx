import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./sections/Hero";
import { Navbar } from "./components/Navbar";
import "./styles/main.scss";
import { Purpose } from "./sections/Purpose";
import { About } from "./sections/About";
import { Webcam } from "./pages/Webcam";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Purpose />
      <About />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/call" element={<Webcam />} />
      </Routes>
    </Router>
  );
}

export default App;
