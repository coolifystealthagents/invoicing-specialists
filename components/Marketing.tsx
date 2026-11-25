import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { AccountableReviewIcon, ArrowIcon, BoundaryIcon, CheckIcon, EvidenceIcon, HandoffIcon, PreparationIcon, SourceRecordsIcon, SparkIcon } from './Icons';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;
const serviceCardDetails: Record<string, string> = {
  'invoice-draft-preparation': 'Deliverable: a source-linked draft with its approved billing trigger, period, and required PO.',
  'billing-schedule-support': 'Deliverable: a dated queue of recurring or milestone triggers, evidence owners, and open conflicts.',
  'supporting-documentation': 'Deliverable: an indexed packet mapping required POs, time records, or delivery evidence to invoice lines.',
  'invoice-quality-review': 'Deliverable: a completed pre-approval checklist with source mismatches and duplicate candidates routed.',
  'customer-billing-records': 'Deliverable: an authorized billing-field update with its source, approval, and effective date recorded.',
  'billing-status-reporting': 'Deliverable: a dated view of invoice stage, owner, aging, exceptions, and recorded delivery evidence.',
};
const homeSupportSteps = [
  { Icon: SourceRecordsIcon, title: 'Start with approved records', copy: 'Use current order terms, billing schedules, confirmed usage or milestone evidence, and customer instructions.' },
  { Icon: PreparationIcon, title: 'Prepare the draft', copy: 'Populate the approved template and keep material invoice fields tied to their source.' },
  { Icon: EvidenceIcon, title: 'Organize support and flag exceptions', copy: 'Link required POs, time records, or delivery proof; route missing or conflicting inputs to their named owner.' },
  { Icon: AccountableReviewIcon, title: 'Hand off to finance', copy: 'Send the draft, support packet, and exception notes to finance for review, approval, and release by authorized people.' },
];
const homeStartingPoints = [
  { href: '/services/invoice-draft-preparation', cue: 'Draft queue', title: 'A backlog of invoice drafts', copy: 'Start with approved order terms, customer instructions, and usage or milestone records that need to become review-ready drafts.', service: 'Invoice draft preparation' },
  { href: '/services/billing-schedule-support', cue: 'Recurring dates', title: 'Billing dates are hard to track', copy: 'Make recurring cycles, milestone triggers, due dates, evidence owners, and open schedule conflicts visible in one queue.', service: 'Billing schedule support' },
  { href: '/services/supporting-documentation', cue: 'Evidence packet', title: 'Supporting documents are missing', copy: 'Organize required POs, time records, delivery proof, and milestone evidence beside the invoice items they support.', service: 'Supporting documentation' },
];
function ServiceCards() { return <div className="service-grid">{site.services.map(service => <Link className="service-card reveal" href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p><p className="service-card-detail">{serviceCardDetails[service.slug]}</p><span className="text-link">Explore the role <ArrowIcon /></span></Link>)}</div>; }
function Principles() { return <div className="principles">{site.principles.map(item => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div>; }
function Latest() { return <div className="article-grid">{blogPosts.slice(0, 3).map(post => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide <ArrowIcon /></span></Link>)}</div>; }

const methodSteps = [
  { Icon: BoundaryIcon, title: 'Define the boundary.', copy: 'Separate preparation and coordination from financial judgment.' },
  { Icon: HandoffIcon, title: 'Document the handoff.', copy: 'Set inputs, output format, review points, and exception rules.' },
  { Icon: EvidenceIcon, title: 'Improve with evidence.', copy: 'Review a focused sample and update the process when patterns emerge.' },
];

export function HomePage() {
  return <main className={`home design-${site.design}`}>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1>{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Book a free consultation</CTA><Link className="quiet-link" href="/services">See specialist roles</Link></div><Principles /></div><div className="hero-visual"><Image src={site.heroImage} alt={site.heroAlt} fill preload sizes="(max-width: 900px) 100vw, min(44vw, 760px)" /><div className="hero-label"><SparkIcon /><span>{site.manifesto}</span></div></div></section>
    <section className="section intro" aria-labelledby="billing-capacity-title"><div className="intro-label"><p className="eyebrow">Specialist support shaped around invoice work</p></div><div className="intro-content"><figure className="home-support-image"><Image src="/editorial/home/billing-capacity.webp" alt="Two finance colleagues review billing documents together in a modern office" fill sizes="(max-width: 600px) 88vw, 560px" /><figcaption>Capacity that stays visible, reviewable, and accountable.</figcaption></figure><div className="intro-copy"><h2 id="billing-capacity-title">Build billing capacity without lowering the bar.</h2><p>{site.manifesto} Your specialist works from approved records, documented priorities, clear decision rights, and a practical review rhythm.</p></div></div></section>
    <section className="section services"><div className="section-heading"><p className="eyebrow">Roles that fit the work</p><h2>Choose support your finance team can inspect.</h2></div><ServiceCards /></section>
    <section className="section invoice-support-flow" aria-labelledby="invoice-support-flow-title"><div className="section-heading"><p className="eyebrow">From source to finance handoff</p><h2 id="invoice-support-flow-title">How invoice support works</h2><p>Preparation follows approved records and a documented path. Missing or conflicting inputs go to their named owner; finance retains approval and release.</p></div><ol className="invoice-support-steps">{homeSupportSteps.map(({ Icon, title, copy }) => <li key={title}><span className="invoice-support-icon"><Icon /></span><strong>{title}</strong><p>{copy}</p></li>)}</ol></section>
    <section className="section invoice-starting-points" aria-labelledby="invoice-starting-points-title"><div className="section-heading"><p className="eyebrow">Where to start</p><h2 id="invoice-starting-points-title">Choose the queue that needs a clearer handoff.</h2></div><div className="invoice-starting-grid">{homeStartingPoints.map(item => <Link className="invoice-starting-card" href={item.href} key={item.href}><p className="eyebrow">{item.cue}</p><h3>{item.title}</h3><p>{item.copy}</p><span className="text-link">{item.service} <ArrowIcon /></span></Link>)}</div></section>
    <section className="section method"><div className="method-copy"><p className="eyebrow">A useful working model</p><h2>Define. Delegate. Improve.</h2><p>Start with recurring work that has an owner, a standard, and a clear escalation path. Then create a small review loop that makes the handoff stronger over time.</p><ol className="method-steps">{methodSteps.map(({ Icon, title, copy }) => <li key={title}><span className="method-step-icon"><Icon /></span><span><strong>{title}</strong> {copy}</span></li>)}</ol><CTA id="cta-home-method-consultation">Plan a free consultation</CTA></div><figure className="method-visual"><Image src="/editorial/home/delegation-workflow.webp" alt="Colleagues coordinating a business workflow over documents and a laptop" fill sizes="(max-width: 900px) 100vw, 43vw" /><figcaption>Clear roles, shared records, and an accountable review.</figcaption></figure></section>
    <section className="section journal"><div className="section-heading"><p className="eyebrow">Field notes</p><h2>Practical guidance for controlled delegation.</h2></div><Latest /></section>
    <section className="closing" aria-labelledby="home-role-title"><div className="closing-copy"><p className="eyebrow">Make room for accountable finance work</p><h2 id="home-role-title">Map your first invoicing support role.</h2><p>A focused conversation can turn scattered preparation into a clear, reviewable role brief.</p><CTA id="cta-home-closing-schedulecall">Schedule a free call</CTA></div><figure className="closing-visual"><Image src="/editorial/home/invoicing-support-planning.webp" alt="Finance colleagues discuss a report and plan next steps at an office table" fill sizes="(max-width: 900px) 100vw, 38vw" /></figure></section>
  </main>;
}
