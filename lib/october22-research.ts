import type { ResearchPost } from './types';

export const october22ResearchPosts: ResearchPost[] = [
  {
    "slug": "invoice-line-variance-classification",
    "title": "Classifying Invoice Line Variances for Review",
    "summary": "A reproducible method for distinguishing quantity, rate, tax, timing, and source differences before an invoice is approved.",
    "cluster": "Billing research",
    "publishedAt": "2026-10-22",
    "finding": "Invoice line variance is useful only when the comparison baseline, field definition, tolerance, and reason code are fixed before reviewers inspect the result.",
    "thumbnail": "/thumbnails/october-22/invoice-line-variance-classification.webp",
    "methodology": "This brief defines an original classification method for local billing review. It does not report a measured error rate, a customer benchmark, or an audit conclusion. Public internal control and recordkeeping guidance was reviewed for principles of defined responsibility, evidence, and traceable correction.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks how a billing team can classify invoice line differences in a way that another reviewer can reproduce. The unit of analysis is an invoice line compared with an approved source, such as a purchase order, contract, rate card, timesheet, usage record, or prior invoice.",
          "The scope is the administrative classification of a difference. It excludes the accounting decision to recognize revenue, the tax treatment of a line, and the commercial decision to accept a customer claim. Those decisions require the authorized owner. The method is designed to route the question, not to settle it."
        ]
      },
      {
        "heading": "Fix the comparison baseline",
        "paragraphs": [
          "A variance has no meaning without a baseline. Record the source document, its version or effective date, the fields compared, and the extraction date. If the baseline is a purchase order, state whether the comparison uses the authorized amount, the unit price, the quantity, or all three.",
          "When two sources conflict, do not choose the one that produces a cleaner result. Record both and route the conflict to the owner who can resolve it. A baseline that changes during the review should be versioned, and the earlier result should be retained."
        ]
      },
      {
        "heading": "Separate the variance types",
        "paragraphs": [
          "A quantity variance means the billed quantity differs from the approved or delivered quantity. A rate variance means the unit price differs. A tax variance means the tax field, rate, or treatment differs. A timing variance means the line belongs to a different period. A source variance means the invoice references the wrong document, customer, or entity.",
          "These categories are not interchangeable. A rate difference can produce a quantity-looking total, and a timing difference can look like a missing line. Use one primary reason per line and record secondary reasons only when they are independently supported."
        ]
      },
      {
        "heading": "Set tolerances deliberately",
        "paragraphs": [
          "A tolerance is a rule for when a difference is small enough to accept without further review. It should be approved by the process owner and stated in the method. A tolerance based on a percentage, an absolute amount, or a combination should be applied consistently across the population.",
          "Do not let a tolerance hide a pattern. A series of small differences in the same direction may be more important than one large difference. Report the count and total of within-tolerance differences so the reviewer can see the pattern."
        ]
      },
      {
        "heading": "Handle missing and ambiguous evidence",
        "paragraphs": [
          "If the baseline is missing, the line cannot be classified as matched. Mark it as missing source and route it to the owner. Do not infer the baseline from the invoice or from a prior period. A reconstructed baseline can be useful, but it should be labeled as reconstructed and reviewed.",
          "Ambiguous lines, such as a bundled service or a mixed tax category, may require a specialist. Record the ambiguity and the question. A classification of other without a specific note is not actionable."
        ]
      },
      {
        "heading": "Review and improve the method",
        "paragraphs": [
          "Test the method on a sample that includes ordinary lines, exceptions, credits, and a period boundary. Measure reviewer agreement on the reason code. If two reviewers disagree, the definition or the baseline is unclear. Revise the method before expanding the sample.",
          "Report counts by reason, baseline source, customer, and reviewer. Use the pattern to improve the intake or the source document. The method is a learning control, not a certification that the invoice is correct."
        ]
      }
    ],
    "faq": [
      { "q": "Does a within-tolerance difference require no review?", "a": "It may be accepted under the approved rule, but the count and pattern should still be reported." },
      { "q": "What if the purchase order and contract conflict?", "a": "Record both, stop the classification, and route the conflict to the owner who can resolve the commercial terms." },
      { "q": "Can the method prove an invoice is accurate?", "a": "No. It classifies differences against a declared baseline. Accuracy and accounting conclusions require the authorized review." }
    ],
    "sources": [
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" },
      { "label": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework" },
      { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" }
    ]
  },
  {
    "slug": "billing-schedule-adherence-measurement",
    "title": "Measuring Billing Schedule Adherence",
    "summary": "A method for defining scheduled billing events, on-time completion, delays, exceptions, and the limits of adherence measures.",
    "cluster": "Billing research",
    "publishedAt": "2026-10-22",
    "finding": "Billing schedule adherence is a measure of process reliability, not revenue quality, and it depends on a fixed event definition, a declared clock, and visible exceptions.",
    "thumbnail": "/thumbnails/october-22/billing-schedule-adherence-measurement.webp",
    "methodology": "This brief presents an original measurement design. It does not report a benchmark, a customer outcome, or a financial result. Public control guidance informs the definition of responsibility and evidence. Local application should use the organization's billing calendar and approval rules.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks whether a billing team can measure adherence to a billing schedule in a way that is reproducible and useful. The unit of analysis is a scheduled billing event, such as a recurring invoice, a milestone invoice, a retainer draw, or a usage billing run.",
          "The scope is the administrative timing of the event. It excludes the accounting period of revenue recognition and the customer's payment behavior. A late invoice and a late payment are different events. Mixing them produces a measure that cannot guide the billing process."
        ]
      },
      {
        "heading": "Define the scheduled event",
        "paragraphs": [
          "Record the event type, the customer, the contract or order reference, the scheduled date, the amount or quantity basis, and the owner. The schedule should come from an approved source, not from a list maintained by memory. If the schedule changes, record the change and the effective date.",
          "Define whether the event is a preparation deadline, an approval deadline, a delivery deadline, or a payment due date. These are different clocks. An invoice prepared on time but delivered late is not the same as an invoice prepared late. Report the clock that the measure actually uses."
        ]
      },
      {
        "heading": "Define on-time and late",
        "paragraphs": [
          "On-time should have a precise definition. It may mean the invoice was delivered by the scheduled date, approved by the internal deadline, or queued before the billing run cutoff. Record the time zone and whether weekends and holidays count.",
          "A late event should have a reason code: missing source, pending approval, customer delay, system outage, delivery failure, or schedule change. A late item without a reason is not useful for improvement. The reason should point to an owner and a next action."
        ]
      },
      {
        "heading": "Handle exceptions and censoring",
        "paragraphs": [
          "Some events are legitimately not billable at the scheduled date, such as a milestone that is not accepted or a usage period that has not closed. These should be excluded from the adherence denominator only under a declared rule. Otherwise, the measure will punish the team for a contract condition.",
          "Events that are still open at the end of the observation window are censored. Report them separately. Excluding them can make adherence look better than it is, while counting them as late can overstate the problem."
        ]
      },
      {
        "heading": "Analyze patterns",
        "paragraphs": [
          "Report adherence by event type, customer, owner group, and reason. Look for clusters rather than a single average. A customer with a recurring approval delay may need a different communication path, while a system outage may require a contingency plan.",
          "Do not infer causation from the schedule data alone. A late event may be caused by a missing purchase order, an unavailable approver, or a contract change. Inspect a sample before assigning blame or changing the process."
        ]
      },
      {
        "heading": "Use the measure responsibly",
        "paragraphs": [
          "The measure describes whether the billing process met its own schedule. It does not prove that the invoice was accurate, that the customer was satisfied, or that revenue was recognized correctly. Pair it with quality and exception measures.",
          "Retain the schedule version, the event list, the definitions, and the findings. A measure that cannot be reproduced is not a control. Use the result to fix the cause of delays, not to pressure the team into issuing unsupported invoices."
        ]
      }
    ],
    "faq": [
      { "q": "Should a customer-caused delay count against the billing team?", "a": "That depends on the declared rule. Report it separately so the team can see the cause without distorting internal performance." },
      { "q": "What is a good adherence target?", "a": "There is no universal target. Set it with the process owner based on the schedule, dependencies, and risk." },
      { "q": "How should schedule changes be treated?", "a": "Record the change, the approver, and the effective date. Use the approved schedule version for the measure." }
    ],
    "sources": [
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" },
      { "label": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework" }
    ]
  },
  {
    "slug": "customer-billing-master-change-audit",
    "title": "Auditing Customer Billing Master Changes",
    "summary": "An evidence framework for reviewing billing contact, portal, entity, and purchase order changes before they affect invoice delivery.",
    "cluster": "Billing research",
    "publishedAt": "2026-10-22",
    "finding": "A billing master change audit is strongest when it tests the source, verification, approval, and post-change delivery evidence for each change, not only whether a record was updated.",
    "thumbnail": "/thumbnails/october-22/customer-billing-master-change-audit.webp",
    "methodology": "This brief defines an original audit design. It does not report an audited population or a compliance conclusion. Public identity, control, and recordkeeping guidance informs the evidence dimensions. The design should be adapted to the organization's billing system and customer risk profile.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks whether a customer billing master change contains enough evidence for an independent reviewer to understand what changed, who requested it, who approved it, and how the new detail was verified. The unit of analysis is a change event.",
          "The scope includes billing contacts, delivery addresses, portals, legal entities, purchase order references, and payment instructions where they affect invoice delivery. It excludes credit decisions and invoice-level disputes. A billing master change can affect both, so the audit should note where a change requires a separate review."
        ]
      },
      {
        "heading": "Define the population and sample",
        "paragraphs": [
          "Export the change log for a declared period. Record the system, query date, filters, and count. Decide whether the population includes all changes or only sensitive categories. If a subset is used, explain why and do not describe the result as covering the full population.",
          "Stratify by change type, customer segment, request channel, and approver. Include changes that were reversed or corrected, because those events often reveal a control gap. Include changes with missing evidence rather than excluding them."
        ]
      },
      {
        "heading": "Test the evidence dimensions",
        "paragraphs": [
          "For each change, test the request identity, business rationale, supporting document, verification method, approval authority, and post-change delivery confirmation. The request identity asks who asked for the change and through what channel. The business rationale asks why the change is needed.",
          "Verification is the dimension most often missing. A call to a known contact, a confirmation through an established portal, or a second approver can provide it. Record the method, the person, the date, and the result. Approval authority asks whether the approver was allowed to approve that change type."
        ]
      },
      {
        "heading": "Evaluate delivery after the change",
        "paragraphs": [
          "A billing master change is not complete until the next invoice reaches the intended recipient. Check the first delivery after the change for the address, portal, format, and acknowledgment. A change that was approved but never tested can leave invoices in the wrong queue.",
          "If the change involved a sensitive redirect, confirm that the old contact was notified or that the old path was disabled. Record the evidence. A silent redirect is a potential fraud or data-loss path even if the approval looks complete."
        ]
      },
      {
        "heading": "Protect independence and report missing evidence",
        "paragraphs": [
          "The reviewer should not audit changes they requested or approved. If independence is not possible, disclose the conflict and use a second reviewer. Missing evidence should be reported, not excluded. A change with no verification is a finding even if the new detail turns out to be correct.",
          "Use a consistent rating for each dimension: sufficient, incomplete, missing, or conflicting. Do not collapse the ratings into a single pass or fail without explaining the basis. The rating should be reproducible from the retained records."
        ]
      },
      {
        "heading": "Analyze patterns and limitations",
        "paragraphs": [
          "Report findings by change type, channel, approver group, and evidence dimension. Look for a channel with no verification or a customer with repeated corrections. Do not infer fraud from a pattern. Use the pattern to decide where to inspect further.",
          "The audit cannot prove that all changes are valid. It can show whether the sampled changes have the required evidence and whether the control is operating as designed. State the sampling method, exclusions, and records that could not be reviewed."
        ]
      }
    ],
    "faq": [
      { "q": "Is an email request enough to change a billing contact?", "a": "It may be for a routine change under the approved process. Sensitive changes need verification through a known channel and the required approval." },
      { "q": "Should reversed changes be included?", "a": "Yes. They can reveal a control failure or a corrected error and should be part of the sample." },
      { "q": "Can the audit guarantee that no fraudulent change occurred?", "a": "No. It tests evidence on a sample. It does not prove the absence of all invalid changes." }
    ],
    "sources": [
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" },
      { "label": "NIST Privacy Framework", "url": "https://www.nist.gov/privacy-framework" },
      { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }
    ]
  },
  {
    "slug": "invoice-delivery-failure-analysis",
    "title": "Analyzing Invoice Delivery Failures",
    "summary": "A method for classifying bounced email, portal rejection, wrong recipient, and unacknowledged delivery without confusing them with payment delay.",
    "cluster": "Billing research",
    "publishedAt": "2026-10-22",
    "finding": "Invoice delivery failure analysis requires a delivery event definition, channel-specific evidence, and a separation between non-delivery and customer non-payment.",
    "thumbnail": "/thumbnails/october-22/invoice-delivery-failure-analysis.webp",
    "methodology": "This brief defines an original operational analysis. It does not report a delivery rate or a customer benchmark. Public security and control guidance informs the evidence dimensions. Local application should use the organization's email, portal, and billing records.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks how a billing team can classify invoice delivery failures in a way that leads to a specific fix. The unit of analysis is a delivery attempt, not an invoice. An invoice may have several attempts across email, portal, and customer systems.",
          "The scope includes bounced email, blocked attachments, portal rejection, wrong recipient, missing acknowledgment, and delivery to an obsolete address. It excludes customer payment behavior and invoice accuracy. A delivered but disputed invoice is a different question."
        ]
      },
      {
        "heading": "Define a delivery event",
        "paragraphs": [
          "A delivery event should record the invoice, customer, channel, recipient, timestamp, format, and result. For email, the result may be accepted by the server, bounced, or blocked. For a portal, it may be uploaded, validated, rejected, or pending. Do not treat sent as delivered.",
          "Record the evidence for each result. A screenshot of a sent message is weaker than a delivery confirmation or a portal submission reference. If the only evidence is a person's memory, label it as unconfirmed."
        ]
      },
      {
        "heading": "Classify the failure",
        "paragraphs": [
          "Use a short reason list: invalid address, mailbox full, blocked sender, attachment rejected, portal format error, missing portal credentials, wrong customer entity, wrong recipient, and no confirmation. Each reason should point to an owner and a corrective action.",
          "A wrong recipient is not just a delivery problem. It may be a data incident if the invoice contains sensitive information. Route it through the security or privacy process and record the notification. Do not simply resend to the correct address and close the item."
        ]
      },
      {
        "heading": "Separate delivery from payment",
        "paragraphs": [
          "A customer may receive an invoice and still pay late. A delivery failure may delay payment, but the two measures should not be combined. Report delivery status and payment status separately so the team can see which problem it is solving.",
          "If a customer says the invoice was not received, compare the delivery record with the customer's address and spam or portal settings. A repeated claim from the same customer may require a different channel or a contact review."
        ]
      },
      {
        "heading": "Analyze patterns",
        "paragraphs": [
          "Report failures by channel, customer, recipient domain, format, and reason. Look for a domain that blocks the sender, a portal that rejects a file type, or a customer with outdated contacts. These are process fixes, not one-off resends.",
          "Do not infer that a delivery failure caused a payment delay without evidence. The customer may have received the invoice through another path or may have a separate dispute. Use the pattern to generate a question, then inspect the record."
        ]
      },
      {
        "heading": "Limitations and practical use",
        "paragraphs": [
          "The analysis depends on the quality of delivery confirmations. Many email systems do not provide a reliable read receipt, and a portal acceptance may not mean the customer viewed the invoice. State these limits rather than presenting a delivery rate as certainty.",
          "Use the findings to improve the billing master, the template, and the channel instructions. Re-test after the change. The goal is a delivery record that shows what happened and what to fix, not a blame list."
        ]
      }
    ],
    "faq": [
      { "q": "Does a sent email prove delivery?", "a": "No. It proves an attempt. Use a delivery confirmation or portal reference where available." },
      { "q": "How should a wrong-recipient invoice be handled?", "a": "Treat it as a potential data incident, follow the security and privacy process, and record the notification and remediation." },
      { "q": "Should delivery failures be included in payment delay measures?", "a": "Keep them separate. Delivery status and payment status answer different questions." }
    ],
    "sources": [
      { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" },
      { "label": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework" },
      { "label": "NIST Privacy Framework", "url": "https://www.nist.gov/privacy-framework" },
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
    ]
  },
  {
    "slug": "credit-memo-root-cause-classification",
    "title": "Classifying Credit Memo Root Causes",
    "summary": "A review method for separating pricing, service, duplicate, tax, and timing credits so recurring causes can be fixed.",
    "cluster": "Billing research",
    "publishedAt": "2026-10-22",
    "finding": "Credit memo analysis is useful when the reason code reflects the cause of the adjustment, not the department that approved it, and when the original invoice remains linked to the credit.",
    "thumbnail": "/thumbnails/october-22/credit-memo-root-cause-classification.webp",
    "methodology": "This brief defines an original classification method. It does not report a credit rate, a recovery result, or an audit finding. Public control and recordkeeping guidance informs the evidence dimensions.",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This brief asks how a billing team can classify credit memos so that recurring causes become visible. The unit of analysis is an approved credit memo linked to an invoice or account. The question is why the adjustment was needed, not who approved it.",
          "The scope includes credits for pricing, service, duplicates, tax, timing, returns, and goodwill. It excludes refunds that are not tied to an invoice and accounting judgments about revenue. The method is an administrative review of the credit record."
        ]
      },
      {
        "heading": "Link the credit to its origin",
        "paragraphs": [
          "Every credit should reference the original invoice, customer, amount, and reason. If the credit is not tied to an invoice, record the account and the agreement that supports it. A credit without an origin is difficult to analyze and easy to misuse.",
          "Preserve the original invoice and the credit as separate records. Do not overwrite the invoice amount. The pair shows what was billed and what was adjusted. If a replacement invoice is issued, link all three records."
        ]
      },
      {
        "heading": "Define cause categories",
        "paragraphs": [
          "Use categories that describe the cause: pricing error, quantity error, duplicate charge, service failure, tax correction, timing or period correction, return, and goodwill. Each category should have a definition and an example. A generic adjustment category will hide the pattern.",
          "Separate the cause from the remedy. A duplicate charge may be resolved by a credit, a refund, or a reversal. The cause tells you what to fix upstream. The remedy tells you how the account was corrected."
        ]
      },
      {
        "heading": "Review evidence and approval",
        "paragraphs": [
          "For each sampled credit, check the request, the supporting evidence, the approval, the application, and the customer communication. A credit approved without evidence may still be valid, but the record should show the basis. A credit applied to the wrong invoice is a separate finding.",
          "Check that the approver had authority for the amount and reason. If the approver was also the requester, disclose the conflict. High-risk credits may require a second reviewer."
        ]
      },
      {
        "heading": "Analyze patterns without overreach",
        "paragraphs": [
          "Report credits by cause, customer, product, preparer, and period. Look for a cluster of pricing credits after a catalog change or a cluster of service credits after a delivery change. These patterns suggest an upstream cause.",
          "Do not infer that a credit indicates fraud or poor performance. A credit can be a legitimate correction or a customer relationship decision. Inspect the records before drawing a conclusion."
        ]
      },
      {
        "heading": "Use the findings",
        "paragraphs": [
          "Share the pattern with the owner of the upstream process: pricing, product, service, tax, or billing intake. Assign a corrective action and a retest date. A credit review that only reports totals does not improve the process.",
          "Retain the sample, the reason codes, the approvals, and the corrective actions. Re-test after the change. The goal is fewer avoidable credits and a clearer record for the credits that remain."
        ]
      }
    ],
    "faq": [
      { "q": "Should goodwill credits have a cause code?", "a": "Yes. Use a distinct category so the business can see the cost and the reason without confusing it with an error." },
      { "q": "Can a credit be approved by the person who requested it?", "a": "Only if the policy allows it and the conflict is disclosed. High-risk credits should use an independent approver." },
      { "q": "What is the most important field?", "a": "The link to the original invoice or account and the cause code. Without them, the credit cannot be analyzed." }
    ],
    "sources": [
      { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" },
      { "label": "IRS Recordkeeping Guidance", "url": "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" },
      { "label": "NIST Cybersecurity Framework", "url": "https://www.nist.gov/cyberframework" }
    ]
  }
];
