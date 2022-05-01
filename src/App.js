import './App.css';
import Auth from './Components/Auth/Auth';
import Hero from './Components/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
import UploadFile from './Components/UploadDocuents/UploadFile';
import PatientResult from './Components/PatientResult/PatientResult';
import ForgetPassword from './Components/Auth/forgitPassword/forgetPassword';
import Profile from './Components/profile/Profile';
import Logout from './Components/logout/logout';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={<Hero />} />
        <Route exect path="/uploadfile" element={<UploadFile />} />
        <Route exect path="/patientresult" element={<PatientResult />} />
        <Route exect path="/authorization" element={<Auth />} />
        <Route exect path="/forgetpassword" element={<ForgetPassword />} />
        <Route exect path="/profile" element={<Profile />} />
        <Route exect path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
