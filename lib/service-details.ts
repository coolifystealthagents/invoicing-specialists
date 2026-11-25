export type ServiceDetail = {
  image: string;
  alt: string;
  opening: string;
  audience: string;
  problem: string;
  scope: string[];
  deliverables: string[];
  onboardingInputs: string[];
  workflow: { title: string; copy: string }[];
  workflowExampleTitle: string;
  workflowExample: string;
  specialistResponsibilities: string[];
  ownerResponsibilities: string[];
  boundary: string;
  qualityIntroduction: string;
  quality: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  relatedIntroduction: string;
  ctaTitle: string;
  ctaCopy: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "invoice-draft-preparation": {
    image: "/editorial/services/invoice-draft-preparation.webp",
    alt: "Finance colleagues review an invoice report together at a desk",
    opening:
      "Turn approved order terms, billing triggers, and period-specific records into an invoice draft a finance owner can trace and review. Preparation follows your documented rules; approval and release stay with your team.",
    audience:
      "Finance teams preparing recurring, usage-based, milestone, or project invoices from approved source records.",
    problem:
      "A draft may depend on an approved order, a period-specific usage file, a customer PO, and a current template. When those inputs come from different owners, work can stall or an unsupported value can slip into the draft. A defined intake and handoff keeps the sources and open questions visible.",
    scope: [
      "Match the customer, entity, billing period, trigger, and PO reference to approved records.",
      "Populate the current invoice template with confirmed quantities and documented calculation rules.",
      "Attach or link the supporting records required for the customer and invoice type.",
      "Record missing or conflicting inputs and route them to their named source owner instead of guessing.",
    ],
    deliverables: [
      "A versioned invoice draft in the agreed finance-review state.",
      "Source references for material quantities, periods, and billing triggers.",
      "An indexed attachment set that follows the customer’s documented requirements.",
      "A completeness and exception note with the next owner and due date.",
    ],
    onboardingInputs: [
      "Current signed order forms, approved amendments, and the authorized rate source.",
      "Billing triggers, service-period rules, accepted quantity or usage files, and cut-off dates.",
      "Customer billing profiles, PO requirements, approved templates, and field definitions.",
      "Named owners for source data, exception resolution, finance review, approval, and release.",
      "The system of record, allowed access, version rules, review cadence, and escalation route.",
    ],
    workflow: [
      {
        title: "Receive and verify",
        copy: "Match the customer, order, service period, and trigger across the approved intake. Pause any line with missing or conflicting source data.",
      },
      {
        title: "Prepare with traceable inputs",
        copy: "Populate the agreed template from confirmed quantities and approved calculations, keeping source references beside the draft fields they support.",
      },
      {
        title: "Route source questions",
        copy: "Send a missing PO, unmatched usage line, or unclear trigger to its named operations or account owner. Record the question and keep affected work on hold.",
      },
      {
        title: "Hand off to finance review",
        copy: "Deliver the versioned draft, attachments, open exceptions, and due date to the authorized reviewer. The reviewer decides corrections, approval, and release.",
      },
    ],
    workflowExampleTitle: "Illustrative example: a monthly usage invoice",
    workflowExample:
      "Suppose an approved order bills confirmed monthly usage and the customer requires a PO on each invoice. The specialist checks the export period and account identifier, prepares the draft using the approved calculation source, attaches the PO, and flags an unmatched usage row for its source owner. The controller resolves that exception and decides whether to approve and release the packet.",
    specialistResponsibilities: [
      "Check required fields against the accepted source list and prepare the draft.",
      "Link the supporting records and preserve version and exception notes.",
      "Keep the queue current and route unresolved source questions to named owners.",
    ],
    ownerResponsibilities: [
      "Set or approve commercial terms, rates, calculation rules, and amendments.",
      "Resolve disputed quantities, credits, contract interpretation, and source conflicts.",
      "Approve the invoice and authorize customer release.",
    ],
    boundary:
      "The specialist does not negotiate terms, invent missing values, determine accounting or tax treatment, approve the invoice, or send it to a customer unless that release authority is separately and explicitly assigned.",
    qualityIntroduction:
      "Use a repeatable check that makes source completeness and draft exceptions easy for the approver to inspect.",
    quality: [
      "Customer, entity, period, and PO match to the approved profile.",
      "Material quantities and billing triggers trace to the accepted source.",
      "Template version, required fields, attachments, and duplicate candidates checked.",
      "Draft version, reviewer, due date, and unresolved items recorded.",
    ],
    faqs: [
      {
        question: "Does the specialist set prices or decide tax treatment?",
        answer:
          "No. The specialist works from the rate, terms, and calculation rules your finance owner has approved. Questions about pricing, tax, accounting, or contract interpretation are routed to the responsible decision-maker.",
      },
      {
        question: "What happens when a source file conflicts with an order?",
        answer:
          "The affected field or line is flagged with both source references and assigned to the owner who can resolve the conflict. The specialist does not choose a value or clear the hold by assumption.",
      },
      {
        question: "Can this support recurring and milestone invoices?",
        answer:
          "Yes, when the trigger, required evidence, and accepted source are documented. Milestone completion and any exception to the approved terms remain with your project or finance owner.",
      },
      {
        question: "Will the specialist send the invoice?",
        answer:
          "This role prepares a review-ready draft and handoff. Your authorized approver retains approval and release unless your organization explicitly defines a separate release procedure.",
      },
    ],
    related: [
      "billing-schedule-support",
      "supporting-documentation",
      "invoice-quality-review",
    ],
    relatedIntroduction:
      "Connect the preparation queue to its billing trigger, evidence packet, and pre-approval check when those handoffs share owners.",
    ctaTitle: "Make one recurring invoice queue review-ready.",
    ctaCopy:
      "Bring an example draft, its approved source records, customer requirements, and the reviewer who owns the next decision. We can map a preparation lane without moving approval authority.",
  },
  "billing-schedule-support": {
    image: "/editorial/services/billing-schedule-support.webp",
    alt: "Finance professional checks billing paperwork with a calculator and laptop",
    opening:
      "Keep recurring, renewal, and milestone billing dates attached to their approved trigger, evidence owner, and next review. The specialist maintains schedule visibility while your finance and project owners retain trigger and priority decisions.",
    audience:
      "Billing managers and finance teams coordinating recurring cycles, renewals, project milestones, or close-period work across customer accounts.",
    problem:
      "Schedules lose reliability when due dates are copied between a contract, a calendar, a project tracker, and personal spreadsheets. Informal date changes can obscure the original trigger. A controlled schedule makes the source, timing, evidence, and next owner visible together.",
    scope: [
      "Maintain billing dates from approved contracts, renewal schedules, and documented change instructions.",
      "Build a forward queue for recurring cycles and milestones using the team’s agreed planning window.",
      "Track required evidence, source owner, reviewer, due date, and unresolved trigger conflicts.",
      "Record authorized schedule updates with their source and effective date; route informal or ambiguous requests for approval.",
    ],
    deliverables: [
      "A current billing calendar linked to its governing source and trigger.",
      "An upcoming-work queue with dates, evidence requirements, and named owners.",
      "A conflict and missing-trigger list for finance or project-owner review.",
      "A change record showing the instruction, approver, effective date, and updated schedule entry.",
    ],
    onboardingInputs: [
      "Approved billing calendars, service terms, renewal dates, and documented milestone rules.",
      "Timezone, close dates, holiday treatment, lead times, and the planning horizon the team uses.",
      "The role that confirms milestone completion and the evidence that supports the trigger.",
      "Authorized schedule-change channels, effective-date rules, reviewer, and escalation contact.",
      "The system of record and the fields needed to hand work into draft preparation.",
    ],
    workflow: [
      {
        title: "Load approved triggers",
        copy: "Bring the next recurring date or milestone from its source into the schedule, preserving the term, period, and source link.",
      },
      {
        title: "Build the forward queue",
        copy: "List upcoming work in the agreed horizon with required evidence, source owner, reviewer, and due date attached.",
      },
      {
        title: "Surface timing conflicts",
        copy: "Flag missing acceptance, overlapping dates, close-calendar conflicts, and requests that lack authorized change evidence.",
      },
      {
        title: "Handoff approved work",
        copy: "Route ready triggers to invoice preparation and open questions to the project or finance owner. Record only approved schedule changes.",
      },
    ],
    workflowExampleTitle: "Illustrative example: a project milestone near close",
    workflowExample:
      "Suppose a milestone invoice is due near month-end and the schedule requires a project owner’s acceptance record. The specialist places the trigger in the forward queue, links the required evidence and due date, and marks the item as awaiting confirmation when acceptance is not yet recorded. The project owner confirms completion; finance decides when the trigger can move into invoice preparation.",
    specialistResponsibilities: [
      "Maintain dates and queue fields from approved source records.",
      "Make upcoming work, missing evidence, and ownership gaps visible.",
      "Record authorized changes and route unresolved conflicts to their owners.",
    ],
    ownerResponsibilities: [
      "Interpret contract dates and authorize changes to billing terms.",
      "Confirm milestone completion and accept supporting evidence.",
      "Set priorities, resolve customer exceptions, and authorize billing release.",
    ],
    boundary:
      "A scheduled date is not proof that a billing trigger has been met. The specialist does not amend contract terms, declare a milestone complete, or advance a disputed trigger without its authorized owner’s decision.",
    qualityIntroduction:
      "Keep the schedule tied to the governing source so reminders and handoffs do not become a substitute for approval.",
    quality: [
      "Billing date and trigger match the approved term and effective date.",
      "Timezone, close calendar, and planning window applied consistently.",
      "Evidence owner, reviewer, due date, and next handoff are present.",
      "Authorized changes retain their source and approver; unresolved conflicts remain visible.",
    ],
    faqs: [
      {
        question: "Can the specialist decide that a milestone is complete?",
        answer:
          "No. The specialist can locate and organize the agreed evidence, but the project or finance owner designated in your process confirms completion and determines whether the billing trigger is satisfied.",
      },
      {
        question: "How far ahead can the schedule be maintained?",
        answer:
          "The planning window is set during onboarding around your billing cycle, review capacity, and close calendar. The schedule should show the source trigger and owner, not imply that future work is already approved.",
      },
      {
        question: "How are customer-requested date changes handled?",
        answer:
          "The request is recorded and routed through your authorized change process. The specialist updates the schedule only after the required owner approves the change and its effective date.",
      },
      {
        question: "Does schedule support include preparing invoices?",
        answer:
          "It can hand an approved trigger to invoice draft preparation. Draft creation, finance review, approval, and customer release remain separate steps with their own owners.",
      },
    ],
    related: [
      "invoice-draft-preparation",
      "billing-status-reporting",
      "supporting-documentation",
    ],
    relatedIntroduction:
      "Pair schedule visibility with the evidence and draft handoffs only where the source owners and trigger rules are defined.",
    ctaTitle: "Make upcoming billing triggers easier to act on.",
    ctaCopy:
      "Bring one calendar, its source terms, and an example of a date or milestone that currently needs follow-up. We can map the queue and its decision owners together.",
  },
  "supporting-documentation": {
    image: "/editorial/services/supporting-documentation.webp",
    alt: "Colleagues discuss and review supporting documents in a modern office",
    opening:
      "Assemble and index the records a reviewer needs beside each billing item. The specialist follows your evidence rules, keeps sources traceable, and routes gaps without creating documents or deciding that support is sufficient.",
    audience:
      "Organizations whose invoices require purchase orders, approved time records, delivery evidence, milestone acceptance, or customer-specific attachments.",
    problem:
      "Supporting records may sit in email, project folders, and customer portals with different names and versions. A reviewer then has to reconstruct which document supports which line. A defined evidence packet links each required item to its source and leaves missing or conflicting records visible.",
    scope: [
      "Map customer and invoice-type requirements to the billing item or line they support.",
      "Retrieve authorized purchase orders, approved time records, delivery documents, or milestone evidence from named sources.",
      "Index each record with its source, period, version, and relevant billing reference.",
      "Record absent, expired, conflicting, or restricted evidence and route it to the source owner.",
    ],
    deliverables: [
      "An indexed evidence packet with source links and version details.",
      "A document-to-invoice-line or trigger cross-reference.",
      "A customer attachment checklist for the reviewer or billing handoff.",
      "A gap and conflict log with owner and next action.",
    ],
    onboardingInputs: [
      "Customer-specific attachment checklists and the invoice fields or lines each record supports.",
      "Approved storage locations, portal access, naming rules, and source owners.",
      "Retention, confidentiality, least-access, and customer-delivery rules for each document type.",
      "Accepted evidence versions, date ranges, and rules for expired or superseded records.",
      "Escalation owners for missing, inconsistent, restricted, or disputed documents.",
    ],
    workflow: [
      {
        title: "Start from the evidence rule",
        copy: "Select the customer and billing type, then identify the required records and the line or trigger each one must support.",
      },
      {
        title: "Retrieve from named sources",
        copy: "Collect only approved records from the designated system or owner; retain the source location and version rather than recreating evidence.",
      },
      {
        title: "Index and check completeness",
        copy: "Link each document to its invoice reference, period, and checklist item. Mark missing, stale, or conflicting items without treating them as accepted.",
      },
      {
        title: "Hand off the packet or gap",
        copy: "Send a complete, permission-checked packet to the reviewer. Route absent records to their source owner and preserve the open item until resolved.",
      },
    ],
    workflowExampleTitle: "Illustrative example: evidence for a delivered project phase",
    workflowExample:
      "For a project-phase invoice, the approved checklist might require the purchase order, an accepted milestone record, and a time summary. The specialist indexes each available file to the billing period and phase, notes that the acceptance record is absent, and routes that gap to the project owner. The finance reviewer receives the packet only with its missing item clearly called out; the specialist does not create acceptance evidence.",
    specialistResponsibilities: [
      "Retrieve and organize approved source records using the documented access path.",
      "Link each item to the invoice, period, customer rule, and checklist entry.",
      "Flag missing or inconsistent evidence and route it to the named source owner.",
    ],
    ownerResponsibilities: [
      "Define which evidence is required and which versions or date ranges are acceptable.",
      "Create, approve, or correct source documents and resolve conflicting evidence.",
      "Decide whether a packet is sufficient for review, approval, and release.",
    ],
    boundary:
      "The specialist does not create or alter source evidence, certify delivery or milestone acceptance, waive customer requirements, or decide that incomplete support is sufficient. Customer-facing disclosure follows your approved attachment and access rules.",
    qualityIntroduction:
      "The packet should make it clear what each record supports, where it came from, and which requirement remains open.",
    quality: [
      "Document type, customer, period, version, and source location checked.",
      "Evidence mapped to the relevant invoice line, PO, or trigger.",
      "Required customer attachments distinguished from internal-only records.",
      "Missing, expired, conflicting, or restricted records routed with an owner.",
    ],
    faqs: [
      {
        question: "Does the specialist create a missing timesheet or acceptance record?",
        answer:
          "No. The specialist can ask the named source owner for the record and track the follow-up. The person responsible for the underlying work creates or approves the evidence.",
      },
      {
        question: "Are all supporting records sent to the customer?",
        answer:
          "Only records allowed by the approved customer attachment rule. Internal evidence, personnel details, or other restricted documents stay in the approved internal location unless an authorized owner directs otherwise.",
      },
      {
        question: "What happens if two documents disagree?",
        answer:
          "Both source references are preserved, the conflicting field is recorded, and the issue is sent to the owner who can resolve it. The specialist does not select the newer or more convenient record without a rule.",
      },
      {
        question: "Can this work begin before every storage system is connected?",
        answer:
          "The team can define a bounded source list and start with records available through an approved access method. Any source not yet available should remain explicit rather than silently omitted.",
      },
    ],
    related: [
      "invoice-draft-preparation",
      "invoice-quality-review",
      "billing-status-reporting",
    ],
    relatedIntroduction:
      "The evidence packet can feed draft preparation or pre-approval review when each step uses the same document map and handoff owner.",
    ctaTitle: "Make invoice evidence easier to trace.",
    ctaCopy:
      "Bring one customer checklist, a sample invoice item, and the approved locations for its records. We can map the evidence packet and the people who resolve its gaps.",
  },
  "invoice-quality-review": {
    image: "/editorial/services/invoice-quality-review.webp",
    alt: "Two colleagues examine a financial report during a review meeting",
    opening:
      "Apply a consistent pre-approval checklist to invoice drafts so missing fields, source mismatches, and duplicate candidates are visible before the authorized reviewer acts. The check supports approval; it is not approval itself.",
    audience:
      "Finance teams with repeatable invoice volume, customer-specific requirements, or a documented need for a second preparation check before approval.",
    problem:
      "Under deadline pressure, a draft can be complete in appearance but still carry the wrong period, a missing PO, an unsupported line, or an unresolved duplicate candidate. A consistent review packet distinguishes a checked field from an exception that still needs a decision.",
    scope: [
      "Apply the approved required-field, customer-format, and attachment checklist to the current draft version.",
      "Compare dates, quantities, totals, identifiers, and source links against the accepted references and documented tolerances.",
      "Flag duplicate candidates and exceptions with the compared records and reason code.",
      "Route corrections and policy questions to the preparer or authorized finance reviewer with the checklist result.",
    ],
    deliverables: [
      "A completed checklist tied to the draft version reviewed.",
      "A concise exception list with source references, reason, and owner.",
      "Duplicate candidates for a finance owner to resolve.",
      "A review-ready packet showing passed checks separately from unresolved decisions.",
    ],
    onboardingInputs: [
      "The approved checklist, template versions, required fields, and customer-specific rules.",
      "Accepted source references, documented calculation methods, and any approved tolerance rules.",
      "Duplicate-search keys, lookback period, and the person who resolves possible duplicates.",
      "Review state definitions, exception codes, correction owner, approver, and release process.",
      "A small set of approved examples that illustrate passed checks and common exceptions.",
    ],
    workflow: [
      {
        title: "Freeze the review version",
        copy: "Confirm the draft identity, version, customer, and required source packet so the checklist refers to the same item the approver will see.",
      },
      {
        title: "Apply the documented checks",
        copy: "Compare required fields, formatting, dates, totals, and references using the checklist and tolerances finance has approved.",
      },
      {
        title: "Separate flags from decisions",
        copy: "Record the evidence behind a mismatch or duplicate candidate and route it to the owner who can correct or resolve it.",
      },
      {
        title: "Return the review packet",
        copy: "Provide the versioned checklist, exceptions, and open owners to the authorized approver. Only that approver decides whether to approve or release.",
      },
    ],
    workflowExampleTitle: "Illustrative example: a draft with a changed PO reference",
    workflowExample:
      "A draft passes the amount and period checks but carries a PO reference that differs from the customer record. The reviewer logs the exact field, draft version, and source comparison, then routes it to the account owner. The specialist does not replace the value based on a prior invoice; the authorized owner confirms the correct reference before the draft returns to approval.",
    specialistResponsibilities: [
      "Run the approved checklist against the identified draft version and source packet.",
      "Document what matched, what was flagged, and which evidence was compared.",
      "Route corrections and possible duplicates to the designated owner without clearing them independently.",
    ],
    ownerResponsibilities: [
      "Set checklist criteria, customer rules, calculation tolerances, and duplicate policy.",
      "Resolve financial, customer, policy, or source exceptions and authorize corrections.",
      "Make the approval and release decision for the invoice.",
    ],
    boundary:
      "A checklist result is not a financial opinion or approval. The specialist does not change prices, determine tax or accounting treatment, dismiss a duplicate candidate, or authorize the invoice for release.",
    qualityIntroduction:
      "The check is useful when another reviewer can reproduce what was examined and see what still requires a decision.",
    quality: [
      "Checklist and template version recorded with the draft version.",
      "Fields, totals, dates, and attachments compared to approved references.",
      "Duplicate candidates and exceptions state the evidence and decision owner.",
      "Open items remain visible; no flagged item is represented as approved.",
    ],
    faqs: [
      {
        question: "Is this invoice approval or an audit opinion?",
        answer:
          "No. It is an operational check against criteria supplied by your finance team. The authorized reviewer retains financial judgment, approval, and release, and the service does not replace an audit or assurance engagement.",
      },
      {
        question: "Can the specialist fix a field that does not match?",
        answer:
          "The specialist can return the field to its preparer or stage a correction when your written process permits it. A change that needs source interpretation, pricing judgment, or policy approval goes to its decision owner.",
      },
      {
        question: "How are duplicate candidates handled?",
        answer:
          "The specialist records the records and identifiers that match the configured search rules. A finance owner determines whether the candidate is a duplicate, a valid recurring item, or a separate charge.",
      },
      {
        question: "Can the checklist vary by customer?",
        answer:
          "Yes. A shared baseline can be paired with approved customer-specific fields, formats, and attachments. The team supplies and versions those rules so the reviewer can see which checklist applied.",
      },
    ],
    related: [
      "invoice-draft-preparation",
      "supporting-documentation",
      "customer-billing-records",
    ],
    relatedIntroduction:
      "Review checks can follow draft preparation and evidence assembly, while customer-specific master-data changes remain on their own authorization path.",
    ctaTitle: "Define the checks before the next invoice reaches approval.",
    ctaCopy:
      "Bring a current checklist, a representative draft, and the owner who approves exceptions. We can map the review steps without confusing them with approval authority.",
  },
  "customer-billing-records": {
    image: "/editorial/services/customer-billing-records.webp",
    alt: "Businesswoman reviews billing documents at her office desk",
    opening:
      "Maintain approved customer billing fields with a verifiable source, effective date, and change history. Routine updates follow your access and verification rules; sensitive or ambiguous requests stop for the authorized owner.",
    audience:
      "Billing and finance teams maintaining customer entities, billing contacts, PO references, delivery preferences, and approved account notes across systems.",
    problem:
      "A change request may arrive by email while the billing system, CRM, and customer portal still show different values. Updating the wrong record or acting on an unverified message can misdirect an invoice. A controlled change lane captures who requested what, what source supports it, and who approved it.",
    scope: [
      "Process authorized changes to the customer fields listed in the role’s access matrix.",
      "Verify requester identity, affected account, source, effective date, and required approval before changing a field.",
      "Record the prior value, approved new value, source, and completion reference where the system allows.",
      "Reconcile the updated record to the system of record and route sensitive or ambiguous changes for review.",
    ],
    deliverables: [
      "A completed approved-field update or a clearly documented pending request.",
      "A provenance note with requester, source, approval, effective date, and changed fields.",
      "An exception queue for uncertain, conflicting, or restricted information.",
      "A current billing-contact, PO, or delivery-preference view from the designated system.",
    ],
    onboardingInputs: [
      "The customer master system of record and the specific fields in scope.",
      "Authorized requester lists, verification steps, approval matrix, and sensitive-change rules.",
      "Field definitions, effective-date handling, evidence retention, and correction process.",
      "Role-based access, permitted update actions, and the separate approver for restricted fields.",
      "Customer-specific billing and delivery preferences with a named owner for conflicts.",
    ],
    workflow: [
      {
        title: "Log the requested change",
        copy: "Capture the account, requester, exact field, proposed value, effective date, and source without overwriting the current record.",
      },
      {
        title: "Verify authority and scope",
        copy: "Use the agreed identity and approval steps, then check that the field is permitted for this role. Stop sensitive or unclear requests for review.",
      },
      {
        title: "Apply only approved fields",
        copy: "Update the designated system when authorization is complete, retaining the old value and change reference according to your procedure.",
      },
      {
        title: "Reconcile and hand off",
        copy: "Check that the saved value matches the authorized request, record the completion reference, and send any exception to its owner.",
      },
    ],
    workflowExampleTitle: "Illustrative example: a billing contact changes",
    workflowExample:
      "A request asks to replace an accounts-payable contact and update the invoice-delivery preference. The specialist checks the requester against the supplied authority list, confirms the customer account and effective date, and stages only those approved fields. A request to change payment instructions or legal entity details is held for the separate verification and approval your policy requires.",
    specialistResponsibilities: [
      "Process only the fields and systems listed in the approved access matrix.",
      "Preserve the source, requester, effective date, old value, and completion reference.",
      "Reconcile routine updates and route sensitive or conflicting requests without guessing.",
    ],
    ownerResponsibilities: [
      "Define authorized requesters, verification controls, field permissions, and approval owners.",
      "Approve sensitive updates such as payment instructions, tax identifiers, legal entities, or billing terms.",
      "Resolve disputes about customer identity, authority, or conflicting records.",
    ],
    boundary:
      "The specialist does not invent missing values, act on an unverified request, bypass role-based access, or approve sensitive changes. Payment, tax, legal-entity, and commercial-term fields require the independent authorization your policy specifies.",
    qualityIntroduction:
      "A completed record change should be traceable to the person and evidence that authorized it, not merely to the person who entered it.",
    quality: [
      "Account identity and authorized requester confirmed against the agreed source.",
      "Only in-scope fields updated, with effective date and approval reference recorded.",
      "Old and new values compared where the system supports a change record.",
      "Sensitive, conflicting, and unverifiable requests remain pending for owner review.",
    ],
    faqs: [
      {
        question: "Which customer records can the specialist update?",
        answer:
          "Only the named fields and systems in your access matrix. Typical routine examples may include an approved billing contact or PO reference; your team decides which changes require additional review.",
      },
      {
        question: "Can the specialist change bank or payment instructions?",
        answer:
          "Not by relying on an ordinary email or an unverified request. Sensitive payment changes must follow your independent verification and approval procedure; the specialist can document and route the request if that is within scope.",
      },
      {
        question: "What if the CRM and billing system disagree?",
        answer:
          "The discrepancy is logged with both source references and routed to the owner of the relevant system or customer relationship. The specialist does not choose which record controls unless the team has documented that rule.",
      },
      {
        question: "Can historical customer notes be cleaned up?",
        answer:
          "Only under an approved field, retention, and correction rule. Unclear history should be preserved or flagged for the record owner instead of silently rewritten.",
      },
    ],
    related: [
      "invoice-draft-preparation",
      "billing-schedule-support",
      "billing-status-reporting",
    ],
    relatedIntroduction:
      "Verified customer details can inform drafts and status views; each record change still follows its own source and approval path.",
    ctaTitle: "Put a clear approval path around billing-record changes.",
    ctaCopy:
      "Bring the customer fields in scope, your verification rules, and one example of a routine and sensitive change. We can separate preparation work from the approvals your team retains.",
  },
  "billing-status-reporting": {
    image: "/editorial/services/billing-status-reporting.webp",
    alt: "Colleagues review business data together during an office meeting",
    opening:
      "Turn the current billing queue into an owner-linked view of drafts, review, approval, release, and open exceptions. Each status should trace to a source event; finance leaders retain priority, customer, and corrective-action decisions.",
    audience:
      "Controllers, billing managers, and operations leads who need to see what is waiting, who owns the next step, and which source supports each reported status.",
    problem:
      "A status meeting becomes a reconstruction exercise when one spreadsheet says draft, a system says approved, and no record confirms delivery. A reporting lane reconciles the source queue and makes aging, missing owners, and unresolved exceptions visible without implying that unrecorded work is complete.",
    scope: [
      "Reconcile stage, owner, due date, and evidence fields from the designated billing queue and systems.",
      "Prepare recurring views of upcoming work, aging items, approval state, delivery evidence, and defined exception types.",
      "Flag missing owners, stale updates, contradictory stages, and records that cannot be tied to a source event.",
      "Record the next follow-up owner and recurring data-quality patterns using agreed definitions.",
    ],
    deliverables: [
      "A dated operational report with a reproducible source and reporting window.",
      "An open-item and aging view grouped by the agreed status and exception definitions.",
      "A missing-owner and overdue-follow-up list with the next recorded action.",
      "A short data-quality note separating source facts from unresolved interpretation.",
    ],
    onboardingInputs: [
      "The billing queue or system of record and fields used to identify each invoice item.",
      "Definitions and evidence for draft, review, approved, released, sent, and paid states.",
      "Reporting cadence, time zone, cut-off, aging bands, and approved exception categories.",
      "Role owners for status corrections, customer follow-up, approval, and escalation.",
      "The audience, permitted detail, report format, and who reviews changes to definitions.",
    ],
    workflow: [
      {
        title: "Set the reporting window",
        copy: "Use the agreed cut-off, time zone, filters, and status definitions so each report can be compared to the same operating period.",
      },
      {
        title: "Reconcile queue records",
        copy: "Check item identity, source event, stage, owner, due date, and evidence link. Mark contradictions or stale fields as exceptions.",
      },
      {
        title: "Prepare owner and aging views",
        copy: "Group open items by the agreed stage and age bands, preserving which owner action or recorded event supports each grouping.",
      },
      {
        title: "Hand off facts and questions",
        copy: "Deliver the dated view and missing-owner list to the billing manager. Route source corrections to data owners; leaders set priorities and actions.",
      },
    ],
    workflowExampleTitle: "Illustrative example: approval is recorded but delivery is not",
    workflowExample:
      "In the reporting window, one invoice has an approval timestamp but no delivery event in the designated system. The specialist reports it as approved with delivery evidence missing, links the source record, and assigns a follow-up to the process owner. The specialist does not mark it sent based on the approval alone; the owner confirms the delivery record or corrects the source.",
    specialistResponsibilities: [
      "Compile and reconcile status from the sources and definitions agreed at onboarding.",
      "Show source timestamp, owner, age, and open exceptions consistently.",
      "Route missing or conflicting status data to the system or process owner.",
    ],
    ownerResponsibilities: [
      "Define what each status means and which event proves the transition.",
      "Set priorities, customer commitments, and corrective actions for late or blocked work.",
      "Approve changes to reporting rules and resolve material data conflicts.",
    ],
    boundary:
      "The report describes what the approved records show for its stated cut-off. It does not infer delivery, payment, revenue recognition, customer commitment, or priority from a missing event.",
    qualityIntroduction:
      "A useful operating view is reproducible: the same reporting window, definitions, and source records should explain the reported status.",
    quality: [
      "Reporting period, time zone, source, and extraction time are stated.",
      "Each included item maps to the agreed status, owner, and supporting event.",
      "Aging bands and exception categories are applied consistently.",
      "Missing evidence and source conflicts remain visible rather than being inferred away.",
    ],
    faqs: [
      {
        question: "Does a status report decide which invoice should be prioritized?",
        answer:
          "No. The report can surface age, due date, exception, and owner information. Your finance or operations leader sets priorities and customer commitments.",
      },
      {
        question: "Can the specialist mark an invoice as sent when approval is complete?",
        answer:
          "Only when the designated system contains the agreed delivery event or an authorized owner supplies acceptable evidence. Approval alone is not treated as proof of release or delivery.",
      },
      {
        question: "Do we need a new dashboard to begin?",
        answer:
          "No. Start with a consistent source queue, stage definitions, owner fields, and a useful reporting cadence. The format can be a controlled spreadsheet or an existing reporting tool if the source trail is reproducible.",
      },
      {
        question: "Which measures can the report include?",
        answer:
          "Choose measures tied to operating decisions, such as open items by stage, age, missing owner, or exception type. Your team defines the calculations and validates what each measure means before relying on it.",
      },
    ],
    related: [
      "billing-schedule-support",
      "invoice-quality-review",
      "customer-billing-records",
    ],
    relatedIntroduction:
      "Status reporting is strongest when schedule triggers, review outcomes, and customer-record owners use clearly defined source events.",
    ctaTitle: "Make the billing queue easier to review and act on.",
    ctaCopy:
      "Bring your current queue, stage definitions, report audience, and a sample status that is hard to verify. We can map the source evidence and owner handoffs before choosing a format.",
  },
};
