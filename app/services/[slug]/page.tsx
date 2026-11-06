import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { serviceBySlug } from "@/lib/content";

type ServiceDetail = {
  image: string;
  alt: string;
  audience: string;
  problem: string;
  inputs: string[];
  workflow: [string, string][];
  outputs: string[];
  boundary: string;
  quality: string[];
  scenarios: string[];
  faqs: [string, string][];
};

const detail: Record<string, ServiceDetail> = {
  "invoice-draft-preparation": {
    image: "/editorial/services/invoice-draft-preparation.jpg",
    alt: "Approved invoice source records, a prepared draft, and a completed review checklist",
    audience:
      "Finance teams with recurring, milestone, usage, or project billing that depends on approved source records.",
    problem:
      "Drafting slows when quantities, milestones, customer instructions, and supporting evidence arrive through different owners. A visible preparation queue gives the reviewer one place to see what is complete and what is missing.",
    inputs: [
      "Approved contract or order terms",
      "Verified quantities, milestones, or usage",
      "Customer billing instructions",
      "Current templates and approval rules",
    ],
    workflow: [
      [
        "Validate the intake",
        "Match the request to the approved source, customer record, and current template.",
      ],
      [
        "Prepare and trace",
        "Populate the draft and connect each material field to its supporting record.",
      ],
      [
        "Route the exception",
        "Send complete drafts to review and return missing or conflicting inputs to a named owner.",
      ],
    ],
    outputs: [
      "Review-ready invoice draft",
      "Linked supporting evidence",
      "Missing-input and exception notes",
      "Visible owner and due date",
    ],
    boundary:
      "The specialist does not set pricing or terms, interpret a contract, decide accounting or tax treatment, approve the invoice, or release it to the customer.",
    quality: [
      "Required-field and template check",
      "Source-to-draft trace check",
      "Duplicate candidate review",
      "Named reviewer and version record",
    ],
    scenarios: [
      "Recurring invoices arrive from several systems",
      "Milestone evidence must be assembled before billing",
      "Drafts wait because source ownership is unclear",
    ],
    faqs: [
      [
        "Can the specialist create a draft when evidence is incomplete?",
        "The specialist can prepare the verified portion and record the gap, but the draft should not move past the written stop condition until an owner resolves it.",
      ],
      [
        "What makes a draft review-ready?",
        "The required fields are complete, material entries trace to approved sources, supporting records are attached, and every exception has an owner.",
      ],
    ],
  },
  "billing-schedule-support": {
    image: "/editorial/services/billing-schedule-support.jpg",
    alt: "Billing calendar, milestone timeline, and organized invoice schedule queue",
    audience:
      "Teams managing recurring, milestone, renewal, or project billing dates across many customers.",
    problem:
      "Billing dates become unreliable when they are copied across personal calendars, spreadsheets, and messages. A controlled schedule makes the next trigger, owner, and unresolved conflict visible before the due date.",
    inputs: [
      "Approved billing calendar",
      "Contract and renewal dates",
      "Milestone completion records",
      "Holiday and close schedules",
    ],
    workflow: [
      [
        "Consolidate approved dates",
        "Bring current triggers and due dates into the agreed schedule without rewriting source terms.",
      ],
      [
        "Prepare the forward queue",
        "Identify upcoming work, required evidence, owners, and timing conflicts.",
      ],
      [
        "Record authorized changes",
        "Update the schedule only from an approved instruction and retain the reason and source.",
      ],
    ],
    outputs: [
      "Current billing queue",
      "Upcoming due-date view",
      "Conflict and missing-owner list",
      "Documented schedule changes",
    ],
    boundary:
      "The specialist does not change contractual dates, declare a milestone complete, prioritize unapproved work, or release billing based on an assumed trigger.",
    quality: [
      "Source date and schedule date comparison",
      "Owner and reviewer completeness check",
      "Conflict and holiday review",
      "Change history for each amended trigger",
    ],
    scenarios: [
      "Billing dates live in individual spreadsheets",
      "Milestones arrive without a clear invoice owner",
      "Close-period workload needs advance visibility",
    ],
    faqs: [
      [
        "How far ahead should the queue look?",
        "Use the planning horizon that matches your billing cycle and reviewer capacity. The important control is a consistent window with named owners and source dates.",
      ],
      [
        "Can a specialist move a date after a customer request?",
        "Only when the request follows your authorized change process. An uncertain request is recorded and routed to the person who owns the decision.",
      ],
    ],
  },
  "supporting-documentation": {
    image: "/editorial/services/supporting-documentation.jpg",
    alt: "Indexed supporting records assembled with a billing evidence checklist",
    audience:
      "Organizations whose invoices require purchase orders, time records, delivery proof, milestone acceptance, or customer-specific attachments.",
    problem:
      "Invoices are delayed or rejected when evidence is scattered, misnamed, outdated, or detached from the billing item it supports. A documentation lane assembles a complete and traceable review packet.",
    inputs: [
      "Approved source documents",
      "Customer attachment rules",
      "Evidence naming standards",
      "Retention and access requirements",
    ],
    workflow: [
      [
        "Collect from named sources",
        "Retrieve only the approved evidence required for the invoice or customer rule.",
      ],
      [
        "Index and compare",
        "Name, date, and link each record, then check the packet against the required list.",
      ],
      [
        "Separate gaps from conflicts",
        "Return absent records to the source owner and escalate evidence that disagrees.",
      ],
    ],
    outputs: [
      "Indexed support packet",
      "Completeness checklist",
      "Source links and custody notes",
      "Conflict and gap report",
    ],
    boundary:
      "The specialist does not create evidence, alter a source record, accept a milestone, or decide that conflicting support is sufficient.",
    quality: [
      "Document-to-line-item match",
      "Date, version, and owner check",
      "Customer attachment checklist",
      "Access and retention rule check",
    ],
    scenarios: [
      "Customers reject invoices with missing attachments",
      "Evidence is scattered across email and drives",
      "Reviewers cannot trace a figure to its source",
    ],
    faqs: [
      [
        "Should every source document be sent to the customer?",
        "No. The specialist follows the approved customer attachment rule and keeps internal evidence separate when required.",
      ],
      [
        "What happens when two records conflict?",
        "Both records are preserved and the conflict is routed to the authorized owner. The specialist does not choose the more convenient source.",
      ],
    ],
  },
  "invoice-quality-review": {
    image: "/editorial/services/invoice-quality-review.jpg",
    alt: "Invoice packet and quality checklist arranged for a controlled preapproval review",
    audience:
      "Finance teams that need a consistent preparation check before an authorized reviewer approves and releases an invoice.",
    problem:
      "Deadline pressure makes small field, format, attachment, and duplicate errors easy to miss. A consistent preapproval check creates a visible exception list without confusing checking with authorization.",
    inputs: [
      "Draft invoice",
      "Approved checklist",
      "Customer master data",
      "Source and duplicate-control references",
    ],
    workflow: [
      [
        "Run the fixed checklist",
        "Check required fields, format, customer instructions, and supporting records in the same order.",
      ],
      [
        "Compare control references",
        "Review duplicate candidates, source totals, dates, and identifiers against approved records.",
      ],
      [
        "Package the result",
        "Route a complete review packet or a concise exception note to the authorized reviewer.",
      ],
    ],
    outputs: [
      "Completed quality checklist",
      "Exception notes",
      "Duplicate candidate flags",
      "Review-ready package",
    ],
    boundary:
      "The specialist identifies and documents exceptions. The authorized reviewer decides whether a correction is valid and whether the invoice can be approved and released.",
    quality: [
      "Repeatable checklist version",
      "Independent duplicate candidate check",
      "Exception category and owner",
      "Sampled reviewer agreement check",
    ],
    scenarios: [
      "Required fields are missed under deadline pressure",
      "Customer formats vary by account",
      "Duplicate risks need a documented second look",
    ],
    faqs: [
      [
        "Is this the same as invoice approval?",
        "No. It is a structured preparation check that gives the approver clearer evidence and a focused exception list.",
      ],
      [
        "Should every invoice receive the same check?",
        "Use a common baseline, then add customer or invoice-specific controls where the approved process requires them.",
      ],
    ],
  },
  "customer-billing-records": {
    image: "/editorial/services/customer-billing-records.jpg",
    alt: "Customer billing change records prepared for authorization and provenance review",
    audience:
      "Teams maintaining customer contacts, purchase-order references, delivery preferences, and other approved billing fields.",
    problem:
      "Billing records drift when a change arrives without a verifiable source, owner, or effective date. A controlled maintenance lane preserves where the change came from and who authorized it.",
    inputs: [
      "Authorized change request",
      "Current customer master record",
      "Verification source",
      "Field-level access policy",
    ],
    workflow: [
      [
        "Verify the request",
        "Confirm the sender, effective date, affected fields, and required approval source.",
      ],
      [
        "Prepare the field update",
        "Stage only the authorized fields and keep the prior value in the change record.",
      ],
      [
        "Reconcile the result",
        "Confirm the saved value, record the reviewer, and route uncertain changes without guessing.",
      ],
    ],
    outputs: [
      "Prepared approved-field update",
      "Change provenance record",
      "Uncertain-change escalation",
      "Current delivery preference summary",
    ],
    boundary:
      "The specialist does not invent missing values, accept an unverified payment or bank detail change, override access controls, or approve a commercial term.",
    quality: [
      "Before-and-after field comparison",
      "Authorized source and effective-date check",
      "Sensitive-change escalation check",
      "System-of-record reconciliation",
    ],
    scenarios: [
      "Recipient details change without a clear source",
      "Billing notes are inconsistent across systems",
      "A master-data change needs independent approval",
    ],
    faqs: [
      [
        "Which changes need extra verification?",
        "Use your policy for sensitive fields such as payment instructions, tax information, legal entity details, and access. Those changes should never rely on an informal message alone.",
      ],
      [
        "Can the specialist clean up old notes?",
        "Yes, under an approved retention and field rule. Ambiguous history should be preserved or escalated instead of silently rewritten.",
      ],
    ],
  },
  "billing-status-reporting": {
    image: "/editorial/services/billing-status-reporting.jpg",
    alt: "Billing queue summaries and exception records arranged for an operational status review",
    audience:
      "Controllers and billing managers who need a reliable view of drafts, review, approval, release, and exceptions.",
    problem:
      "Status meetings become reconstruction exercises when stages, owners, due dates, and exceptions are recorded inconsistently. A reporting lane turns the underlying queue into a repeatable operational view.",
    inputs: [
      "Queue status fields",
      "Owner and due-date records",
      "Approval and delivery evidence",
      "Defined exception categories",
    ],
    workflow: [
      [
        "Reconcile the source queue",
        "Check that each open item has a valid stage, owner, due date, and evidence link.",
      ],
      [
        "Prepare the operating view",
        "Group work by stage, age, owner, and approved exception category.",
      ],
      [
        "Document the follow-up",
        "Record unresolved items, the next owner action, and recurring data-quality patterns.",
      ],
    ],
    outputs: [
      "Operational status view",
      "Aging and exception summary",
      "Missing-owner list",
      "Recurring-pattern notes",
    ],
    boundary:
      "The specialist reports what the approved records show. Finance leaders decide priorities, customer commitments, policy exceptions, accounting conclusions, and corrective action.",
    quality: [
      "Status-to-evidence reconciliation",
      "Owner and due-date completeness",
      "Consistent exception coding",
      "Spot check back to source records",
    ],
    scenarios: [
      "Leaders reconstruct status in meetings",
      "Draft and sent states are inconsistently recorded",
      "Exceptions repeat without a visible pattern",
    ],
    faqs: [
      [
        "Is a dashboard required?",
        "No. Start with a dependable source queue and clear definitions. A simple report is useful when its stages and evidence can be reproduced.",
      ],
      [
        "Which measures are most useful?",
        "Choose measures tied to decisions, such as queue age, missing owners, first-pass completeness, exception types, reviewer turnaround, and delivery evidence.",
      ],
    ],
  },
};

