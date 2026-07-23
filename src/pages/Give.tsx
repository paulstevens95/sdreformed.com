import PageHeader from "../components/PageHeader";
import { give } from "../data/content";

export default function Give() {
  return (
    <>
      <PageHeader kicker="Give · Support the Ministry" title="Give" />

      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>{give.intro}</p>
          <p style={{ marginTop: 28, marginBottom: 0 }}>
            <a className="btn btn-primary" href={give.subsplashUrl} target="_blank" rel="noopener noreferrer">
              Give online →
            </a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col two-col--divided">
          <div>
            <p className="kicker">Why We Give</p>
            <p className="prose prose--justify" style={{ marginTop: 14 }}>
              Giving is an act of worship. The tithe and freewill offering are how the Lord's people have sustained His ministry throughout the ages. At SDRC, your gifts fund preaching, pastoral care, mercy ministry, and the day-to-day operations of the local church.
            </p>
          </div>
          <div>
            <p className="kicker">How to Give</p>
            <p className="prose" style={{ marginTop: 14 }}>
              You can give online through our Subsplash giving page, or in person during the Sunday morning service. Checks may be made payable to <strong>San Diego Reformed Church</strong>.
            </p>
            <p style={{ marginTop: 18, marginBottom: 0 }}>
              <a className="link-underline" href={give.subsplashUrl} target="_blank" rel="noopener noreferrer">
                Give online →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
