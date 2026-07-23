import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { membership } from "../data/content";

export default function Membership() {
  return (
    <>
      <PageHeader kicker="Fellowship · Join" title="Membership" />

      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>{membership.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="kicker">The Process</p>
          <p className="prose" style={{ marginTop: 10, marginBottom: 40, maxWidth: "52ch" }}>
            The process to become a member of San Diego Reformed Church includes six simple steps.
          </p>
          <div className="grace-list">
            {membership.steps.map((step) => (
              <div className="grace-item" key={step.number}>
                <h3 className="display" style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                  <span style={{ fontVariantNumeric: "tabular-nums", opacity: 0.35, fontSize: "0.75em" }}>
                    {step.number}
                  </span>
                  {step.title}
                </h3>
                <p className="prose" style={{ margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      <section className="section--tight">
        <div className="container">
          <p className="kicker">Documents</p>
          <p className="prose" style={{ marginTop: 10, maxWidth: "48ch" }}>
            Review our Membership Covenant and Church Constitution before beginning the process.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 22 }}>
            <a className="btn btn-primary" href={membership.covenantUrl} target="_blank" rel="noopener noreferrer">
              Membership Covenant
            </a>
            <a className="btn" href={membership.constitutionUrl} target="_blank" rel="noopener noreferrer">
              Church Constitution
            </a>
          </div>
          <p className="prose" style={{ marginTop: 28, marginBottom: 0 }}>
            Ready to begin?{" "}
            <Link className="link-underline" to="/coffee">Start with Coffee With The Pastors →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
