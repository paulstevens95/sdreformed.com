import { Link } from "react-router-dom";
import { site, home, vision } from "../data/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p className="kicker">{home.hero.kicker}</p>
          <h1 className="hero__title display">{home.hero.title}</h1>
          <p className="lede hero__lede">{home.hero.lede}</p>
          <div className="btn-row">
            <a className="btn btn-primary" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Join us Sunday</a>
            <a className="btn btn-secondary" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* Confession plate */}
      <section className="section">
        <div className="container plate-block">
          <div className="plate-frame">
            <div className="plate-frame__inner">
              <p className="kicker">{home.confession.kicker}</p>
              <h2 className="display" style={{ fontSize: "clamp(28px,4vw,36px)", margin: "16px 0 0" }}>
                The Second London Baptist<br />Confession of 1689
              </h2>
              <div className="plate-frame__rule" />
              <p className="lede" style={{ maxWidth: "56ch", margin: "0 auto" }}>{home.confession.body}</p>
              <p style={{ marginTop: 28, marginBottom: 0 }}>
                <a className="link-underline" href={site.confessionUrl} target="_blank" rel="noopener noreferrer">
                  Read the full confession →
                </a>
                {"  "}
                <Link className="link-underline" to="/beliefs" style={{ marginLeft: 20 }}>Our full statement of faith →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* Vision pillars */}
      <section className="section">
        <div className="container">
          <p className="kicker" style={{ textAlign: "center" }}>Our Vision</p>
          <p className="display" style={{ fontSize: "clamp(24px,3.4vw,32px)", textAlign: "center", maxWidth: "26ch", margin: "16px auto 0", lineHeight: 1.25 }}>
            {vision.statement}
          </p>
          <div className="two-col two-col--divided" style={{ marginTop: 52 }}>
            {vision.pillars.map((p) => (
              <div key={p.title}>
                <h3 className="display" style={{ fontSize: 27 }}>{p.title}</h3>
                <p className="prose prose--justify" style={{ marginTop: 12 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* Sunday service */}
      <section className="section">
        <div className="container two-col">
          <div>
            <p className="kicker">{home.service.kicker}</p>
            <h2 className="display" style={{ fontSize: 30, fontWeight: 600, margin: "12px 0 0" }}>{home.service.title}</h2>
            <p className="prose" style={{ marginTop: 14, maxWidth: "44ch" }}>{home.service.body}</p>
          </div>
          <div className="info-card">
            <dl className="info-grid">
              <dt>Time</dt>
              <dd className="tnum" style={{ fontSize: 19 }}>{site.serviceTime} · Every Lord's Day</dd>
              <dt style={{ gridColumn: "1 / -1", height: 1, background: "var(--color-divider)", margin: "16px 0", padding: 0 }} />
              <dt>Location</dt>
              <dd style={{ whiteSpace: "pre-line" }}>{site.address.replace(", La Mesa", ",\nLa Mesa")}</dd>
            </dl>
            <a className="btn btn-primary btn-block" href={site.mapUrl} target="_blank" rel="noopener noreferrer" style={{ marginTop: 24 }}>
              Get directions
            </a>
          </div>
        </div>
      </section>

      {/* Sermons — featured video */}
      <section className="section band">
        <div className="container two-col">
          <div>
            <p className="kicker">{home.sermons.kicker}</p>
            <h2 className="display" style={{ fontSize: 32, margin: "12px 0 0", color: "var(--color-neutral-100)" }}>{home.sermons.title}</h2>
            <p className="prose" style={{ marginTop: 14, color: "color-mix(in srgb, #f8f4f4 78%, transparent)" }}>{home.sermons.body}</p>
            <p style={{ marginTop: 18, marginBottom: 0 }}>
              <Link to="/sermons" className="link-underline"
                 style={{ borderColor: "var(--color-accent-300)" }}>Watch all sermons →</Link>
            </p>
          </div>
          <figure style={{ margin: 0 }}>
            <div className="embed">
              <iframe
                src="https://subsplash.com/u/sdrc/media/embed/d/*recent?audio=0"
                frameBorder={0}
                allow="clipboard-read; clipboard-write"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                />
            </div>
            <figcaption style={{ color: "var(--color-accent-300)", marginTop: 10, fontSize: 12, letterSpacing: "0.06em" }}>
              {home.sermons.featuredTitle}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Get involved + membership */}
      <section className="section">
        <div className="container two-col two-col--divided">
          <div>
            <p className="kicker">Get More Involved</p>
            <h3 className="display" style={{ fontSize: 26, margin: "12px 0 0" }}>Life together at SDRC</h3>
            <p className="prose prose--justify" style={{ marginTop: 14 }}>
              There are many ways to get involved at SDRC. Explore our events for what is coming up, and be sure to join us at the next Coffee With The Pastors.
            </p>
            <p style={{ marginTop: 16, marginBottom: 0 }}>
              <Link className="link-underline" to="/events">See what's happening →</Link>
            </p>
          </div>
          <div>
            <p className="kicker">{home.membership.kicker}</p>
            <h3 className="display" style={{ fontSize: 26, margin: "12px 0 0" }}>{home.membership.title}</h3>
            <p className="prose prose--justify" style={{ marginTop: 14 }}>{home.membership.body}</p>
            <p style={{ marginTop: 16, marginBottom: 0 }}>
              <Link className="link-underline" to="/membership">Find out more →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
