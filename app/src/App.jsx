import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Home from "./components/Home";
import Vacancy from "./components/Vacancy";
import Tender from "./components/Tender";
import Resine from "./components/Resine"
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import DPRForm from "./components/DPRForm";
import MorningLocationCard from "./components/MorningLocationCard";
import EveningLocationCard from "./components/EveningLocationCard";
import EmergencyLeaveCard from "./components/EmergencyLeaveCard";
import AttendanceManager from "./components/AttendenceManager";
import CompanyInfoCard from "./components/CompanyInfoCard";
function App() {
  return (
    <Router>
      <Navbar />
      <Slider/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/Tender" element={<Tender />} />
        <Route path="/Resine" element={<Resine />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <About/>
       <CompanyInfoCard/>
      <MorningLocationCard/>
      <EveningLocationCard/>
      <EmergencyLeaveCard/>
      <DPRForm/>
      <AttendanceManager/>
      <Services/>
      <Footer />
    </Router>
  );
}

export default App;
