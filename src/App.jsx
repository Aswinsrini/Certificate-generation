import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AdminPage from "./components/admin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
