import React from "react";
import { Link } from "react-router";

export default function LinkButton({ to, styles, children }) {
  const className = `${styles} bg-gradient-primary flex items-center gap-2 rounded-sm px-4 py-3`;
  return (
    <Link
      className={className}
      to={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
