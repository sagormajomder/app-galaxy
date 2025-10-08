import { Link } from "react-router";

export default function LinkButton({
  to,
  styles = "",
  target = "_self",
  children,
}) {
  const className = `${styles} flex items-center gap-2 rounded-sm px-6 py-2.5`;
  return (
    <Link
      className={className}
      to={to}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
