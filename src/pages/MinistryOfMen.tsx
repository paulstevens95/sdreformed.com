import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { men, site } from "../data/content";

export default function MinistryOfMen() {
  return (
    <>
      <PageHeader kicker="Fellowship · Men" title="Ministry of Men" />

      <section className="section--tight">
        <div className="container">
          <p className="kicker" style={{ marginBottom: 10 }}>{men.subtitle}</p>
          <p className="lede" style={{ maxWidth: "62ch" }}>{men.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="kicker">About The Brotherhood</p>
            <p className="prose" style={{ marginTop: 14, maxWidth: "44ch" }}>
              Each gathering includes a short teaching from God's word, time for group discussion, and the opportunity to build deep friendships within the church body. All men of the congregation are welcome.
            </p>
            <p style={{ marginTop: 20, marginBottom: 0 }}>
              <a className="link-underline" href={`mailto:${men.contact}`}>
                Contact us for more information →
              </a>
            </p>
          </div>
          <div className="info-card">
            <dl className="info-grid">
              <dt>Frequency</dt>
              <dd>Every other month</dd>
              <dt style={{ gridColumn: "1 / -1", height: 1, background: "var(--color-divider)", margin: "16px 0", padding: 0 }} />
              <dt>Location</dt>
              <dd style={{ whiteSpace: "pre-line" }}>{site.address.replace(", La Mesa", ",\nLa Mesa")}</dd>
              <dt style={{ gridColumn: "1 / -1", height: 1, background: "var(--color-divider)", margin: "16px 0", padding: 0 }} />
              <dt>Contact</dt>
              <dd><a href={`mailto:${men.contact}`}>{men.contact}</a></dd>
            </dl>
            <Link className="btn btn-primary btn-block" to="/events" style={{ marginTop: 24, display: "block", textAlign: "center" }}>
              See upcoming events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
