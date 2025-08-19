import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setUser: (user: {
    loggedIn: boolean;
    username: string;
    role: string;
  }) => void;
}

function Login({ setUser }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setUser({
        loggedIn: true,
        username: response.data.username,
        role: response.data.role,
      });
      setMessage(response.data.message);
      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response?.data.message || "Network error");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p style={{ color: message.includes("successful") ? "green" : "red" }}>
        {message}
      </p>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;
