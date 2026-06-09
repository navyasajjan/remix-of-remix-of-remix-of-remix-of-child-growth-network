import logoAsset from "@/assets/manosetu-logo.png.asset.json";

const groups = [
  {
    title: "Platform",
    links: ["Find CDCs", "For Parents", "For CDCs", "Resources"],
  },
  {
    title: "Company",
    links: ["About", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms"],
  },
];

export function Footer() {
  return (
    <footer className="relative px-3 pb-4 sm:px-5">
      <div className="glass mx-auto max-w-6xl rounded-[36px] p-8 sm:p-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <img src={logoAsset.url} alt="ManoSetu" className="h-12 w-auto" />
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              India's Trusted Child Development Network — helping families find, connect
              with, and trust the right centres.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-bold">{g.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} ManoSetu. All rights reserved.</p>
          <p>Made with care for India's children.</p>
        </div>
      </div>
    </footer>
  );
}
