import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./components/home";
import AdminPage from "./components/admin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={<HomePage />} />
        <Route exact path="/admin" Component={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
