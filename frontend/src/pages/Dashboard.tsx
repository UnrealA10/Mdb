import { useEffect, useState } from "react";
import axios from "axios";

interface DashboardProps {
  user: { loggedIn: boolean; username: string; role: string };
  setUser: (user: null) => void;
}

const NoticesManager = () => {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState({
    title: "",
    tag: "",
    description: "",
    href: "",
  });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = () => {
    axios.get("/notices").then((res) => setNotices(res.data));
  };

  const handleChange = (e) => {
    setNewNotice({ ...newNotice, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      axios.put(`/notices/${editing._id}`, newNotice).then(() => {
        fetchNotices();
        setEditing(null);
        setNewNotice({ title: "", tag: "", description: "", href: "" });
      });
    } else {
      axios.post("/notices", newNotice).then(() => {
        fetchNotices();
        setNewNotice({ title: "", tag: "", description: "", href: "" });
      });
    }
  };

  const handleEdit = (notice) => {
    setNewNotice({
      title: notice.title,
      tag: notice.tag || "",
      description: notice.description || "",
      href: notice.href || "",
    });
    setEditing(notice);
  };

  const handleDelete = (id) => {
    axios.delete(`/notices/${id}`).then(() => fetchNotices());
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Manage Notices</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          name="title"
          value={newNotice.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <select name="tag" value={newNotice.tag} onChange={handleChange}>
          <option value="">None</option>
          <option value="Info">Info</option>
          <option value="Update">Update</option>
          <option value="Event">Event</option>
          <option value="Alert">Alert</option>
        </select>
        <textarea
          name="description"
          value={newNotice.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          name="href"
          value={newNotice.href}
          onChange={handleChange}
          placeholder="Link (optional)"
        />
        <button type="submit">{editing ? "Update" : "Add"} Notice</button>
      </form>
      <ul style={{ marginTop: "20px" }}>
        {notices.map((n) => (
          <li key={n._id} style={{ marginBottom: "10px" }}>
            {n.title} ({n.tag}) - {new Date(n.date).toLocaleDateString()}
            <button
              onClick={() => handleEdit(n)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(n._id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Dashboard({ user, setUser }: DashboardProps) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>
        Welcome, {user.username} ({user.role})
      </h2>
      {user.role === "admin" && <NoticesManager />}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
