
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
// import Contact from './Pages/Contact/Contact';
import Appointments from './Pages/Appointments/Appointments';
// import Contacts from './Pages/Contacts/Contacts';
import HealthDiagnosis from './Pages/Diagnosis/Diagnosis';
import Footer from './components/Footer';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Chatbot from './Pages/Chatbot/Chatbot';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/health-diagnosis" element={<HealthDiagnosis />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/contacts" element={<Contacts />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
