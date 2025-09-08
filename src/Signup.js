import { useState } from "react";
import './index.css';

function Signup({ onSignupSuccess, goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      // Store credentials in localStorage for demo
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Signup successful! Please login.");
      goToLogin(); // go to login page
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Already registered? <span style={{ color: "blue", cursor: "pointer" }} onClick={goToLogin}>Login here</span>
      </p>
    </div>
  );
}

export default Signup;
