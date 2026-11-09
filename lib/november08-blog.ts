import type { BlogPost } from './types';

export const november08BlogPosts: readonly BlogPost[] = [
  {
    "slug": "build-a-recurring-invoice-checklist-for-monthly-billing",
    "title": "Build a recurring invoice checklist for monthly billing",
    "description": "A recurring invoice checklist that confirms the contract, the quantity, the rate, and the approved change before the batch runs.",
    "category": "Billing controls",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/build-a-recurring-invoice-checklist-for-monthly-billing.webp",
    "sections": [
      {
        "heading": "How to approach: Build a recurring invoice checklist for monthly billing",
        "paragraphs": [
          "A recurring invoice checklist should catch the change that happened since last month. Start with the contract, the quantity, the rate, and the approved change. A checklist that only confirms the customer name will miss the reason the invoice is wrong. Review the first few notes together before the process expands.",
          "Keep the checklist short enough to finish before the batch runs. Four or five checks are usually enough for a recurring service. The checklist should point to the source record for each field. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Confirm the contract and the term",
        "paragraphs": [
          "Check that the contract is active and the billing period is correct. A contract that ended last month should not produce a new invoice. Record the term and the renewal date. Separate what was observed from what was assumed.",
          "Check the currency and the payment terms. A change in the contract may not have reached the billing system. The invoice should match the signed terms, not the last invoice. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Confirm the quantity and the rate",
        "paragraphs": [
          "Compare the quantity with the approved usage or the service record. A quantity that changed without a change note is a question. Record the source and the date. Record the date and the source so the next reviewer can repeat the check.",
          "Compare the rate with the contract or the approved price list. A rate that was copied from last month may be out of date. The checklist should show the rate and the source. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Check the approved change",
        "paragraphs": [
          "List the changes approved since the last invoice, such as a new service, a discount, or a credit. Confirm that each change is reflected in the invoice. A change that is approved but not billed is a revenue leak. Update the template when the same question appears twice.",
          "Check the changes that were approved but should not be billed yet. A future-dated change should not appear early. Record the effective date. Keep the evidence with the record rather than in a separate log."
        ]
      },
      {
        "heading": "Review the batch before release",
        "paragraphs": [
          "Review the batch total and a sample of invoices. Look for a customer with an unusual amount or a missing line. A sample can catch a systematic error before the client sees it. Name the owner in the same line as the action.",
          "Record the reviewer and the time. A batch released without a review is a single point of failure. The record is the evidence that the checklist was used. Keep the original note beside the corrected version."
        ]
      },
      {
        "heading": "Review the checklist monthly",
        "paragraphs": [
          "Ask the billing team which check caught an error and which check was unnecessary. Update the checklist based on the answer. A checklist that improves after each cycle is more useful than a perfect template. If the source is unclear, route the question instead of guessing.",
          "Keep the completed checklist with the batch. A later audit may need to see what was checked. The history is the evidence that the billing was controlled. A control that depends on memory is not yet a control."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a recurring invoice checklist confirm?",
        "a": "The contract, the term, the quantity, the rate, and any approved change before the batch runs."
      },
      {
        "q": "How many invoices should be sampled?",
        "a": "Enough to catch a systematic error, including one large account and one recent change."
      }
    ],
    "internalService": "/services/invoice-preparation",
    "internalSibling": "/blog/review-a-billing-batch-before-release",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  },
  {
    "slug": "reconcile-time-tracking-entries-before-the-invoice-run",
    "title": "Reconcile time tracking entries before the invoice run",
    "description": "A time reconciliation that compares approved hours, billable rates, and invoice lines before the batch is released.",
    "category": "Billing controls",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/reconcile-time-tracking-entries-before-the-invoice-run.webp",
    "sections": [
      {
        "heading": "How to approach: Reconcile time tracking entries before the invoice run",
        "paragraphs": [
          "A time reconciliation should catch the hours that were not approved or not billable before they reach the invoice. Start with the approved time entries and the billing rules. A reconciliation that starts with the invoice total cannot explain a difference. Use the same format for every handover so the next reader can scan it.",
          "Keep the check to the accounts and periods that are about to be billed. A full audit of every entry is too slow for a monthly run. The goal is a clean batch, not a perfect time system. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Compare approved hours with billed hours",
        "paragraphs": [
          "Pull the approved time entries and the invoice lines for the same period. Match the person, the project, and the date. An hour that was approved but not billed is a revenue question; an hour that was billed but not approved is a compliance question. If the source is unclear, route the question instead of guessing.",
          "Record the differences and the reason. A difference may be a write-off, a fixed fee, or a data-entry error. The reason determines the correction. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Check the rates and the rules",
        "paragraphs": [
          "Compare the rate on the invoice with the approved rate for the person and the project. A rate that was copied from another project is a common error. Record the source of the rate. Keep the boundary visible in the place where the work is assigned.",
          "Check the billing rules for overtime, travel, and expenses. A rule that is applied differently across projects will produce a dispute. The reconciliation should show the rule used. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Resolve the differences before release",
        "paragraphs": [
          "Send the differences to the project owner with the evidence. Do not adjust the invoice without an approval. A correction without a reason is hard to defend. Update the template when the same question appears twice.",
          "Set a deadline that fits the invoice calendar. A late correction creates a credit memo and a client conversation. The reconciliation should finish before the release. A control that depends on memory is not yet a control."
        ]
      },
      {
        "heading": "Record the result",
        "paragraphs": [
          "Record the batch, the differences, the corrections, and the reviewer. The record should let a later reviewer reconstruct the run. A clean reconciliation is evidence that the billing was controlled. Keep the evidence with the record rather than in a separate log.",
          "Review the differences monthly for a pattern. A recurring difference by project or person may point to a time-entry or rate problem. Share the pattern with the owner. Keep the boundary visible in the place where the work is assigned."
        ]
      },
      {
        "heading": "Keep the process current",
        "paragraphs": [
          "Review the reconciliation after a rate change, a new project, or a system change. A new billing rule may need a new check. The process should cover the work the team actually does. Keep the original note beside the corrected version.",
          "Train the billing team on the check. A process that is not practiced will be skipped under pressure. The goal is a clean invoice, not a longer spreadsheet. Test the rule on one real invoice before applying it to the batch."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a time reconciliation compare?",
        "a": "Approved time entries, billed hours, rates, and the billing rules for the period."
      },
      {
        "q": "What should happen to an unapproved billed hour?",
        "a": "Hold or correct it before release and route the question to the project owner."
      }
    ],
    "internalService": "/services/billing-support",
    "internalSibling": "/blog/build-a-recurring-invoice-checklist-for-monthly-billing",
    "source": {
      "label": "U.S. Department of Labor",
      "url": "https://www.dol.gov/"
    }
  },
  {
    "slug": "write-a-billing-change-note-the-client-can-approve",
    "title": "Write a billing change note the client can approve",
    "description": "A billing change note that names the old and new amount, the reason, the effective date, and the approval.",
    "category": "Client billing",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/write-a-billing-change-note-the-client-can-approve.webp",
    "sections": [
      {
        "heading": "How to approach: Write a billing change note the client can approve",
        "paragraphs": [
          "A billing change note should make the change easy to approve or reject. Name the old amount, the new amount, the reason, and the effective date. A note that only says the price is changing creates a dispute. Keep the evidence with the record rather than in a separate log.",
          "Send the note before the first invoice with the new amount. A client who sees the change on the invoice will call the account manager. The note should give the client time to ask a question. Keep the boundary visible in the place where the work is assigned."
        ]
      },
      {
        "heading": "State the old and new amount",
        "paragraphs": [
          "Write the current amount and the proposed amount in the same format. Include the currency and the billing period. A percentage without the base amount is hard to check. Record the exception and the person who approved it.",
          "Show the line items that changed. A total change can hide a new fee or a removed discount. The client should see exactly what is different. Review the first few notes together before the process expands."
        ]
      },
      {
        "heading": "Explain the reason and the effective date",
        "paragraphs": [
          "Write the reason in plain language. A cost increase, a scope change, or a correction should be named. A vague reason invites a challenge. If the source is unclear, route the question instead of guessing.",
          "Record the effective date and the first invoice it affects. A change that is applied to an already-issued invoice creates a credit memo. The date should be clear. If the source is unclear, route the question instead of guessing."
        ]
      },
      {
        "heading": "Get the approval",
        "paragraphs": [
          "Name the person who can approve the change and the date. A verbal approval should be confirmed in writing. The approval should be stored with the billing record. Use the same format for every handover so the next reader can scan it.",
          "If the client rejects the change, record the decision and the next step. Do not apply the change without an approval. The note should show the status. Test the rule on one real invoice before applying it to the batch."
        ]
      },
      {
        "heading": "Update the billing system",
        "paragraphs": [
          "Update the contract, the rate, and the invoice template after the approval. Record the person who made the change and the date. A change that is approved but not entered will be missed. A short note with four fields is easier to use than a long narrative.",
          "Check the next invoice against the change note. A first invoice is the best test of whether the change was applied correctly. Record the result. Keep the original note beside the corrected version."
        ]
      },
      {
        "heading": "Review the change for patterns",
        "paragraphs": [
          "Review the changes quarterly. Look for repeated increases or corrections that should be part of the standard terms. A pattern may point to a pricing or scope problem. Review the first few notes together before the process expands.",
          "Share the pattern with the account owner. The goal is a clear billing relationship, not more change notes. A stable rate is easier to invoice and easier to approve. Separate what was observed from what was assumed."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a billing change note include?",
        "a": "The old and new amount, the line items, the reason, the effective date, and the approval."
      },
      {
        "q": "When should the client receive the note?",
        "a": "Before the first invoice with the new amount, with enough time to ask a question."
      }
    ],
    "internalService": "/services/billing-support",
    "internalSibling": "/blog/handle-a-billing-dispute-without-losing-the-invoice-trail",
    "source": {
      "label": "Federal Trade Commission",
      "url": "https://www.ftc.gov/"
    }
  },
  {
    "slug": "set-a-purchase-order-check-that-stops-wrong-invoices",
    "title": "Set a purchase order check that stops wrong invoices",
    "description": "A purchase order check that compares the order, the receipt, and the invoice before the invoice is released.",
    "category": "Billing controls",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/set-a-purchase-order-check-that-stops-wrong-invoices.webp",
    "sections": [
      {
        "heading": "How to approach: Set a purchase order check that stops wrong invoices",
        "paragraphs": [
          "A purchase order check should stop an invoice that does not match the order or the receipt. Compare the vendor, the quantity, the price, and the terms. A check that only looks at the total will miss a line-level error. A control that depends on memory is not yet a control.",
          "Run the check before the invoice is sent or paid. A correction after the client receives the invoice is slower and more visible. The check should be part of the billing release. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Match the order and the invoice",
        "paragraphs": [
          "Compare the purchase order number, the vendor, and the line items. A missing order number is a question, not a reason to guess. Record the source and the date. Record the date and the source so the next reviewer can repeat the check.",
          "Compare the quantity and the price. A quantity that exceeds the order may be a partial delivery or an error. The invoice should not bill more than the approved order without a change. Record the exception and the person who approved it."
        ]
      },
      {
        "heading": "Check the receipt and the acceptance",
        "paragraphs": [
          "Confirm that the goods or services were received and accepted. An invoice for an undelivered item should be held. Record the receipt date and the person who accepted. A short note with four fields is easier to use than a long narrative.",
          "Check the acceptance for a service. A service may be accepted at the end of the period, not at the start. The invoice should match the acceptance record. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Resolve the exception",
        "paragraphs": [
          "A mismatch should go to the person who can correct the order or the invoice. Record the exception, the owner, and the next step. Do not release the invoice until the mismatch is resolved. Separate what was observed from what was assumed.",
          "If the client approved a change, record the approval and the new amount. A change without a record will reappear on the next invoice. Record the exception and the person who approved it. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Record the result",
        "paragraphs": [
          "Record the invoices checked, the exceptions found, and the corrections. A check that is not recorded cannot be reviewed. The record should support a later audit. Record the exception and the person who approved it.",
          "Review the exceptions monthly for a pattern. A recurring mismatch by vendor or project may point to an ordering or receipt problem. Share the pattern with the owner. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Keep the check current",
        "paragraphs": [
          "Review the check after a new procurement system or a new client requirement. A new field may need a new match. The check should cover the work the team actually does. A short note with four fields is easier to use than a long narrative.",
          "Test the check with a known mismatch. A control that has never been tested is only an intention. Record the test and the result. Update the template when the same question appears twice."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a purchase order check compare?",
        "a": "The order, the receipt, the invoice line items, the quantity, the price, and the terms."
      },
      {
        "q": "What should happen to a mismatch?",
        "a": "Hold the invoice and route the exception to the person who can correct the order or the invoice."
      }
    ],
    "internalService": "/services/invoice-preparation",
    "internalSibling": "/blog/build-a-recurring-invoice-checklist-for-monthly-billing",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  },
  {
    "slug": "handle-a-billing-dispute-without-losing-the-invoice-trail",
    "title": "Handle a billing dispute without losing the invoice trail",
    "description": "A dispute process that preserves the invoice, the client's claim, the evidence, and the resolution before any credit is issued.",
    "category": "Dispute handling",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/handle-a-billing-dispute-without-losing-the-invoice-trail.webp",
    "sections": [
      {
        "heading": "How to approach: Handle a billing dispute without losing the invoice trail",
        "paragraphs": [
          "A billing dispute should be recorded before anyone changes the invoice. Start with the client's claim, the invoice, and the evidence. A credit issued before the claim is understood hides the real problem. Name the owner in the same line as the action.",
          "Keep the original invoice and the dispute record together. A later reviewer should see what the client said and what the team did. The trail is the evidence that the dispute was controlled. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Record the claim and the invoice",
        "paragraphs": [
          "Write the client's claim in their own words, then list the invoice lines involved. Record the amount and the date. A note that says client disagrees is not enough. Use the same format for every handover so the next reader can scan it.",
          "Attach the invoice, the contract, the time record, and the correspondence. The evidence should let a reviewer test the claim. Do not summarize the documents away. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Set the owner and the response window",
        "paragraphs": [
          "Assign the dispute to a named owner and a response date. The owner may be the account manager, the billing lead, or the finance owner. The client should know who is handling the question. Use the same format for every handover so the next reader can scan it.",
          "Record the first response and the next update. A dispute that goes silent for a week becomes a trust problem. The response window should be realistic. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Decide the resolution",
        "paragraphs": [
          "Record whether the invoice is correct, partially correct, or wrong. Name the evidence and the approver. A credit should have the same approval as the original invoice. Separate what was observed from what was assumed.",
          "If the resolution is a credit memo, record the amount, the reason, and the accounting entry. Do not apply the credit without a record. The credit should link to the dispute. A short note with four fields is easier to use than a long narrative."
        ]
      },
      {
        "heading": "Close the loop with the client",
        "paragraphs": [
          "Send the client a short explanation of the resolution. Include the corrected invoice or the credit note. The client should know what changed and what happens next. Test the rule on one real invoice before applying it to the batch.",
          "Record the closure date and the person who confirmed it. A dispute that is closed internally but not communicated will return. Use the same format for every handover so the next reader can scan it. Keep the boundary visible in the place where the work is assigned."
        ]
      },
      {
        "heading": "Review the disputes monthly",
        "paragraphs": [
          "Look for repeated disputes by client, service, or billing rule. A pattern may point to a contract, a rate, or a communication problem. Share the pattern with the owner. A short note with four fields is easier to use than a long narrative.",
          "Update the invoice template or the billing checklist. The goal is fewer disputes next month, not faster credits this month. Ask whether a new reviewer could act on the record without a conversation. A short note with four fields is easier to use than a long narrative."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a billing dispute record preserve?",
        "a": "The client's claim, the invoice, the evidence, the owner, the decision, and the client communication."
      },
      {
        "q": "Who should approve a credit memo?",
        "a": "The same authority that approved the original invoice, with the evidence and the reason recorded."
      }
    ],
    "internalService": "/services/dispute-support",
    "internalSibling": "/blog/prepare-a-credit-memo-with-a-named-approver",
    "source": {
      "label": "Federal Trade Commission",
      "url": "https://www.ftc.gov/"
    }
  },
  {
    "slug": "prepare-a-credit-memo-with-a-named-approver",
    "title": "Prepare a credit memo with a named approver",
    "description": "A credit memo process that links the reason, the invoice, the approval, and the accounting entry before the credit is applied.",
    "category": "Credit control",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/prepare-a-credit-memo-with-a-named-approver.webp",
    "sections": [
      {
        "heading": "How to approach: Prepare a credit memo with a named approver",
        "paragraphs": [
          "A credit memo should be prepared from a documented reason, not from a verbal request. Link the credit to the invoice and the client issue. A credit without a reason is a write-off with a different name. Ask whether a new reviewer could act on the record without a conversation.",
          "Name the approver before the credit is applied. A credit that reduces revenue should have the same review as the original invoice. The approver should see the evidence. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Record the reason and the invoice",
        "paragraphs": [
          "Write the reason for the credit, such as a service failure, a billing error, or a negotiated adjustment. Link the invoice and the amount. A generic reason makes the credit hard to defend. Keep the evidence with the record rather than in a separate log.",
          "Record the client's request and the date. If the credit was offered proactively, record who authorized the offer. The memo should show the origin. Write the deadline as a date and a local time."
        ]
      },
      {
        "heading": "Calculate the amount and the tax",
        "paragraphs": [
          "Calculate the credit from the invoice lines and the tax treatment. A credit that ignores tax may create a reconciliation problem. Record the calculation. If the source is unclear, route the question instead of guessing.",
          "Check the currency and the exchange rate if the invoice was in another currency. A credit that uses a different rate may not match the ledger. Record the rate and the date. If the source is unclear, route the question instead of guessing."
        ]
      },
      {
        "heading": "Get the approval",
        "paragraphs": [
          "Record the approver's name and the date. A credit above a threshold should have a second approver. The approval should be specific to the amount and the reason. Update the template when the same question appears twice.",
          "If the approval is not granted, record the decision and the next step. Do not apply the credit without an approval. The memo should show the status. If the source is unclear, route the question instead of guessing."
        ]
      },
      {
        "heading": "Apply and reconcile",
        "paragraphs": [
          "Apply the credit to the correct invoice or account. Record the accounting entry and the date. Reconcile the client statement after the credit is applied. Keep the evidence with the record rather than in a separate log.",
          "Check that the credit did not create a negative balance that the system cannot handle. A negative balance may need a refund or a carry-forward. Record the treatment. Update the template when the same question appears twice."
        ]
      },
      {
        "heading": "Review the credits quarterly",
        "paragraphs": [
          "Look for repeated credits by client, service, or approver. A pattern may point to a quality or billing problem. Share the pattern with the owner. If the source is unclear, route the question instead of guessing.",
          "Update the credit policy and the approval threshold. The goal is fewer credits, not more paperwork. A clear policy is easier to apply. A short note with four fields is easier to use than a long narrative."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a credit memo link to?",
        "a": "The reason, the original invoice, the calculation, the approval, and the accounting entry."
      },
      {
        "q": "Who should approve a credit memo?",
        "a": "A named approver with the authority for the amount, and a second approver above the threshold."
      }
    ],
    "internalService": "/services/credit-control",
    "internalSibling": "/blog/handle-a-billing-dispute-without-losing-the-invoice-trail",
    "source": {
      "label": "Financial Accounting Standards Board",
      "url": "https://www.fasb.org/"
    }
  },
  {
    "slug": "keep-a-tax-rate-change-from-breaking-the-invoice-batch",
    "title": "Keep a tax rate change from breaking the invoice batch",
    "description": "A tax change checklist that confirms the rate, the jurisdiction, the effective date, and the invoice lines before the batch runs.",
    "category": "Tax billing",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/keep-a-tax-rate-change-from-breaking-the-invoice-batch.webp",
    "sections": [
      {
        "heading": "How to approach: Keep a tax rate change from breaking the invoice batch",
        "paragraphs": [
          "A tax rate change should be tested before the invoice batch runs. Confirm the rate, the jurisdiction, the effective date, and the lines it affects. A change applied to the wrong date creates a correction and a client question. Keep the original note beside the corrected version.",
          "Keep the change note with the batch. A later reviewer should see which rate was used and why. The note is the evidence that the tax change was controlled. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Confirm the rate and the jurisdiction",
        "paragraphs": [
          "Record the old rate, the new rate, and the jurisdiction. A rate that is correct for one location may be wrong for another. The check should use the ship-to or service address. Record the exception and the person who approved it.",
          "Confirm the source of the rate, such as a tax authority notice or a system update. A rate copied from an email is weak evidence. Record the source date. Use the same format for every handover so the next reader can scan it."
        ]
      },
      {
        "heading": "Confirm the effective date",
        "paragraphs": [
          "Record the date the new rate applies and the first invoice it affects. A rate applied a day early or late creates a correction. The batch should use the invoice date, not the payment date. Ask whether a new reviewer could act on the record without a conversation.",
          "Check the invoices that straddle the change. A service period that crosses the date may need a split. Record the treatment and the approver. Ask whether a new reviewer could act on the record without a conversation."
        ]
      },
      {
        "heading": "Test a sample before the batch",
        "paragraphs": [
          "Run a sample of invoices with the new rate. Check the tax amount and the total. A sample can catch a system mapping error before the full batch. Separate what was observed from what was assumed.",
          "Record the sample result and the reviewer. A batch released without a test is a single point of failure. The test should be quick and specific. If the source is unclear, route the question instead of guessing."
        ]
      },
      {
        "heading": "Review the batch after release",
        "paragraphs": [
          "Check the tax total and a sample of invoices after the batch runs. A last-minute change may have been missed. Record the result and the correction. Keep the evidence with the record rather than in a separate log.",
          "If an error is found, issue a correction with a clear explanation. Do not hide the correction in a credit memo. The client should understand what changed. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Review the process quarterly",
        "paragraphs": [
          "Review the tax change process with the finance and billing teams. Update the checklist after a new jurisdiction or system change. A process that is not reviewed will fail on the next change. Review the first few notes together before the process expands.",
          "Keep the completed checklist with the batch. A later audit may need to see what was tested. The history is the evidence that the tax change was controlled. Name the owner in the same line as the action."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a tax rate change checklist confirm?",
        "a": "The old and new rate, the jurisdiction, the effective date, the affected lines, and a sample test."
      },
      {
        "q": "What should happen to an invoice that straddles the change?",
        "a": "Split or adjust it according to the approved rule and record the treatment."
      }
    ],
    "internalService": "/services/tax-billing",
    "internalSibling": "/blog/review-a-billing-batch-before-release",
    "source": {
      "label": "Internal Revenue Service",
      "url": "https://www.irs.gov/"
    }
  },
  {
    "slug": "review-a-billing-batch-before-release",
    "title": "Review a billing batch before release",
    "description": "A final billing batch review that checks the total, the changes, the exceptions, and the approval before release.",
    "category": "Billing controls",
    "publishedAt": "2026-11-08",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-08/review-a-billing-batch-before-release.webp",
    "sections": [
      {
        "heading": "How to approach: Review a billing batch before release",
        "paragraphs": [
          "A billing batch review should catch the error that would be expensive to correct after release. Check the total, the changes, the exceptions, and the approval. A review that only checks the total will miss a line-level error. Keep the boundary visible in the place where the work is assigned.",
          "Keep the review short enough to finish before the release window. A sample plus the exception list is usually enough. The reviewer should see the evidence, not just a summary. Update the template when the same question appears twice."
        ]
      },
      {
        "heading": "Check the total and the count",
        "paragraphs": [
          "Compare the batch total with the expected total. Compare the invoice count with the count from the billing system. A difference may be a missing invoice or a duplicate. Record the exception and the person who approved it.",
          "Check the largest invoices and the newest changes. A large invoice is worth a closer look. A new change is the most likely source of an error. Test the rule on one real invoice before applying it to the batch."
        ]
      },
      {
        "heading": "Review the exceptions",
        "paragraphs": [
          "List the invoices that were held, adjusted, or excluded. Record the reason and the owner. An exception that is not on the list may be released by mistake. Update the template when the same question appears twice.",
          "Check that each exception has a next step and a date. An exception without an owner will become a late invoice or a client complaint. If the source is unclear, route the question instead of guessing. Name the owner in the same line as the action."
        ]
      },
      {
        "heading": "Confirm the approval",
        "paragraphs": [
          "Record the person who approved the batch and the date. A batch released without an approval is a control gap. The approval should be specific to the batch and the amount. Use the same format for every handover so the next reader can scan it.",
          "Check that the approver saw the exception list. An approval that covers only the total is incomplete. The approver should see the changes that affect the client. Record the date and the source so the next reviewer can repeat the check."
        ]
      },
      {
        "heading": "Release and record",
        "paragraphs": [
          "Record the release time and the person who released the batch. Confirm that the invoices were sent or queued. A release without a confirmation is not complete. A short note with four fields is easier to use than a long narrative.",
          "Keep the batch record with the review. A later audit may need to see who checked what. The record is the evidence that the release was controlled. Separate what was observed from what was assumed."
        ]
      },
      {
        "heading": "Review the process monthly",
        "paragraphs": [
          "Ask the reviewer and the billing team what the review caught. Update the checklist based on the answer. A review that improves after each batch is more useful than a perfect template. Ask whether a new reviewer could act on the record without a conversation.",
          "Look for errors that reached the client. A client-visible error is a sign that the review missed something. Update the sample or the exception rule. Keep the evidence with the record rather than in a separate log."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should a billing batch review check?",
        "a": "The total, the count, the largest invoices, the newest changes, the exceptions, and the approval."
      },
      {
        "q": "Who should approve the batch?",
        "a": "A named approver who has seen the exception list and the changes that affect the client."
      }
    ],
    "internalService": "/services/billing-support",
    "internalSibling": "/blog/build-a-recurring-invoice-checklist-for-monthly-billing",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  }
];
