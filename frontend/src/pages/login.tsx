import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "@/lib/axios";

interface User {
  loggedIn: boolean;
  username: string;
  role: "student" | "teacher" | "admin";
}
interface LoginProps {
  setUser: (user: User) => void;
}
interface ApiResponse {
  token?: string;
  username?: string;
  role?: User["role"];
  message?: string;
}

function Login({ setUser }: LoginProps) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState<{ text: string; isError: boolean }>({
    text: "",
    isError: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", isError: false });
    try {
      const res = await api.post<ApiResponse>("/login", formData);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setUser({
          loggedIn: true,
          username: res.data.username || "",
          role: res.data.role || "student",
        });
        setMessage({
          text: res.data.message || "Login successful!",
          isError: false,
        });
        navigate("/dashboard");
      }
    } catch (err: any) {
      setMessage({
        text:
          err?.response?.data?.message ||
          err.message ||
          "Login failed. Please try again.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: "2rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: 8,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="username"
            required
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
            minLength={6}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: ".75rem",
            background: "#4CAF50",
            color: "#fff",
            border: 0,
            borderRadius: 4,
          }}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
      {message.text && (
        <p
          style={{
            color: message.isError ? "#d32f2f" : "#2e7d32",
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          {message.text}
        </p>
      )}
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Don&apos;t have an account?{" "}
        <Link to="/register" style={{ color: "#1976d2" }}>
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
