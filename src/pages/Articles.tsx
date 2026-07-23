import PageHeader from "../components/PageHeader";
import { articles } from "../data/content";

export default function Articles() {
  return (
    <>
      <PageHeader kicker="Resources · Read" title="Articles" />

      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>{articles.intro}</p>
          <p style={{ marginTop: 28, marginBottom: 0 }}>
            <a className="btn btn-primary" href={articles.externalUrl} target="_blank" rel="noopener noreferrer">
              Read all articles →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
