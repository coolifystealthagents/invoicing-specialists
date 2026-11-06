import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import {
  AccountableReviewIcon,
  ArrowIcon,
  PreparationIcon,
  SourceRecordsIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Specialist support services",
  description: `Explore remote invoicing support roles shaped for ${site.audience}.`,
  alternates: { canonical: "/services" },
};

const fitChecks = [
  [
    "The work repeats",
    "A stable queue, schedule, or checklist makes ownership and completion standards visible.",
  ],
  [
    "Sources are approved",
    "The specialist works from named systems and records instead of reconstructing facts from memory.",
  ],
  [
    "Decisions stay accountable",
    "Pricing, tax, accounting treatment, approval, release, credits, and exceptions remain with authorized owners.",
  ],
  [
    "Quality can be observed",
    "Reviewers can inspect completeness, source links, timestamps, exception notes, and handoff status.",
  ],
];

const serviceContext: Record<string, { bestFor: string; boundary: string }> = {
  "invoice-draft-preparation": {
    bestFor: "Recurring, milestone, usage, or project billing",
    boundary: "Preparation ends before invoice approval or release.",
  },
  "billing-schedule-support": {
    bestFor: "Teams coordinating many billing dates and triggers",
    boundary: "Schedule changes require an authorized source.",
  },
  "supporting-documentation": {
    bestFor: "Invoices that need evidence or customer attachments",
    boundary: "Conflicting or missing records return to an owner.",
  },
  "invoice-quality-review": {
    bestFor: "Teams that need a consistent preapproval check",
    boundary: "The specialist flags exceptions but does not approve them.",
  },
  "customer-billing-records": {
    bestFor: "Customer master data and delivery instruction upkeep",
    boundary: "Only verified, authorized changes are prepared.",
  },
  "billing-status-reporting": {
    bestFor: "Leaders who need a reliable queue and exception view",
    boundary: "Reporting describes the record and does not decide policy.",
  },
};

const faqs = [
  [
    "Can one specialist cover several services?",
    "Yes, when the responsibilities share systems, sources, schedules, and review points. Start with a coherent role instead of combining unrelated queues.",
  ],
  [
    "Do specialists approve or issue invoices?",
    "They can prepare and route work under your approved process. Approval, release authority, pricing, accounting judgment, tax decisions, credits, and write-offs stay with your authorized team.",
  ],
  [
    "What should we document first?",
    "Document the trigger, approved inputs, expected output, due date, reviewer, completion evidence, and exception path for one recurring queue.",
  ],
  [
    "Can the role work inside our current tools?",
    "The workflow can be shaped around approved accounting, billing, CRM, project, ticketing, and document systems. Your organization controls access and final records.",
  ],
];

