'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type SidebarItem = { id: string; label: string };

export function ArticleSidebar({ items, kind, relatedHref, relatedLabel }: { items: SidebarItem[]; kind: string; relatedHref: string; relatedLabel: string }) {
  const [active, setActive] = useState(items[0]?.id || '');
  useEffect(() => {
    const nodes = items.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-110px 0px -65% 0px' });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);
  return <aside className="article-sidebar" aria-label={`${kind} guide`}>
    <div className="article-sidebar-inner">
      <p className="eyebrow">On this page</p>
      <nav aria-label="Table of contents">{items.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}</nav>
      <div className="sidebar-support"><h3>Use this with a real workflow</h3><p>Compare the guidance with your systems, source records, owners, review points, and exception rules.</p><Link href={relatedHref}>{relatedLabel}</Link><Link className="button" href="/contact-us">Discuss your workflow</Link></div>
    </div>
  </aside>;
}
