import type { BlogPost } from './types';

export const october22BlogPosts: BlogPost[] = [
  {
    "slug": "billing-hold-release-log",
    "title": "Keep a Billing Hold and Release Log",
    "description": "A controlled record for pausing invoice release, documenting the reason, assigning the owner, and proving the release condition.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/billing-hold-release-log.webp",
    "sections": [
      {
        "heading": "Why a billing hold needs its own record",
        "paragraphs": [
          "A billing hold stops an invoice from reaching the customer before a question is resolved. The question may involve a missing purchase order, an unconfirmed milestone, a disputed rate, a tax field, or a credit that has not been applied. If the hold lives only in an email or a memory, the invoice can be released by someone who does not know why it was paused.",
          "The log should make the hold visible without turning it into a permanent block. Record the invoice, customer, amount, reason, owner, date, and the specific condition that will allow release. That structure lets another person pick up the item and lets a reviewer see whether the hold is still justified."
        ]
      },
      {
        "heading": "Use a small set of hold reasons",
        "paragraphs": [
          "Common reasons include missing source evidence, customer approval pending, rate or quantity question, tax or billing-field review, duplicate suspicion, credit pending, and delivery failure. Each reason should point to a different owner and a different release document. A generic pending review label hides the work that is actually required.",
          "The reason list should be short enough to use consistently. If a new reason appears repeatedly, add it deliberately and define the evidence. Do not let the team create a new label for every customer conversation, because the log will become a second inbox."
        ]
      },
      {
        "heading": "Define the release condition before the hold",
        "paragraphs": [
          "A release condition is the evidence that resolves the question. For a missing purchase order, it may be the approved order or a written confirmation from the customer owner. For a milestone, it may be the acceptance record. For a tax field, it may be the completed form or an approved exception. Write the condition in the log when the hold is created.",
          "The person who releases the invoice should not be the only person who understands the condition. The log should show the evidence link and the approver. If the condition changes, record the change and the reason rather than quietly editing the original entry."
        ]
      },
      {
        "heading": "Separate release from invoice approval",
        "paragraphs": [
          "A hold release means the blocking question is resolved. It does not necessarily mean the invoice is approved for delivery. The normal review, approval, and delivery steps still apply. Combining the two can let a release bypass a control that was designed for a different risk.",
          "Use separate fields for hold status, invoice approval status, and delivery status. A reviewer should be able to see that an invoice is released from a billing question but still waiting for a finance approval. That separation reduces confusion and prevents premature customer contact."
        ]
      },
      {
        "heading": "Review aged holds and recurring causes",
        "paragraphs": [
          "Review open holds by age, reason, customer, and amount. Ask why each item remains open and what action is due. A hold with no owner or no next date is not a control. It is an unresolved item that may become a late invoice or a customer dispute.",
          "Look for patterns. Repeated missing purchase orders may indicate a sales handoff problem. Repeated rate questions may indicate an unclear contract or price list. Use the pattern to fix the upstream source, not just to clear the queue."
        ]
      },
      {
        "heading": "Pilot the log on one billing stream",
        "paragraphs": [
          "Choose one customer group or invoice type with a known reviewer. Run the log for a full billing cycle. At the end, compare the time spent searching for the hold reason, the number of invoices released without evidence, and the holds that required escalation.",
          "Expand only after the first stream produces a consistent record and a predictable review rhythm. The goal is a release decision that can be explained later, not a longer list of statuses."
        ]
      }
    ],
    "faq": [
      { "q": "Who can release a billing hold?", "a": "The delegation policy should name the release owner for each hold reason. High-risk reasons such as tax or bank changes may require a second approver." },
      { "q": "Should the customer be told about the hold?", "a": "Share only what the customer needs to resolve the issue, through the approved communication channel. Do not disclose internal suspicions." },
      { "q": "How often should holds be reviewed?", "a": "At a cadence set by the process owner, with more frequent review for high-value or aged items." }
    ],
    "internalService": "/services/invoice-quality-review",
    "internalSibling": "/blog/invoice-correction-versus-cancellation",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "time-and-materials-invoice-backup-package",
    "title": "Assemble a Time and Materials Invoice Backup Package",
    "description": "A practical evidence pack for hours, rates, approvals, expenses, and exceptions on time and materials invoices.",
    "category": "Invoice evidence",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/time-and-materials-invoice-backup-package.webp",
    "sections": [
      {
        "heading": "Start with the approved commercial terms",
        "paragraphs": [
          "A time and materials invoice depends on three questions: what work was authorized, what time or expense was incurred, and what rate applies. The backup package should answer those questions in that order. Start with the contract, statement of work, rate card, or purchase order that authorizes the work and the billing method.",
          "Record the effective dates and any approved change orders. A rate that was correct at the start of the project may not apply to later work. If the terms are unclear, mark the invoice as held for commercial review rather than choosing the most recent rate or the one that produces the expected total."
        ]
      },
      {
        "heading": "Tie hours to approved work",
        "paragraphs": [
          "For each time entry, capture the date, person or role, hours, task, project or phase, and the approval reference. If the customer requires a timesheet, attach it or link to the approved system record. Do not summarize a month of work into a single line if the contract requires detail.",
          "The payables or billing specialist can check that the entries are complete and consistent with the approved scope. The project owner should confirm that the work was performed and that the hours are billable. A missing approval is an exception, not a reason to estimate the hours."
        ]
      },
      {
        "heading": "Apply rates and expenses consistently",
        "paragraphs": [
          "Use the rate that matches the role, effective date, and contract. If the invoice includes overtime, differentials, or a blended rate, show the calculation and the approval. For expenses, attach receipts or the approved expense report and state whether the amount is billed at cost, with a markup, or capped.",
          "Keep the calculation visible. A total that cannot be reconstructed from the rate, hours, and expenses is difficult to review and easy to dispute. If a credit or cap applies, show it as a separate line rather than adjusting the rate silently."
        ]
      },
      {
        "heading": "Document changes and exceptions",
        "paragraphs": [
          "Change orders, scope additions, and out-of-scope work should be linked to the invoice line they affect. If the customer approved the work verbally, record who approved it, when, and through what channel, and route the missing written confirmation to the account owner.",
          "Use a short exception list: missing timesheet, unapproved role, rate mismatch, expense without receipt, cap exceeded, and scope not confirmed. Each exception needs an owner and a release condition. The invoice should not be described as complete while a material exception remains open."
        ]
      },
      {
        "heading": "Review the package before delivery",
        "paragraphs": [
          "Check that the invoice total equals the sum of the detailed lines, that the customer and billing entity are correct, and that the purchase order or contract reference appears. Review a sample of time entries against the source record and a sample of expenses against receipts.",
          "The review should also confirm that the backup package does not include information the customer should not receive, such as internal cost notes or unrelated projects. Separate the customer-facing backup from the internal review file when necessary."
        ]
      },
      {
        "heading": "Pilot one project type",
        "paragraphs": [
          "Choose one project type with a clear rate card and an available project owner. Build the package for one billing cycle and review it together. Record where the evidence was missing and whether the customer format needs adjustment.",
          "Expand after the first package is stable. The goal is a repeatable evidence trail that supports the invoice without forcing the project owner to reconstruct the month from memory."
        ]
      }
    ],
    "faq": [
      { "q": "Who confirms that hours are billable?", "a": "The project or account owner confirms the work and billability. The billing specialist can check completeness and consistency but should not approve the commercial claim." },
      { "q": "What if the customer requires a specific timesheet format?", "a": "Follow the contract or customer instruction and retain the approved format with the invoice record." },
      { "q": "How should out-of-scope work be handled?", "a": "Link it to an approved change order or written authorization. If the approval is missing, route the question before billing." }
    ],
    "internalService": "/services/supporting-documentation",
    "internalSibling": "/blog/retainer-draw-reconciliation",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "retainer-draw-reconciliation",
    "title": "Reconcile Retainer Draws Without Losing the Balance",
    "description": "A billing workflow for retainer deposits, drawdowns, remaining balances, approvals, and customer communication.",
    "category": "Billing schedules",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/retainer-draw-reconciliation.webp",
    "sections": [
      {
        "heading": "Define what the retainer represents",
        "paragraphs": [
          "A retainer can be a prepayment for future work, a minimum commitment, or a recurring service fee. Each model has a different billing and revenue treatment. The first step is to read the agreement and record which model applies, what period it covers, and how unused amounts are handled.",
          "Do not assume that every retainer is a deposit. A monthly service fee may be earned over time, while a prepaid draw may create a liability until the work is performed. The billing specialist can organize the agreement and the usage record, but the accounting owner decides the treatment."
        ]
      },
      {
        "heading": "Track deposits and draws in one ledger",
        "paragraphs": [
          "Record the retainer receipt, the period, the amount, and the customer. Then record each draw with the date, service or deliverable, amount, and remaining balance. Use a stable reference so the customer, the invoice, and the internal record can be matched.",
          "The ledger should show both the billing view and the usage view. A customer may have paid the retainer but not used all the hours, or used more than the retainer covers. The difference needs a documented next step, not an adjustment hidden in the next invoice."
        ]
      },
      {
        "heading": "Separate usage evidence from billing judgment",
        "paragraphs": [
          "The service team provides evidence that the work was performed, such as timesheets, deliverables, or a service log. The billing specialist checks that the draw is supported and calculates the remaining balance. The account owner confirms whether the draw is billable and whether any overage should be invoiced.",
          "If the usage evidence is incomplete, mark the draw as pending rather than estimating. If the customer disputes a draw, keep the disputed amount visible and route it to the account owner. Do not reduce the balance just to avoid a conversation."
        ]
      },
      {
        "heading": "Handle overages and unused amounts",
        "paragraphs": [
          "An overage occurs when usage exceeds the retainer. The agreement should state whether the overage is billed at the standard rate, a different rate, or requires approval. Record the basis and the approval before invoicing.",
          "Unused amounts may carry forward, expire, or be refundable. Follow the agreement and the accounting policy. Record the decision and the customer communication. A carryforward that is not documented can look like a discount or a missing invoice in a later period."
        ]
      },
      {
        "heading": "Reconcile the balance monthly",
        "paragraphs": [
          "Each month, compare the retainer ledger to the billing system and the general ledger. Investigate a balance that does not move when a draw was recorded, a draw without a receipt, or a remaining balance that becomes negative without an approved overage.",
          "Send the customer a clear statement when the agreement requires one. Show the opening balance, draws, additions, and closing balance. A customer-facing statement should not include internal notes or unrelated projects."
        ]
      },
      {
        "heading": "Review the model with the owner",
        "paragraphs": [
          "Review a sample of retainer accounts with the accounting and account owners. Check the agreement terms, the usage evidence, the balance, and the customer communication. Look for accounts where the model is unclear or the draws are consistently unsupported.",
          "Use the review to improve the intake template and the monthly close. A retainer that is easy to explain at any point in the period is easier to bill, audit, and renew."
        ]
      }
    ],
    "faq": [
      { "q": "Is a retainer always revenue when received?", "a": "No. The treatment depends on the agreement and the accounting policy. The accounting owner decides, not the billing specialist." },
      { "q": "What if the customer uses more than the retainer?", "a": "Follow the agreement's overage terms and record the approval before invoicing the excess." },
      { "q": "How should unused amounts be shown?", "a": "Show them in the ledger with the carryforward, expiration, or refund decision documented and communicated." }
    ],
    "internalService": "/services/billing-schedule-support",
    "internalSibling": "/blog/usage-based-billing-meter-reconciliation",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "project-milestone-acceptance-evidence",
    "title": "Collect Project Milestone Acceptance Evidence",
    "description": "A billing control for milestone completion, customer acceptance, deliverable versions, and invoice release.",
    "category": "Billing schedules",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/project-milestone-acceptance-evidence.webp",
    "sections": [
      {
        "heading": "Separate completion from acceptance",
        "paragraphs": [
          "A project team may consider a milestone complete when the deliverable is finished. The contract may require customer acceptance before the milestone can be billed. Those are different events. The billing record should show both the internal completion date and the customer acceptance date, with the evidence for each.",
          "If the contract does not require formal acceptance, record the delivery date and the agreed billing trigger. Do not assume that silence means acceptance. The account owner should confirm the contractual condition before the invoice is released."
        ]
      },
      {
        "heading": "Version the deliverable",
        "paragraphs": [
          "Record the deliverable name, version, date sent, recipient, and the channel used. If the customer requested changes, link the revision to the original and record the approval of the final version. A milestone invoice that references an old version is difficult to defend.",
          "Keep the customer-facing deliverable separate from internal working files. The evidence pack should contain what was sent and what was accepted, not every draft that preceded it."
        ]
      },
      {
        "heading": "Capture acceptance in a usable form",
        "paragraphs": [
          "Acceptance may be a signed document, a portal approval, an email confirmation, or a meeting note. Record the form, the person who accepted, the date, and the scope. If the acceptance is conditional, list the conditions and the owner who will close them.",
          "A verbal acceptance can be recorded as a note, but it should be confirmed in writing through the approved channel. The billing specialist can prepare the confirmation and route it, but should not characterize a conversation as final acceptance without evidence."
        ]
      },
      {
        "heading": "Route exceptions before invoicing",
        "paragraphs": [
          "Common exceptions include missing acceptance, acceptance limited to part of the scope, a deliverable that does not match the contract, and a customer request for a change. Each exception needs an owner and a release condition. The invoice should not be described as milestone-complete while the acceptance is unresolved.",
          "If a partial acceptance allows partial billing, the contract should state how the amount is calculated. Record the basis and the approval. Do not split a milestone arbitrarily to meet a billing date."
        ]
      },
      {
        "heading": "Review the milestone queue",
        "paragraphs": [
          "Review upcoming milestones by contract, owner, due date, completion status, and acceptance status. A milestone that is complete but not accepted is a follow-up item, not a billing-ready item. A milestone that is accepted but not invoiced is a revenue timing question for the owner.",
          "Sample closed milestones and confirm that the acceptance evidence matches the invoice. Look for repeated delays in acceptance or repeated version changes. Those patterns may indicate a scope or communication problem that should be fixed upstream."
        ]
      },
      {
        "heading": "Pilot one contract",
        "paragraphs": [
          "Choose one contract with clear milestones and a cooperative customer contact. Run the evidence pack for one milestone. Compare the time spent chasing acceptance with the prior process and record the gaps.",
          "Expand after the first contract is stable. The goal is a billing trigger that is visible to the project, billing, and customer teams before the invoice is prepared."
        ]
      }
    ],
    "faq": [
      { "q": "Can an invoice be issued when the milestone is complete but not accepted?", "a": "Only if the contract allows it. The account owner should confirm the billing trigger and record the basis." },
      { "q": "Is an email acceptance sufficient?", "a": "It can be if the contract and customer process allow it. Record the sender, date, scope, and any conditions." },
      { "q": "Who owns a missing acceptance?", "a": "The project or account owner responsible for the customer relationship, with billing support tracking the follow-up." }
    ],
    "internalService": "/services/billing-schedule-support",
    "internalSibling": "/blog/billing-hold-release-log",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "usage-based-billing-meter-reconciliation",
    "title": "Reconcile Usage-Based Billing Meters",
    "description": "A billing workflow for meter sources, usage periods, thresholds, overages, credits, and customer-facing usage evidence.",
    "category": "Invoice evidence",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/usage-based-billing-meter-reconciliation.webp",
    "sections": [
      {
        "heading": "Identify the authoritative meter",
        "paragraphs": [
          "Usage-based billing depends on a measurement source. That source may be a product platform, a connected device, a manual log, or a third-party report. The first control is to name the authoritative source for each billable unit and the person who can confirm that it is complete for the period.",
          "Do not combine two sources without a reconciliation. A platform count and a customer report may use different time zones, rounding rules, or inclusion criteria. Record the source, the extraction time, the period, and the filters so the usage can be reproduced."
        ]
      },
      {
        "heading": "Define the billable unit and period",
        "paragraphs": [
          "Write down what counts as a billable unit, how partial units are treated, and when the period starts and ends. For example, a unit may be an active seat, an API call, a completed transaction, or a storage increment. The contract or order should support the definition.",
          "Time zone and cutoff rules matter. A usage event near midnight may fall into a different period depending on the source. Record the time zone and the cutoff. If the customer disputes a period boundary, the evidence should show which rule was applied."
        ]
      },
      {
        "heading": "Check thresholds and overages",
        "paragraphs": [
          "Many usage agreements include an included allowance, a tier, or a cap. Record the allowance, the actual usage, the overage, and the rate. If the agreement has a tiered price, show the calculation for each tier rather than applying a blended rate without explanation.",
          "Review unusual spikes before invoicing. A spike may be a legitimate campaign, a misconfigured integration, or a duplicate event. Route the question to the product or account owner. Do not smooth the usage or cap the invoice without an approved basis."
        ]
      },
      {
        "heading": "Handle credits and adjustments",
        "paragraphs": [
          "Credits may come from a service-level commitment, a prior overcharge, a promotional allowance, or a customer agreement. Record the source, the period, the amount, and the approval. Apply the credit to the correct invoice line and show it separately.",
          "If a credit is disputed or pending, keep it visible rather than netting it silently. A customer-facing invoice should explain the adjustment in plain language. An internal note can contain more detail, but the customer should not have to guess why the total changed."
        ]
      },
      {
        "heading": "Reconcile before release",
        "paragraphs": [
          "Compare the usage source, the billing system, and the invoice total. Investigate differences caused by a missing event, a duplicate, a period boundary, a rate change, or a credit. Record the reconciliation result and the owner of any open item.",
          "Sample a few high-value or unusual accounts. Check that the meter source is current, the billable unit is correct, and the customer-facing detail matches the internal calculation. A usage invoice that cannot be explained line by line is likely to become a dispute."
        ]
      },
      {
        "heading": "Pilot one usage product",
        "paragraphs": [
          "Choose one product with a stable meter and a clear contract. Run the reconciliation for one period and review it with the product owner. Record where the data was incomplete or the definition was unclear.",
          "Expand after the first product is stable. The goal is a usage record that the customer, billing team, and product team can all trace to the same source."
        ]
      }
    ],
    "faq": [
      { "q": "Which usage source should be authoritative?", "a": "The contract or order should name it. If it does not, the account and product owners should agree before billing." },
      { "q": "Can a usage spike be capped without approval?", "a": "No. Route the question to the authorized owner and record the decision and the evidence." },
      { "q": "How should a disputed credit be shown?", "a": "Keep it visible as a separate line or open item until the dispute is resolved and approved." }
    ],
    "internalService": "/services/invoice-quality-review",
    "internalSibling": "/blog/retainer-draw-reconciliation",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "multi-currency-invoice-rate-evidence",
    "title": "Document Multi-Currency Invoice Rate Evidence",
    "description": "A billing control for currency, exchange-rate source, effective date, rounding, and customer-facing conversion detail.",
    "category": "Invoice evidence",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/multi-currency-invoice-rate-evidence.webp",
    "sections": [
      {
        "heading": "Name the billing currency and the source currency",
        "paragraphs": [
          "A multi-currency invoice should state the currency of the contract, the currency of the invoice, and the currency of the underlying transaction if different. Without those labels, a reviewer cannot tell whether a difference is a rate change, a rounding issue, or a data entry error.",
          "Record the customer entity and the billing entity as well. A customer may contract in one currency but ask to be invoiced in another. The agreement should support the request, and the accounting owner should confirm the treatment."
        ]
      },
      {
        "heading": "Record the rate source and effective date",
        "paragraphs": [
          "Use a rate source named in the contract or approved by the finance owner. Record the source, the date, the time, and the method used, such as a daily reference rate or a contracted rate. A rate without a date cannot be reproduced.",
          "If the contract uses a monthly rate, state the month and the publication date. If the rate is negotiated, attach the approval. Do not use a rate from a different date because it produces a more favorable total."
        ]
      },
      {
        "heading": "Show the conversion and rounding",
        "paragraphs": [
          "Show the source amount, the rate, the converted amount, and the rounding rule. If the invoice has multiple lines, show whether the conversion is applied per line or to the total. The method should be consistent with the contract and the accounting policy.",
          "Rounding differences can be small, but they should still be visible. A total that does not equal the sum of the converted lines invites a question. If a rounding adjustment is needed, show it as a separate line with a clear label."
        ]
      },
      {
        "heading": "Review customer-facing detail",
        "paragraphs": [
          "The customer should be able to see the currency, the amount, the rate or reference, and the date. If the customer requires a specific format, follow it. Avoid unexplained abbreviations and internal codes that the customer cannot interpret.",
          "Keep internal notes about the rate source and approval in the internal record. The customer-facing invoice should be accurate and readable, not a copy of the internal worksheet."
        ]
      },
      {
        "heading": "Reconcile the invoice to the ledger",
        "paragraphs": [
          "Compare the invoice currency amount to the ledger and the payment record. Investigate differences caused by a rate change, a bank fee, a partial payment, or a customer deduction. Record the reason and the owner.",
          "If the customer pays in a different currency than the invoice, the payment application should show the rate and the resulting difference. Do not force the payment to match the invoice by changing the invoice after delivery."
        ]
      },
      {
        "heading": "Pilot one currency pair",
        "paragraphs": [
          "Choose one currency pair and one customer. Document the source, date, method, and rounding for one billing cycle. Review the result with the accounting owner and the customer contact if needed.",
          "Expand after the first pair is stable. The goal is a conversion record that can be explained months later without relying on the person who prepared it."
        ]
      }
    ],
    "faq": [
      { "q": "Which exchange rate should be used?", "a": "The rate named in the contract or approved by the finance owner. Record the source and effective date." },
      { "q": "Should the rate be applied per line or to the total?", "a": "Follow the contract and accounting policy. State the method on the record so it can be reproduced." },
      { "q": "How should a bank fee be handled?", "a": "Record it separately and route the treatment to the accounting owner. Do not alter the original invoice." }
    ],
    "internalService": "/services/invoice-draft-preparation",
    "internalSibling": "/blog/customer-purchase-order-ceiling-review",
    "source": { "label": "Federal Reserve H.10 Foreign Exchange Rates", "url": "https://www.federalreserve.gov/releases/h10/" }
  },
  {
    "slug": "customer-purchase-order-ceiling-review",
    "title": "Review Customer Purchase Order Ceilings",
    "description": "A billing control for authorized amounts, cumulative invoicing, overages, change orders, and customer communication.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/customer-purchase-order-ceiling-review.webp",
    "sections": [
      {
        "heading": "Treat the purchase order as a limit",
        "paragraphs": [
          "A customer purchase order often authorizes a maximum amount, a scope, or a period. Billing beyond that limit can delay payment or create a dispute. The billing team should know the authorized amount and the cumulative amount already invoiced before preparing the next invoice.",
          "Record the purchase order number, the authorized amount, the currency, the period, and the scope. If the customer uses a call-off or release against a master agreement, record the specific release and its limit."
        ]
      },
      {
        "heading": "Track cumulative billing",
        "paragraphs": [
          "Maintain a running total by purchase order, including invoices, credits, and any approved adjustments. A new invoice should show the amount before and after the invoice so the remaining balance is visible. Without a cumulative view, a series of small invoices can exceed the limit without anyone noticing.",
          "Reconcile the running total to the billing system and the customer portal when available. If the customer's portal shows a different balance, record the difference and route it to the account owner. Do not assume the internal system is correct."
        ]
      },
      {
        "heading": "Route overages before invoicing",
        "paragraphs": [
          "When the next invoice would exceed the authorized amount, stop and route the question. The account owner may request a change order, a new purchase order, or a written approval to exceed the limit. Record the request, the approval, and the effective date.",
          "Do not split an invoice to stay under the limit without an approved basis. Splitting can hide an overage and create a later reconciliation problem. If the contract allows partial billing, show the basis and the remaining balance."
        ]
      },
      {
        "heading": "Keep customer communication precise",
        "paragraphs": [
          "Tell the customer what is needed: a new purchase order, a change order, or confirmation of the remaining balance. Avoid implying that the invoice will be paid automatically. Use the approved channel and keep the message with the billing record.",
          "If the customer disputes the ceiling, provide the purchase order, the cumulative billing, and the invoice detail. A clear statement is easier to resolve than a general request to increase the limit."
        ]
      },
      {
        "heading": "Review the ceiling queue",
        "paragraphs": [
          "Review open purchase orders by remaining balance, expiration date, and billing status. Flag orders that are close to the limit or close to expiry. A purchase order that expires before the work is billed may require a new authorization.",
          "Sample closed purchase orders and confirm that the final invoice did not exceed the authorized amount without approval. Look for repeated overages by customer or project. The pattern may indicate a scope or change-order process problem."
        ]
      },
      {
        "heading": "Pilot one customer",
        "paragraphs": [
          "Choose one customer with a clear purchase order and a known account owner. Track the cumulative billing for one cycle. Record the questions that arise and update the intake template.",
          "Expand after the first customer is stable. The goal is to see the ceiling before the invoice is prepared, not after the customer rejects it."
        ]
      }
    ],
    "faq": [
      { "q": "Can we invoice above the purchase order if the work is complete?", "a": "Only with the authorization required by the contract and the customer. Record the approval before invoicing." },
      { "q": "What if the purchase order does not state a maximum?", "a": "Record the scope and period, and ask the account owner to confirm the billing limit in writing." },
      { "q": "How should credits affect the running total?", "a": "Show credits separately and reflect them in the remaining balance according to the approved treatment." }
    ],
    "internalService": "/services/purchase-order-match-exception-queue",
    "internalSibling": "/blog/usage-based-billing-meter-reconciliation",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "invoice-template-change-control",
    "title": "Control Changes to Invoice Templates",
    "description": "A change-control workflow for invoice layouts, required fields, tax labels, customer-specific formats, and version history.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/invoice-template-change-control.webp",
    "sections": [
      {
        "heading": "Why a template is a control",
        "paragraphs": [
          "An invoice template determines which fields appear, how totals are calculated, and what the customer sees. A small layout change can remove a purchase order reference, hide a tax label, or alter a calculation. Treat the template as a controlled document, not a file that anyone can edit before a busy billing run.",
          "Name the template owner, the approved versions, and the systems that use each version. If the template is generated by code, the code and the rendered output both need review. If it is a document, the file and the customer-specific variant need version control."
        ]
      },
      {
        "heading": "Define required fields and variants",
        "paragraphs": [
          "List the fields required for every invoice, such as legal entity, customer, invoice number, date, currency, purchase order, line detail, tax, total, and payment instructions. Then list the customer-specific variants, such as a portal format, a language, or a consolidated billing layout.",
          "A variant should have a reason and an owner. Do not create a new template for every customer request without checking whether the standard format can accommodate the need. Too many variants make it difficult to apply a compliance change consistently."
        ]
      },
      {
        "heading": "Review changes before release",
        "paragraphs": [
          "A template change should include the reason, the affected fields, the test invoices, the approver, and the effective date. Test the change on a sample of real invoice types, including a credit, a multi-currency invoice, and a customer-specific variant if applicable.",
          "Check that the change does not alter calculations, remove a required field, or break the delivery format. If the template feeds an e-invoicing portal or a customer system, test the file format and the validation rules. A visually correct invoice can still fail the customer's import."
        ]
      },
      {
        "heading": "Keep version history",
        "paragraphs": [
          "Retain the prior version, the change request, the approval, and the effective date. If an invoice is questioned later, the team should be able to identify which template produced it. A version history also helps when a customer asks why a field disappeared.",
          "Do not overwrite the old template in place. Archive it with a clear label and a link to the replacement. If the template is generated from code, tag the release or record the commit."
        ]
      },
      {
        "heading": "Communicate the change",
        "paragraphs": [
          "Notify the billing team, the customer-facing owners, and any integration owner before the change takes effect. Provide a sample and the effective date. If the customer requires notice, follow the contract or portal rules.",
          "Track questions after the change. A spike in customer queries may indicate a layout or field problem, not a training issue. Review the first billing cycle and correct the template if needed."
        ]
      },
      {
        "heading": "Audit the template inventory",
        "paragraphs": [
          "Review the template inventory each quarter. Identify unused variants, outdated versions, and templates that no longer match the current entity or tax requirements. Retire them deliberately rather than leaving them available for accidental use.",
          "Test one live invoice per active template. Confirm the required fields, calculations, and delivery format. The audit should produce a short list of fixes and an owner for each."
        ]
      }
    ],
    "faq": [
      { "q": "Who can approve a template change?", "a": "The template owner and any required finance, tax, or customer-facing approver. The approval should be recorded with the effective date." },
      { "q": "Can a customer-specific variant skip required fields?", "a": "Only if the contract or legal requirement allows it. Record the exception and the approval." },
      { "q": "How long should old templates be retained?", "a": "Follow the records policy and retain enough history to explain invoices produced during the relevant period." }
    ],
    "internalService": "/services/invoice-quality-review",
    "internalSibling": "/blog/customer-billing-contact-verification",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "customer-billing-contact-verification",
    "title": "Verify Customer Billing Contacts and Delivery Details",
    "description": "A controlled process for confirming billing contacts, delivery addresses, portals, and changes before an invoice is sent.",
    "category": "Customer records",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/customer-billing-contact-verification.webp",
    "sections": [
      {
        "heading": "Treat billing details as controlled data",
        "paragraphs": [
          "A billing contact, email address, portal, or purchase order reference determines where an invoice goes and whether it is accepted. An outdated contact can delay payment for weeks. A fraudulent change can send an invoice and payment instructions to the wrong party. The billing master deserves the same change control as a vendor record.",
          "Record the customer legal entity, billing contact, delivery method, portal identifier, purchase order reference, and any customer-specific requirements. Note the source of each detail and the last verification date. A detail without a source is a guess."
        ]
      },
      {
        "heading": "Separate routine updates from sensitive changes",
        "paragraphs": [
          "A routine contact update may be a new accounts payable email or a changed portal administrator. A sensitive change may involve a new legal entity, bank details, or a request to redirect invoices to a different company. Use different verification paths for each.",
          "For sensitive changes, verify through a known channel rather than the contact details in the request. Record the verification method, the person, the date, and the result. The billing specialist can prepare the change, but the release should require the designated owner."
        ]
      },
      {
        "heading": "Check the delivery path before sending",
        "paragraphs": [
          "Before a billing run, confirm that the customer record has an active delivery method and that the invoice format matches the customer's requirement. A portal invoice may need a specific file type, a purchase order reference, or a separate remittance address.",
          "If the delivery method is unclear, hold the invoice and route the question. Do not send a copy to an unverified personal email just to meet a deadline. A delayed invoice with a clear record is easier to resolve than a misdirected invoice with a payment risk."
        ]
      },
      {
        "heading": "Log delivery and response",
        "paragraphs": [
          "Record the send date, recipient, method, and any delivery confirmation or failure notice. If the customer says the invoice was not received, use the delivery record to trace the issue. A portal upload should have a submission reference and a status.",
          "Track repeated failures by customer and channel. A portal that rejects the file format may need a template change, while a mailbox that blocks the sender may need an allowlist update. Fix the cause rather than resending manually every month."
        ]
      },
      {
        "heading": "Review the billing master",
        "paragraphs": [
          "Sample customer records each quarter and compare the billing contact, delivery method, and purchase order reference with the latest customer confirmation. Look for records with no verification date, multiple conflicting contacts, or a delivery method that no longer matches the customer's process.",
          "Review changes made during the period, especially sensitive ones. Confirm that the verification and approval are recorded. A clean master record is a prerequisite for a reliable billing run."
        ]
      },
      {
        "heading": "Pilot one customer segment",
        "paragraphs": [
          "Choose one customer segment with a manageable number of accounts. Verify the billing details for one cycle and record the questions. Use the results to improve the change request form and the delivery checklist.",
          "Expand after the first segment is stable. The goal is a billing record that is current, sourced, and safe to use without a last-minute search through email."
        ]
      }
    ],
    "faq": [
      { "q": "Can a customer update billing details by email?", "a": "Routine updates may be accepted through the approved channel. Sensitive changes need verification through a known contact and the required approval." },
      { "q": "What if the customer portal rejects an invoice?", "a": "Record the rejection, the error, and the file version. Route the format question to the template or portal owner." },
      { "q": "How often should billing contacts be verified?", "a": "At a cadence set by the process owner, and whenever a sensitive change or delivery failure occurs." }
    ],
    "internalService": "/services/customer-billing-records",
    "internalSibling": "/blog/invoice-template-change-control",
    "source": { "label": "CISA Identity and Access Management Guidance", "url": "https://www.cisa.gov/resources-tools/resources/identity-and-access-management-recommended-best-practices-administrators" }
  },
  {
    "slug": "credit-memo-application-approval",
    "title": "Apply and Approve Credit Memos Without Guesswork",
    "description": "A billing workflow for credit requests, approval, application, customer communication, and reconciliation to the open balance.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/credit-memo-application-approval.webp",
    "sections": [
      {
        "heading": "Separate the request from the credit",
        "paragraphs": [
          "A credit request is a claim that an invoice or account should be reduced. A credit memo is the approved adjustment. The two should not be treated as the same event. The request needs a reason, evidence, and an owner. The credit needs an approval, an amount, and a target invoice or account.",
          "Record the customer, invoice, amount requested, reason, requester, and date. If the request is based on a service failure, a pricing error, a return, or a duplicate charge, attach the supporting record. A request without evidence is a conversation, not a billing adjustment."
        ]
      },
      {
        "heading": "Define approval authority",
        "paragraphs": [
          "The approval matrix should state who can approve a credit by amount, reason, and customer segment. A billing specialist can prepare the request and check the calculation, but should not approve a credit outside the delegated authority.",
          "For high-risk credits, require a second reviewer or a manager. Record the approver, the date, and the basis. If the approver is also the person who requested the credit, disclose the conflict and route it to an independent reviewer."
        ]
      },
      {
        "heading": "Apply the credit to the right balance",
        "paragraphs": [
          "A credit memo should identify the customer, the invoice or account, the amount, the currency, and the reason. Apply it to the intended balance and show the remaining open amount. Do not apply a credit to an unrelated invoice just to make the account balance.",
          "If the credit exceeds the open balance, record the remaining credit and the treatment. It may carry forward, be refunded, or be applied to a future invoice under the agreement. The customer-facing statement should explain the position."
        ]
      },
      {
        "heading": "Communicate clearly",
        "paragraphs": [
          "Tell the customer what was approved, what was not, and how the credit was applied. Use the approved channel and keep the message with the record. Avoid promising a credit before the approval is complete.",
          "If the request is declined, state the reason at the level the customer is entitled to know. Do not disclose internal deliberations or unrelated account information. Provide the next step if the customer wants to dispute the decision."
        ]
      },
      {
        "heading": "Reconcile and review",
        "paragraphs": [
          "Reconcile the credit memo to the billing system, the general ledger, and the customer statement. Investigate a credit that was approved but not applied, applied twice, or applied to the wrong period. Record the correction and the owner.",
          "Review credits by reason, customer, and approver. A cluster of service credits may indicate a delivery problem, while a cluster of pricing credits may indicate a contract or catalog issue. Use the pattern to fix the source, not just to clear the balance."
        ]
      },
      {
        "heading": "Pilot one credit type",
        "paragraphs": [
          "Choose one credit type, such as a duplicate charge or a service adjustment. Run the request, approval, application, and reconciliation for one cycle. Record where the evidence was missing or the approval path was unclear.",
          "Expand after the first type is stable. The goal is a credit record that explains the adjustment and preserves the customer relationship."
        ]
      }
    ],
    "faq": [
      { "q": "Who approves a credit memo?", "a": "The person named in the delegation policy for that amount and reason. The billing specialist can prepare but not self-approve outside authority." },
      { "q": "Can a credit be applied to a different invoice?", "a": "Only under the approved application rules. Record the target and the reason so the balance remains traceable." },
      { "q": "What if the credit exceeds the open balance?", "a": "Record the remaining credit and follow the agreement or policy for carryforward, refund, or future application." }
    ],
    "internalService": "/services/credit-memo-request-routing",
    "internalSibling": "/blog/invoice-correction-versus-cancellation",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "invoice-correction-versus-cancellation",
    "title": "Choose Between Invoice Correction and Cancellation",
    "description": "A decision guide for correcting an issued invoice, cancelling and reissuing, preserving audit history, and informing the customer.",
    "category": "Invoice controls",
    "publishedAt": "2026-10-22",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/october-22/invoice-correction-versus-cancellation.webp",
    "sections": [
      {
        "heading": "Define the problem before choosing a method",
        "paragraphs": [
          "An issued invoice may need a change because of a wrong amount, a missing purchase order, an incorrect customer, a tax field, or a delivery error. The right method depends on what changed, whether the customer has received the invoice, and what the local tax and accounting rules require.",
          "Write the problem in one sentence. If the invoice has not been sent, a correction may be a simple edit with a new version. If it has been sent, the team may need a credit and reissue, a cancellation, or a corrected invoice that references the original. The choice should be documented."
        ]
      },
      {
        "heading": "Preserve the original record",
        "paragraphs": [
          "Do not overwrite an issued invoice. Keep the original number, date, amount, and customer, then link the correction or cancellation to it. A reviewer should be able to see what the customer received and what changed.",
          "If the system requires a new invoice number, record the relationship between the original and the replacement. A note that says corrected is not enough. State the reason, the fields changed, and the approver."
        ]
      },
      {
        "heading": "Use credit and reissue when appropriate",
        "paragraphs": [
          "A credit and reissue can preserve the original transaction while creating a clean replacement. Apply the credit to the original invoice and issue the corrected invoice with a clear reference. Confirm that the customer's portal or accounting system can handle both documents.",
          "Do not use a credit to hide a pricing dispute or an unapproved adjustment. The credit reason should match the actual correction. If the customer has already paid, record the refund or credit balance and the communication."
        ]
      },
      {
        "heading": "Know when cancellation is the wrong tool",
        "paragraphs": [
          "Cancellation may remove the invoice from the customer's records and create a gap in the numbering or period. It may also be restricted by tax or e-invoicing rules. Before cancelling, confirm that the customer has not processed the invoice and that the system allows the action.",
          "If the invoice was sent to the wrong customer, cancellation alone may not be enough. The record should show that the recipient was notified and that no payment was requested. Treat a misdirected invoice as a potential data incident if it contains sensitive information."
        ]
      },
      {
        "heading": "Communicate the change",
        "paragraphs": [
          "Tell the customer which document is void, which is valid, and what action is required. Use the approved channel and include the invoice numbers and amounts. If the customer has a portal, confirm that the corrected document is visible and the original is marked appropriately.",
          "Keep the customer message with the billing record. If the customer later disputes the balance, the communication shows what was communicated and when."
        ]
      },
      {
        "heading": "Review correction patterns",
        "paragraphs": [
          "Track corrections by reason, customer, and preparer. A repeated missing purchase order may be an intake problem, while repeated amount errors may be a source-data or calculation issue. Use the pattern to improve the workflow.",
          "Sample closed corrections and confirm that the original, the replacement, the approval, and the customer communication are linked. A correction that cannot be traced is a control gap, even if the final invoice is correct."
        ]
      }
    ],
    "faq": [
      { "q": "Should an issued invoice ever be edited in place?", "a": "Generally no. Preserve the original and link the correction or replacement. Follow the system and local requirements." },
      { "q": "When is a credit and reissue better than a cancellation?", "a": "When the original should remain visible and the replacement needs a clean document. The choice depends on the customer and the applicable rules." },
      { "q": "Who approves a correction?", "a": "The approval matrix should name the owner by reason and amount. Record the approval with the change." }
    ],
    "internalService": "/services/invoice-quality-review",
    "internalSibling": "/blog/credit-memo-application-approval",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  },
  {
    "slug": "month-end-billing-close-checklist",
    "title": "Build a Month-End Billing Close Checklist",
    "description": "A repeatable close routine for billing populations, cutoffs, approvals, delivery, reconciliations, and open-item handoff.",
    "category": "Billing schedules",
    "publishedAt": "2026-10-22",
    "readTime": "9 min read",
    "thumbnail": "/thumbnails/october-22/month-end-billing-close-checklist.webp",
    "sections": [
      {
        "heading": "Fix the billing population",
        "paragraphs": [
          "Start the close by confirming which invoices, credits, and adjustments belong to the period. Record the cutoff date, the systems included, the exclusions, and the count. A close that starts without a fixed population will keep changing as new items arrive.",
          "Reconcile the population to the billing system and the general ledger where possible. If a scheduled invoice is missing or an extra invoice appears, investigate before preparing the close package. The population is the foundation for every later check."
        ]
      },
      {
        "heading": "Complete the pre-close checks",
        "paragraphs": [
          "Check that each invoice has the required customer, purchase order, currency, tax field, and delivery method. Confirm that approvals are recorded and that any hold has a release condition. Review credits and corrections for proper linkage.",
          "Use a short exception list and assign an owner to each item. Do not let the close package include an unresolved material exception without disclosure. A clear open-item list is more useful than a clean-looking total that hides a problem."
        ]
      },
      {
        "heading": "Reconcile totals and delivery",
        "paragraphs": [
          "Reconcile the invoice total to the billing system, the accounts receivable ledger, and the customer portal where available. Investigate differences caused by timing, credits, currency, or delivery failures.",
          "Confirm that invoices were delivered through the approved channel and that failures have a follow-up. A close is not complete if the invoice exists but the customer never received it. Record the delivery status with the invoice."
        ]
      },
      {
        "heading": "Prepare the close package",
        "paragraphs": [
          "Assemble the population, total billed, credits, adjustments, open items, delivery exceptions, and the owner for each unresolved issue. Include the approval evidence for material items and the reconciliation to the ledger.",
          "The package should let a reviewer understand the period without opening every invoice. Use a consistent format so month-to-month comparisons are possible. If the format changes, record the reason."
        ]
      },
      {
        "heading": "Hand off open items",
        "paragraphs": [
          "List every item that remains open after the close, with the owner, next action, and due date. A new period should not start with an undocumented backlog. The handoff should be acknowledged by the receiving owner.",
          "Review the prior period's open items at the start of the next close. Confirm which were resolved and which carried forward. A recurring item may need a process fix rather than another reminder."
        ]
      },
      {
        "heading": "Review and improve",
        "paragraphs": [
          "After the close, review the time spent, the exceptions, and the corrections. Identify one or two causes to fix before the next period. A close checklist that grows every month without removing causes is not improving.",
          "Keep the checklist versioned. When a step changes, record why and who approved it. The checklist should reflect the current process, not a collection of historical workarounds."
        ]
      }
    ],
    "faq": [
      { "q": "What belongs in the billing close package?", "a": "The fixed population, totals, credits, adjustments, delivery status, approvals for material items, and the open-item list with owners." },
      { "q": "Can the close finish with open items?", "a": "Follow the policy. If allowed, disclose the items and assign a follow-up owner and date." },
      { "q": "How should the checklist be maintained?", "a": "Version it, record changes and approvals, and review it after each close for steps that no longer add control." }
    ],
    "internalService": "/services/billing-status-reporting",
    "internalSibling": "/blog/billing-hold-release-log",
    "source": { "label": "GAO Standards for Internal Control in the Federal Government", "url": "https://www.gao.gov/products/gao-14-704g" }
  }
];
