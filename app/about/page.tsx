import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `How ${site.name} approaches specialist remote invoicing support.`,
  alternates: { canonical: '/about' }
};

const operatingPrinciples = [
  ['Workflow before job title', 'We begin with the actual queue, source records, systems, review points, and exceptions before defining the role.'],
  ['Evidence before assumption', 'Prepared work should show its source, status, owner, and unresolved questions so reviewers can inspect the handoff.'],
  ['Boundaries before access', 'Permissions and responsibilities should follow the documented role, with financial authority retained by your organization.'],
  ['Measured launch before scale', 'A controlled starting queue creates the evidence needed to improve instructions, quality checks, and workload design.']
];

export default function AboutPage() {
  return <main>
    <header className="index-hero">
      <div><p className="eyebrow">About {site.name}</p><h1>Better invoice delegation starts with a better role.</h1><p>We help {site.audience} shape focused remote support around approved sources, useful boundaries, and reviewable outputs.</p><Link id="cta-about-story-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link></div>
      <div className="index-hero-image"><Image src="/thumbnails/october-12/invoice-approval-custody-log.webp" alt="Invoice approval custody log showing accountable handoffs and review evidence" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
    </header>

    <section className="content-wrap index-intro"><p className="eyebrow">Why this specialist focus exists</p><div><h2>Invoice administration is operational work with financial consequences.</h2><p>Generic task lists miss the source trail, customer requirements, approval boundaries, and timing pressure inside billing. Invoicing Specialists focuses on the preparation layer so organizations can add capacity without blurring who owns financial decisions.</p></div></section>

    <section className="section method"><div><p className="eyebrow">Our operating view</p><h2>Make the work easier to prepare and easier to review.</h2><p>A specialist should not need to guess which record is authoritative or who can resolve an exception. The role becomes dependable when accepted sources, outputs, evidence, ownership, and escalation are explicit.</p></div><div className="workflow-ledger">{operatingPrinciples.map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div></section>

    <section className="content-wrap about-depth"><div className="prose"><h2>What the specialist model is for</h2><p>The model supports recurring preparation, documentation, coordination, status, and defined quality checks. It is useful when capable finance leaders are spending too much time locating records, assembling routine packets, maintaining queues, or following up on missing inputs.</p><h2>What it does not replace</h2><p>It does not replace accountable finance leadership, licensed advice, internal controls, customer commitments, or security governance. Your authorized personnel retain pricing, terms, accounting and tax judgment, approval, release, credits, write-offs, payment handling, policy, and final records.</p><h2>How managed support fits</h2><p>Invoicing Specialists is powered by StealthAgents. The parent organization provides recruiting and managed-support context while this subsidiary concentrates on invoicing operations. Your company still defines access, systems, process authority, data handling, and acceptance standards.</p><h2>What a useful first conversation covers</h2><p>Bring one representative workflow without confidential records. We will discuss volumes, triggers, systems, source owners, expected outputs, review timing, common exceptions, and the decisions that must stay with your team.</p></div><aside className="about-aside"><h2>A role brief should name</h2><ul><li>The queue trigger and due date</li><li>Approved systems and source records</li><li>Required output and completion evidence</li><li>The reviewer and decision owner</li><li>Access and data boundaries</li><li>Common exceptions and escalation route</li></ul><Link className="button secondary" href="/services">Explore the services</Link></aside></section>

    <section className="service-final-cta"><p className="eyebrow">Start with a real workflow</p><h2>Turn one recurring bottleneck into a clear support brief.</h2><p>We can map the preparation work, boundaries, review points, and candidate profile with you.</p><Link className="button primary" href="/contact-us">Discuss your invoicing workflow</Link></section>
  </main>;
}
