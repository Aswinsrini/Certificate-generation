import {Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AdminPage from "./components/AdminPage";
import AdminLogin from "./components/AdminLogin";
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
