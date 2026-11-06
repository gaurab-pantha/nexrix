import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/nexrix-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexrix — A Hack Club, Under Construction" },
      { name: "description", content: "Nexrix is a Hack Club by NexrixDevs. Our website is under development — coming soon." },
      { property: "og:title", content: "Nexrix — A Hack Club, Under Construction" },
      { property: "og:description", content: "Nexrix is a Hack Club by NexrixDevs. Our website is under development." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-dots flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 py-12 text-center">
      <span className="rounded-full border-2 border-primary px-4 py-1 text-sm font-semibold uppercase tracking-widest text-primary">
        ✦ A Hack Club
      </span>
      <img src={logo.url} alt="Nexrix logo" className="animate-wiggle h-40 w-40 rounded-full shadow-2xl md:h-52 md:w-52" />
      <h1 className="text-5xl font-black leading-tight text-foreground md:text-7xl">
        We're <span className="text-gradient-brand">building</span> something.
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
        The Nexrix website is under development. Teen hackers making cool stuff — check back soon!
      </p>
      <div className="mt-2 rounded-2xl border border-border bg-card px-6 py-4 font-mono text-sm text-card-foreground">
        <span className="text-primary">$</span> nexrix --status <span className="text-secondary">🚧 under construction</span>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">© NexrixDevs</p>
    </main>
  );
}
