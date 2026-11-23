import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, BoundaryIcon, CheckIcon, EvidenceIcon, HandoffIcon, SparkIcon } from './Icons';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;
function ServiceCards() { return <div className="service-grid">{site.services.map(service => <Link className="service-card reveal" href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Explore the role <ArrowIcon /></span></Link>)}</div>; }
function Principles() { return <div className="principles">{site.principles.map(item => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div>; }
function Latest() { return <div className="article-grid">{blogPosts.slice(0, 3).map(post => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide <ArrowIcon /></span></Link>)}</div>; }

const methodSteps = [
  { Icon: BoundaryIcon, title: 'Define the boundary.', copy: 'Separate preparation and coordination from financial judgment.' },
  { Icon: HandoffIcon, title: 'Document the handoff.', copy: 'Set inputs, output format, review points, and exception rules.' },
  { Icon: EvidenceIcon, title: 'Improve with evidence.', copy: 'Review a focused sample and update the process when patterns emerge.' },
];

export function HomePage() {
  return <main className={`home design-${site.design}`}>
    <section className="hero"><div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1>{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Book a free consultation</CTA><Link className="quiet-link" href="/services">See specialist roles</Link></div><Principles /></div><div className="hero-visual"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 54vw" /><div className="hero-label"><SparkIcon /><span>{site.manifesto}</span></div></div></section>
    <section className="section intro" aria-labelledby="billing-capacity-title"><div className="intro-label"><p className="eyebrow">Specialist support shaped around invoice work</p></div><div className="intro-content"><div className="intro-copy"><h2 id="billing-capacity-title">Build billing capacity without lowering the bar.</h2><p>{site.manifesto} Your specialist works from approved records, documented priorities, clear decision rights, and a practical review rhythm.</p></div><figure className="home-support-image"><Image src="/editorial/photography/homepage-billing-capacity.jpg" alt="A finance team works together at laptops in a bright office" fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 42vw, 34vw" /><figcaption>Capacity that stays visible, reviewable, and accountable.</figcaption></figure></div></section>
    <section className="section services"><div className="section-heading"><p className="eyebrow">Roles that fit the work</p><h2>Choose support your finance team can inspect.</h2></div><ServiceCards /></section>
    <section className="section method"><div className="method-copy"><p className="eyebrow">A useful working model</p><h2>Define. Delegate. Improve.</h2><p>Start with recurring work that has an owner, a standard, and a clear escalation path. Define the approved inputs and decision boundary, delegate a documented preparation handoff, then improve it through focused review of completed work and recurring exceptions.</p><ol className="method-steps">{methodSteps.map(({ Icon, title, copy }) => <li key={title}><span className="method-step-icon"><Icon /></span><span><strong>{title}</strong> {copy}</span></li>)}</ol><CTA id="cta-home-method-consultation">Plan a free consultation</CTA></div><figure className="method-photo"><Image src="/editorial/photography/workflow-handoff.jpg" alt="Two colleagues discuss a documented workflow handoff at a table" fill sizes="(max-width: 900px) 90vw, 42vw" /></figure></section>
    <section className="section journal"><div className="section-heading"><p className="eyebrow">Field notes</p><h2>Practical guidance for controlled delegation.</h2></div><Latest /></section>
    <section className="closing" aria-labelledby="home-role-title"><div className="closing-copy"><p className="eyebrow">Make room for accountable finance work</p><h2 id="home-role-title">Map your first invoicing support role.</h2><p>A focused conversation can turn scattered preparation into a clear, reviewable role brief.</p><CTA id="cta-home-closing-schedulecall">Schedule a free call</CTA></div><figure className="closing-visual"><Image src="/editorial/services/supporting-documentation.jpg" alt="Invoice workflow records arranged for a clear specialist handoff" fill sizes="(max-width: 900px) 100vw, 38vw" /></figure></section>
  </main>;
}
