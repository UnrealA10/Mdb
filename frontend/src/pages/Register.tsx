import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "@/lib/axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
  });
  const [message, setMessage] = useState({ text: "", isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", isError: false });
    try {
      const res = await api.post("/register", formData);
      setMessage({
        text: res.data.message || "Registration successful!",
        isError: false,
      });
      setTimeout(() => navigate("/login"), 1200);
    } catch (err: any) {
      setMessage({
        text:
          err?.response?.data?.message ||
          err.message ||
          "Registration failed. Please try again.",
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
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            minLength={3}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
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
            required
            minLength={6}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
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
          {isSubmitting ? "Registering..." : "Register"}
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
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#1976d2" }}>
          Login
        </Link>
      </p>
    </div>
  );
}

export default Register;
