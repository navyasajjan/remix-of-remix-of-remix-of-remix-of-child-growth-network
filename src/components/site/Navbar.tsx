import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";

import logoAsset from "@/assets/manosetu-logo.png.asset.json";

type NavLink = { label: string; to?: string; hash?: string };

const PARENT_LINKS: NavLink[] = [
  { label: "Find CDCs", to: "/", hash: "map" },
  { label: "How It Works", to: "/", hash: "how" },
  { label: "Resources", to: "/", hash: "resources" },
  { label: "About", to: "/about" },
  { label: "For CDCs", to: "/for-cdcs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isCdcPage = pathname === "/for-cdcs";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-[28px] px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center" aria-label="ManoSetu home">
          <img
            src={logoAsset.url}
            alt="ManoSetu"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {PARENT_LINKS.map((l) =>
            l.hash ? (
              <Link
                key={l.label}
                to={l.to!}
                hash={l.hash}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.label}
                to={l.to!}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-sm font-semibold text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="text-sm font-semibold text-foreground transition-opacity hover:opacity-70"
          >
            Sign In
          </a>
          {isCdcPage ? (
            <Link
              to="/list-your-cdc"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              List Your CDC
            </Link>
          ) : (
            <Link
              to="/"
              hash="map"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Find CDCs
            </Link>
          )}
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-strong mx-auto mt-2 max-w-6xl rounded-[28px] p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {PARENT_LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to!}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-white/50"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-1">
                <a href="#" className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold">
                  Sign In
                </a>
                {isCdcPage ? (
                  <Link
                    to="/list-your-cdc"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-foreground px-5 py-3 text-center text-sm font-semibold text-background"
                  >
                    List Your CDC
                  </Link>
                ) : (
                  <Link
                    to="/"
                    hash="map"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-foreground px-5 py-3 text-center text-sm font-semibold text-background"
                  >
                    Find CDCs
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
