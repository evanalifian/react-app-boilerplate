import React from "react";

export function Card({ children }) {
  return (
    <div className="border border-zinc-300 bg-zinc-50 p-4 rounded-lg transition-colors hover:border-zinc-400">
      {children}
    </div>
  );
}

export function CardTitle({ children }) {
  return <span className="text-sm font-medium">{children}</span>;
}

export function CardText({ children }) {
  return <p className="text-zinc-700">{children}</p>;
}
