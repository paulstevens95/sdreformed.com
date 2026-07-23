import PageHeader from "../components/PageHeader";
import { bookList, podcasts } from "../data/content";

export default function BookList() {
  return (
    <>
      <PageHeader kicker="Resources · Read" title="Book List" />

      <section className="section--tight">
        <div className="container">
          <p className="lede" style={{ maxWidth: "62ch" }}>
            These are books the pastors and elders of SDRC commend for your growth in the faith, in wisdom, and in the knowledge of God.
          </p>
        </div>
      </section>

      {bookList.map((cat) => (
        <section
          className="section--tight"
          key={cat.category}
          style={{ borderTop: "1px solid var(--color-divider)" }}
        >
          <div className="container">
            <h2 className="display" style={{ fontSize: 22, marginBottom: 16 }}>{cat.category}</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {cat.books.map((book) => (
                <li key={book.title}>
                  <a
                    className="link-underline"
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {book.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section
        className="section--tight"
        style={{ borderTop: "1px solid var(--color-divider)" }}
      >
        <div className="container">
          <h2 className="display" style={{ fontSize: 22, marginBottom: 16 }}>Our Favorite Podcasts</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {podcasts.map((p) => (
              <li key={p.label}>
                <a
                  className="link-underline"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
