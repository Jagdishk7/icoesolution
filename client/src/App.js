import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Career from "./pages/Career/Career";
import TechnicalTraining from "./pages/Services/TechnicalTraining/TechnicalTraining";
import WebDevelopment from "./pages/Services/WebDevelopment/WebDevelopment";
import Footer from "./components/Footer/Footer";
import ITStaffing from "./pages/Services/ITStaffing/ITStaffing";
import Contact from "./components/contact/Contact";
import MobileDevelopment from "./pages/Services/MobileDevelopment/MobileDevelopment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/technicalTraining" element={<TechnicalTraining />} />
          <Route path="/webd" element={<WebDevelopment />} />
          <Route path="/mobiled" element={<MobileDevelopment />} />
          <Route path="/itstaffing" element={<ITStaffing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
