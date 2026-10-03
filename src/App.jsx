import "./App.css"
import Login from "./pages/Auth/Login";
import { useState } from "react";
import Register from "./pages/Auth/Register";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div className="app-layout">
     {/* Todo: //Your code */}  
     {currentPage === "login" && <Login />}
     {currentPage === "register" && <Register />}
    <div className="navigation">
      <button onClick={() => setCurrentPage("login")}>Login</button>
      <button onClick={() => setCurrentPage("register")}>Register</button>
    </div>      
    </div>
  );  
}

export default App;
