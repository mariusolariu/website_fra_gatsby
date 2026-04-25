import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Sari la conținut
      </a>
      {children}
    </>
  );
}