export function generateStaticParams() {
  return site.services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service
    ? {
        title: service.name,
        description: service.short,
        alternates: { canonical: `/services/${slug}` },
      }
    : {};
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const info = detail[slug];
  if (!info) notFound();
  const related = site.services
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <main className="service-detail-page">
      <header className="service-hero">
        <div>
          <p className="eyebrow">Invoicing specialist service</p>
          <h1>{service.name}</h1>
          <p>
            {service.short} The role is built around approved sources, a defined
            preparation lane, and an accountable reviewer.
          </p>
          <Link
            id={`cta-services-${service.slug}-bookcall`}
            className="button primary"
            href="/contact-us"
          >
            Discuss this role
          </Link>
        </div>
        <div className="service-hero-image">
          <Image
            src={info.image}
            alt={info.alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </header>

      <section className="content-wrap service-detail">
        <div className="service-overview-grid">
          <div>
            <p className="eyebrow">Audience</p>
            <h2>Who this service is for</h2>
            <p>{info.audience}</p>
          </div>
          <div>
            <p className="eyebrow">Operating problem</p>
            <h2>What it addresses</h2>
            <p>{info.problem}</p>
          </div>
        </div>

        <div className="service-detail-grid">
          <section className="service-detail-block">
            <p className="eyebrow">Inputs</p>
            <h2>Inputs the workflow needs</h2>
            <ul>
              {info.inputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Inputs come from approved systems and named owners. Missing,
              conflicting, or unverified information is returned or escalated
              instead of guessed.
            </p>
          </section>
          <section className="service-detail-block service-scope">
            <p className="eyebrow">Scope</p>
            <h2>Work the specialist performs</h2>
            <ul>
              {service.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
            <p>
              The role brief also names the system of record, required fields,
              due dates, completion evidence, and reviewer.
            </p>
          </section>
        </div>

        <section className="service-workflow" aria-labelledby="workflow-title">
          <p className="eyebrow">Workflow</p>
          <h2 id="workflow-title">A controlled path from intake to review</h2>
          <ol>
            {info.workflow.map(([title, copy]) => (
              <li key={title}>
                <span>{title}</span>
                <p>{copy}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="service-detail-grid">
          <section className="service-detail-block">
            <p className="eyebrow">Deliverables</p>
            <h2>What the specialist delivers</h2>
            <ul>
              {info.outputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              The output shows what was prepared, which source supported it,
              what remains incomplete, and who owns the next action.
            </p>
          </section>
          <section className="service-detail-block service-boundary-panel">
            <p className="eyebrow">Human decision boundary</p>
            <h2>What remains a human decision</h2>
            <p>{info.boundary}</p>
          </section>
        </div>

        <section className="service-quality">
          <div>
            <p className="eyebrow">Quality checks</p>
            <h2>Quality controls</h2>
            <p>
              Make completeness and exceptions observable. Use the same
              acceptance standard long enough to see recurring defects. Review
              the control when the source, template, customer rule, or approval
              path changes.
            </p>
          </div>
          <ul>
            {info.quality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="service-starting-scenarios">
          <p className="eyebrow">Starting scenarios</p>
          <h2>Common starting scenarios</h2>
          <div>
            {info.scenarios.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section className="service-detail-faq">
          <p className="eyebrow">Questions about this service</p>
          <h2>Frequently asked questions</h2>
          {info.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>

        <section className="service-related">
          <p className="eyebrow">Related services</p>
          <h2>
            Connect the next preparation lane when the first one is stable.
          </h2>
          <div className="related-service-links">
            {related.map((item) => (
              <Link href={`/services/${item.slug}`} key={item.slug}>
                <strong>{item.name}</strong>
                <span>{item.short}</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="service-final-cta">
          <p className="eyebrow">Plan the first handoff</p>
          <h2>Define one controlled workflow.</h2>
          <p>
            Bring one recurring invoicing queue. We will map its inputs,
            preparation work, boundaries, outputs, review owner, and escalation
            path.
          </p>
          <Link
            id={`cta-services-${service.slug}-consultation`}
            className="button primary"
            href="/contact-us"
          >
            Plan a free consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
