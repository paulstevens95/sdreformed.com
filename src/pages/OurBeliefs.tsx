import PageHeader from "../components/PageHeader";
import { site, beliefs } from "../data/content";

// Roman numerals for the chapter list.
const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX","XXXI","XXXII"];

export default function OurBeliefs() {
  return (
    <>
      <PageHeader kicker="About · What We Believe" title="Statement of Faith" />

      {/* Intro columns */}
      <section className="section--tight">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <p className="lede" style={{ margin: 0, color: "var(--color-text)" }}>{beliefs.intro}</p>
          <p className="prose prose--justify" style={{ margin: 0 }}>
            To that end we hold without reservation to the{" "}
            <strong style={{ fontWeight: 600 }}>Second London Baptist Confession of Faith of 1689</strong>.
            {" "}It is our confession not because it stands above Scripture, but because it is a faithful and
            thorough summary of the whole counsel of God revealed in His Word.
          </p>
        </div>
      </section>

      {/* Confession masthead band */}
      <section className="band" style={{ padding: "44px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          <div>
            <div className="display" style={{ fontSize: 30, color: "var(--color-neutral-100)" }}>The 1689 Baptist Confession of Faith</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-accent-300)", letterSpacing: "0.04em", marginTop: 6 }}>
              Thirty-two chapters · adopted 1677, published 1689
            </div>
          </div>
          <a className="btn" href={site.confessionUrl} target="_blank" rel="noopener noreferrer"
             style={{ borderColor: "var(--color-accent-300)", color: "var(--color-accent-300)" }}>
            Read the full confession →
          </a>
        </div>
      </section>

      {/* Chapter contents */}
      <section className="section">
        <div className="container">
          <p className="kicker">Contents</p>
          <div className="chapters" style={{ marginTop: 22 }}>
            <ol>
              {beliefs.chapters.map((title, i) => (
                <li key={i}>
                  <span className="roman">{ROMAN[i]}</span>
                  <span className="chap-title">{title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* Doctrines of grace */}
      <section className="section">
        <div className="container">
          <p className="kicker">The Doctrines of Grace</p>
          <p className="lede" style={{ maxWidth: "64ch", marginTop: 14 }}>{beliefs.doctrinesOfGrace.intro}</p>
          <div className="grace-list" style={{ marginTop: 28 }}>
            {beliefs.doctrinesOfGrace.points.map((pt) => (
              <div className="grace-item" key={pt.term}>
                <h3 className="display">{pt.term}</h3>
                <p className="prose" style={{ margin: 0 }}>{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="section--tight">
        <div className="container">
          <div style={{ borderTop: "1px solid var(--color-divider)", paddingTop: 40, maxWidth: "70ch" }}>
            <blockquote className="pull">"{beliefs.quote.text}"</blockquote>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, letterSpacing: "0.04em", color: "color-mix(in srgb, var(--color-text) 60%, transparent)", marginTop: 18 }}>
              — {beliefs.quote.source}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
