import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AdminLogin from "./components/adminLogin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/admin" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default App;
