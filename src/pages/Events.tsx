import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { events } from "../data/content";

declare global {
  interface Window {
    subsplashEmbed: (path: string, base: string, id: string) => void;
  }
}

export default function Events() {
  useEffect(() => {
    const container = document.getElementById("subsplash-embed-yx47544");
    if (!container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
      window.subsplashEmbed(
        "+b3s4/lb/ca/+yx47544?embed",
        "https://subsplash.com/",
        "subsplash-embed-yx47544"
      );
    };
    script.src =
      "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
    container.parentElement!.insertBefore(script, container);
  }, []);

  return (
    <>
      <PageHeader kicker="Fellowship · Gather" title="Events" />

      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>{events.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div id="subsplash-embed-yx47544" />
        </div>
      </section>
    </>
  );
}
