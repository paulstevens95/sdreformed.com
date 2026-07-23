import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { coffee, site } from "../data/content";

export default function CoffeeWithPastors() {
  return (
    <>
      <PageHeader kicker="Fellowship · Gather" title="Coffee With The Pastors" />

      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>{coffee.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="kicker">How It Works</p>
            <p className="prose" style={{ marginTop: 14, maxWidth: "44ch" }}>
              Coffee With The Pastors is relaxed and informal — no agenda, no pressure. Come with your questions, meet the pastors, and learn more about the life and vision of San Diego Reformed Church. It is a great first step before exploring membership.
            </p>
            <p style={{ marginTop: 20, marginBottom: 0 }}>
              <a className="link-underline" href={`mailto:${coffee.contact}`}>
                Email us to learn more →
              </a>
            </p>
          </div>
          <div className="info-card">
            <dl className="info-grid">
              <dt>Contact</dt>
              <dd><a href={`mailto:${coffee.contact}`}>{coffee.contact}</a></dd>
              <dt style={{ gridColumn: "1 / -1", height: 1, background: "var(--color-divider)", margin: "16px 0", padding: 0 }} />
              <dt>Location</dt>
              <dd style={{ whiteSpace: "pre-line" }}>{site.address.replace(", La Mesa", ",\nLa Mesa")}</dd>
            </dl>
            <Link className="btn btn-primary btn-block" to="/events" style={{ marginTop: 24, display: "block", textAlign: "center" }}>
              See upcoming dates
            </Link>
          </div>
        </div>
      </section>

      <hr className="rule" />

      <section className="section--tight">
        <div className="container two-col two-col--divided">
          <div>
            <p className="kicker">Next Step</p>
            <h3 className="display" style={{ fontSize: 26, margin: "12px 0 0" }}>Interested in membership?</h3>
            <p className="prose" style={{ marginTop: 14 }}>
              After Coffee With The Pastors, the next step is a membership interest class followed by an interview with one of our elders.
            </p>
            <p style={{ marginTop: 16, marginBottom: 0 }}>
              <Link className="link-underline" to="/membership">Learn about membership →</Link>
            </p>
          </div>
          <div>
            <p className="kicker">Lord's Day</p>
            <h3 className="display" style={{ fontSize: 26, margin: "12px 0 0" }}>Join us this Sunday</h3>
            <p className="prose" style={{ marginTop: 14 }}>
              The best way to get to know the church is simply to come. We meet every Lord's Day at {site.serviceTime} at {site.address}.
            </p>
            <p style={{ marginTop: 16, marginBottom: 0 }}>
              <a className="link-underline" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Get directions →</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
