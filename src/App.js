import './App.css';
import Auth from './Components/Auth/Auth';
import Hero from './Components/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
import UploadFile from './Components/UploadDocuents/UploadFile';
import PatientResult from './Components/PatientResult/PatientResult';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register/uploadfile" element={<UploadFile />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/patientresult" element={<PatientResult />} />
      </Routes>
    </div>
  );
}

export default App;
