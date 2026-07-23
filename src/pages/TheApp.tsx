import PageHeader from "../components/PageHeader";
import { sdrcApp } from "../data/content";

export default function TheApp() {
  return (
    <>
      <PageHeader kicker="Resources · Connect" title="The SDRC App" />

      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>{sdrcApp.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col two-col--divided">
          <div>
            <p className="kicker">What's in the app</p>
            <ul className="prose" style={{ marginTop: 14, paddingLeft: "1.2em", display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Sunday sermons — listen or watch on demand</li>
              <li>Church events and calendar</li>
              <li>Online giving</li>
              <li>Push notifications from the church</li>
            </ul>
          </div>
          <div>
            <p className="kicker">Download</p>
            <p className="prose" style={{ marginTop: 14 }}>
              Search <strong>San Diego Reformed Church</strong> in the App Store or Google Play, or visit our Subsplash page to get started.
            </p>
            <p style={{ marginTop: 20, marginBottom: 0 }}>
              <a className="btn btn-primary" href={sdrcApp.subsplashUrl} target="_blank" rel="noopener noreferrer">
                Open on Subsplash →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
