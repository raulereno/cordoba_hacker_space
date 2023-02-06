import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Wrapper from "./pages/Wrapper/Wrapper";
import AdminLogin from "./pages/Admin/AdminLogin";
import { useState } from "react";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";

function App() {
  const [loged, setLoged] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Wrapper />} />
      <Route path="admin" element={<AdminLogin setLoged={setLoged} />} />
      <Route path="admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
