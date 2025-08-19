import React, { useEffect, useState } from "react";
import api from "@/lib/axios";

type Notice = {
  _id: string;
  title: string;
  date: string;
  tag?: "Info" | "Update" | "Event" | "Alert";
  description?: string;
  href?: string;
};

const News: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<Notice[]>("/notices")
      .then((res) => {
        const sorted = [...res.data].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setNotices(sorted);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div style={{ maxWidth: 800, margin: "2rem auto" }}>Loading…</div>;

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: 20 }}>
      <h1 style={{ marginBottom: 16 }}>News &amp; Updates</h1>
      {notices.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notices.map((n) => (
            <li
              key={n._id}
              style={{
                marginBottom: 20,
                borderBottom: "1px solid #ddd",
                paddingBottom: 12,
              }}
            >
              <h3 style={{ marginBottom: 6 }}>{n.title}</h3>
              <p style={{ color: "#666", marginBottom: 6 }}>
                {new Date(n.date).toLocaleDateString()}{" "}
                {n.tag ? `(${n.tag})` : ""}
              </p>
              {n.description && (
                <p style={{ marginBottom: 6 }}>{n.description}</p>
              )}
              {n.href && (
                <a href={n.href} target="_blank" rel="noreferrer">
                  Read more
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
