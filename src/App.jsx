import {Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AdminPage from "./components/admin";
import AdminLogin from "./components/adminLogin";
import Certificate from "./components/Certificate";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route exact path="/certificate" element={<Certificate />} />
      </Routes>
    </>
  );
}

export default App;
