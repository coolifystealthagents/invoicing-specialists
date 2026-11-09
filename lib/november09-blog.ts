import type { BlogPost } from './types';

export const november09BlogPosts: readonly BlogPost[] = [
  {
    "slug": "set-a-billing-approval-limit-the-finance-team-can-apply",
    "title": "Set a billing approval limit the finance team can apply",
    "description": "A billing approval limit that names the amount, the approver, and the evidence before the invoice is released.",
    "category": "Billing controls",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/set-a-billing-approval-limit-the-finance-team-can-apply.webp",
    "sections": [
      {
        "heading": "How to approach: Set a billing approval limit the finance team can apply",
        "paragraphs": [
          "A billing approval limit should be simple enough to apply during the close. Start with the amount, the approver, and the evidence. A limit that requires a meeting for every invoice will be bypassed. Test the rule on one real invoice before applying it to the batch. The review should end with one owner and one date. A short note with the invoice and the next action is easier to use.",
          "Keep the limit visible in the billing system. The preparer should know who approves before the invoice is released. Use the same format for every handover so the next reader can scan it. Keep the original note beside the corrected version. The client should know who is handling the correction. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Set the amount and the approver",
        "paragraphs": [
          "Write the threshold and the role that approves above it. Record the backup approver. A threshold without a backup will stall when the approver is away. Test the rule on one real invoice before applying it to the batch. The billing lead should record the owner and the date before release.",
          "Record the evidence the approver needs, such as the contract, the time record, or the purchase order. An approval without the evidence is a signature. Use the same format for every handover so the next reader can scan it. A short note with four fields is easier to use than a long narrative. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Record the exception",
        "paragraphs": [
          "Write what happens when the invoice is above the limit and the approver is unavailable. The exception should name the person who can approve and the time. Write the deadline as a date and a local time. Ask whether a new reviewer could act on the record without a conversation. Keep the source link with the invoice so the next reviewer can check it. The review should end with one owner and one date.",
          "Record the exception and the approval. A verbal exception should be confirmed in writing. Use the same format for every handover so the next reader can scan it. If the source is unclear, route the question instead of guessing. The review should end with one owner and one date. The client should know who is handling the correction."
        ]
      },
      {
        "heading": "Test the limit on a sample",
        "paragraphs": [
          "Review a sample of invoices against the limit. Check the approver and the evidence. A sample that includes one large invoice and one exception is more useful than a clean list. Keep the evidence with the record rather than in a separate log. A short note with the invoice and the next action is easier to use. Keep the source link with the invoice so the next reviewer can check it."
        ]
      },
      {
        "heading": "Review the limit quarterly",
        "paragraphs": [
          "Look for invoices that were split to stay below the limit. A pattern may point to a threshold problem. Update the limit or the review. Keep the original note beside the corrected version. Test the rule on one real invoice before applying it to the batch. A short note with the invoice and the next action is easier to use."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a billing approval limit define?",
        "a": "The amount, the approver, the backup, the evidence, and the exception path."
      },
      {
        "q": "What should happen above the limit?",
        "a": "The named approver reviews the evidence before the invoice is released."
      }
    ],
    "internalService": "/services/billing-support",
    "internalSibling": "/blog/reconcile-a-retainer-invoice-against-the-time-record",
    "source": {
      "label": "Financial Accounting Standards Board",
      "url": "https://www.fasb.org/"
    }
  },
  {
    "slug": "reconcile-a-retainer-invoice-against-the-time-record",
    "title": "Reconcile a retainer invoice against the time record",
    "description": "A retainer reconciliation that compares the retainer, the hours used, the overage, and the approval.",
    "category": "Billing controls",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/reconcile-a-retainer-invoice-against-the-time-record.webp",
    "sections": [
      {
        "heading": "How to approach: Reconcile a retainer invoice against the time record",
        "paragraphs": [
          "A retainer reconciliation should show what was included and what was used. Start with the retainer, the hours, the overage, and the approval. A total without the detail is hard to defend. Record the date and the source so the next reviewer can repeat the check. Test the rule on one real invoice before applying it to the batch. A short note with the invoice and the next action is easier to use.",
          "Keep the reconciliation with the invoice. The client should see the calculation. Write the deadline as a date and a local time. A control that depends on memory is not yet a control. The billing lead should record the owner and the date before release. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Record the retainer and the hours",
        "paragraphs": [
          "Write the retainer amount, the period, and the included hours. Record the hours used and the source. A time record without the approval is weak. Keep the evidence with the record rather than in a separate log. The billing lead should record the owner and the date before release.",
          "Record the overage rate and the calculation. A rate that is copied from an old invoice may be wrong. If the source is unclear, route the question instead of guessing. Test the rule on one real invoice before applying it to the batch. The client should know who is handling the correction."
        ]
      },
      {
        "heading": "Record the overage and the approval",
        "paragraphs": [
          "Write the overage hours and the amount. Name the approver and the date. An overage above the limit should have a second review. A short note with four fields is easier to use than a long narrative. The billing lead should record the owner and the date before release. The review should end with one owner and one date.",
          "Record the client's approval if the contract requires it. A client who is surprised by the overage may dispute the invoice. Name the owner in the same line as the action. A short note with four fields is easier to use than a long narrative. A short note with the invoice and the next action is easier to use. Test the rule on one real invoice before applying it to the batch."
        ]
      },
      {
        "heading": "Review the reconciliation with the client",
        "paragraphs": [
          "Send the reconciliation with the invoice. Ask the client to confirm the hours. A short note prevents a later dispute. Write the deadline as a date and a local time. The client should know who is handling the correction. Test the rule on one real invoice before applying it to the batch."
        ]
      },
      {
        "heading": "Review the process quarterly",
        "paragraphs": [
          "Look for a retainer that is consistently over or under. A pattern may point to a scope or rate problem. Review the first few notes together before the process expands. Keep the evidence with the record rather than in a separate log. A short note with the invoice and the next action is easier to use."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a retainer reconciliation show?",
        "a": "The retainer, included hours, hours used, overage, rate, approval, and client confirmation."
      },
      {
        "q": "What should happen when the retainer is exceeded?",
        "a": "Record the overage and the approval before the invoice is released."
      }
    ],
    "internalService": "/services/billing-support",
    "internalSibling": "/blog/set-a-billing-approval-limit-the-finance-team-can-apply",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  },
  {
    "slug": "record-a-billing-correction-without-losing-the-original-invoice",
    "title": "Record a billing correction without losing the original invoice",
    "description": "A correction record that preserves the original invoice, the reason, the new amount, and the approval.",
    "category": "Billing controls",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/record-a-billing-correction-without-losing-the-original-invoice.webp",
    "sections": [
      {
        "heading": "How to approach: Record a billing correction without losing the original invoice",
        "paragraphs": [
          "A correction should be a version, not a rewrite. Keep the original invoice and add the reason, the new amount, and the approval. A rewrite hides what the client received. Update the template when the same question appears twice. Keep the source link with the invoice so the next reviewer can check it. The billing lead should record the owner and the date before release.",
          "Keep the correction with the invoice. A later reviewer should see both versions. Write the deadline as a date and a local time. Keep the boundary visible in the place where the work is assigned. The client should know who is handling the correction. Keep the source link with the invoice so the next reviewer can check it."
        ]
      },
      {
        "heading": "Record the original and the reason",
        "paragraphs": [
          "Write the original invoice number, the amount, and the date. Record the reason for the correction in plain language. A reason without the evidence is an opinion. A control that depends on memory is not yet a control. Keep the source link with the invoice so the next reviewer can check it. The billing lead should record the owner and the date before release.",
          "Record the client's request and the date. A correction that is offered proactively should name the approver. Ask whether a new reviewer could act on the record without a conversation. Keep the original note beside the corrected version. A short note with the invoice and the next action is easier to use. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Record the new amount and the approval",
        "paragraphs": [
          "Write the corrected amount and the calculation. Name the approver and the date. A correction above the threshold should have a second review. A short note with four fields is easier to use than a long narrative. The billing lead should record the owner and the date before release.",
          "Record the credit or reissue. A credit that is not linked to the original invoice may be applied twice. Record the exception and the person who approved it. If the source is unclear, route the question instead of guessing. The client should know who is handling the correction. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Tell the client",
        "paragraphs": [
          "Send the corrected invoice with a short explanation. A client who receives a second invoice without context may call. The message should name the change. If the source is unclear, route the question instead of guessing. The review should end with one owner and one date. Test the rule on one real invoice before applying it to the batch."
        ]
      },
      {
        "heading": "Review the corrections monthly",
        "paragraphs": [
          "Look for a repeated reason or a preparer. A pattern may point to a source or training problem. A control that depends on memory is not yet a control. Record the exception and the person who approved it. A short note with the invoice and the next action is easier to use. Keep the source link with the invoice so the next reviewer can check it."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a correction record preserve?",
        "a": "The original invoice, the reason, the new amount, the approval, and the client message."
      },
      {
        "q": "Should the original invoice be deleted?",
        "a": "No. Keep the original and add a dated correction."
      }
    ],
    "internalService": "/services/billing-support",
    "internalSibling": "/blog/build-a-client-billing-calendar-for-recurring-services",
    "source": {
      "label": "Financial Accounting Standards Board",
      "url": "https://www.fasb.org/"
    }
  },
  {
    "slug": "build-a-client-billing-calendar-for-recurring-services",
    "title": "Build a client billing calendar for recurring services",
    "description": "A billing calendar that names the service, the billing date, the approver, and the client contact.",
    "category": "Billing controls",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/build-a-client-billing-calendar-for-recurring-services.webp",
    "sections": [
      {
        "heading": "How to approach: Build a client billing calendar for recurring services",
        "paragraphs": [
          "A billing calendar should show what is billed, when, and by whom. Start with the service, the billing date, the approver, and the client contact. A calendar that only lists dates is incomplete. Name the owner in the same line as the action. The review should end with one owner and one date.",
          "Keep the calendar current. A change in the service or the contact should be recorded the same week. Record the date and the source so the next reviewer can repeat the check. Update the template when the same question appears twice. Test the rule on one real invoice before applying it to the batch. The client should know who is handling the correction."
        ]
      },
      {
        "heading": "Record the service and the date",
        "paragraphs": [
          "Write the service, the amount, and the billing date. Link the contract or the rate source. A date without the amount is hard to plan. Keep the evidence with the record rather than in a separate log. The review should end with one owner and one date. Test the rule on one real invoice before applying it to the batch.",
          "Record the cut-off for changes. A change after the cut-off may move to the next cycle. Use the same format for every handover so the next reader can scan it. Review the first few notes together before the process expands. Keep the source link with the invoice so the next reviewer can check it. A short note with the invoice and the next action is easier to use."
        ]
      },
      {
        "heading": "Name the approver and the contact",
        "paragraphs": [
          "Record the approver and the client contact. A billing without an approver may be released with an error. If the source is unclear, route the question instead of guessing. Ask whether a new reviewer could act on the record without a conversation. The review should end with one owner and one date. The client should know who is handling the correction.",
          "Record the client's preferred channel and any portal requirement. A client who requires a portal invoice may reject an email attachment. A control that depends on memory is not yet a control. Keep the evidence with the record rather than in a separate log. The billing lead should record the owner and the date before release. The client should know who is handling the correction."
        ]
      },
      {
        "heading": "Review the calendar weekly",
        "paragraphs": [
          "Look for a billing that is due but not prepared. Assign an owner and a date. A late billing may delay cash. Ask whether a new reviewer could act on the record without a conversation. A short note with the invoice and the next action is easier to use. Keep the source link with the invoice so the next reviewer can check it."
        ]
      },
      {
        "heading": "Review the calendar quarterly",
        "paragraphs": [
          "Remove the services that ended and add the new ones. A calendar that grows without review becomes noise. A short note with four fields is easier to use than a long narrative. Keep the evidence with the record rather than in a separate log. The client should know who is handling the correction. Test the rule on one real invoice before applying it to the batch."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a billing calendar record?",
        "a": "The service, amount, billing date, approver, client contact, and cut-off."
      },
      {
        "q": "What should happen when a service changes?",
        "a": "Update the calendar and the contract source before the next billing date."
      }
    ],
    "internalService": "/services/billing-support",
    "internalSibling": "/blog/record-a-billing-correction-without-losing-the-original-invoice",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  },
  {
    "slug": "check-a-purchase-order-before-a-change-order-is-billed",
    "title": "Check a purchase order before a change order is billed",
    "description": "A change order check that compares the original order, the approved change, and the invoice line.",
    "category": "Billing controls",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/check-a-purchase-order-before-a-change-order-is-billed.webp",
    "sections": [
      {
        "heading": "How to approach: Check a purchase order before a change order is billed",
        "paragraphs": [
          "A change order should be checked against the original order before it is billed. Start with the order, the change, and the invoice line. A change without an approval is a dispute. Keep the original note beside the corrected version. A short note with the invoice and the next action is easier to use. The billing lead should record the owner and the date before release.",
          "Keep the check with the invoice. The client should see the link between the change and the charge. Record the exception and the person who approved it. Update the template when the same question appears twice. The client should know who is handling the correction. Test the rule on one real invoice before applying it to the batch."
        ]
      },
      {
        "heading": "Record the original order and the change",
        "paragraphs": [
          "Write the order number, the original amount, and the change. Record the approver and the date. A change without the approver is not ready to bill. Test the rule on one real invoice before applying it to the batch. The client should know who is handling the correction. Keep the source link with the invoice so the next reviewer can check it.",
          "Record the impact on the delivery or the service. A change that moves the scope may need a new acceptance. If the source is unclear, route the question instead of guessing. Record the exception and the person who approved it. Keep the source link with the invoice so the next reviewer can check it. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Compare the invoice line",
        "paragraphs": [
          "Compare the invoice line with the approved change. A quantity or rate that differs from the change should be corrected before release. Update the template when the same question appears twice. Ask whether a new reviewer could act on the record without a conversation. A short note with the invoice and the next action is easier to use. The billing lead should record the owner and the date before release.",
          "Record the reviewer and the date. A line without the review may be released by mistake. Review the first few notes together before the process expands. Keep the boundary visible in the place where the work is assigned. Keep the source link with the invoice so the next reviewer can check it. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Tell the client",
        "paragraphs": [
          "Send the invoice with a reference to the change order. A client who sees the approval is less likely to dispute the charge. Update the template when the same question appears twice. Write the deadline as a date and a local time. A short note with the invoice and the next action is easier to use. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Review the changes monthly",
        "paragraphs": [
          "Look for repeated changes or unapproved work. A pattern may point to a scope or order problem. Name the owner in the same line as the action. A control that depends on memory is not yet a control. A short note with the invoice and the next action is easier to use. The client should know who is handling the correction."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a change order check compare?",
        "a": "The original order, the approved change, and the invoice line."
      },
      {
        "q": "Can a change be billed without approval?",
        "a": "No. The approval should be recorded before the invoice is released."
      }
    ],
    "internalService": "/services/invoice-preparation",
    "internalSibling": "/blog/write-a-collections-handoff-for-an-overdue-invoice",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  },
  {
    "slug": "write-a-collections-handoff-for-an-overdue-invoice",
    "title": "Write a collections handoff for an overdue invoice",
    "description": "A collections handoff that records the invoice, the contact history, the promise, and the next step.",
    "category": "Collections",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/write-a-collections-handoff-for-an-overdue-invoice.webp",
    "sections": [
      {
        "heading": "How to approach: Write a collections handoff for an overdue invoice",
        "paragraphs": [
          "A collections handoff should let the next person continue without reopening the history. Start with the invoice, the contact history, the promise, and the next step. A note that says overdue is not enough. Record the exception and the person who approved it. A short note with the invoice and the next action is easier to use. Test the rule on one real invoice before applying it to the batch.",
          "Keep the handoff short. The next collector should see the last contact and the next action. Use the same format for every handover so the next reader can scan it. Ask whether a new reviewer could act on the record without a conversation. The review should end with one owner and one date. The client should know who is handling the correction."
        ]
      },
      {
        "heading": "Record the invoice and the history",
        "paragraphs": [
          "Write the invoice, the amount, the due date, and the last contact. Record the channel and the response. A history without dates is hard to trust. Separate what was observed from what was assumed. The review should end with one owner and one date. Test the rule on one real invoice before applying it to the batch.",
          "Record any dispute or promise. A dispute should be routed, not collected. A promise should have a date. Record the exception and the person who approved it. A short note with the invoice and the next action is easier to use."
        ]
      },
      {
        "heading": "Name the next step and the owner",
        "paragraphs": [
          "Record the next action, the owner, and the date. A handoff without an owner will sit. A short note with four fields is easier to use than a long narrative. Use the same format for every handover so the next reader can scan it. A short note with the invoice and the next action is easier to use. The review should end with one owner and one date.",
          "Record the contact preference and any restriction. A collector who ignores the preference may damage the relationship. Write the deadline as a date and a local time. Ask whether a new reviewer could act on the record without a conversation. Keep the source link with the invoice so the next reviewer can check it. A short note with the invoice and the next action is easier to use."
        ]
      },
      {
        "heading": "Keep the handoff with the account",
        "paragraphs": [
          "Store the handoff with the account record. A later reviewer may need the history. Review the first few notes together before the process expands. Record the date and the source so the next reviewer can repeat the check. The review should end with one owner and one date. A short note with the invoice and the next action is easier to use."
        ]
      },
      {
        "heading": "Review the handoffs weekly",
        "paragraphs": [
          "Look for invoices that have been handed off more than once. A repeated handoff may point to a missing decision or owner. Test the rule on one real invoice before applying it to the batch. Separate what was observed from what was assumed. The billing lead should record the owner and the date before release. The review should end with one owner and one date."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a collections handoff include?",
        "a": "The invoice, contact history, dispute or promise, next step, owner, and date."
      },
      {
        "q": "What should happen to a dispute?",
        "a": "Route it to the named owner instead of continuing collection."
      }
    ],
    "internalService": "/services/collections-support",
    "internalSibling": "/blog/check-a-purchase-order-before-a-change-order-is-billed",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/"
    }
  },
  {
    "slug": "keep-a-tax-exemption-certificate-current",
    "title": "Keep a tax exemption certificate current",
    "description": "A certificate tracker that records the jurisdiction, the expiry, the evidence, and the billing rule.",
    "category": "Tax billing",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/keep-a-tax-exemption-certificate-current.webp",
    "sections": [
      {
        "heading": "How to approach: Keep a tax exemption certificate current",
        "paragraphs": [
          "A tax exemption certificate should be current and linked to the billing record. Start with the jurisdiction, the expiry, the evidence, and the billing rule. An expired certificate may create a tax liability. Test the rule on one real invoice before applying it to the batch. Keep the source link with the invoice so the next reviewer can check it. The review should end with one owner and one date.",
          "Keep the tracker current. A renewal should be recorded before the expiry. Name the owner in the same line as the action. A control that depends on memory is not yet a control. The billing lead should record the owner and the date before release."
        ]
      },
      {
        "heading": "Record the certificate and the jurisdiction",
        "paragraphs": [
          "Write the customer, the jurisdiction, the certificate number, and the expiry. Attach the certificate or the verification. A number without the evidence is weak. Separate what was observed from what was assumed. The review should end with one owner and one date. The billing lead should record the owner and the date before release.",
          "Record the exempt services or products. A certificate may not cover every line. Record the date and the source so the next reviewer can repeat the check. If the source is unclear, route the question instead of guessing. The client should know who is handling the correction. The review should end with one owner and one date."
        ]
      },
      {
        "heading": "Set the reminder and the owner",
        "paragraphs": [
          "Send a reminder before the expiry. Name the person who follows up. A reminder without an owner is a notification. Keep the evidence with the record rather than in a separate log. Test the rule on one real invoice before applying it to the batch. The review should end with one owner and one date.",
          "Record the response and the renewal. A certificate that is not renewed should be removed from the billing rule. A control that depends on memory is not yet a control. Keep the original note beside the corrected version. Keep the source link with the invoice so the next reviewer can check it. The client should know who is handling the correction."
        ]
      },
      {
        "heading": "Test the billing rule",
        "paragraphs": [
          "Check a sample of invoices for the correct tax treatment. A line that is exempt without the certificate is a risk. If the source is unclear, route the question instead of guessing. Ask whether a new reviewer could act on the record without a conversation. The billing lead should record the owner and the date before release. Test the rule on one real invoice before applying it to the batch."
        ]
      },
      {
        "heading": "Review the tracker quarterly",
        "paragraphs": [
          "Look for certificates that are near expiry or missing. Update the tracker and the billing rule. Test the rule on one real invoice before applying it to the batch. Keep the original note beside the corrected version. The review should end with one owner and one date. A short note with the invoice and the next action is easier to use."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a tax exemption tracker record?",
        "a": "The customer, jurisdiction, certificate number, expiry, evidence, and exempt lines."
      },
      {
        "q": "What should happen when a certificate expires?",
        "a": "Remove the exemption from the billing rule until a valid certificate is recorded."
      }
    ],
    "internalService": "/services/tax-billing",
    "internalSibling": "/blog/plan-a-monthly-billing-audit-on-evidence",
    "source": {
      "label": "Internal Revenue Service",
      "url": "https://www.irs.gov/"
    }
  },
  {
    "slug": "plan-a-monthly-billing-audit-on-evidence",
    "title": "Plan a monthly billing audit on evidence",
    "description": "A monthly audit that samples invoices, approvals, and corrections and ends with one improvement.",
    "category": "Billing controls",
    "publishedAt": "2026-11-09",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-09/plan-a-monthly-billing-audit-on-evidence.webp",
    "sections": [
      {
        "heading": "How to approach: Plan a monthly billing audit on evidence",
        "paragraphs": [
          "A monthly billing audit should test a small sample and end with one improvement. Start with the invoices, the approvals, and the corrections. A broad audit will not finish. Keep the original note beside the corrected version. The billing lead should record the owner and the date before release.",
          "Choose the sample before the audit. Include one routine invoice, one exception, and one corrected invoice. Keep the boundary visible in the place where the work is assigned. Review the first few notes together before the process expands. The client should know who is handling the correction. The billing lead should record the owner and the date before release."
        ]
      },
      {
        "heading": "Choose the evidence",
        "paragraphs": [
          "Use the invoice, the approval, and the source record. A summary without the source is not evidence. Use the same format for every handover so the next reader can scan it. Record the date and the source so the next reviewer can repeat the check. Test the rule on one real invoice before applying it to the batch.",
          "Record the date and the reviewer. Keep the boundary visible in the place where the work is assigned. Keep the evidence with the record rather than in a separate log. Test the rule on one real invoice before applying it to the batch. Keep the source link with the invoice so the next reviewer can check it."
        ]
      },
      {
        "heading": "Review the invoice",
        "paragraphs": [
          "Ask whether the amount, the approval, and the source agree. An invoice that passed the total check but failed the source check is still weak. Test the rule on one real invoice before applying it to the batch. Update the template when the same question appears twice. The review should end with one owner and one date.",
          "Record the finding and the evidence. Do not record a performance opinion. Update the template when the same question appears twice. Ask whether a new reviewer could act on the record without a conversation. The review should end with one owner and one date. A short note with the invoice and the next action is easier to use."
        ]
      },
      {
        "heading": "Set one improvement",
        "paragraphs": [
          "Choose one change that would prevent the most common gap. Assign an owner and a date. A list of ten improvements will not be implemented. A control that depends on memory is not yet a control. A short note with the invoice and the next action is easier to use. The client should know who is handling the correction."
        ]
      },
      {
        "heading": "Review the audit quarterly",
        "paragraphs": [
          "Ask the team whether the audit helped. An audit that produces the same finding is not working. Record the exception and the person who approved it. Update the template when the same question appears twice. The billing lead should record the owner and the date before release."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a monthly billing audit review?",
        "a": "A small sample of invoices, approvals, and corrections, with the source evidence."
      },
      {
        "q": "How many improvements should the audit produce?",
        "a": "One specific change with an owner and a date."
      }
    ],
    "internalService": "/services/billing-support",
    "internalSibling": "/blog/keep-a-tax-exemption-certificate-current",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  }
];
