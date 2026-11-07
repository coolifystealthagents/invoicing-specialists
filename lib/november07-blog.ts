import type { BlogPost } from './types';

export const november07BlogPosts: readonly BlogPost[] = [
  {
    "slug": "audit-the-prepaid-billing-schedule-for-the-quarter-start-review",
    "title": "Audit the prepaid billing schedule for the quarter-start review",
    "description": "A quarter-start method for tying every prepaid balance to a release date, an approval, and a dated owner.",
    "category": "Billing controls",
    "publishedAt": "2026-11-07",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-07/audit-the-prepaid-billing-schedule-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Why the prepaid billing schedule review belongs at quarter start",
        "paragraphs": [
          "The useful question is not whether the team worked hard on prepaid billing schedule. It is whether a new reviewer can follow the same path. If the prepaid schedule file cannot name its owner, the prepaid billing schedule review will end with a list and no decisions. The prepaid billing schedule review earns its place when it answers a question the finance owner will ask anyway: what changed, who approved it, and which record proves it.",
          "A prepaid billing schedule control that lives only in a year-end clean-up will be skipped during the first busy week of the quarter. Begin with the prepaid billing queue, not with the policy. The queue shows which items actually wait for a decision. The review has one job: make the next prepaid billing schedule decision visible before the volume arrives.",
          "The first pass should be small enough to finish and specific enough that the result can be challenged. Treat the prepaid schedule file as evidence, not as a summary. A summary can be rewritten; evidence carries a date and a source. A quarter-start pass gives the team a clean baseline for the prepaid billing queue, including the items that were quietly carried forward."
        ]
      },
      {
        "heading": "What the prepaid schedule file must show",
        "paragraphs": [
          "Every prepaid schedule file needs the draw date, the remaining balance, and the release approval in one place, because a later reader cannot reconstruct those facts from a dashboard. The prepaid billing queue should show which fields were checked against a source and which were accepted from the requester. Record what was checked, not only that a check happened. The difference matters when the prepaid billing queue is audited.",
          "The prepaid schedule file is complete when a reviewer can tell what a different answer would have looked like. A dated note about the draw date, the remaining balance, and the release approval is worth more than a polished summary written after the fact. Missing, unavailable, and confirmed negative are three different answers. The prepaid schedule file should keep them separate.",
          "Link the prepaid schedule file to the system entry it supports, so the next person does not have to search for the connection. A short prepaid schedule file with dated fields beats a long narrative that hides the one value the reviewer needs. The prepaid schedule file should show the source version beside the decision, so a change after the review remains visible."
        ]
      },
      {
        "heading": "Where the specialist's authority ends",
        "paragraphs": [
          "Write the prepaid billing schedule boundary where the work is assigned, not in a policy file that only appears during training. The boundary protects the customer relationship as much as it protects the specialist. Review the authority list at quarter start, because a title change can leave a decision without a current owner.",
          "A specialist who cannot see the limit of the role will either stop too often or approve too much. When the prepaid schedule file raises a question outside the written rule, the item pauses and the named owner decides. Keep the prepaid billing schedule scope narrow enough for one owner to understand it and wide enough to be useful on a normal day.",
          "The handoff should name the controller who approves a prepaid draw or release change, not a department, so the next step has a person and a date. The specialist can prepare the prepaid schedule file, check the source, and route the item; the controller who approves a prepaid draw or release change keeps the decision itself. If the prepaid billing queue does not show who may approve a change, the specialist will invent a boundary under pressure."
        ]
      },
      {
        "heading": "The weekly prepaid billing schedule routine",
        "paragraphs": [
          "Start with the oldest unresolved prepaid billing schedule item, because age is what turns a small gap into an escalation. A daily list with ten open items is easier to trust than a dashboard with a hundred and no owner. Small habits carry prepaid billing schedule: date the source, initial the check, state the next action, and never copy a familiar value.",
          "Keep the prepaid schedule file close enough to the work that updating it does not require a separate meeting. Read the prepaid schedule file before accepting new work, not after the new work has already created another exception. A consistent review time makes the prepaid billing queue easier to trust than a heroic catch-up at month end.",
          "The weekly review should leave the next reviewer faster, not merely busier. If the prepaid billing queue grows while the close is stable, the intake rule is usually the problem. The weekly routine is short: open the prepaid billing queue, confirm the source, log the exception, and leave a named next action."
        ]
      },
      {
        "heading": "Exceptions that should stop the item",
        "paragraphs": [
          "The prepaid billing queue should separate an exception from a normal item before anyone starts working it. The quarter-start review should count exception types, because the pattern usually points to a missing field. When the answer is no, the prepaid schedule file should still show who was notified and when.",
          "Exceptions deserve a shorter path to the decision maker, not a longer form. The specialist should never invent a resolution to keep the prepaid billing queue moving. Write the exception reason on the prepaid schedule file itself, so the next reviewer does not have to reopen a chat thread.",
          "A prepaid billing schedule exception that recurs every week is a design problem, not a training problem. An item that touches a release that would cross a signed contract month should stop and go to the controller who approves a prepaid draw or release change, however complete the rest of the record looks. A clear stop rule protects the client, the specialist, and the manager at the same time."
        ]
      },
      {
        "heading": "How to verify and close the review",
        "paragraphs": [
          "A close that cannot be explained next month was not really a close. The close note should say what was confirmed, by whom, and on which date. Close the prepaid billing schedule item only after the destination record matches the approved decision.",
          "Count confirmed closes separately from assumed closes, or the prepaid billing queue will look healthier than it is. Reopened cases are a useful signal about where the prepaid billing schedule routine is weak. A case that needed a correction is useful evidence about the prepaid schedule file, not an embarrassment to hide.",
          "The measure of prepaid billing schedule work is not speed but whether each close can be defended. Keep the close rule fixed for the review window so the comparison means something. Compare a sample of closed items with their sources before the monthly operations review."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns the prepaid billing schedule decision?",
        "a": "The controller who approves a prepaid draw or release change. The specialist prepares the record, checks the source, and routes the decision with a named owner and a date."
      },
      {
        "q": "How does the team know a prepaid billing schedule item is closed?",
        "a": "The item is closed when the destination record matches the approved decision and the prepaid schedule file shows a timestamp and a named confirmer."
      }
    ],
    "internalService": "/services/billing-schedule-support",
    "internalSibling": "/blog/billing-schedule-change-checklist",
    "source": {
      "label": "GAO Green Book",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "map-every-customer-credit-application-for-the-quarter-start-review",
    "title": "Map every customer credit application for the quarter-start review",
    "description": "A quarter-start map of credit applications that shows the requested limit, approval tier, expiry, and named reviewer.",
    "category": "Credit operations",
    "publishedAt": "2026-11-07",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-07/map-every-customer-credit-application-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Why the customer credit application review belongs at quarter start",
        "paragraphs": [
          "Begin with the credit application queue, not with the policy. The queue shows which items actually wait for a decision. If the credit application file cannot name its owner, the customer credit application review will end with a list and no decisions. The first pass should be small enough to finish and specific enough that the result can be challenged.",
          "The review has one job: make the next customer credit application decision visible before the volume arrives. A customer credit application control that lives only in a year-end clean-up will be skipped during the first busy week of the quarter. The useful question is not whether the team worked hard on customer credit application. It is whether a new reviewer can follow the same path.",
          "A quarter-start pass gives the team a clean baseline for the credit application queue, including the items that were quietly carried forward. Treat the credit application file as evidence, not as a summary. A summary can be rewritten; evidence carries a date and a source. The customer credit application review earns its place when it answers a question the finance owner will ask anyway: what changed, who approved it, and which record proves it."
        ]
      },
      {
        "heading": "What the credit application file must show",
        "paragraphs": [
          "Record what was checked, not only that a check happened. The difference matters when the credit application queue is audited. The credit application file is complete when a reviewer can tell what a different answer would have looked like. Missing, unavailable, and confirmed negative are three different answers. The credit application file should keep them separate.",
          "A short credit application file with dated fields beats a long narrative that hides the one value the reviewer needs. A dated note about the requested limit, the approval tier, and the expiry date is worth more than a polished summary written after the fact. The credit application queue should show which fields were checked against a source and which were accepted from the requester.",
          "The credit application file should show the source version beside the decision, so a change after the review remains visible. Put the observation time on the customer credit application entry itself. A screenshot taken today cannot prove what the file said last month. Link the credit application file to the system entry it supports, so the next person does not have to search for the connection."
        ]
      },
      {
        "heading": "Where the specialist's authority ends",
        "paragraphs": [
          "The boundary protects the customer relationship as much as it protects the specialist. Review the authority list at quarter start, because a title change can leave a decision without a current owner. When the credit application file raises a question outside the written rule, the item pauses and the named owner decides.",
          "The specialist can prepare the credit application file, check the source, and route the item; the credit manager who sets or extends a customer limit keeps the decision itself. Escalation is a normal part of customer credit application. It becomes a failure only when nobody knows whom to escalate to. A specialist who cannot see the limit of the role will either stop too often or approve too much.",
          "The handoff should name the credit manager who sets or extends a customer limit, not a department, so the next step has a person and a date. Write the customer credit application boundary where the work is assigned, not in a policy file that only appears during training. Keep the customer credit application scope narrow enough for one owner to understand it and wide enough to be useful on a normal day."
        ]
      },
      {
        "heading": "The weekly customer credit application routine",
        "paragraphs": [
          "Small habits carry customer credit application: date the source, initial the check, state the next action, and never copy a familiar value. A consistent review time makes the credit application queue easier to trust than a heroic catch-up at month end. A daily list with ten open items is easier to trust than a dashboard with a hundred and no owner.",
          "The weekly routine is short: open the credit application queue, confirm the source, log the exception, and leave a named next action. The weekly review should leave the next reviewer faster, not merely busier. Keep the credit application file close enough to the work that updating it does not require a separate meeting.",
          "If the credit application queue grows while the close is stable, the intake rule is usually the problem. Read the credit application file before accepting new work, not after the new work has already created another exception. Start with the oldest unresolved customer credit application item, because age is what turns a small gap into an escalation."
        ]
      },
      {
        "heading": "Exceptions that should stop the item",
        "paragraphs": [
          "An item that touches a limit change that lacks a current trade reference should stop and go to the credit manager who sets or extends a customer limit, however complete the rest of the record looks. If an exception has no owner, it will sit until it becomes urgent, and then it will be handled twice. When the answer is no, the credit application file should still show who was notified and when.",
          "The credit application queue should separate an exception from a normal item before anyone starts working it. The specialist should never invent a resolution to keep the credit application queue moving. A clear stop rule protects the client, the specialist, and the manager at the same time.",
          "Exceptions deserve a shorter path to the decision maker, not a longer form. A customer credit application exception that recurs every week is a design problem, not a training problem. The quarter-start review should count exception types, because the pattern usually points to a missing field."
        ]
      },
      {
        "heading": "How to verify and close the review",
        "paragraphs": [
          "Count confirmed closes separately from assumed closes, or the credit application queue will look healthier than it is. A case that needed a correction is useful evidence about the credit application file, not an embarrassment to hide. The close note should say what was confirmed, by whom, and on which date.",
          "End the review with one change to the credit application file or the routine, and name the date it will be tested again. Compare a sample of closed items with their sources before the monthly operations review. Close the customer credit application item only after the destination record matches the approved decision.",
          "Keep the close rule fixed for the review window so the comparison means something. The measure of customer credit application work is not speed but whether each close can be defended. Reopened cases are a useful signal about where the customer credit application routine is weak."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns the customer credit application decision?",
        "a": "The credit manager who sets or extends a customer limit. The specialist prepares the record, checks the source, and routes the decision with a named owner and a date."
      },
      {
        "q": "How does the team know a customer credit application item is closed?",
        "a": "The item is closed when the destination record matches the approved decision and the credit application file shows a timestamp and a named confirmer."
      }
    ],
    "internalService": "/services/customer-billing-records",
    "internalSibling": "/blog/customer-billing-profile-checklist",
    "source": {
      "label": "U.S. Small Business Administration",
      "url": "https://www.sba.gov/"
    }
  },
  {
    "slug": "reset-the-dunning-cadence-for-the-quarter-start-review",
    "title": "Reset the dunning cadence for the quarter-start review",
    "description": "A quarter-start reset of dunning steps that checks notice timing, pause rules, and the named escalation owner.",
    "category": "Collections",
    "publishedAt": "2026-11-07",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-07/reset-the-dunning-cadence-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Why the dunning cadence review belongs at quarter start",
        "paragraphs": [
          "The useful question is not whether the team worked hard on dunning cadence. It is whether a new reviewer can follow the same path. Treat the dunning cadence sheet as evidence, not as a summary. A summary can be rewritten; evidence carries a date and a source. Begin with the dunning queue, not with the policy. The queue shows which items actually wait for a decision.",
          "Quarter start is the right moment to test the dunning cadence sheet, because the next billing cycle has not yet hardened into habit. If the dunning cadence sheet cannot name its owner, the dunning cadence review will end with a list and no decisions. A quarter-start pass gives the team a clean baseline for the dunning queue, including the items that were quietly carried forward.",
          "The first pass should be small enough to finish and specific enough that the result can be challenged. The review has one job: make the next dunning cadence decision visible before the volume arrives. The dunning cadence review earns its place when it answers a question the finance owner will ask anyway: what changed, who approved it, and which record proves it."
        ]
      },
      {
        "heading": "What the dunning cadence sheet must show",
        "paragraphs": [
          "The dunning cadence sheet is complete when a reviewer can tell what a different answer would have looked like. Record what was checked, not only that a check happened. The difference matters when the dunning queue is audited. Link the dunning cadence sheet to the system entry it supports, so the next person does not have to search for the connection.",
          "Every dunning cadence sheet needs the first notice date, the escalation step, and the promised payment window in one place, because a later reader cannot reconstruct those facts from a dashboard. A short dunning cadence sheet with dated fields beats a long narrative that hides the one value the reviewer needs. The dunning cadence sheet should show the source version beside the decision, so a change after the review remains visible.",
          "Missing, unavailable, and confirmed negative are three different answers. The dunning cadence sheet should keep them separate. A dated note about the first notice date, the escalation step, and the promised payment window is worth more than a polished summary written after the fact. Put the observation time on the dunning cadence entry itself. A screenshot taken today cannot prove what the file said last month."
        ]
      },
      {
        "heading": "Where the specialist's authority ends",
        "paragraphs": [
          "Keep the dunning cadence scope narrow enough for one owner to understand it and wide enough to be useful on a normal day. When the dunning cadence sheet raises a question outside the written rule, the item pauses and the named owner decides. The boundary protects the customer relationship as much as it protects the specialist.",
          "Review the authority list at quarter start, because a title change can leave a decision without a current owner. Escalation is a normal part of dunning cadence. It becomes a failure only when nobody knows whom to escalate to. The handoff should name the collections lead who approves a pause, waiver, or escalation, not a department, so the next step has a person and a date.",
          "If the dunning queue does not show who may approve a change, the specialist will invent a boundary under pressure. The specialist can prepare the dunning cadence sheet, check the source, and route the item; the collections lead who approves a pause, waiver, or escalation keeps the decision itself. Write the dunning cadence boundary where the work is assigned, not in a policy file that only appears during training."
        ]
      },
      {
        "heading": "The weekly dunning cadence routine",
        "paragraphs": [
          "If the dunning queue grows while the close is stable, the intake rule is usually the problem. The weekly routine is short: open the dunning queue, confirm the source, log the exception, and leave a named next action. A consistent review time makes the dunning queue easier to trust than a heroic catch-up at month end.",
          "The weekly review should leave the next reviewer faster, not merely busier. Read the dunning cadence sheet before accepting new work, not after the new work has already created another exception. Each pass should end with a dated note that names what moved, what stalled, and who checks next.",
          "Small habits carry dunning cadence: date the source, initial the check, state the next action, and never copy a familiar value. Start with the oldest unresolved dunning cadence item, because age is what turns a small gap into an escalation. A daily list with ten open items is easier to trust than a dashboard with a hundred and no owner."
        ]
      },
      {
        "heading": "Exceptions that should stop the item",
        "paragraphs": [
          "A dunning cadence exception that recurs every week is a design problem, not a training problem. A clear stop rule protects the client, the specialist, and the manager at the same time. An item that touches an account that has entered a formal dispute or payment plan should stop and go to the collections lead who approves a pause, waiver, or escalation, however complete the rest of the record looks.",
          "If an exception has no owner, it will sit until it becomes urgent, and then it will be handled twice. Write the exception reason on the dunning cadence sheet itself, so the next reviewer does not have to reopen a chat thread. The dunning queue should separate an exception from a normal item before anyone starts working it.",
          "When the answer is no, the dunning cadence sheet should still show who was notified and when. The quarter-start review should count exception types, because the pattern usually points to a missing field. The specialist should never invent a resolution to keep the dunning queue moving."
        ]
      },
      {
        "heading": "How to verify and close the review",
        "paragraphs": [
          "A case that needed a correction is useful evidence about the dunning cadence sheet, not an embarrassment to hide. The measure of dunning cadence work is not speed but whether each close can be defended. Count confirmed closes separately from assumed closes, or the dunning queue will look healthier than it is.",
          "End the review with one change to the dunning cadence sheet or the routine, and name the date it will be tested again. Compare a sample of closed items with their sources before the monthly operations review. Keep the close rule fixed for the review window so the comparison means something.",
          "Close the dunning cadence item only after the destination record matches the approved decision. The close note should say what was confirmed, by whom, and on which date. A close that cannot be explained next month was not really a close."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns the dunning cadence decision?",
        "a": "The collections lead who approves a pause, waiver, or escalation. The specialist prepares the record, checks the source, and routes the decision with a named owner and a date."
      },
      {
        "q": "How does the team know a dunning cadence item is closed?",
        "a": "The item is closed when the destination record matches the approved decision and the dunning cadence sheet shows a timestamp and a named confirmer."
      }
    ],
    "internalService": "/services/billing-status-reporting",
    "internalSibling": "/blog/dunning-email-tone-checklist",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/"
    }
  },
  {
    "slug": "clear-the-e-invoicing-exception-queue-for-the-quarter-start-review",
    "title": "Clear the e-invoicing exception queue for the quarter-start review",
    "description": "A quarter-start method for clearing e-invoicing rejections by code, network, age, and resubmission owner.",
    "category": "E-invoicing",
    "publishedAt": "2026-11-07",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-07/clear-the-e-invoicing-exception-queue-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Why the e-invoicing exception queue review belongs at quarter start",
        "paragraphs": [
          "Treat the exception queue record as evidence, not as a summary. A summary can be rewritten; evidence carries a date and a source. Begin with the e-invoicing exception queue, not with the policy. The queue shows which items actually wait for a decision. A quarter-start pass gives the team a clean baseline for the e-invoicing exception queue, including the items that were quietly carried forward.",
          "Quarter start is the right moment to test the exception queue record, because the next billing cycle has not yet hardened into habit. A e-invoicing exception queue control that lives only in a year-end clean-up will be skipped during the first busy week of the quarter. The first pass should be small enough to finish and specific enough that the result can be challenged.",
          "The useful question is not whether the team worked hard on e-invoicing exception queue. It is whether a new reviewer can follow the same path. The e-invoicing exception queue review earns its place when it answers a question the finance owner will ask anyway: what changed, who approved it, and which record proves it. The review has one job: make the next e-invoicing exception queue decision visible before the volume arrives."
        ]
      },
      {
        "heading": "What the exception queue record must show",
        "paragraphs": [
          "The exception queue record is complete when a reviewer can tell what a different answer would have looked like. A short exception queue record with dated fields beats a long narrative that hides the one value the reviewer needs. Missing, unavailable, and confirmed negative are three different answers. The exception queue record should keep them separate.",
          "The e-invoicing exception queue should show which fields were checked against a source and which were accepted from the requester. A dated note about the rejection code, the clearing network, and the resubmission window is worth more than a polished summary written after the fact. Every exception queue record needs the rejection code, the clearing network, and the resubmission window in one place, because a later reader cannot reconstruct those facts from a dashboard.",
          "The exception queue record should show the source version beside the decision, so a change after the review remains visible. Record what was checked, not only that a check happened. The difference matters when the e-invoicing exception queue is audited. Link the exception queue record to the system entry it supports, so the next person does not have to search for the connection."
        ]
      },
      {
        "heading": "Where the specialist's authority ends",
        "paragraphs": [
          "When the exception queue record raises a question outside the written rule, the item pauses and the named owner decides. Escalation is a normal part of e-invoicing exception queue. It becomes a failure only when nobody knows whom to escalate to. Keep the e-invoicing exception queue scope narrow enough for one owner to understand it and wide enough to be useful on a normal day.",
          "If the e-invoicing exception queue does not show who may approve a change, the specialist will invent a boundary under pressure. The specialist can prepare the exception queue record, check the source, and route the item; the billing systems owner who decides a resubmission or credit keeps the decision itself. Review the authority list at quarter start, because a title change can leave a decision without a current owner.",
          "Write the e-invoicing exception queue boundary where the work is assigned, not in a policy file that only appears during training. The boundary protects the customer relationship as much as it protects the specialist. The handoff should name the billing systems owner who decides a resubmission or credit, not a department, so the next step has a person and a date."
        ]
      },
      {
        "heading": "The weekly e-invoicing exception queue routine",
        "paragraphs": [
          "Each pass should end with a dated note that names what moved, what stalled, and who checks next. If the e-invoicing exception queue grows while the close is stable, the intake rule is usually the problem. A consistent review time makes the e-invoicing exception queue easier to trust than a heroic catch-up at month end.",
          "Start with the oldest unresolved e-invoicing exception queue item, because age is what turns a small gap into an escalation. Read the exception queue record before accepting new work, not after the new work has already created another exception. A daily list with ten open items is easier to trust than a dashboard with a hundred and no owner.",
          "The weekly routine is short: open the e-invoicing exception queue, confirm the source, log the exception, and leave a named next action. The weekly review should leave the next reviewer faster, not merely busier. Small habits carry e-invoicing exception queue: date the source, initial the check, state the next action, and never copy a familiar value."
        ]
      },
      {
        "heading": "Exceptions that should stop the item",
        "paragraphs": [
          "Write the exception reason on the exception queue record itself, so the next reviewer does not have to reopen a chat thread. A e-invoicing exception queue exception that recurs every week is a design problem, not a training problem. When the answer is no, the exception queue record should still show who was notified and when.",
          "The quarter-start review should count exception types, because the pattern usually points to a missing field. An item that touches a rejection that points to a tax or buyer registration mismatch should stop and go to the billing systems owner who decides a resubmission or credit, however complete the rest of the record looks. A clear stop rule protects the client, the specialist, and the manager at the same time.",
          "Exceptions deserve a shorter path to the decision maker, not a longer form. The specialist should never invent a resolution to keep the e-invoicing exception queue moving. If an exception has no owner, it will sit until it becomes urgent, and then it will be handled twice."
        ]
      },
      {
        "heading": "How to verify and close the review",
        "paragraphs": [
          "A case that needed a correction is useful evidence about the exception queue record, not an embarrassment to hide. Reopened cases are a useful signal about where the e-invoicing exception queue routine is weak. Close the e-invoicing exception queue item only after the destination record matches the approved decision.",
          "End the review with one change to the exception queue record or the routine, and name the date it will be tested again. The close note should say what was confirmed, by whom, and on which date. A close that cannot be explained next month was not really a close.",
          "Keep the close rule fixed for the review window so the comparison means something. The measure of e-invoicing exception queue work is not speed but whether each close can be defended. Compare a sample of closed items with their sources before the monthly operations review."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns the e-invoicing exception queue decision?",
        "a": "The billing systems owner who decides a resubmission or credit. The specialist prepares the record, checks the source, and routes the decision with a named owner and a date."
      },
      {
        "q": "How does the team know a e-invoicing exception queue item is closed?",
        "a": "The item is closed when the destination record matches the approved decision and the exception queue record shows a timestamp and a named confirmer."
      }
    ],
    "internalService": "/services/invoice-quality-review",
    "internalSibling": "/blog/e-invoicing-rejection-triage",
    "source": {
      "label": "European Commission: eInvoicing",
      "url": "https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing"
    }
  },
  {
    "slug": "confirm-billing-contact-changes-for-the-quarter-start-review",
    "title": "Confirm billing contact changes for the quarter-start review",
    "description": "A quarter-start control for billing contact changes that records the requester, the old value, the new value, and the verification.",
    "category": "Customer records",
    "publishedAt": "2026-11-07",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-07/confirm-billing-contact-changes-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Why the billing contact change review belongs at quarter start",
        "paragraphs": [
          "The useful question is not whether the team worked hard on billing contact change. It is whether a new reviewer can follow the same path. The first pass should be small enough to finish and specific enough that the result can be challenged. Begin with the contact change queue, not with the policy. The queue shows which items actually wait for a decision.",
          "Treat the contact change log as evidence, not as a summary. A summary can be rewritten; evidence carries a date and a source. The billing contact change review earns its place when it answers a question the finance owner will ask anyway: what changed, who approved it, and which record proves it. Quarter start is the right moment to test the contact change log, because the next billing cycle has not yet hardened into habit.",
          "If the contact change log cannot name its owner, the billing contact change review will end with a list and no decisions. A quarter-start pass gives the team a clean baseline for the contact change queue, including the items that were quietly carried forward. The review has one job: make the next billing contact change decision visible before the volume arrives."
        ]
      },
      {
        "heading": "What the contact change log must show",
        "paragraphs": [
          "The contact change log should show the source version beside the decision, so a change after the review remains visible. A dated note about the old address, the new address, the requester, and the verification date is worth more than a polished summary written after the fact. Missing, unavailable, and confirmed negative are three different answers. The contact change log should keep them separate.",
          "Put the observation time on the billing contact change entry itself. A screenshot taken today cannot prove what the file said last month. Link the contact change log to the system entry it supports, so the next person does not have to search for the connection. The contact change queue should show which fields were checked against a source and which were accepted from the requester.",
          "Every contact change log needs the old address, the new address, the requester, and the verification date in one place, because a later reader cannot reconstruct those facts from a dashboard. A short contact change log with dated fields beats a long narrative that hides the one value the reviewer needs. The contact change log is complete when a reviewer can tell what a different answer would have looked like."
        ]
      },
      {
        "heading": "Where the specialist's authority ends",
        "paragraphs": [
          "The specialist can prepare the contact change log, check the source, and route the item; the account owner who accepts a billing contact or address change keeps the decision itself. Write the billing contact change boundary where the work is assigned, not in a policy file that only appears during training. Keep the billing contact change scope narrow enough for one owner to understand it and wide enough to be useful on a normal day.",
          "A specialist who cannot see the limit of the role will either stop too often or approve too much. The boundary protects the customer relationship as much as it protects the specialist. Review the authority list at quarter start, because a title change can leave a decision without a current owner.",
          "The handoff should name the account owner who accepts a billing contact or address change, not a department, so the next step has a person and a date. If the contact change queue does not show who may approve a change, the specialist will invent a boundary under pressure. Escalation is a normal part of billing contact change. It becomes a failure only when nobody knows whom to escalate to."
        ]
      },
      {
        "heading": "The weekly billing contact change routine",
        "paragraphs": [
          "Read the contact change log before accepting new work, not after the new work has already created another exception. The weekly routine is short: open the contact change queue, confirm the source, log the exception, and leave a named next action. Keep the contact change log close enough to the work that updating it does not require a separate meeting.",
          "Small habits carry billing contact change: date the source, initial the check, state the next action, and never copy a familiar value. Each pass should end with a dated note that names what moved, what stalled, and who checks next. A daily list with ten open items is easier to trust than a dashboard with a hundred and no owner.",
          "The weekly review should leave the next reviewer faster, not merely busier. Start with the oldest unresolved billing contact change item, because age is what turns a small gap into an escalation. A consistent review time makes the contact change queue easier to trust than a heroic catch-up at month end."
        ]
      },
      {
        "heading": "Exceptions that should stop the item",
        "paragraphs": [
          "Write the exception reason on the contact change log itself, so the next reviewer does not have to reopen a chat thread. Exceptions deserve a shorter path to the decision maker, not a longer form. The quarter-start review should count exception types, because the pattern usually points to a missing field.",
          "When the answer is no, the contact change log should still show who was notified and when. A clear stop rule protects the client, the specialist, and the manager at the same time. If an exception has no owner, it will sit until it becomes urgent, and then it will be handled twice.",
          "An item that touches a change requested from a domain that does not match the account should stop and go to the account owner who accepts a billing contact or address change, however complete the rest of the record looks. A billing contact change exception that recurs every week is a design problem, not a training problem. The specialist should never invent a resolution to keep the contact change queue moving."
        ]
      },
      {
        "heading": "How to verify and close the review",
        "paragraphs": [
          "End the review with one change to the contact change log or the routine, and name the date it will be tested again. The measure of billing contact change work is not speed but whether each close can be defended. Count confirmed closes separately from assumed closes, or the contact change queue will look healthier than it is.",
          "Keep the close rule fixed for the review window so the comparison means something. Compare a sample of closed items with their sources before the monthly operations review. The close note should say what was confirmed, by whom, and on which date.",
          "Reopened cases are a useful signal about where the billing contact change routine is weak. A case that needed a correction is useful evidence about the contact change log, not an embarrassment to hide. Close the billing contact change item only after the destination record matches the approved decision."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns the billing contact change decision?",
        "a": "The account owner who accepts a billing contact or address change. The specialist prepares the record, checks the source, and routes the decision with a named owner and a date."
      },
      {
        "q": "How does the team know a billing contact change item is closed?",
        "a": "The item is closed when the destination record matches the approved decision and the contact change log shows a timestamp and a named confirmer."
      }
    ],
    "internalService": "/services/customer-billing-records",
    "internalSibling": "/blog/customer-billing-profile-checklist",
    "source": {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    }
  },
  {
    "slug": "run-a-tax-code-review-on-recurring-invoices-for-the-quarter-start-review",
    "title": "Run a tax-code review on recurring invoices for the quarter-start review",
    "description": "A quarter-start tax-code review for recurring invoices that ties each line to a product code, jurisdiction, and certificate.",
    "category": "Tax operations",
    "publishedAt": "2026-11-07",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-07/run-a-tax-code-review-on-recurring-invoices-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Why the tax-code assignment review belongs at quarter start",
        "paragraphs": [
          "Begin with the tax-code review queue, not with the policy. The queue shows which items actually wait for a decision. A tax-code assignment control that lives only in a year-end clean-up will be skipped during the first busy week of the quarter. The first pass should be small enough to finish and specific enough that the result can be challenged.",
          "The review has one job: make the next tax-code assignment decision visible before the volume arrives. A quarter-start pass gives the team a clean baseline for the tax-code review queue, including the items that were quietly carried forward. If the tax-code review sheet cannot name its owner, the tax-code assignment review will end with a list and no decisions.",
          "The tax-code assignment review earns its place when it answers a question the finance owner will ask anyway: what changed, who approved it, and which record proves it. Treat the tax-code review sheet as evidence, not as a summary. A summary can be rewritten; evidence carries a date and a source. The useful question is not whether the team worked hard on tax-code assignment. It is whether a new reviewer can follow the same path."
        ]
      },
      {
        "heading": "What the tax-code review sheet must show",
        "paragraphs": [
          "A short tax-code review sheet with dated fields beats a long narrative that hides the one value the reviewer needs. Record what was checked, not only that a check happened. The difference matters when the tax-code review queue is audited. The tax-code review sheet is complete when a reviewer can tell what a different answer would have looked like.",
          "The tax-code review sheet should show the source version beside the decision, so a change after the review remains visible. Every tax-code review sheet needs the product code, the jurisdiction, the exemption certificate, and the effective date in one place, because a later reader cannot reconstruct those facts from a dashboard. Link the tax-code review sheet to the system entry it supports, so the next person does not have to search for the connection.",
          "The tax-code review queue should show which fields were checked against a source and which were accepted from the requester. A dated note about the product code, the jurisdiction, the exemption certificate, and the effective date is worth more than a polished summary written after the fact. Put the observation time on the tax-code assignment entry itself. A screenshot taken today cannot prove what the file said last month."
        ]
      },
      {
        "heading": "Where the specialist's authority ends",
        "paragraphs": [
          "The handoff should name the tax manager who approves an exemption or a jurisdiction change, not a department, so the next step has a person and a date. The boundary protects the customer relationship as much as it protects the specialist. Review the authority list at quarter start, because a title change can leave a decision without a current owner.",
          "Escalation is a normal part of tax-code assignment. It becomes a failure only when nobody knows whom to escalate to. When the tax-code review sheet raises a question outside the written rule, the item pauses and the named owner decides. Write the tax-code assignment boundary where the work is assigned, not in a policy file that only appears during training.",
          "If the tax-code review queue does not show who may approve a change, the specialist will invent a boundary under pressure. The specialist can prepare the tax-code review sheet, check the source, and route the item; the tax manager who approves an exemption or a jurisdiction change keeps the decision itself. A specialist who cannot see the limit of the role will either stop too often or approve too much."
        ]
      },
      {
        "heading": "The weekly tax-code assignment routine",
        "paragraphs": [
          "If the tax-code review queue grows while the close is stable, the intake rule is usually the problem. Small habits carry tax-code assignment: date the source, initial the check, state the next action, and never copy a familiar value. A daily list with ten open items is easier to trust than a dashboard with a hundred and no owner.",
          "Each pass should end with a dated note that names what moved, what stalled, and who checks next. The weekly routine is short: open the tax-code review queue, confirm the source, log the exception, and leave a named next action. The weekly review should leave the next reviewer faster, not merely busier.",
          "Keep the tax-code review sheet close enough to the work that updating it does not require a separate meeting. Start with the oldest unresolved tax-code assignment item, because age is what turns a small gap into an escalation. A consistent review time makes the tax-code review queue easier to trust than a heroic catch-up at month end."
        ]
      },
      {
        "heading": "Exceptions that should stop the item",
        "paragraphs": [
          "When the answer is no, the tax-code review sheet should still show who was notified and when. Write the exception reason on the tax-code review sheet itself, so the next reviewer does not have to reopen a chat thread. A clear stop rule protects the client, the specialist, and the manager at the same time.",
          "The quarter-start review should count exception types, because the pattern usually points to a missing field. If an exception has no owner, it will sit until it becomes urgent, and then it will be handled twice. An item that touches a line whose jurisdiction changed without a registration update should stop and go to the tax manager who approves an exemption or a jurisdiction change, however complete the rest of the record looks.",
          "Exceptions deserve a shorter path to the decision maker, not a longer form. A tax-code assignment exception that recurs every week is a design problem, not a training problem. The specialist should never invent a resolution to keep the tax-code review queue moving."
        ]
      },
      {
        "heading": "How to verify and close the review",
        "paragraphs": [
          "End the review with one change to the tax-code review sheet or the routine, and name the date it will be tested again. The measure of tax-code assignment work is not speed but whether each close can be defended. Close the tax-code assignment item only after the destination record matches the approved decision.",
          "Keep the close rule fixed for the review window so the comparison means something. A close that cannot be explained next month was not really a close. The close note should say what was confirmed, by whom, and on which date.",
          "Reopened cases are a useful signal about where the tax-code assignment routine is weak. Count confirmed closes separately from assumed closes, or the tax-code review queue will look healthier than it is. Compare a sample of closed items with their sources before the monthly operations review."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns the tax-code assignment decision?",
        "a": "The tax manager who approves an exemption or a jurisdiction change. The specialist prepares the record, checks the source, and routes the decision with a named owner and a date."
      },
      {
        "q": "How does the team know a tax-code assignment item is closed?",
        "a": "The item is closed when the destination record matches the approved decision and the tax-code review sheet shows a timestamp and a named confirmer."
      }
    ],
    "internalService": "/services/invoice-quality-review",
    "internalSibling": "/blog/recurring-invoice-tax-review",
    "source": {
      "label": "IRS: Tax Exempt Organization Search",
      "url": "https://www.irs.gov/charities-non-profits/tax-exempt-organization-search"
    }
  },
  {
    "slug": "keep-an-invoice-rejection-log-for-the-quarter-start-review",
    "title": "Keep an invoice rejection log for the quarter-start review",
    "description": "A rejection log that makes each returned invoice traceable to a reason, a corrected field, and a resubmission date.",
    "category": "Document operations",
    "publishedAt": "2026-11-07",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-07/keep-an-invoice-rejection-log-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Why the invoice rejection log review belongs at quarter start",
        "paragraphs": [
          "The invoice rejection log review earns its place when it answers a question the finance owner will ask anyway: what changed, who approved it, and which record proves it. A invoice rejection log control that lives only in a year-end clean-up will be skipped during the first busy week of the quarter. The useful question is not whether the team worked hard on invoice rejection log. It is whether a new reviewer can follow the same path.",
          "The first pass should be small enough to finish and specific enough that the result can be challenged. Begin with the rejection log, not with the policy. The queue shows which items actually wait for a decision. Treat the rejection log entry as evidence, not as a summary. A summary can be rewritten; evidence carries a date and a source.",
          "A quarter-start pass gives the team a clean baseline for the rejection log, including the items that were quietly carried forward. Quarter start is the right moment to test the rejection log entry, because the next billing cycle has not yet hardened into habit. The review has one job: make the next invoice rejection log decision visible before the volume arrives."
        ]
      },
      {
        "heading": "What the rejection log entry must show",
        "paragraphs": [
          "The rejection log entry should show the source version beside the decision, so a change after the review remains visible. The rejection log entry is complete when a reviewer can tell what a different answer would have looked like. Every rejection log entry needs the rejection reason, the rejecting party, the corrected field, and the resubmission date in one place, because a later reader cannot reconstruct those facts from a dashboard.",
          "Link the rejection log entry to the system entry it supports, so the next person does not have to search for the connection. A short rejection log entry with dated fields beats a long narrative that hides the one value the reviewer needs. Missing, unavailable, and confirmed negative are three different answers. The rejection log entry should keep them separate.",
          "Record what was checked, not only that a check happened. The difference matters when the rejection log is audited. The rejection log should show which fields were checked against a source and which were accepted from the requester. Put the observation time on the invoice rejection log entry itself. A screenshot taken today cannot prove what the file said last month."
        ]
      },
      {
        "heading": "Where the specialist's authority ends",
        "paragraphs": [
          "A specialist who cannot see the limit of the role will either stop too often or approve too much. Keep the invoice rejection log scope narrow enough for one owner to understand it and wide enough to be useful on a normal day. The specialist can prepare the rejection log entry, check the source, and route the item; the billing owner who decides whether to resubmit or credit keeps the decision itself.",
          "The handoff should name the billing owner who decides whether to resubmit or credit, not a department, so the next step has a person and a date. If the rejection log does not show who may approve a change, the specialist will invent a boundary under pressure. When the rejection log entry raises a question outside the written rule, the item pauses and the named owner decides.",
          "Review the authority list at quarter start, because a title change can leave a decision without a current owner. Write the invoice rejection log boundary where the work is assigned, not in a policy file that only appears during training. Escalation is a normal part of invoice rejection log. It becomes a failure only when nobody knows whom to escalate to."
        ]
      },
      {
        "heading": "The weekly invoice rejection log routine",
        "paragraphs": [
          "Each pass should end with a dated note that names what moved, what stalled, and who checks next. If the rejection log grows while the close is stable, the intake rule is usually the problem. A consistent review time makes the rejection log easier to trust than a heroic catch-up at month end.",
          "Keep the rejection log entry close enough to the work that updating it does not require a separate meeting. The weekly review should leave the next reviewer faster, not merely busier. The weekly routine is short: open the rejection log, confirm the source, log the exception, and leave a named next action.",
          "Read the rejection log entry before accepting new work, not after the new work has already created another exception. Start with the oldest unresolved invoice rejection log item, because age is what turns a small gap into an escalation. A daily list with ten open items is easier to trust than a dashboard with a hundred and no owner."
        ]
      },
      {
        "heading": "Exceptions that should stop the item",
        "paragraphs": [
          "If an exception has no owner, it will sit until it becomes urgent, and then it will be handled twice. The rejection log should separate an exception from a normal item before anyone starts working it. The quarter-start review should count exception types, because the pattern usually points to a missing field.",
          "When the answer is no, the rejection log entry should still show who was notified and when. Exceptions deserve a shorter path to the decision maker, not a longer form. A invoice rejection log exception that recurs every week is a design problem, not a training problem.",
          "The specialist should never invent a resolution to keep the rejection log moving. Write the exception reason on the rejection log entry itself, so the next reviewer does not have to reopen a chat thread. An item that touches a rejection tied to a disputed delivery or a missing acceptance record should stop and go to the billing owner who decides whether to resubmit or credit, however complete the rest of the record looks."
        ]
      },
      {
        "heading": "How to verify and close the review",
        "paragraphs": [
          "Keep the close rule fixed for the review window so the comparison means something. Count confirmed closes separately from assumed closes, or the rejection log will look healthier than it is. A close that cannot be explained next month was not really a close.",
          "Reopened cases are a useful signal about where the invoice rejection log routine is weak. The close note should say what was confirmed, by whom, and on which date. The measure of invoice rejection log work is not speed but whether each close can be defended.",
          "End the review with one change to the rejection log entry or the routine, and name the date it will be tested again. Compare a sample of closed items with their sources before the monthly operations review. Close the invoice rejection log item only after the destination record matches the approved decision."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns the invoice rejection log decision?",
        "a": "The billing owner who decides whether to resubmit or credit. The specialist prepares the record, checks the source, and routes the decision with a named owner and a date."
      },
      {
        "q": "How does the team know a invoice rejection log item is closed?",
        "a": "The item is closed when the destination record matches the approved decision and the rejection log entry shows a timestamp and a named confirmer."
      }
    ],
    "internalService": "/services/supporting-documentation",
    "internalSibling": "/blog/invoice-rejection-root-cause",
    "source": {
      "label": "GAO Green Book",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "write-the-collections-handoff-for-the-quarter-start-review",
    "title": "Write the collections handoff for the quarter-start review",
    "description": "A collections handoff note that carries the last contact, promise status, dispute flag, and next owner across shifts.",
    "category": "Collections",
    "publishedAt": "2026-11-07",
    "readTime": "8 min read",
    "thumbnail": "/thumbnails/november-07/write-the-collections-handoff-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Why the collections handoff review belongs at quarter start",
        "paragraphs": [
          "A collections handoff control that lives only in a year-end clean-up will be skipped during the first busy week of the quarter. Treat the handoff note as evidence, not as a summary. A summary can be rewritten; evidence carries a date and a source. The first pass should be small enough to finish and specific enough that the result can be challenged.",
          "The collections handoff review earns its place when it answers a question the finance owner will ask anyway: what changed, who approved it, and which record proves it. Begin with the collections handoff queue, not with the policy. The queue shows which items actually wait for a decision. If the handoff note cannot name its owner, the collections handoff review will end with a list and no decisions.",
          "Quarter start is the right moment to test the handoff note, because the next billing cycle has not yet hardened into habit. The review has one job: make the next collections handoff decision visible before the volume arrives. A quarter-start pass gives the team a clean baseline for the collections handoff queue, including the items that were quietly carried forward."
        ]
      },
      {
        "heading": "What the handoff note must show",
        "paragraphs": [
          "Every handoff note needs the last contact date, the promise status, the dispute flag, and the next owner in one place, because a later reader cannot reconstruct those facts from a dashboard. Put the observation time on the collections handoff entry itself. A screenshot taken today cannot prove what the file said last month. The handoff note is complete when a reviewer can tell what a different answer would have looked like.",
          "A short handoff note with dated fields beats a long narrative that hides the one value the reviewer needs. The handoff note should show the source version beside the decision, so a change after the review remains visible. A dated note about the last contact date, the promise status, the dispute flag, and the next owner is worth more than a polished summary written after the fact.",
          "Missing, unavailable, and confirmed negative are three different answers. The handoff note should keep them separate. Link the handoff note to the system entry it supports, so the next person does not have to search for the connection. The collections handoff queue should show which fields were checked against a source and which were accepted from the requester."
        ]
      },
      {
        "heading": "Where the specialist's authority ends",
        "paragraphs": [
          "Escalation is a normal part of collections handoff. It becomes a failure only when nobody knows whom to escalate to. Review the authority list at quarter start, because a title change can leave a decision without a current owner. The handoff should name the collections manager who accepts a handoff or changes its priority, not a department, so the next step has a person and a date.",
          "If the collections handoff queue does not show who may approve a change, the specialist will invent a boundary under pressure. Keep the collections handoff scope narrow enough for one owner to understand it and wide enough to be useful on a normal day. The specialist can prepare the handoff note, check the source, and route the item; the collections manager who accepts a handoff or changes its priority keeps the decision itself.",
          "When the handoff note raises a question outside the written rule, the item pauses and the named owner decides. The boundary protects the customer relationship as much as it protects the specialist. A specialist who cannot see the limit of the role will either stop too often or approve too much."
        ]
      },
      {
        "heading": "The weekly collections handoff routine",
        "paragraphs": [
          "The weekly routine is short: open the collections handoff queue, confirm the source, log the exception, and leave a named next action. Each pass should end with a dated note that names what moved, what stalled, and who checks next. Start with the oldest unresolved collections handoff item, because age is what turns a small gap into an escalation.",
          "Small habits carry collections handoff: date the source, initial the check, state the next action, and never copy a familiar value. If the collections handoff queue grows while the close is stable, the intake rule is usually the problem. A daily list with ten open items is easier to trust than a dashboard with a hundred and no owner.",
          "The weekly review should leave the next reviewer faster, not merely busier. Read the handoff note before accepting new work, not after the new work has already created another exception. A consistent review time makes the collections handoff queue easier to trust than a heroic catch-up at month end."
        ]
      },
      {
        "heading": "Exceptions that should stop the item",
        "paragraphs": [
          "Exceptions deserve a shorter path to the decision maker, not a longer form. The collections handoff queue should separate an exception from a normal item before anyone starts working it. Write the exception reason on the handoff note itself, so the next reviewer does not have to reopen a chat thread.",
          "A clear stop rule protects the client, the specialist, and the manager at the same time. An item that touches an account with an unresolved dispute or a legal hold should stop and go to the collections manager who accepts a handoff or changes its priority, however complete the rest of the record looks. The quarter-start review should count exception types, because the pattern usually points to a missing field.",
          "The specialist should never invent a resolution to keep the collections handoff queue moving. If an exception has no owner, it will sit until it becomes urgent, and then it will be handled twice. When the answer is no, the handoff note should still show who was notified and when."
        ]
      },
      {
        "heading": "How to verify and close the review",
        "paragraphs": [
          "The close note should say what was confirmed, by whom, and on which date. Reopened cases are a useful signal about where the collections handoff routine is weak. The measure of collections handoff work is not speed but whether each close can be defended.",
          "A case that needed a correction is useful evidence about the handoff note, not an embarrassment to hide. Count confirmed closes separately from assumed closes, or the collections handoff queue will look healthier than it is. A close that cannot be explained next month was not really a close.",
          "Close the collections handoff item only after the destination record matches the approved decision. End the review with one change to the handoff note or the routine, and name the date it will be tested again. Compare a sample of closed items with their sources before the monthly operations review."
        ]
      }
    ],
    "faq": [
      {
        "q": "Who owns the collections handoff decision?",
        "a": "The collections manager who accepts a handoff or changes its priority. The specialist prepares the record, checks the source, and routes the decision with a named owner and a date."
      },
      {
        "q": "How does the team know a collections handoff item is closed?",
        "a": "The item is closed when the destination record matches the approved decision and the handoff note shows a timestamp and a named confirmer."
      }
    ],
    "internalService": "/services/billing-status-reporting",
    "internalSibling": "/blog/collections-handoff-note",
    "source": {
      "label": "Consumer Financial Protection Bureau",
      "url": "https://www.consumerfinance.gov/"
    }
  }
];
