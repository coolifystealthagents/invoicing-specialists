import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { serviceBySlug } from "@/lib/content";
import { serviceDetails } from "@/lib/service-details";
import {
  AccountableReviewIcon,
  HandoffIcon,
  PreparationIcon,
  SourceRecordsIcon,
} from "@/components/Icons";

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

const workflowIcons = [
  SourceRecordsIcon,
  PreparationIcon,
  HandoffIcon,
  AccountableReviewIcon,
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const info = serviceDetails[slug];
  if (!info) notFound();
  const related = info.related.flatMap((relatedSlug) => {
    const relatedService = site.services.find((item) => item.slug === relatedSlug);
    return relatedService ? [relatedService] : [];
  });

  return (
    <main className="service-detail-page">
      <nav className="service-breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li aria-current="page">{service.name}</li>
        </ol>
      </nav>
      <header className="service-hero">
        <div>
          <p className="eyebrow">Invoicing specialist service</p>
          <h1>{service.name}</h1>
          <p>{info.opening}</p>
          <p className="service-audience">
            <strong>Best suited for</strong> {info.audience}
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
            preload
            sizes="(max-width: 900px) 100vw, min(48vw, 820px)"
          />
        </div>
      </header>

      <section className="content-wrap service-detail">
        <section className="service-overview-grid" aria-labelledby="service-overview-title">
          <p className="eyebrow">Buyer fit and operating problem</p>
          <div>
            <h2 id="service-overview-title">Where the work can stall</h2>
            <p>{info.problem}</p>
          </div>
        </section>

        <div className="service-detail-grid">
          <section className="service-detail-block service-scope">
            <p className="eyebrow">Work in scope</p>
            <h2>What the specialist handles</h2>
            <ul>
              {info.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              The role follows the approved source, documented sequence, and
              named owner for each exception.
            </p>
          </section>
          <section className="service-detail-block service-deliverables">
            <p className="eyebrow">Outputs for review</p>
            <h2>What arrives at handoff</h2>
            <ul>
              {info.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
            <p>
              Each handoff separates completed preparation from missing inputs
              and decisions that still belong to your team.
            </p>
          </section>
        </div>

        <section className="service-onboarding" aria-labelledby="service-onboarding-title">
          <p className="eyebrow">Onboarding inputs</p>
          <h2 id="service-onboarding-title">What the team provides to begin</h2>
          <p>
            Agree on the system of record, approved templates, role access,
            service hours, escalation owners, and review cadence before the
            first live handoff.
          </p>
          <ul className="service-onboarding-list">
            {info.onboardingInputs.map((input) => (
              <li key={input}>{input}</li>
            ))}
          </ul>
        </section>

        <section className="service-workflow" aria-labelledby="workflow-title">
          <p className="eyebrow">Workflow and handoffs</p>
          <h2 id="workflow-title">How work can move from intake to review</h2>
          <ol>
            {info.workflow.map(({ title, copy }, index) => {
              const StepIcon = workflowIcons[index % workflowIcons.length];
              return (
                <li key={title}>
                  <span className="workflow-step-icon" aria-hidden="true">
                    <StepIcon />
                  </span>
                  <strong className="workflow-step-title">{title}</strong>
                  <p>{copy}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="service-workflow-example" aria-labelledby="workflow-example-title">
          <p className="eyebrow">Illustrative invoice-work example</p>
          <h2 id="workflow-example-title">{info.workflowExampleTitle}</h2>
          <p>{info.workflowExample}</p>
          <p className="service-example-note">Illustrative workflow, not a customer case study.</p>
        </section>

        <section className="service-responsibilities" aria-label="Responsibilities and approval boundaries">
          <div className="service-responsibility-grid">
            <section className="service-responsibility-card">
              <p className="eyebrow">Preparation lane</p>
              <h2>Specialist responsibilities</h2>
              <ul>
                {info.specialistResponsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </section>
            <section className="service-responsibility-card">
              <p className="eyebrow">Decision and approval lane</p>
              <h2>Owner responsibilities</h2>
              <ul>
                {info.ownerResponsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </section>
          </div>
          <p className="service-boundary-note">
            <strong>Approval boundary.</strong> {info.boundary}
          </p>
        </section>

        <section className="service-quality">
          <div>
            <p className="eyebrow">Quality checks</p>
            <h2>Quality controls</h2>
            <p>{info.qualityIntroduction}</p>
          </div>
          <ul>
            {info.quality.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="service-detail-faq">
          <p className="eyebrow">Questions about this service</p>
          <h2>Frequently asked questions</h2>
          {info.faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>

        <section className="service-related">
          <p className="eyebrow">Related services</p>
          <h2>Connected services for adjacent invoice work</h2>
          <p>{info.relatedIntroduction}</p>
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
          <p className="eyebrow">Free consultation</p>
          <h2>{info.ctaTitle}</h2>
          <p>{info.ctaCopy}</p>
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
