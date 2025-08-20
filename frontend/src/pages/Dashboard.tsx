import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header"
import Footer from "@/components/Footer"

type Role = "student" | "teacher" | "admin";

interface User {
  loggedIn: boolean;
  username: string;
  role: Role;
}

interface DashboardProps {
  user: User;
  setUser: (user: null) => void;
}

type Notice = {
  _id: string;
  title: string;
  date: string;
  tag?: "Info" | "Update" | "Event" | "Alert" | "";
  description?: string;
  href?: string;
};

function NoticesManager() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [form, setForm] = useState({
    title: "",
    tag: "" as Notice["tag"],
    description: "",
    href: "",
  });
  const [editing, setEditing] = useState<Notice | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const load = async () => {
    try {
      setErr("");
      const { data } = await api.get<Notice[]>("/notices");
      setNotices(data);
    } catch (e: any) {
      setErr(e?.response?.data?.message || "Failed to load notices");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const resetForm = () => {
    setForm({ title: "", tag: "", description: "", href: "" });
    setEditing(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        await api.put(`/notices/${editing._id}`, form);
      } else {
        await api.post("/notices", form);
      }
      resetForm();
      await load();
    } catch (e: any) {
      alert(e?.response?.data?.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (n: Notice) => {
    setEditing(n);
    setForm({
      title: n.title,
      tag: n.tag || "",
      description: n.description || "",
      href: n.href || "",
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this notice?")) return;
    await api.delete(`/notices/${id}`);
    await load();
  };

  return (
    <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Header />
      {/* Form card */}
      <div className="rounded-2xl border border-border bg-card shadow-soft">
        <div className="p-5 border-b border-border">
          <h3 className="text-lg font-semibold">
            {editing ? "Edit Notice" : "Add Notice"}
          </h3>
          <p className="text-sm text-muted-foreground">
            Publish updates, events, and alerts visible to everyone.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Annual Sports Day"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Tag</label>
              <select
                name="tag"
                value={form.tag}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">None</option>
                <option value="Info">Info</option>
                <option value="Update">Update</option>
                <option value="Event">Event</option>
                <option value="Alert">Alert</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Link (optional)</label>
              <input
                name="href"
                value={form.href}
                onChange={handleChange}
                placeholder="https://example.com/details"
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="Write a short description..."
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={loading}>
              {editing ? "Update Notice" : "Publish Notice"}
            </Button>
            {editing && (
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </div>
          {err && <p className="text-sm text-destructive">{err}</p>}
        </form>
      </div>

      {/* List card */}
      <div className="rounded-2xl border border-border bg-card shadow-soft">
        <div className="p-5 border-b border-border">
          <h3 className="text-lg font-semibold">Existing Notices</h3>
          <p className="text-sm text-muted-foreground">
            Click “Edit” to modify any notice, or “Delete” to remove it.
          </p>
        </div>
        <ul className="p-5 space-y-4">
          {notices.length === 0 && (
            <li className="text-sm text-muted-foreground">No notices yet.</li>
          )}
          {notices.map((n) => (
            <li
              key={n._id}
              className="rounded-lg border border-border p-4 hover:bg-muted/30 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium">{n.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {new Date(n.date).toLocaleString()}{" "}
                    {n.tag ? `• ${n.tag}` : ""}
                  </div>
                  {n.description && (
                    <p className="text-sm mt-2">{n.description}</p>
                  )}
                  {n.href && (
                    <a
                      href={n.href}
                      className="text-sm text-primary underline mt-2 inline-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read more
                    </a>
                  )}
                </div>
                <div className="shrink-0 flex gap-2">
                  <Button variant="outline" onClick={() => handleEdit(n)}>
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(n._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Dashboard({ user, setUser }: DashboardProps) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setUser(null);
  };

  return (
    <div className="mt-24 container px-4">
      {/* hero */}
      <div className="rounded-2xl bg-gradient-to-r from-forest-green/90 to-soft-green/80 text-white p-6 shadow-medium">
        <h1 className="text-2xl md:text-3xl font-bold">
          Welcome back, {user.username}!
        </h1>
        <p className="text-sm md:text-base mt-1">
          You’re signed in as <b>{user.role}</b>.
        </p>
        <div className="mt-4">
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      {/* content */}
      {user.role === "admin" ? (
        <NoticesManager />
      ) : (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="font-semibold">My Classes</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Mathematics</li>
              <li>Science</li>
              <li>English</li>
              <li>History</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="font-semibold">Assignments</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Math Problem Set — Due Nov 15</li>
              <li>Science Report — Due Nov 18</li>
              <li>English Essay — Due Nov 20</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h3 className="font-semibold">Grades</h3>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Mathematics: A-</li>
              <li>Science: B+</li>
              <li>English: A</li>
              <li>History: B+</li>
            </ul>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Dashboard;
