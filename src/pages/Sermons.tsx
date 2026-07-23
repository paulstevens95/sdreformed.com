import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { sermons } from "../data/content";

declare global {
  interface Window {
    subsplashEmbed: (path: string, base: string, id: string) => void;
  }
}

export default function Sermons() {
  useEffect(() => {
    const container = document.getElementById("subsplash-embed-267jwg2");
    if (!container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = function () {
      window.subsplashEmbed(
        "+b3s4/lb/li/+ppkrz6q?embed&1784847418508",
        "https://subsplash.com/",
        "subsplash-embed-267jwg2"
      );
    };
    script.src =
      "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
    container.parentElement!.insertBefore(script, container);
  }, []);

  return (
    <>
      <PageHeader kicker="Resources · Word" title="Sermons" />

      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>{sermons.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div id="subsplash-embed-267jwg2" />
        </div>
      </section>
    </>
  );
}