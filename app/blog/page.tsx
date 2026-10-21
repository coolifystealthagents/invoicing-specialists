import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = { title: 'Blog', description: 'Practical guides for designing, delegating, and reviewing specialist invoicing support.', alternates: { canonical: '/blog' } };

export default function BlogPage() {
  return <main>
    <header className="index-hero">
      <div><p className="eyebrow">Practical field notes</p><h1>Clearer invoice operations.</h1><p>Guides for finance leaders who want to delegate recurring preparation without losing source evidence, approval control, or a visible exception path.</p></div>
      <div className="index-hero-image"><Image src="/thumbnails/october-12/credit-memo-request-routing.webp" alt="Credit memo request routed through accountable invoice operations review" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
    </header>
    <section className="content-wrap index-intro"><p className="eyebrow">Use the library</p><div><h2>Turn recurring billing friction into a defined workflow.</h2><p>Each guide examines a practical control, queue, handoff, or exception. Use the articles to identify what a specialist can prepare, what evidence a reviewer needs, and what must remain a human decision.</p></div></section>
    <section className="content-wrap"><div className="principles">{['All', ...new Set(blogPosts.map(p => p.category))].map(category => <span className="pill" key={category}>{category} ({category === 'All' ? blogPosts.length : blogPosts.filter(p => p.category === category).length})</span>)}</div><div className="article-grid">{blogPosts.map(post => <Link className="article-card" href={`/blog/${post.slug}`} key={post.slug}>{post.thumbnail && <Image className="content-thumbnail" src={post.thumbnail} alt={`${post.title} editorial thumbnail`} width={640} height={360} sizes="(max-width: 700px) 100vw, 33vw" />}<span className="pill">{post.category}</span><h2>{post.title}</h2><p>{post.description}</p><p className="meta">Published {post.publishedAt}</p><span className="text-link">Read article</span></Link>)}</div></section>
  </main>;
}
