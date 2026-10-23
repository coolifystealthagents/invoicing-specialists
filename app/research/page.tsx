import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
const displayDate = (value: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));

export const metadata: Metadata = { title: 'Research', description: 'Source-led operational research for leaders designing specialist invoicing support roles.', alternates: { canonical: '/research' } };

export default function ResearchPage() {
  return <main>
    <header className="index-hero research-index-hero">
      <div><p className="eyebrow">Research library</p><h1>Evidence for better billing controls.</h1><p>Source-led briefs that translate public guidance into testable invoice administration methods, measures, and role boundaries.</p></div>
      <div className="index-hero-image"><Image src="/thumbnails/october-12/invoice-delivery-evidence-methods.webp" alt="Invoice delivery evidence methods compared in an operational research brief" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
    </header>
    <section className="content-wrap index-intro"><p className="eyebrow">Read methods, findings, and limits</p><div><h2>Use evidence to improve the workflow, not to overstate certainty.</h2><p>The briefs explain what was examined, how a control or measure can be tested, what the findings may support, and where accountable judgment remains necessary.</p></div></section>
    <section className="content-wrap content-grid research-index-grid">{researchPosts.map(post => <Link className="content-card" href={`/research/${post.slug}`} key={post.slug}>{post.thumbnail && <Image className="content-thumbnail" src={post.thumbnail} alt={`${post.title} research thumbnail`} width={640} height={360} sizes="(max-width: 700px) 100vw, 33vw" />}<span className="pill">{post.cluster}</span><h2>{post.title}</h2><p>{post.summary}</p><p className="meta"><time dateTime={post.publishedAt}>{`Published ${displayDate(post.publishedAt)}`}</time></p><span className="text-link">Review the brief</span></Link>)}</section>
  </main>;
}
