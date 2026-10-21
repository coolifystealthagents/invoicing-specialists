import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Specialist support services',
  description: `Explore remote invoicing support roles shaped for ${site.audience}.`,
  alternates: { canonical: '/services' }
};

const fitChecks = [
  ['The work repeats', 'A stable queue, schedule, or checklist makes ownership and completion standards visible.'],
  ['Sources are approved', 'The specialist can work from named systems and records instead of reconstructing facts from memory.'],
  ['Decisions stay accountable', 'Pricing, tax, accounting treatment, approval, release, credits, and exceptions remain with authorized owners.'],
  ['Quality can be observed', 'Reviewers can inspect completeness, source links, timestamps, exception notes, and handoff status.']
];

const faqs = [
  ['Can one specialist cover several services?', 'Yes, when the responsibilities share systems, sources, schedules, and review points. Start with a coherent role instead of combining unrelated queues.'],
  ['Do specialists approve or issue invoices?', 'They can prepare and route work under your approved process. Approval, release authority, pricing, accounting judgment, tax decisions, credits, and write-offs stay with your authorized team.'],
  ['What should we document first?', 'Document the trigger, approved inputs, expected output, due date, reviewer, completion evidence, and exception path for one recurring queue.'],
  ['Can the role work inside our current tools?', 'The workflow can be shaped around approved accounting, billing, CRM, project, ticketing, and document systems. Your organization controls access and final records.']
];

export default function ServicesPage() {
  return <main>
    <header className="index-hero">
      <div><p className="eyebrow">Invoicing support services</p><h1>Build billing capacity around work your team can inspect.</h1><p>Choose a focused role, then define the sources, boundaries, review points, and exception paths that make the handoff reliable.</p><Link className="button primary" href="/contact-us">Discuss your workflow</Link></div>
      <div className="index-hero-image"><Image src="/thumbnails/october-12/purchase-order-match-exception-queue.webp" alt="Purchase order and invoice exception queue organized for finance review" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
    </header>

    <section className="content-wrap index-intro"><p className="eyebrow">Choose by operating need</p><div><h2>Each service creates a clear preparation lane.</h2><p>These roles support the recurring administrative work around invoice creation, evidence, account records, quality checks, schedules, and status. They are designed to reduce search and rework without transferring financial authority.</p></div></section>

    <section className="content-wrap content-grid service-index-grid">{site.services.map(service => <Link className="content-card" href={`/services/${service.slug}`} key={service.slug}><h2>{service.name}</h2><p>{service.short}</p><ul>{service.tasks.slice(0, 3).map(task => <li key={task}>{task}</li>)}</ul><span className="text-link">View role details <ArrowIcon /></span></Link>)}</section>

    <section className="section method service-choice"><div><p className="eyebrow">A practical fit test</p><h2>Delegate preparation, not accountability.</h2><p>A good remote role has stable inputs, observable outputs, a named reviewer, and a safe place for exceptions. If a task depends on unresolved commercial or accounting judgment, it should return to an authorized owner.</p><Link className="button secondary" href="/contact-us">Map a role with us</Link></div><div className="workflow-ledger">{fitChecks.map(([title, copy]) => <div key={title}><strong>{title}</strong><span>{copy}</span></div>)}</div></section>

    <section className="content-wrap"><div className="prose wide-prose"><h2>How a service becomes an operating role</h2><h3>Start with one representative queue</h3><p>Use real volumes, schedules, source systems, owners, and exception types without sharing sensitive records. The objective is to understand where work begins, what complete means, and who decides when information is uncertain.</p><h3>Write the handoff before adding access</h3><p>Define accepted sources, required fields, naming rules, due dates, review evidence, permission boundaries, and escalation channels. Access should follow the documented role and remain controlled by your organization.</p><h3>Launch with reviewable work</h3><p>Begin with approved records and a manageable queue. Sample prepared work, record exceptions, review recurring gaps, and expand only when the acceptance standard is stable.</p><h3>Measure the workflow, not activity theater</h3><p>Useful measures include queue age, missing inputs, first-pass completeness, exception categories, reviewer turnaround, delivery evidence, and ownership gaps. These signals help improve the process without inventing unsupported performance promises.</p></div></section>

    <section className="content-wrap faq service-faq"><p className="eyebrow">Service questions</p><h2>What finance leaders usually ask</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
  </main>;
}
