import React from 'react';

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: 1000, margin: '1.2em auto', background: "white", overflow: 'hidden', fontSize: 18 + "px" }}>
      {children}
    </ div>
  );
}