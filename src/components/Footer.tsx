import { Link } from "react-router-dom";
import { site, footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="footer-links">
          {footerLinks.map((l) =>
            l.href ? (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
            ) : (
              <Link key={l.label} to={l.to!}>{l.label}</Link>
            )
          )}
        </div>
        <div className="socials">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
        <div className="copyright">
          Copyright © {new Date().getFullYear()} · {site.name.toUpperCase()} · {site.address}
        </div>
      </div>
    </footer>
  );
}
