import "./App.css";
import Login from "./pages/Auth/Login";
import { useState } from "react";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const handleResetPassword = (form) => {
    console.log("Password reset submitted:", form);
  };

  return (
    <div className="app-layout">
      <Header onNavigate={setCurrentPage} />
      <main className="main-center-content">
        {currentPage === "login" && <Login />}
        {currentPage === "register" && <Register />}
        {currentPage === "reset-password" && (
          <ResetPassword onResetPassword={handleResetPassword} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
