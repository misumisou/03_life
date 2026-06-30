import React from "react";

const links = [
  { name: "GitHub", url: "https://github.com", icon: "🐙" },
  { name: "Claude", url: "https://claude.ai/new", icon: "📝" },
  { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "💬" },
  { name: "MDN", url: "https://developer.mozilla.org", icon: "📚" },
];

export default function LinksWidget() {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded px-2 py-1 transition"
        >
          <span>{link.icon}</span>
          <span className="text-sm">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
