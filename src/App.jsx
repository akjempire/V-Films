import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutTeam from "./components/AboutTeam";
import Service from "./components/Service";
import ContactForm from "./components/ContactForm";
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
     
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutTeam />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<ContactForm/>} />
        </Routes>
    
      
    </Router>
  );
}
