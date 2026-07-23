import PageHeader from "../components/PageHeader";
import { team } from "../data/content";

export default function OurTeam() {
  return (
    <>
      <PageHeader kicker="About · Our Team" title="Our Team" />
      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>{team.intro}</p>
        </div>
      </section>

      {team.groups.map((group) => (
        <section className="section--tight" key={group.title}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "baseline", gap: 20, borderTop: "1px solid var(--color-divider)", paddingTop: 28, marginBottom: 36, flexWrap: "wrap" }}>
              <h2 className="display" style={{ fontSize: 34, margin: 0 }}>{group.title}</h2>
              <p className="prose" style={{ margin: 0, maxWidth: "46ch", fontSize: 15 }}>{group.note}</p>
            </div>
            <div className="people">
              {group.people.map((p) => (
                <article className="person" key={p.name}>
                  <img className="person__photo" src={p.photo} alt={p.name}
                    onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
                  <div>
                    <h3 className="person__name">{p.name}</h3>
                    <p className="person__role">{p.role}</p>
                    <p className="prose" style={{ fontSize: 15, margin: 0 }}>{p.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
