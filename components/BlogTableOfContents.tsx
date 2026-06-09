"use client";

import React from 'react';

interface Section {
  title: string;
}

interface BlogTableOfContentsProps {
  sections: Section[];
}

export function BlogTableOfContents({ sections }: BlogTableOfContentsProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex flex-col gap-3.5 font-sans">
      {sections.map((sec, sIdx) => (
        <a 
          key={sIdx}
          href={`#section-${sIdx}`}
          className="flex items-start gap-2.5 text-xs font-bold text-slate-500 hover:text-[#0052b4] transition-colors leading-relaxed group"
          onClick={(e) => handleScroll(e, `section-${sIdx}`)}
        >
          <span className="font-mono text-slate-300 group-hover:text-[#0052b4] transition-colors">{sIdx + 1}.</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">{sec.title}</span>
        </a>
      ))}
      <a 
        href="#kontakt"
        className="flex items-start gap-2.5 text-xs font-bold text-slate-500 hover:text-[#0052b4] transition-colors leading-relaxed group border-t border-slate-100 pt-3.5 mt-1"
        onClick={(e) => handleScroll(e, "kontakt")}
      >
        <span className="font-mono text-slate-300 group-hover:text-[#0052b4] transition-colors">{sections.length + 1}.</span>
        <span className="group-hover:translate-x-1 transition-transform duration-200 text-[#003067]">Ihr Vorteil mit Simba</span>
      </a>
    </nav>
  );
}
