import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import Contact from './Pages/Contact/Contact';
import Appointments from './Pages/Appointments/Appointments';
import Contacts from './Pages/Contacts/Contacts';
import HealthDiagnosis from './Pages/Diagnosis/Diagnosis';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/health-diagnosis" element={<HealthDiagnosis />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;