export default function ServicesPage() {
  return (
    <main className="services-index-page">
      <header className="services-index-hero">
        <div className="services-index-copy">
          <p className="eyebrow">Invoicing support services</p>
          <h1>A service system for reviewable invoice work.</h1>
          <p>
            Build one focused preparation lane around approved inputs, a visible
            output, and a named finance reviewer. Add adjacent lanes only when
            the first handoff is stable.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact-us">
              Discuss your workflow
            </Link>
            <a className="quiet-link" href="#service-collection">
              Compare the services
            </a>
          </div>
        </div>
        <figure className="services-index-visual">
          <Image
            src="/editorial/services-invoicing-workflow-hero.jpg"
            alt="Approved invoice source records, a review checklist, and an organized billing packet arranged as a controlled workflow"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <figcaption>
            Approved records move through a defined preparation lane to
            accountable review.
          </figcaption>
        </figure>
      </header>

      <section
        className="service-operating-model"
        aria-labelledby="operating-model-title"
      >
        <h2 id="operating-model-title" className="sr-only">
          Invoicing support operating model
        </h2>
        <article>
          <SourceRecordsIcon />
          <div>
            <span>Input</span>
            <strong>Approved source records</strong>
            <p>
              Contracts, schedules, usage, customer instructions, and supporting
              evidence.
            </p>
          </div>
        </article>
        <article>
          <PreparationIcon />
          <div>
            <span>Preparation</span>
            <strong>A defined specialist lane</strong>
            <p>
              Drafting, organizing, checking, maintaining, or reporting under a
              written rule.
            </p>
          </div>
        </article>
        <article>
          <AccountableReviewIcon />
          <div>
            <span>Decision</span>
            <strong>An accountable finance owner</strong>
            <p>
              Review, approval, release, policy, and exceptions stay with
              authorized people.
            </p>
          </div>
        </article>
      </section>

      <section className="content-wrap index-intro">
        <p className="eyebrow">Choose by operating need</p>
        <div>
          <h2>Six connected services, each with a different job.</h2>
          <p>
            Use the collection to separate invoice creation from schedule
            control, evidence handling, quality checks, customer record
            maintenance, and status reporting. Every route explains its inputs,
            workflow, outputs, boundaries, quality checks, starting scenarios,
            and next step.
          </p>
        </div>
      </section>

      <section
        id="service-collection"
        className="content-wrap service-collection"
        aria-labelledby="service-collection-title"
      >
        <div className="service-collection-heading">
          <p className="eyebrow">Complete service collection</p>
          <h2 id="service-collection-title">
            Select the lane that matches the bottleneck.
          </h2>
        </div>
        <div className="service-collection-list">
          {site.services.map((service) => {
            const context = serviceContext[service.slug];
            return (
              <article className="service-collection-card" key={service.slug}>
                <div>
                  <p className="service-fit">Best for</p>
                  <p>{context.bestFor}</p>
                </div>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                  <ul>
                    {service.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-boundary">
                  <strong>Decision boundary</strong>
                  <p>{context.boundary}</p>
                  <Link
                    className="text-link"
                    href={`/services/${service.slug}`}
                  >
                    Review this service <ArrowIcon />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section method service-choice">
        <div>
          <p className="eyebrow">A practical fit test</p>
          <h2>Delegate preparation, not accountability.</h2>
          <p>
            A good remote role has stable inputs, observable outputs, a named
            reviewer, and a safe place for exceptions. If a task depends on
            unresolved commercial or accounting judgment, it should return to an
            authorized owner.
          </p>
          <Link className="button secondary" href="/contact-us">
            Map a role with us
          </Link>
        </div>
        <div className="workflow-ledger">
          {fitChecks.map(([title, copy]) => (
            <div key={title}>
              <strong>{title}</strong>
              <span>{copy}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-wrap">
        <div className="prose wide-prose">
          <h2>How a service becomes an operating role</h2>
          <h3>Start with one representative queue</h3>
          <p>
            Use real volumes, schedules, source systems, owners, and exception
            types without sharing sensitive records. The objective is to
            understand where work begins, what complete means, and who decides
            when information is uncertain.
          </p>
          <h3>Write the handoff before adding access</h3>
          <p>
            Define accepted sources, required fields, naming rules, due dates,
            review evidence, permission boundaries, and escalation channels.
            Access should follow the documented role and remain controlled by
            your organization.
          </p>
          <h3>Launch with reviewable work</h3>
          <p>
            Begin with approved records and a manageable queue. Sample prepared
            work, record exceptions, review recurring gaps, and expand only when
            the acceptance standard is stable.
          </p>
          <h3>Measure the workflow, not activity theater</h3>
          <p>
            Useful measures include queue age, missing inputs, first-pass
            completeness, exception categories, reviewer turnaround, delivery
            evidence, and ownership gaps. These signals help improve the process
            without inventing unsupported performance promises.
          </p>
        </div>
      </section>

      <section className="content-wrap faq service-faq">
        <p className="eyebrow">Service questions</p>
        <h2>What finance leaders usually ask</h2>
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>

      <section className="closing services-final-cta">
        <p className="eyebrow">Start with a real queue</p>
        <h2>Turn one recurring invoicing handoff into a clear role.</h2>
        <p>
          Bring the trigger, sources, expected output, reviewer, and common
          exceptions. We will use them to identify the best starting service.
        </p>
        <Link className="button primary" href="/contact-us">
          Plan a free consultation
        </Link>
      </section>
    </main>
  );
}
