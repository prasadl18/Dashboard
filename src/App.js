import './App.css';
import { useState } from 'react';
import MyForm from './MyForm';
import Aurora from './Aurora';
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {
   const [page, setPage] = useState("login"); // login | signup | dashboard
  return (

    <div className="App">

      <Aurora
              colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
              blend={0.5} 
              amplitude={1.0}
              speed={0.5}
      />   
       <div className="form-wrapper">
      {page === "login" && (
        <MyForm
          onLoginSuccess={() => setPage("dashboard")}
          goToSignup={() => setPage("signup")}
        />
      )}
      {page === "signup" && (
        <Signup
          onSignupSuccess={() => setPage("dashboard")}
          goToLogin={() => setPage("login")}
        />
      )}
      {page === "dashboard" && <Dashboard />}
      </div>
    </div>
  );
}

export default App;
