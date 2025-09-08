import { useState } from "react";

function Login({ onLoginSuccess, goToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && email === user.email && password === user.password) {
      onLoginSuccess(); // go to dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: "10px" }}>
        New user? <span style={{ color: "blue", cursor: "pointer" }} onClick={goToSignup}>Sign up here</span>
      </p>
    </div>
  );
}

export default Login;
