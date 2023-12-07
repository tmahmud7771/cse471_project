import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import LoginFrom from "./components/auth/LoginFrom";
import RegForm from "./components/auth/RegForm";
import AdminDashboard from "./components/admin/AdminDashboard";
import CustomerDashboard from "./components/customer/CustomerDashboard";
import ChangePass from "./components/auth/ChangePass";
import Landingpage from "./components/LandingPage/Landingpage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/signup" element={<RegForm />} />
        <Route path="/login" element={<LoginFrom />} />
        <Route path="/changepass" element={<ChangePass />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
