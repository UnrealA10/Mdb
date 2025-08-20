import React, { useEffect, useMemo, useState } from "react";
import api from "@/lib/axios";

const Faculty = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");

  useEffect(() => {
    const run = async () => {
      try {
        setErr("");
        setLoading(true);
        // admin-only endpoint; token is attached by axios interceptor
        const { data } = await api.get("/users", {
          params: { role: "teacher" },
        });
        setTeachers(data || []);
      } catch (e) {
        setErr(e?.response?.data?.message || "Failed to load teachers");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return teachers;
    return teachers.filter(
      (u) =>
        u.username?.toLowerCase().includes(qq) ||
        u.email?.toLowerCase().includes(qq)
    );
  }, [q, teachers]);

  const initials = (name = "", email = "") => {
    const base = name || email?.split("@")[0] || "";
    const parts = base.split(/[.\s_-]+/).filter(Boolean);
    return (
      (parts[0]?.[0] || "").toUpperCase() + (parts[1]?.[0] || "").toUpperCase()
    );
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Faculty</h1>
          <p className="text-sm text-muted-foreground">
            Admin view • Listing all users with the role <b>teacher</b>.
          </p>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search teacher by name or email..."
          className="h-10 w-full max-w-sm rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
        {loading ? (
          <div className="p-6 text-center text-muted-foreground">Loading…</div>
        ) : err ? (
          <div className="p-6 text-destructive">{err}</div>
        ) : filtered.length === 0 ? (
          <div className="p-6 text-muted-foreground">No teachers found.</div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((t) => (
              <li
                key={t._id || `${t.username}-${t.email}`}
                className="rounded-xl border border-border bg-background p-4 hover:bg-muted/40 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-forest-green/10 text-forest-green flex items-center justify-center font-semibold">
                    {initials(t.username, t.email)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium truncate">
                      {t.username || "—"}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {t.email || "—"}
                    </div>
                  </div>
                  <span className="ml-auto text-xs px-2 py-1 rounded bg-soft-green/30 text-forest-green">
                    Teacher
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Faculty;
