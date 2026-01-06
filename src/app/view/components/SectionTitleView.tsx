type Props = {
  id?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitleView({ id, title, subtitle }: Props) {
  return (
    <header className="section-header">
      <h2 id={id}>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
