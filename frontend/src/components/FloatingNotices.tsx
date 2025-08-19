import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Bell, Megaphone, X, ArrowRight } from "lucide-react";

type Notice = {
  _id: string;
  title: string;
  date: string; // ISO
  tag?: "Info" | "Update" | "Event" | "Alert";
  description?: string;
  href?: string;
};

function classNames(...xs: (string | false | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

const TagPill: React.FC<{ label: NonNullable<Notice["tag"]> }> = ({
  label,
}) => {
  const style = {
    Info: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-900",
    Update:
      "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900",
    Event:
      "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-900",
    Alert:
      "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900",
  }[label];
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
        style
      )}
    >
      {label}
    </span>
  );
};

const FloatingNotices: React.FC<{
  buttonLabel?: string;
}> = ({ buttonLabel = "Notices & Updates" }) => {
  const [open, setOpen] = useState(false);
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    axios.get("/notices").then((res) => setNotices(res.data));
  }, []);

  const data = useMemo(
    () =>
      notices.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [notices]
  );

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when open (mobile-friendly)
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const unreadCount = data.length;

  return (
    <>
      {/* Floating Button */}
      <button
        aria-label={buttonLabel}
        onClick={() => setOpen(true)}
        className={classNames(
          "group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-2xl",
          "bg-white/80 backdrop-blur-xl shadow-xl border border-white/60",
          "dark:bg-zinc-900/80 dark:border-white/10",
          "px-4 py-3 hover:translate-y-[-2px] transition-all",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
        )}
      >
        <span className="relative inline-flex">
          <Bell className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
          {unreadCount > 0 && (
            <>
              <span className="absolute -top-1.5 -right-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1.5 text-[10px] font-bold text-white">
                {unreadCount}
              </span>
              {/* subtle glow pulse */}
              <span className="absolute -top-1.5 -right-1.5 inline-flex h-5 w-5 rounded-full bg-rose-600/40 blur-sm animate-ping" />
            </>
          )}
        </span>
        <span className="hidden sm:block text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {buttonLabel}
        </span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
        />
      )}

      {/* Panel (bottom sheet on mobile, right drawer on md+) */}
      <section
        role="dialog"
        aria-modal="true"
        aria-label="Latest notices and updates"
        className={classNames(
          "fixed z-50 transition-all",
          // bottom sheet on mobile
          "left-0 right-0 bottom-0 md:left-auto md:top-0 md:bottom-0",
          open
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-full md:translate-x-full",
          // size
          "h-[70vh] md:h-full md:w-[380px]"
        )}
      >
        <div
          className={classNames(
            "flex h-full flex-col",
            "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl",
            "border-t border-zinc-200 dark:border-white/10 md:border-l md:border-t-0",
            "shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.35)] md:shadow-[ -20px_0_60px_-20px_rgba(0,0,0,0.35)]"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 md:px-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white shadow">
                <Megaphone className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  Notices & Updates
                </h3>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {unreadCount} {unreadCount === 1 ? "update" : "updates"} •
                  Press{" "}
                  <kbd className="px-1 text-[10px] rounded border bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700">
                    Esc
                  </kbd>{" "}
                  to close
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close notices panel"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* List */}
          <div className="relative flex-1 overflow-y-auto px-3 pb-4 md:px-4">
            <ul className="space-y-3">
              {data.map((n) => (
                <li
                  key={n._id}
                  className={classNames(
                    "group rounded-2xl border bg-white/70 dark:bg-zinc-900/70",
                    "border-zinc-200 dark:border-white/10",
                    "p-3 md:p-4 hover:shadow-lg transition-all"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        {n.tag && <TagPill label={n.tag} />}
                        <time
                          className="text-[11px] text-zinc-500 dark:text-zinc-400"
                          dateTime={n.date}
                          title={new Date(n.date).toDateString()}
                        >
                          {new Date(n.date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          })}
                        </time>
                      </div>
                      <h4 className="mt-1 line-clamp-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {n.title}
                      </h4>
                      {n.description && (
                        <p className="mt-1 line-clamp-3 text-xs text-zinc-600 dark:text-zinc-300">
                          {n.description}
                        </p>
                      )}
                    </div>
                    {n.href ? (
                      <a
                        href={n.href}
                        className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-xl border border-transparent px-2 py-1 text-xs font-medium text-indigo-700 hover:text-indigo-900 dark:text-indigo-300 hover:underline"
                      >
                        View <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            {/* Empty state */}
            {data.length === 0 && (
              <div className="grid h-full place-items-center">
                <div className="text-center">
                  <Megaphone className="mx-auto h-8 w-8 text-zinc-400" />
                  <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                    No notices yet
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Check back soon.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default FloatingNotices;
