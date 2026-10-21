import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { site } from '@/lib/site';
import proof from '@/content/stealth-agents-proof.json';
import './contact.css';

export const metadata: Metadata = { title: 'Contact Us | Invoicing Staffing Consultation', description: 'Talk with Invoicing Specialists about controlled invoice preparation, quality review, and billing operations support.', alternates: { canonical: '/contact-us' } };
const steps = [
  ['Workflow discovery', 'Map source records, billing schedules, supporting evidence, reviewers, delivery, reporting, and exception paths.'],
  ['Role design', 'Define repeatable responsibilities with clear inputs, outputs, access, review gates, and escalation points.'],
  ['Candidate matching', 'Review remote professionals whose strengths fit your systems, billing cadence, documentation standards, and customer coordination.'],
  ['Controlled launch', 'Begin with approved queues, measured handoffs, sampled quality, and accountable finance leadership.']
];
const faqs = [
  ['What invoicing work can a remote specialist support?', 'A specialist can prepare invoice drafts from approved sources, maintain billing schedules, organize supporting records, perform defined checks, update approved customer fields, and prepare status reports.'],
  ['What stays with our finance team?', 'Pricing, terms, accounting and tax judgment, approval, release, credits, write-offs, payment handling, contracts, and policy exceptions stay with authorized owners.'],
  ['Can support work in our existing systems?', 'The role can be shaped around approved billing, accounting, CRM, project, ticketing, and document systems. Your organization controls accounts, permissions, security, retention, and final records.'],
  ['How should we prepare?', 'Bring a representative workflow without sensitive data, plus volumes, schedules, owners, exception types, systems, and the service standard you need.']
];

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us`, description: 'Invoicing staffing consultation.' };
  return <main className="contact-page">
    <section className="contact-first-fold">
      <div className="contact-intro">
        <p className="eyebrow">Invoicing staffing consultation</p>
        <h1>Turn approved records into review-ready invoices.</h1>
        <p>Map the recurring preparation, documentation, quality checks, and status work that slows your finance team. Keep pricing, judgment, approval, and release with accountable owners.</p>
        <div className="contact-visual"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div>
        <div className="review-heading"><strong>StealthAgents reviews</strong><span>First-party testimonials published by Stealth Agents</span></div>
        <div className="review-marquee" aria-label="StealthAgents reviews"><div className="review-track">{[...proof.reviews, ...proof.reviews].map((review, index) => <article className="review-card" key={`${review.name}-${index}`} aria-hidden={index >= proof.reviews.length || undefined}><span className="stars" aria-label="5 out of 5 stars">★★★★★</span><blockquote>“{review.quote}”</blockquote><cite>{review.name}</cite></article>)}</div></div>
      </div>
      <div className="contact-form-card"><p className="eyebrow">Start with your workflow</p><h2>Book a free consultation</h2><p>Share enough to prepare a useful conversation. Do not include credentials, customer records, invoice details, or payment data.</p><LeadForm source="contact-page-consultation" /></div>
    </section>
    <section className="parent-proof"><div className="parent-proof-image"><Image src="/brand/stealth-agents-team-bacolod.png" alt="Stealth Agents operations team in Bacolod" fill sizes="(max-width: 900px) 100vw, 52vw" /></div><div className="parent-proof-copy"><p className="eyebrow">Powered by StealthAgents</p><h2>Managed support behind the specialist role.</h2><p>Stealth Agents recruits and supports remote professionals around documented workflows, clear ownership, accountable handoffs, and practical quality review. Invoicing Specialists brings that managed-service discipline to billing operations while your finance leaders retain authority.</p><div className="official-plate"><Image src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width={149} height={50} /><strong>Official team, Bacolod</strong></div><p className="proof-note">The reviews shown above are first-party testimonials published by Stealth Agents. This site has not independently verified the reviewers or outcomes.</p></div></section>
    <section className="contact-section"><div className="contact-container"><p className="eyebrow">A controlled path forward</p><h2>What happens after you reach out</h2><div className="step-grid">{steps.map(([title, copy]) => <article key={title} className="step-card"><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="contact-section boundaries"><div className="contact-container narrow"><p className="eyebrow">Accountability stays clear</p><h2>Preparation support is not financial authority.</h2><p>Remote specialists can prepare drafts, maintain approved schedules and account fields, organize evidence, perform defined checks, record status, and flag exceptions. They do not set pricing or terms, make accounting or tax judgments, approve or issue invoices without authorization, apply credits or write-offs, move money, alter contracts, or override controls.</p><p>Your finance, legal, compliance, security, sales, and executive personnel retain responsibility for pricing, terms, policy, tax treatment, approvals, customer commitments, privacy, security, regulated work, and final financial records.</p></div></section>
    <section className="contact-section"><div className="contact-container"><p className="eyebrow">Common starting points</p><h2>Bring one queue that needs a cleaner handoff.</h2><div className="path-grid">{site.services.slice(0, 4).map(service => <Link href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p></Link>)}</div><Link className="text-link all-services" href="/services">View all invoicing services</Link></div></section>
    <section className="contact-section faq"><div className="contact-container narrow"><p className="eyebrow">Invoicing staffing questions</p><h2>Frequently asked questions</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
