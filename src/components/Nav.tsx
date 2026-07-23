import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, nav, type NavItem } from "../data/content";

function Chevron() {
  return (
    <svg className="chev" width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

interface MenuItemProps {
  item: NavItem;
  openId: string | null;
  setOpenId: React.Dispatch<React.SetStateAction<string | null>>;
  closeAll: () => void;
}

// One top-level menu item — a dropdown group or a single link.
function MenuItem({ item, openId, setOpenId, closeAll }: MenuItemProps) {
  const isOpen = openId === item.label;
  if (!item.children) {
    return (
      <li className="menu__item">
        {item.href ? (
          <a className="menu__link" href={item.href} onClick={closeAll}>{item.label}</a>
        ) : (
          <NavLink className="menu__link" to={item.to!} onClick={closeAll}>{item.label}</NavLink>
        )}
      </li>
    );
  }
  return (
    <li
      className={"menu__item" + (isOpen ? " menu__item--open" : "")}
      onMouseEnter={() => setOpenId(item.label)}
      onMouseLeave={() => setOpenId((id) => (id === item.label ? null : id))}
    >
      <button
        className="menu__link"
        aria-expanded={isOpen}
        onClick={() => setOpenId(isOpen ? null : item.label)}
      >
        {item.label}
        <Chevron />
      </button>
      <div className="dropdown">
        {item.children.map((c) =>
          c.href ? (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" onClick={closeAll}>
              {c.label}<span className="ext">↗</span>
            </a>
          ) : (
            <Link key={c.label} to={c.to!} onClick={closeAll}>{c.label}</Link>
          )
        )}
      </div>
    </li>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  // Close everything on route change.
  useEffect(() => { setMobileOpen(false); setOpenId(null); }, [location.pathname]);

  // Close on outside click / Escape.
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenId(null); setMobileOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") { setOpenId(null); setMobileOpen(false); } }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, []);

  const closeAll = () => { setMobileOpen(false); setOpenId(null); };

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <Link className="brand" to="/" onClick={closeAll}>
          <img src={site.logo} alt="" />
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round">
            {mobileOpen
              ? <><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>

        <nav className={"menu" + (mobileOpen ? " menu--open" : "")} aria-label="Primary">
          <ul style={{ display: "contents", listStyle: "none", margin: 0, padding: 0 }}>
            {nav.map((item) => (
              <MenuItem key={item.label} item={item} openId={openId} setOpenId={setOpenId} closeAll={closeAll} />
            ))}
          </ul>
          <a className="btn btn-primary nav-cta" href={site.mapUrl} target="_blank" rel="noopener noreferrer">
            Plan a Visit
          </a>
        </nav>
      </div>
    </header>
  );
}
