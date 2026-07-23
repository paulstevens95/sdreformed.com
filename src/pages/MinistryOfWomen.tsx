import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { women, site } from "../data/content";

export default function MinistryOfWomen() {
  return (
    <>
      <PageHeader kicker="Fellowship · Women" title="Ministry of Women" />

      <section className="section--tight">
        <div className="container">
          <p className="kicker" style={{ marginBottom: 10 }}>{women.subtitle}</p>
          <p className="lede" style={{ maxWidth: "62ch" }}>{women.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="kicker">About Imperishable Beauty</p>
            <p className="prose" style={{ marginTop: 14, maxWidth: "44ch" }}>
              This ministry is grounded in the call of Titus 2 and 1 Peter 3 — for older women to teach what is good, and for all women to adorn themselves with the imperishable beauty of a gentle and quiet spirit. Children are welcome; childcare is not provided.
            </p>
            <p style={{ marginTop: 20, marginBottom: 0 }}>
              <a className="link-underline" href={`mailto:${women.contact}`}>
                Contact us for more information →
              </a>
            </p>
          </div>
          <div className="info-card">
            <dl className="info-grid">
              <dt>Open to</dt>
              <dd>All women of the congregation</dd>
              <dt style={{ gridColumn: "1 / -1", height: 1, background: "var(--color-divider)", margin: "16px 0", padding: 0 }} />
              <dt>Location</dt>
              <dd style={{ whiteSpace: "pre-line" }}>{site.address.replace(", La Mesa", ",\nLa Mesa")}</dd>
              <dt style={{ gridColumn: "1 / -1", height: 1, background: "var(--color-divider)", margin: "16px 0", padding: 0 }} />
              <dt>Contact</dt>
              <dd><a href={`mailto:${women.contact}`}>{women.contact}</a></dd>
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
