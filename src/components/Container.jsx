import React from "react";

export default function Container({ style = "", children }) {
  const className = `${style} mx-auto max-w-7xl px-5`;
  return <div className={className}>{children}</div>;
}
