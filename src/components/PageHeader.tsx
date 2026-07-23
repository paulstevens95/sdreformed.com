interface PageHeaderProps {
  kicker?: string;
  title: string;
}

export default function PageHeader({ kicker, title }: PageHeaderProps) {
  return (
    <header className="page-head">
      <div className="container">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1 className="page-head__title display">{title}</h1>
      </div>
    </header>
  );
}
