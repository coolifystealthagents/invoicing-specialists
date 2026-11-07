import type { ResearchPost } from './types';

export const november07ResearchPosts: readonly ResearchPost[] = [
  {
    "slug": "can-the-prepaid-schedule-be-audited-for-the-quarter-start-review",
    "title": "Can the prepaid schedule be audited for the quarter-start review?",
    "summary": "A protocol for testing whether the prepaid billing schedule can be reconstructed from its own evidence at quarter start.",
    "cluster": "Schedule Reliability",
    "publishedAt": "2026-11-07",
    "finding": "The narrow question is whether each prepaid line can show a dated release decision, a checked balance, and a confirmable close, without relying on a current spreadsheet view.",
    "thumbnail": "/thumbnails/november-07/can-the-prepaid-schedule-be-audited-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The unit is one prepaid schedule line, from its opening event to its recorded close, with linked events counted separately. Keep the review question separate from the improvement plan, or the evidence standard will move while the sample is still being read. The review should say plainly what it does not measure, so the finding is not read as a verdict on the team.",
          "A dry run on one prepaid schedule line is cheaper than discovering a definition error after full collection. State the prepaid billing schedule population before collection, so the denominator cannot drift toward the easiest items. Name the decision the prepaid billing schedule record exists to support, then test only the evidence that decision requires.",
          "Fix the start event, the stop event, the pause rule, and the treatment of missing evidence before the first case is read. The question is narrow: what can the prepaid schedule record show about the draw date, the remaining balance, and the release approval without relying on memory? The scope excludes judgment quality and outcomes that the prepaid schedule record was never designed to capture."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The prepaid billing queue offers natural strata: new items, carried items, and items returned by a reviewer. The population should be stated before collection, because a denominator chosen later is a conclusion in disguise. Record one ordinary prepaid schedule line, one exception, and one reopened item so the sample reflects the real mix.",
          "Include the items that were closed without a recorded decision, because silent closes are part of the real population. If a definition changes mid-review, keep the earlier classification and label the new rule for later cases. Every case needs the draw date, the remaining balance, and the release approval, plus the reviewer who checked it.",
          "Separate items opened before the window from items opened inside it, and report both counts. Mark missing, unavailable, and confirmed negative values separately in the prepaid schedule record. A current screenshot cannot prove what the prepaid schedule record said earlier, so record the version or the observation date."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Use one clock for every timestamp in the sample, or the age measure will compare different time zones. The primary measure needs a denominator and a window; without both, a percentage is only a mood. The definition should let a reviewer who missed the first pass apply it without asking for context.",
          "Supporting measures should cover missing fields, exception age, and closes confirmed on a destination record. Define close before counting closes, and state whether a reopened item returns to the same denominator. The measure of prepaid billing schedule should distinguish preparation from approval, because the two carry different risk.",
          "Keep the number of measures small enough that a reviewer can explain each one in a sentence. For each prepaid schedule line, measure whether the record contains the draw date, the remaining balance, and the release approval, each with a date. A measure that cannot be reproduced from the prepaid schedule record is a finding about the record, not about the team."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Write the next check date before the review ends, so the evidence trail has a continuation. If the source changes mid-window, keep the original observation and add a dated note rather than overwriting it. When the sample is challenged, the defense is the collection log, the exclusions, and the definitions.",
          "The evidence standard should be the same for a routine case and for an exception, even when the exception needs more detail. For prepaid billing schedule, the aim is to let the controller who owns the prepaid calendar review the same evidence against the same definitions each time. A record that cannot show its source version fails the standard even when the current value looks correct.",
          "A case is usable when the prepaid schedule record carries a source, an observation time, the field it supports, and the reviewer who checked it. Keep the original observation next to any correction, so the trail shows what changed and when. The standard should allow a reviewer to tell a checked value from an assumed one without opening another system."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The sample is large enough when one more case is unlikely to change the next action. Collect the exception reason as data, not as a comment, or the pattern will be lost. Record the sample frame before drawing cases, so the review cannot quietly prefer clean files.",
          "Start with the oldest item, one recent item, and one item that changed owner, because those three expose most gaps. Collect the draw date, the remaining balance, and the release approval exactly as written, then compare it with the destination record after collection. Stratify by age as well as status, because a fresh exception and a month-old exception test different controls.",
          "Record every exclusion with its reason, so the sample can be rebuilt without guessing. Sampling should follow the prepaid billing queue strat: new, carried, and returned items should all appear. A case where the controller who owns the prepaid calendar intervened is useful because it shows which field the routine did not settle."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Name the one field that caused the most exceptions, then test whether the routine can capture it earlier. Group exceptions by field and by age, because a single average can hide the one item that sat for a month. The analysis should name which prepaid billing schedule step creates evidence and which step can lose it.",
          "Test the finding against one contrary case before publishing it to the finance owner. Compare confirmed closes with assumed closes and report them separately. A short finding with a clear limit is more useful than a dashboard that implies certainty.",
          "The result is a description the controller who owns the prepaid calendar can review, not a verdict about individual performance. Report the finding with its denominator, its window, and the limit that applies to both. Report the count and the rate together, because a rate without a count hides how small the evidence base is."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Seasonality is a source of error at quarter start, because the first cycle may not represent the quarter. The protocol measures the record, not the customer relationship, and the report should avoid implying otherwise. The review cannot see decisions that were never written into the prepaid schedule record, so it should not claim to.",
          "A small sample can show whether evidence exists; it cannot prove that every future case will behave the same way. Self-reported timestamps are weaker than system timestamps, and the report should say which one it used. If the prepaid billing queue changed during the window, split the observation instead of blending two regimes.",
          "The largest limit is usually missing context, so name the context the reviewer would need next time. The prepaid billing schedule record may be correct while the underlying business decision was poor; the protocol measures evidence, not judgment. Report the limit beside the finding, so the reader can judge both without a second document."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "If a fix changes the definition, test it on the next sample rather than re-scoring the old one. A cadence that depends on one person is a single point of failure, not a control. End each review with a dated decision about what stays, what changes, and who confirms the next sample.",
          "Review the prepaid billing queue weekly during the quarter and repeat the full protocol at the next quarter start. If the owner changes, repeat the definition walkthrough with the new owner before the next sample. Keep the review small enough to repeat and explicit enough to challenge.",
          "The cadence should match the risk: a prepaid billing schedule item that can stop an invoice gets checked sooner than a reporting item. The owner should see the finding, the limit, and the one change that will be tested at the next review. Write the next review date on the prepaid schedule record before closing the current one."
        ]
      }
    ],
    "methodology": "We read the public sources below and translated their control ideas into a short test of the prepaid schedule record. The protocol measures whether evidence exists and can be reconstructed; it does not judge the commercial wisdom of any individual decision.",
    "sources": [
      {
        "label": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "IRS: Recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      }
    ]
  },
  {
    "slug": "do-customer-credit-applications-reconcile-for-the-quarter-start-review",
    "title": "Do customer credit applications reconcile for the quarter-start review?",
    "summary": "A method for checking whether credit application approvals reconcile to the customer record and the invoice release rule.",
    "cluster": "Credit Evidence",
    "publishedAt": "2026-11-07",
    "finding": "The test is whether a credit application shows who asked for what limit, which tier approved it, when the approval expires, and where the customer record agrees.",
    "thumbnail": "/thumbnails/november-07/do-customer-credit-applications-reconcile-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "State the customer credit application population before collection, so the denominator cannot drift toward the easiest items. A dry run on one credit application is cheaper than discovering a definition error after full collection. The review should say plainly what it does not measure, so the finding is not read as a verdict on the team.",
          "Name the decision the customer credit application record exists to support, then test only the evidence that decision requires. Record the exact question before collection so a later reader can see whether the analysis answered it or replaced it. Fix the start event, the stop event, the pause rule, and the treatment of missing evidence before the first case is read.",
          "The unit is one credit application, from its opening event to its recorded close, with linked events counted separately. The scope excludes judgment quality and outcomes that the credit application record was never designed to capture. The question is narrow: what can the credit application record show about the requested limit, the approval tier, and the expiry date without relying on memory?"
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "If a definition changes mid-review, keep the earlier classification and label the new rule for later cases. The credit application queue offers natural strata: new items, carried items, and items returned by a reviewer. Record one ordinary credit application, one exception, and one reopened item so the sample reflects the real mix.",
          "A current screenshot cannot prove what the credit application record said earlier, so record the version or the observation date. Decide whether a reopened case is new or continues the old one, and apply that rule every time. Separate items opened before the window from items opened inside it, and report both counts.",
          "The population should be stated before collection, because a denominator chosen later is a conclusion in disguise. Include the items that were closed without a recorded decision, because silent closes are part of the real population. Every case needs the requested limit, the approval tier, and the expiry date, plus the reviewer who checked it."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The primary measure needs a denominator and a window; without both, a percentage is only a mood. The definition should let a reviewer who missed the first pass apply it without asking for context. Keep the number of measures small enough that a reviewer can explain each one in a sentence.",
          "Supporting measures should cover missing fields, exception age, and closes confirmed on a destination record. Define close before counting closes, and state whether a reopened item returns to the same denominator. The measure of customer credit application should distinguish preparation from approval, because the two carry different risk.",
          "A measure that cannot be reproduced from the credit application record is a finding about the record, not about the team. Track the age of the oldest open item alongside the count, because averages hide a case that sat for weeks. For each credit application, measure whether the record contains the requested limit, the approval tier, and the expiry date, each with a date."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "The standard should allow a reviewer to tell a checked value from an assumed one without opening another system. Write the next check date before the review ends, so the evidence trail has a continuation. A case is usable when the credit application record carries a source, an observation time, the field it supports, and the reviewer who checked it.",
          "If the source changes mid-window, keep the original observation and add a dated note rather than overwriting it. Keep the original observation next to any correction, so the trail shows what changed and when. When the sample is challenged, the defense is the collection log, the exclusions, and the definitions.",
          "A record that cannot show its source version fails the standard even when the current value looks correct. The evidence standard should be the same for a routine case and for an exception, even when the exception needs more detail. A finding about missing evidence is useful when the missing field is named precisely."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Collect the exception reason as data, not as a comment, or the pattern will be lost. Collect the requested limit, the approval tier, and the expiry date exactly as written, then compare it with the destination record after collection. Record the sample frame before drawing cases, so the review cannot quietly prefer clean files.",
          "Record every exclusion with its reason, so the sample can be rebuilt without guessing. A case where the credit manager who sets customer limits intervened is useful because it shows which field the routine did not settle. The sample is large enough when one more case is unlikely to change the next action.",
          "Stratify by age as well as status, because a fresh exception and a month-old exception test different controls. Start with the oldest item, one recent item, and one item that changed owner, because those three expose most gaps. Sampling should follow the credit application queue strat: new, carried, and returned items should all appear."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the finding with its denominator, its window, and the limit that applies to both. The analysis should name which customer credit application step creates evidence and which step can lose it. The result is a description the credit manager who sets customer limits can review, not a verdict about individual performance.",
          "A short finding with a clear limit is more useful than a dashboard that implies certainty. If credit application record completeness varies by owner, report the variation rather than pooling it away. Name the one field that caused the most exceptions, then test whether the routine can capture it earlier.",
          "Compare confirmed closes with assumed closes and report them separately. Test the finding against one contrary case before publishing it to the finance owner. Group exceptions by field and by age, because a single average can hide the one item that sat for a month."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The protocol measures the record, not the customer relationship, and the report should avoid implying otherwise. Self-reported timestamps are weaker than system timestamps, and the report should say which one it used. The review cannot see decisions that were never written into the credit application record, so it should not claim to.",
          "The largest limit is usually missing context, so name the context the reviewer would need next time. A small sample can show whether evidence exists; it cannot prove that every future case will behave the same way. Seasonality is a source of error at quarter start, because the first cycle may not represent the quarter.",
          "The customer credit application record may be correct while the underlying business decision was poor; the protocol measures evidence, not judgment. A review performed at quarter start may over-represent clean-up items, so label the window clearly. If the credit application queue changed during the window, split the observation instead of blending two regimes."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "If the owner changes, repeat the definition walkthrough with the new owner before the next sample. Review the credit application queue weekly during the quarter and repeat the full protocol at the next quarter start. The owner should see the finding, the limit, and the one change that will be tested at the next review.",
          "Set the next sample before the current finding is circulated, so the cadence does not depend on memory. Keep the review small enough to repeat and explicit enough to challenge. A cadence that depends on one person is a single point of failure, not a control.",
          "If a fix changes the definition, test it on the next sample rather than re-scoring the old one. End each review with a dated decision about what stays, what changes, and who confirms the next sample. The cadence should match the risk: a customer credit application item that can stop an invoice gets checked sooner than a reporting item."
        ]
      }
    ],
    "methodology": "We read the public sources below and translated their control ideas into a short test of the credit application record. The protocol measures whether evidence exists and can be reconstructed; it does not judge the commercial wisdom of any individual decision.",
    "sources": [
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      },
      {
        "label": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "is-the-dunning-cadence-measurable-for-the-quarter-start-review",
    "title": "Is the dunning cadence measurable for the quarter-start review?",
    "summary": "A measurement protocol for dunning cadence that tests timing, pause handling, and escalation evidence.",
    "cluster": "Collections Control",
    "publishedAt": "2026-11-07",
    "finding": "The measurable question is whether each dunning event has a notice date, a channel, a pause reason, and a next step that a reviewer can compare across cycles.",
    "thumbnail": "/thumbnails/november-07/is-the-dunning-cadence-measurable-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The unit is one dunning event, from its opening event to its recorded close, with linked events counted separately. The question is narrow: what can the dunning event record show about the notice date, the channel, the pause reason, and the next step date without relying on memory? A dry run on one dunning event is cheaper than discovering a definition error after full collection.",
          "Fix the start event, the stop event, the pause rule, and the treatment of missing evidence before the first case is read. The scope excludes judgment quality and outcomes that the dunning event record was never designed to capture. Keep the review question separate from the improvement plan, or the evidence standard will move while the sample is still being read.",
          "Name the decision the dunning cadence record exists to support, then test only the evidence that decision requires. The review should say plainly what it does not measure, so the finding is not read as a verdict on the team. Record the exact question before collection so a later reader can see whether the analysis answered it or replaced it."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "A current screenshot cannot prove what the dunning event record said earlier, so record the version or the observation date. Record one ordinary dunning event, one exception, and one reopened item so the sample reflects the real mix. The population should be stated before collection, because a denominator chosen later is a conclusion in disguise.",
          "Every case needs the notice date, the channel, the pause reason, and the next step date, plus the reviewer who checked it. The dunning queue offers natural strata: new items, carried items, and items returned by a reviewer. Separate items opened before the window from items opened inside it, and report both counts.",
          "If a definition changes mid-review, keep the earlier classification and label the new rule for later cases. Include the items that were closed without a recorded decision, because silent closes are part of the real population. Mark missing, unavailable, and confirmed negative values separately in the dunning event record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The definition should let a reviewer who missed the first pass apply it without asking for context. The primary measure needs a denominator and a window; without both, a percentage is only a mood. For each dunning event, measure whether the record contains the notice date, the channel, the pause reason, and the next step date, each with a date.",
          "Track the age of the oldest open item alongside the count, because averages hide a case that sat for weeks. The measure of dunning cadence should distinguish preparation from approval, because the two carry different risk. Use one clock for every timestamp in the sample, or the age measure will compare different time zones.",
          "Keep the number of measures small enough that a reviewer can explain each one in a sentence. Supporting measures should cover missing fields, exception age, and closes confirmed on a destination record. Define close before counting closes, and state whether a reopened item returns to the same denominator."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "The evidence standard should be the same for a routine case and for an exception, even when the exception needs more detail. A finding about missing evidence is useful when the missing field is named precisely. For dunning cadence, the aim is to let the collections lead who approves pauses and escalations review the same evidence against the same definitions each time.",
          "A record that cannot show its source version fails the standard even when the current value looks correct. If the source changes mid-window, keep the original observation and add a dated note rather than overwriting it. A case is usable when the dunning event record carries a source, an observation time, the field it supports, and the reviewer who checked it.",
          "When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. The standard should allow a reviewer to tell a checked value from an assumed one without opening another system. Write the next check date before the review ends, so the evidence trail has a continuation."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A case where the collections lead who approves pauses and escalations intervened is useful because it shows which field the routine did not settle. Stratify by age as well as status, because a fresh exception and a month-old exception test different controls. Collect the notice date, the channel, the pause reason, and the next step date exactly as written, then compare it with the destination record after collection.",
          "The sample is large enough when one more case is unlikely to change the next action. Record the sample frame before drawing cases, so the review cannot quietly prefer clean files. If the dunning event record is incomplete for more than a small share of the sample, stop and fix the intake before counting further.",
          "Start with the oldest item, one recent item, and one item that changed owner, because those three expose most gaps. Record every exclusion with its reason, so the sample can be rebuilt without guessing. Sampling should follow the dunning queue strat: new, carried, and returned items should all appear."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Compare confirmed closes with assumed closes and report them separately. Group exceptions by field and by age, because a single average can hide the one item that sat for a month. If dunning event record completeness varies by owner, report the variation rather than pooling it away.",
          "Report the finding with its denominator, its window, and the limit that applies to both. Report the count and the rate together, because a rate without a count hides how small the evidence base is. The result is a description the collections lead who approves pauses and escalations can review, not a verdict about individual performance.",
          "Test the finding against one contrary case before publishing it to the finance owner. Name the one field that caused the most exceptions, then test whether the routine can capture it earlier. A short finding with a clear limit is more useful than a dashboard that implies certainty."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A review performed at quarter start may over-represent clean-up items, so label the window clearly. Self-reported timestamps are weaker than system timestamps, and the report should say which one it used. Seasonality is a source of error at quarter start, because the first cycle may not represent the quarter.",
          "Report the limit beside the finding, so the reader can judge both without a second document. A small sample can show whether evidence exists; it cannot prove that every future case will behave the same way. The dunning cadence record may be correct while the underlying business decision was poor; the protocol measures evidence, not judgment.",
          "The review cannot see decisions that were never written into the dunning event record, so it should not claim to. The largest limit is usually missing context, so name the context the reviewer would need next time. The protocol measures the record, not the customer relationship, and the report should avoid implying otherwise."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Write the next review date on the dunning event record before closing the current one. The cadence should match the risk: a dunning cadence item that can stop an invoice gets checked sooner than a reporting item. The owner should see the finding, the limit, and the one change that will be tested at the next review.",
          "If a fix changes the definition, test it on the next sample rather than re-scoring the old one. Keep the review small enough to repeat and explicit enough to challenge. Review the dunning queue weekly during the quarter and repeat the full protocol at the next quarter start.",
          "End each review with a dated decision about what stays, what changes, and who confirms the next sample. If the owner changes, repeat the definition walkthrough with the new owner before the next sample. Set the next sample before the current finding is circulated, so the cadence does not depend on memory."
        ]
      }
    ],
    "methodology": "We read the public sources below and translated their control ideas into a short test of the dunning event record. The protocol measures whether evidence exists and can be reconstructed; it does not judge the commercial wisdom of any individual decision.",
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      }
    ]
  },
  {
    "slug": "can-the-e-invoicing-exception-queue-be-reconstructed-for-the-quarter-start-review",
    "title": "Can the e-invoicing exception queue be reconstructed for the quarter-start review?",
    "summary": "A reconstruction test for the e-invoicing exception queue that uses network messages, corrected fields, and resubmission dates.",
    "cluster": "E-invoicing Evidence",
    "publishedAt": "2026-11-07",
    "finding": "The test is whether a reviewer can rebuild each open exception from the rejection code, the network message, the corrected field, and the resubmission date.",
    "thumbnail": "/thumbnails/november-07/can-the-e-invoicing-exception-queue-be-reconstructed-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "A dry run on one e-invoicing exception is cheaper than discovering a definition error after full collection. Name the decision the e-invoicing exception queue record exists to support, then test only the evidence that decision requires. Keep the review question separate from the improvement plan, or the evidence standard will move while the sample is still being read.",
          "State the e-invoicing exception queue population before collection, so the denominator cannot drift toward the easiest items. Record the exact question before collection so a later reader can see whether the analysis answered it or replaced it. Fix the start event, the stop event, the pause rule, and the treatment of missing evidence before the first case is read.",
          "The review should say plainly what it does not measure, so the finding is not read as a verdict on the team. The question is narrow: what can the exception queue record show about the rejection code, the network, the buyer reference, and the resubmission date without relying on memory? The scope excludes judgment quality and outcomes that the exception queue record was never designed to capture."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Include the items that were closed without a recorded decision, because silent closes are part of the real population. Decide whether a reopened case is new or continues the old one, and apply that rule every time. A current screenshot cannot prove what the exception queue record said earlier, so record the version or the observation date.",
          "The population should be stated before collection, because a denominator chosen later is a conclusion in disguise. The e-invoicing exception queue offers natural strata: new items, carried items, and items returned by a reviewer. Separate items opened before the window from items opened inside it, and report both counts.",
          "Record one ordinary e-invoicing exception, one exception, and one reopened item so the sample reflects the real mix. If a definition changes mid-review, keep the earlier classification and label the new rule for later cases. Mark missing, unavailable, and confirmed negative values separately in the exception queue record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For each e-invoicing exception, measure whether the record contains the rejection code, the network, the buyer reference, and the resubmission date, each with a date. Define close before counting closes, and state whether a reopened item returns to the same denominator. The measure of e-invoicing exception queue should distinguish preparation from approval, because the two carry different risk.",
          "A measure that cannot be reproduced from the exception queue record is a finding about the record, not about the team. Keep the number of measures small enough that a reviewer can explain each one in a sentence. Supporting measures should cover missing fields, exception age, and closes confirmed on a destination record.",
          "Track the age of the oldest open item alongside the count, because averages hide a case that sat for weeks. The primary measure needs a denominator and a window; without both, a percentage is only a mood. Use one clock for every timestamp in the sample, or the age measure will compare different time zones."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For e-invoicing exception queue, the aim is to let the billing systems owner who approves resubmission review the same evidence against the same definitions each time. Write the next check date before the review ends, so the evidence trail has a continuation. Keep the original observation next to any correction, so the trail shows what changed and when.",
          "A finding about missing evidence is useful when the missing field is named precisely. The standard should allow a reviewer to tell a checked value from an assumed one without opening another system. The evidence standard should be the same for a routine case and for an exception, even when the exception needs more detail.",
          "A case is usable when the exception queue record carries a source, an observation time, the field it supports, and the reviewer who checked it. When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. A record that cannot show its source version fails the standard even when the current value looks correct."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The sample is large enough when one more case is unlikely to change the next action. Start with the oldest item, one recent item, and one item that changed owner, because those three expose most gaps. Stratify by age as well as status, because a fresh exception and a month-old exception test different controls.",
          "A case where the billing systems owner who approves resubmission intervened is useful because it shows which field the routine did not settle. If the exception queue record is incomplete for more than a small share of the sample, stop and fix the intake before counting further. Collect the exception reason as data, not as a comment, or the pattern will be lost.",
          "Collect the rejection code, the network, the buyer reference, and the resubmission date exactly as written, then compare it with the destination record after collection. Record every exclusion with its reason, so the sample can be rebuilt without guessing. Record the sample frame before drawing cases, so the review cannot quietly prefer clean files."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Compare confirmed closes with assumed closes and report them separately. The analysis should name which e-invoicing exception queue step creates evidence and which step can lose it. Report the finding with its denominator, its window, and the limit that applies to both.",
          "The result is a description the billing systems owner who approves resubmission can review, not a verdict about individual performance. If exception queue record completeness varies by owner, report the variation rather than pooling it away. Report the count and the rate together, because a rate without a count hides how small the evidence base is.",
          "A short finding with a clear limit is more useful than a dashboard that implies certainty. Name the one field that caused the most exceptions, then test whether the routine can capture it earlier. Group exceptions by field and by age, because a single average can hide the one item that sat for a month."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Report the limit beside the finding, so the reader can judge both without a second document. Seasonality is a source of error at quarter start, because the first cycle may not represent the quarter. The review cannot see decisions that were never written into the exception queue record, so it should not claim to.",
          "The protocol measures the record, not the customer relationship, and the report should avoid implying otherwise. The e-invoicing exception queue record may be correct while the underlying business decision was poor; the protocol measures evidence, not judgment. The largest limit is usually missing context, so name the context the reviewer would need next time.",
          "A small sample can show whether evidence exists; it cannot prove that every future case will behave the same way. Self-reported timestamps are weaker than system timestamps, and the report should say which one it used. If the e-invoicing exception queue changed during the window, split the observation instead of blending two regimes."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "If the owner changes, repeat the definition walkthrough with the new owner before the next sample. Write the next review date on the exception queue record before closing the current one. Set the next sample before the current finding is circulated, so the cadence does not depend on memory.",
          "End each review with a dated decision about what stays, what changes, and who confirms the next sample. The owner should see the finding, the limit, and the one change that will be tested at the next review. The cadence should match the risk: a e-invoicing exception queue item that can stop an invoice gets checked sooner than a reporting item.",
          "A cadence that depends on one person is a single point of failure, not a control. If a fix changes the definition, test it on the next sample rather than re-scoring the old one. Review the e-invoicing exception queue weekly during the quarter and repeat the full protocol at the next quarter start."
        ]
      }
    ],
    "methodology": "We read the public sources below and translated their control ideas into a short test of the exception queue record. The protocol measures whether evidence exists and can be reconstructed; it does not judge the commercial wisdom of any individual decision.",
    "sources": [
      {
        "label": "European Commission: eInvoicing",
        "url": "https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing"
      },
      {
        "label": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ]
  },
  {
    "slug": "are-billing-contact-changes-provable-for-the-quarter-start-review",
    "title": "Are billing contact changes provable for the quarter-start review?",
    "summary": "A proof test for billing contact changes that checks the requester, the old and new values, and the destination record.",
    "cluster": "Record Integrity",
    "publishedAt": "2026-11-07",
    "finding": "The question is whether a contact change shows the old value, the new value, who asked, how the request was verified, and where the change landed.",
    "thumbnail": "/thumbnails/november-07/are-billing-contact-changes-provable-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The review should say plainly what it does not measure, so the finding is not read as a verdict on the team. The question is narrow: what can the contact change record show about the old value, the new value, the requester, and the verification date without relying on memory? The scope excludes judgment quality and outcomes that the contact change record was never designed to capture.",
          "State the billing contact change population before collection, so the denominator cannot drift toward the easiest items. The unit is one billing contact change, from its opening event to its recorded close, with linked events counted separately. Name the decision the billing contact change record exists to support, then test only the evidence that decision requires.",
          "Keep the review question separate from the improvement plan, or the evidence standard will move while the sample is still being read. A dry run on one billing contact change is cheaper than discovering a definition error after full collection. Fix the start event, the stop event, the pause rule, and the treatment of missing evidence before the first case is read."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The population should be stated before collection, because a denominator chosen later is a conclusion in disguise. A current screenshot cannot prove what the contact change record said earlier, so record the version or the observation date. The contact change queue offers natural strata: new items, carried items, and items returned by a reviewer.",
          "Record one ordinary billing contact change, one exception, and one reopened item so the sample reflects the real mix. Include the items that were closed without a recorded decision, because silent closes are part of the real population. If a definition changes mid-review, keep the earlier classification and label the new rule for later cases.",
          "Separate items opened before the window from items opened inside it, and report both counts. Every case needs the old value, the new value, the requester, and the verification date, plus the reviewer who checked it. Mark missing, unavailable, and confirmed negative values separately in the contact change record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Define close before counting closes, and state whether a reopened item returns to the same denominator. The primary measure needs a denominator and a window; without both, a percentage is only a mood. The definition should let a reviewer who missed the first pass apply it without asking for context.",
          "Supporting measures should cover missing fields, exception age, and closes confirmed on a destination record. A measure that cannot be reproduced from the contact change record is a finding about the record, not about the team. Track the age of the oldest open item alongside the count, because averages hide a case that sat for weeks.",
          "Keep the number of measures small enough that a reviewer can explain each one in a sentence. For each billing contact change, measure whether the record contains the old value, the new value, the requester, and the verification date, each with a date. Use one clock for every timestamp in the sample, or the age measure will compare different time zones."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "The evidence standard should be the same for a routine case and for an exception, even when the exception needs more detail. Keep the original observation next to any correction, so the trail shows what changed and when. If the source changes mid-window, keep the original observation and add a dated note rather than overwriting it.",
          "Write the next check date before the review ends, so the evidence trail has a continuation. For billing contact change, the aim is to let the account owner who accepts a billing contact change review the same evidence against the same definitions each time. A case is usable when the contact change record carries a source, an observation time, the field it supports, and the reviewer who checked it.",
          "When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. A finding about missing evidence is useful when the missing field is named precisely. The standard should allow a reviewer to tell a checked value from an assumed one without opening another system."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Record the sample frame before drawing cases, so the review cannot quietly prefer clean files. Collect the exception reason as data, not as a comment, or the pattern will be lost. A case where the account owner who accepts a billing contact change intervened is useful because it shows which field the routine did not settle.",
          "The sample is large enough when one more case is unlikely to change the next action. Collect the old value, the new value, the requester, and the verification date exactly as written, then compare it with the destination record after collection. Sampling should follow the contact change queue strat: new, carried, and returned items should all appear.",
          "Stratify by age as well as status, because a fresh exception and a month-old exception test different controls. If the contact change record is incomplete for more than a small share of the sample, stop and fix the intake before counting further. Record every exclusion with its reason, so the sample can be rebuilt without guessing."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Compare confirmed closes with assumed closes and report them separately. If contact change record completeness varies by owner, report the variation rather than pooling it away. Group exceptions by field and by age, because a single average can hide the one item that sat for a month.",
          "The result is a description the account owner who accepts a billing contact change can review, not a verdict about individual performance. The analysis should name which billing contact change step creates evidence and which step can lose it. Name the one field that caused the most exceptions, then test whether the routine can capture it earlier.",
          "Report the count and the rate together, because a rate without a count hides how small the evidence base is. Test the finding against one contrary case before publishing it to the finance owner. Report the finding with its denominator, its window, and the limit that applies to both."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "If the contact change queue changed during the window, split the observation instead of blending two regimes. Report the limit beside the finding, so the reader can judge both without a second document. The billing contact change record may be correct while the underlying business decision was poor; the protocol measures evidence, not judgment.",
          "The review cannot see decisions that were never written into the contact change record, so it should not claim to. The protocol measures the record, not the customer relationship, and the report should avoid implying otherwise. A review performed at quarter start may over-represent clean-up items, so label the window clearly.",
          "The largest limit is usually missing context, so name the context the reviewer would need next time. Seasonality is a source of error at quarter start, because the first cycle may not represent the quarter. A small sample can show whether evidence exists; it cannot prove that every future case will behave the same way."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "If a fix changes the definition, test it on the next sample rather than re-scoring the old one. A cadence that depends on one person is a single point of failure, not a control. Keep the review small enough to repeat and explicit enough to challenge.",
          "Review the contact change queue weekly during the quarter and repeat the full protocol at the next quarter start. If the owner changes, repeat the definition walkthrough with the new owner before the next sample. Write the next review date on the contact change record before closing the current one.",
          "End each review with a dated decision about what stays, what changes, and who confirms the next sample. Set the next sample before the current finding is circulated, so the cadence does not depend on memory. The owner should see the finding, the limit, and the one change that will be tested at the next review."
        ]
      }
    ],
    "methodology": "We read the public sources below and translated their control ideas into a short test of the contact change record. The protocol measures whether evidence exists and can be reconstructed; it does not judge the commercial wisdom of any individual decision.",
    "sources": [
      {
        "label": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "label": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      }
    ]
  },
  {
    "slug": "does-the-tax-code-review-hold-across-invoice-types-for-the-quarter-start-review",
    "title": "Does the tax-code review hold across invoice types for the quarter-start review?",
    "summary": "A cross-invoice test for tax-code assignment that checks product codes, jurisdictions, certificates, and effective dates.",
    "cluster": "Tax Evidence",
    "publishedAt": "2026-11-07",
    "finding": "The test is whether each invoice line can show a product code, a jurisdiction, a valid certificate, and an effective date that the reviewer can compare.",
    "thumbnail": "/thumbnails/november-07/does-the-tax-code-review-hold-across-invoice-types-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The question is narrow: what can the tax-code record show about the product code, the jurisdiction, the certificate, and the effective date without relying on memory? State the tax-code assignment population before collection, so the denominator cannot drift toward the easiest items. Name the decision the tax-code assignment record exists to support, then test only the evidence that decision requires.",
          "Fix the start event, the stop event, the pause rule, and the treatment of missing evidence before the first case is read. A dry run on one invoice line is cheaper than discovering a definition error after full collection. The unit is one invoice line, from its opening event to its recorded close, with linked events counted separately.",
          "Record the exact question before collection so a later reader can see whether the analysis answered it or replaced it. Keep the review question separate from the improvement plan, or the evidence standard will move while the sample is still being read. The review should say plainly what it does not measure, so the finding is not read as a verdict on the team."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "If a definition changes mid-review, keep the earlier classification and label the new rule for later cases. A current screenshot cannot prove what the tax-code record said earlier, so record the version or the observation date. Mark missing, unavailable, and confirmed negative values separately in the tax-code record.",
          "Every case needs the product code, the jurisdiction, the certificate, and the effective date, plus the reviewer who checked it. Decide whether a reopened case is new or continues the old one, and apply that rule every time. Include the items that were closed without a recorded decision, because silent closes are part of the real population.",
          "Record one ordinary invoice line, one exception, and one reopened item so the sample reflects the real mix. Separate items opened before the window from items opened inside it, and report both counts. The tax-code review queue offers natural strata: new items, carried items, and items returned by a reviewer."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Keep the number of measures small enough that a reviewer can explain each one in a sentence. The definition should let a reviewer who missed the first pass apply it without asking for context. The measure of tax-code assignment should distinguish preparation from approval, because the two carry different risk.",
          "The primary measure needs a denominator and a window; without both, a percentage is only a mood. Define close before counting closes, and state whether a reopened item returns to the same denominator. Supporting measures should cover missing fields, exception age, and closes confirmed on a destination record.",
          "Track the age of the oldest open item alongside the count, because averages hide a case that sat for weeks. A measure that cannot be reproduced from the tax-code record is a finding about the record, not about the team. Use one clock for every timestamp in the sample, or the age measure will compare different time zones."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. A case is usable when the tax-code record carries a source, an observation time, the field it supports, and the reviewer who checked it. A record that cannot show its source version fails the standard even when the current value looks correct.",
          "Write the next check date before the review ends, so the evidence trail has a continuation. For tax-code assignment, the aim is to let the tax manager who owns exemption decisions review the same evidence against the same definitions each time. A finding about missing evidence is useful when the missing field is named precisely.",
          "The standard should allow a reviewer to tell a checked value from an assumed one without opening another system. Keep the original observation next to any correction, so the trail shows what changed and when. If the source changes mid-window, keep the original observation and add a dated note rather than overwriting it."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Start with the oldest item, one recent item, and one item that changed owner, because those three expose most gaps. Collect the exception reason as data, not as a comment, or the pattern will be lost. Stratify by age as well as status, because a fresh exception and a month-old exception test different controls.",
          "Collect the product code, the jurisdiction, the certificate, and the effective date exactly as written, then compare it with the destination record after collection. Record the sample frame before drawing cases, so the review cannot quietly prefer clean files. Sampling should follow the tax-code review queue strat: new, carried, and returned items should all appear.",
          "If the tax-code record is incomplete for more than a small share of the sample, stop and fix the intake before counting further. Record every exclusion with its reason, so the sample can be rebuilt without guessing. The sample is large enough when one more case is unlikely to change the next action."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Compare confirmed closes with assumed closes and report them separately. Group exceptions by field and by age, because a single average can hide the one item that sat for a month. The analysis should name which tax-code assignment step creates evidence and which step can lose it.",
          "If tax-code record completeness varies by owner, report the variation rather than pooling it away. Test the finding against one contrary case before publishing it to the finance owner. Report the count and the rate together, because a rate without a count hides how small the evidence base is.",
          "A short finding with a clear limit is more useful than a dashboard that implies certainty. Report the finding with its denominator, its window, and the limit that applies to both. The result is a description the tax manager who owns exemption decisions can review, not a verdict about individual performance."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The protocol measures the record, not the customer relationship, and the report should avoid implying otherwise. A small sample can show whether evidence exists; it cannot prove that every future case will behave the same way. Self-reported timestamps are weaker than system timestamps, and the report should say which one it used.",
          "The largest limit is usually missing context, so name the context the reviewer would need next time. The review cannot see decisions that were never written into the tax-code record, so it should not claim to. If the tax-code review queue changed during the window, split the observation instead of blending two regimes.",
          "Seasonality is a source of error at quarter start, because the first cycle may not represent the quarter. The tax-code assignment record may be correct while the underlying business decision was poor; the protocol measures evidence, not judgment. A review performed at quarter start may over-represent clean-up items, so label the window clearly."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Write the next review date on the tax-code record before closing the current one. End each review with a dated decision about what stays, what changes, and who confirms the next sample. The cadence should match the risk: a tax-code assignment item that can stop an invoice gets checked sooner than a reporting item.",
          "Keep the review small enough to repeat and explicit enough to challenge. If a fix changes the definition, test it on the next sample rather than re-scoring the old one. The owner should see the finding, the limit, and the one change that will be tested at the next review.",
          "If the owner changes, repeat the definition walkthrough with the new owner before the next sample. Review the tax-code review queue weekly during the quarter and repeat the full protocol at the next quarter start. A cadence that depends on one person is a single point of failure, not a control."
        ]
      }
    ],
    "methodology": "We read the public sources below and translated their control ideas into a short test of the tax-code record. The protocol measures whether evidence exists and can be reconstructed; it does not judge the commercial wisdom of any individual decision.",
    "sources": [
      {
        "label": "IRS: Tax Exempt Organization Search",
        "url": "https://www.irs.gov/charities-non-profits/tax-exempt-organization-search"
      },
      {
        "label": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      }
    ]
  },
  {
    "slug": "is-the-invoice-rejection-log-decision-ready-for-the-quarter-start-review",
    "title": "Is the invoice rejection log decision-ready for the quarter-start review?",
    "summary": "A decision-readiness test for the invoice rejection log that checks reasons, corrections, and resubmission evidence.",
    "cluster": "Rejection Analysis",
    "publishedAt": "2026-11-07",
    "finding": "The question is whether a reviewer can decide the next action from the rejection reason, the rejecting party, the corrected field, and the resubmission date alone.",
    "thumbnail": "/thumbnails/november-07/is-the-invoice-rejection-log-decision-ready-for-the-quarter-start-review.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Keep the review question separate from the improvement plan, or the evidence standard will move while the sample is still being read. State the invoice rejection log population before collection, so the denominator cannot drift toward the easiest items. The question is narrow: what can the rejection log record show about the rejection reason, the rejecting party, the corrected field, and the resubmission date without relying on memory?",
          "Record the exact question before collection so a later reader can see whether the analysis answered it or replaced it. The unit is one rejected invoice, from its opening event to its recorded close, with linked events counted separately. A dry run on one rejected invoice is cheaper than discovering a definition error after full collection.",
          "Fix the start event, the stop event, the pause rule, and the treatment of missing evidence before the first case is read. The scope excludes judgment quality and outcomes that the rejection log record was never designed to capture. Name the decision the invoice rejection log record exists to support, then test only the evidence that decision requires."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Decide whether a reopened case is new or continues the old one, and apply that rule every time. The rejection log offers natural strata: new items, carried items, and items returned by a reviewer. Include the items that were closed without a recorded decision, because silent closes are part of the real population.",
          "If a definition changes mid-review, keep the earlier classification and label the new rule for later cases. The population should be stated before collection, because a denominator chosen later is a conclusion in disguise. A current screenshot cannot prove what the rejection log record said earlier, so record the version or the observation date.",
          "Record one ordinary rejected invoice, one exception, and one reopened item so the sample reflects the real mix. Every case needs the rejection reason, the rejecting party, the corrected field, and the resubmission date, plus the reviewer who checked it. Mark missing, unavailable, and confirmed negative values separately in the rejection log record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Use one clock for every timestamp in the sample, or the age measure will compare different time zones. For each rejected invoice, measure whether the record contains the rejection reason, the rejecting party, the corrected field, and the resubmission date, each with a date. The primary measure needs a denominator and a window; without both, a percentage is only a mood.",
          "The definition should let a reviewer who missed the first pass apply it without asking for context. Define close before counting closes, and state whether a reopened item returns to the same denominator. A measure that cannot be reproduced from the rejection log record is a finding about the record, not about the team.",
          "Supporting measures should cover missing fields, exception age, and closes confirmed on a destination record. The measure of invoice rejection log should distinguish preparation from approval, because the two carry different risk. Track the age of the oldest open item alongside the count, because averages hide a case that sat for weeks."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For invoice rejection log, the aim is to let the billing owner who decides resubmission or credit review the same evidence against the same definitions each time. Keep the original observation next to any correction, so the trail shows what changed and when. The evidence standard should be the same for a routine case and for an exception, even when the exception needs more detail.",
          "The standard should allow a reviewer to tell a checked value from an assumed one without opening another system. A finding about missing evidence is useful when the missing field is named precisely. A case is usable when the rejection log record carries a source, an observation time, the field it supports, and the reviewer who checked it.",
          "A record that cannot show its source version fails the standard even when the current value looks correct. When the sample is challenged, the defense is the collection log, the exclusions, and the definitions. If the source changes mid-window, keep the original observation and add a dated note rather than overwriting it."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Collect the rejection reason, the rejecting party, the corrected field, and the resubmission date exactly as written, then compare it with the destination record after collection. Record the sample frame before drawing cases, so the review cannot quietly prefer clean files. Record every exclusion with its reason, so the sample can be rebuilt without guessing.",
          "Start with the oldest item, one recent item, and one item that changed owner, because those three expose most gaps. Collect the exception reason as data, not as a comment, or the pattern will be lost. A case where the billing owner who decides resubmission or credit intervened is useful because it shows which field the routine did not settle.",
          "Sampling should follow the rejection log strat: new, carried, and returned items should all appear. Stratify by age as well as status, because a fresh exception and a month-old exception test different controls. The sample is large enough when one more case is unlikely to change the next action."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "A short finding with a clear limit is more useful than a dashboard that implies certainty. The analysis should name which invoice rejection log step creates evidence and which step can lose it. If rejection log record completeness varies by owner, report the variation rather than pooling it away.",
          "The result is a description the billing owner who decides resubmission or credit can review, not a verdict about individual performance. Name the one field that caused the most exceptions, then test whether the routine can capture it earlier. Compare confirmed closes with assumed closes and report them separately.",
          "Group exceptions by field and by age, because a single average can hide the one item that sat for a month. Report the count and the rate together, because a rate without a count hides how small the evidence base is. Test the finding against one contrary case before publishing it to the finance owner."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A review performed at quarter start may over-represent clean-up items, so label the window clearly. The review cannot see decisions that were never written into the rejection log record, so it should not claim to. The largest limit is usually missing context, so name the context the reviewer would need next time.",
          "The protocol measures the record, not the customer relationship, and the report should avoid implying otherwise. Report the limit beside the finding, so the reader can judge both without a second document. If the rejection log changed during the window, split the observation instead of blending two regimes.",
          "The invoice rejection log record may be correct while the underlying business decision was poor; the protocol measures evidence, not judgment. Self-reported timestamps are weaker than system timestamps, and the report should say which one it used. A small sample can show whether evidence exists; it cannot prove that every future case will behave the same way."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "If a fix changes the definition, test it on the next sample rather than re-scoring the old one. Review the rejection log weekly during the quarter and repeat the full protocol at the next quarter start. If the owner changes, repeat the definition walkthrough with the new owner before the next sample.",
          "Keep the review small enough to repeat and explicit enough to challenge. Set the next sample before the current finding is circulated, so the cadence does not depend on memory. The cadence should match the risk: a invoice rejection log item that can stop an invoice gets checked sooner than a reporting item.",
          "A cadence that depends on one person is a single point of failure, not a control. The owner should see the finding, the limit, and the one change that will be tested at the next review. Write the next review date on the rejection log record before closing the current one."
        ]
      }
    ],
    "methodology": "We read the public sources below and translated their control ideas into a short test of the rejection log record. The protocol measures whether evidence exists and can be reconstructed; it does not judge the commercial wisdom of any individual decision.",
    "sources": [
      {
        "label": "GAO Green Book",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "IRS: Recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/"
      }
    ]
  }
];
