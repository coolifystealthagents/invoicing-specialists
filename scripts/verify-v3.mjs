import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const failures = [];
const requireMatch = (condition, message) => { if (!condition) failures.push(message); };

const chrome = read('components/SiteChrome.tsx');
const layout = read('app/layout.tsx');
const content = read('lib/content.ts');
const css = read('app/globals.css');
const contact = read('app/contact-us/page.tsx');
const contactCss = read('app/contact-us/contact.css');
const reviewMarquee = read('components/ReviewMarquee.tsx');
const service = read('app/services/[slug]/page.tsx');
const blog = read('app/blog/[slug]/page.tsx');
const research = read('app/research/[slug]/page.tsx');
const thankYou = read('app/thank-you/page.tsx');
const confirmation = read('app/thanks-whats-next/page.tsx');
const proxy = read('proxy.ts');
const serviceDetails = read('lib/service-details.ts');

requireMatch(/export const nav\s*=\s*\[\s*\{ href: '\/', label: 'Home' \},\s*\{ href: '\/services', label: 'Services' \},\s*\{ href: '\/contact-us', label: 'Contact Us' \}\s*\]/s.test(content), 'Primary navigation must contain exactly Home, Services, and Contact Us.');
requireMatch(!chrome.includes('TimedLeadModal'), 'Timed promotional modal must be removed.');
const footerMarkup = chrome.slice(chrome.indexOf('export function Footer()'));
requireMatch(chrome.includes('<ParentBrand />') && footerMarkup.includes('className="site-footer"') && footerMarkup.includes('site.services.map') && footerMarkup.includes('Services') && footerMarkup.includes('Explore') && footerMarkup.includes('site.heroBody') && footerMarkup.includes('Parent Company') && footerMarkup.includes('Stealth Agents recruits and supports remote professionals') && footerMarkup.includes('/brand/stealth-agents-logo-black.png') && footerMarkup.includes('https://stealthagents.com/') && footerMarkup.includes('site.domain'), 'The shared footer must use the approved brand, service data, parent-company copy, and canonical domain.');
const footerRoutes = ['/', '/contact-us', '/about', '/blog', '/research', '/privacy', '/terms'];
requireMatch(footerRoutes.every((route) => footerMarkup.includes(`href: '${route}'`) || footerMarkup.includes(`href="${route}"`)) && footerMarkup.includes('href="/services"') && footerMarkup.includes('href={`/services/${service.slug}`}'), 'The shared footer must retain its existing navigation and legal destinations and link each service to its published route.');
requireMatch(css.includes('.site-footer {') && css.includes('background: #0c1928') && css.includes('grid-template-columns: minmax(0, 1.65fr) minmax(190px, 0.9fr) minmax(160px, 0.75fr)') && css.includes('min-height: 44px') && css.includes('.site-footer a:focus-visible') && css.includes('outline: 3px solid #f1d6a8') && css.includes('.site-footer-logo-panel') && css.includes('grid-template-columns: minmax(0, 1fr);'), 'The shared footer must have its responsive navy layout, parent logo panel, visible focus treatment, and comfortable link targets.');
requireMatch(/position:\s*sticky/.test(css) && /top:\s*0/.test(css), 'Site header must be sticky at the top.');
requireMatch(layout.includes("icons: { icon: '/logo.svg'"), 'Metadata must use the same subsidiary logo as the favicon.');
requireMatch(fs.existsSync(path.join(root, 'content/stealth-agents-proof.json')), 'Approved StealthAgents proof file is required.');
if (fs.existsSync(path.join(root, 'content/stealth-agents-proof.json'))) {
  const proof = JSON.parse(read('content/stealth-agents-proof.json'));
  requireMatch(proof.reviews?.length >= 10, 'At least 10 approved StealthAgents reviews are required.');
  requireMatch(new Set(proof.reviews?.map((review) => `${review.name}|${review.quote}`)).size === proof.reviews?.length, 'StealthAgents reviews must be unique.');
}
requireMatch(contact.includes('StealthAgents reviews') && contact.includes('<ReviewMarquee reviews={proof.reviews} />') && reviewMarquee.includes('className={`review-marquee'), 'Contact Us must visibly identify and render the StealthAgents review marquee.');
requireMatch(!contact.includes('<iframe') && !contact.includes('go.oncehub.com'), 'Contact Us must not embed OnceHub.');
requireMatch(contact.includes('/brand/stealth-agents-team-bacolod') && contact.includes('/brand/stealth-agents-logo-black.png') && contact.includes('Official team, Bacolod'), 'Contact Us must use the official team photo, official logo, and exact Bacolod plate.');
requireMatch(/@keyframes\s+reviewMarquee/.test(contactCss) && /prefers-reduced-motion:\s*reduce/.test(contactCss), 'Review marquee must auto-scroll and honor reduced motion.');
requireMatch(contact.includes('<ReviewMarquee reviews={proof.reviews} />') && reviewMarquee.includes('aria-pressed={paused}') && reviewMarquee.includes('aria-label="Pause automatic review movement"') && reviewMarquee.includes('aria-controls="review-marquee"') && reviewMarquee.includes("paused ? 'Play reviews' : 'Pause reviews'") && contactCss.includes('.review-marquee.is-paused .review-track{animation-play-state:paused}'), 'Review marquee must provide an explicit keyboard-operable Pause/Play control with exposed state.');
requireMatch(thankYou.includes('https://go.oncehub.com/StealthAgentsTeam') && thankYou.includes('/thanks-whats-next') && !thankYou.includes('data-booking-success-destination') && thankYou.includes('OnceHub controls the post-booking experience'), 'Thank-you page must host OnceHub, provide explicit booking next steps, and avoid claiming that local markup configures the external provider.');
requireMatch(confirmation.includes('If OnceHub accepted your selected time') && confirmation.includes('booking confirmation'), 'Booking next-steps page must condition its confirmation guidance on OnceHub acceptance.');
for (const heading of ['Buyer fit and operating problem', 'Work in scope', 'Outputs for review', 'Onboarding inputs', 'Workflow and handoffs', 'Illustrative invoice-work example', 'Specialist responsibilities', 'Owner responsibilities', 'Quality controls', 'Frequently asked questions', 'Related services']) {
  requireMatch(service.includes(heading), `Every service detail needs a ${heading} section.`);
}
requireMatch(!service.includes('Who this service is for') && service.includes('Best suited for'), 'Service audience information must remain available without a separate repeated overview section.');
requireMatch(service.includes('service-hero-image'), 'Every service detail must include a relevant hero image.');
requireMatch(service.includes('service-breadcrumbs') && service.includes('href="/services"') && service.includes('aria-current="page"'), 'Service details must provide accessible breadcrumb navigation to the service index.');
requireMatch(service.includes('title: service.name') && service.includes('description: service.short') && service.includes('alternates: { canonical: `/services/${slug}` }'), 'Service detail titles, descriptions, and canonical routes must remain tied to their existing service records.');
requireMatch(service.includes('cta-services-${service.slug}-bookcall') && service.includes('cta-services-${service.slug}-consultation') && (service.match(/href="\/contact-us"/g) || []).length >= 2, 'Service consultation CTAs must preserve their analytics IDs and Contact Us destinations.');
requireMatch(service.includes('info.opening') && service.includes('info.audience') && service.includes('info.scope.map') && service.includes('info.deliverables.map') && service.includes('info.onboardingInputs.map'), 'Service detail templates must render service-specific openings, buyer fit, scope, deliverables, and onboarding inputs.');
requireMatch(service.includes('info.workflow.map(({ title, copy }, index)') && service.includes('info.workflowExample') && service.includes('service-responsibility-grid') && service.includes('info.ownerResponsibilities.map'), 'Service details must explain a realistic handoff, example, responsibilities, and decision boundaries.');
requireMatch(service.includes('info.faqs.map(({ question, answer })') && service.includes('info.related.flatMap') && service.includes('info.ctaTitle') && service.includes('info.ctaCopy'), 'FAQs, tailored related-service links, and consultation copy must use per-service content.');
for (const slug of ['invoice-draft-preparation', 'billing-schedule-support', 'supporting-documentation', 'invoice-quality-review', 'customer-billing-records', 'billing-status-reporting']) {
  requireMatch(serviceDetails.includes(`"${slug}": {`), `Service-specific detail content must exist for ${slug}.`);
}
requireMatch(serviceDetails.includes('workflowExampleTitle') && serviceDetails.includes('specialistResponsibilities') && serviceDetails.includes('ownerResponsibilities') && serviceDetails.includes('onboardingInputs') && serviceDetails.includes('relatedIntroduction') && serviceDetails.includes('ctaTitle'), 'Every service detail must provide its own example, onboarding, responsibility boundaries, related links, and consultation message.');
requireMatch(blog.includes('ArticleSidebar') && research.includes('ArticleSidebar'), 'Every blog and research article must use the shared populated article sidebar and TOC.');
requireMatch(research.includes('post.faq?.length') && research.includes('id="frequently-asked-questions"') && research.includes("label: 'Frequently asked questions'"), 'Research articles must preserve FAQ content and include it in the active TOC when present.');
requireMatch(!/service-number|method-art/.test(read('components/Marketing.tsx')), 'Decorative numbered commercial labels must be removed.');
requireMatch(read('components/Marketing.tsx').includes('home-support-image') && read('components/Marketing.tsx').includes('closing-visual'), 'Homepage billing capacity and role-planning sections must include supporting images.');
requireMatch(read('components/Marketing.tsx').includes('method-steps') && read('components/Icons.tsx').includes('BoundaryIcon') && read('components/Icons.tsx').includes('HandoffIcon') && read('components/Icons.tsx').includes('EvidenceIcon'), 'Homepage process items must use consistent, meaningful icons.');
const siteConfig = read('lib/site.ts');
requireMatch(siteConfig.includes('"heroImage": "/editorial/invoicing-specialists-hero.webp"') && fs.existsSync(path.join(root, 'public/editorial/invoicing-specialists-hero.webp')), 'The homepage hero must use the optimized local WebP invoice image.');
const imageManifest = JSON.parse(read('content/site-optimization-assets.json'));
const homepageHero = imageManifest.assets.find((asset) => asset.path === '/editorial/invoicing-specialists-hero.webp');
requireMatch(homepageHero?.sourcePage === 'https://www.pexels.com/photo/a-woman-working-in-the-office-8297080/' && homepageHero?.license === 'Pexels License', 'The homepage stock image must retain its source and license record.');
requireMatch(layout.includes('images: [site.heroImage]') && read('app/blog/[slug]/page.tsx').includes('images: post.thumbnail ? [post.thumbnail] : [site.heroImage]') && read('app/research/[slug]/page.tsx').includes('images: post.thumbnail ? [post.thumbnail] : [site.heroImage]'), 'Homepage and fallback social images must use the current hero asset.');
requireMatch(/@media\s*\(max-width:\s*900px\)\s*\{\s*\.home\.design-press \.hero\s*\{\s*grid-template-columns:\s*minmax\(0,\s*1fr\);/s.test(css), 'The press homepage hero must stack its copy and image at tablet and mobile widths.');
requireMatch(css.includes('height: clamp(22rem, 31vw, 34rem)') && css.includes('aspect-ratio: auto'), 'The desktop homepage hero must reserve a stable photo height for its fill image.');
requireMatch(contact.includes('/editorial/invoicing-contact-support.webp') && contact.includes('fill preload'), 'Contact imagery must use a responsive local professional photograph.');
requireMatch(blog.includes('className="article-heading"') && css.includes('.article-hero h1'), 'Blog detail titles must use responsive heading typography.');
requireMatch(!/0\{index\s*\+\s*1\}/.test(contact), 'Decorative zero-padded process labels must be removed from Contact Us.');
const marketing = read('components/Marketing.tsx');
requireMatch(marketing.includes('className="method-visual"') && marketing.indexOf('className="method-copy"') < marketing.indexOf('className="method-visual"'), 'The Define Delegate Improve text must precede its supporting image in the shared section grid.');
requireMatch(marketing.includes('/editorial/home/billing-capacity.webp') && marketing.includes('/editorial/home/delegation-workflow.webp') && marketing.includes('/editorial/home/invoicing-support-planning.webp'), 'Homepage editorial sections must use distinct professional photographs.');
const capacityStart = marketing.indexOf('<section className="section intro"');
const servicesStart = marketing.indexOf('<section className="section services"', capacityStart);
const capacityMarkup = marketing.slice(capacityStart, servicesStart);
requireMatch(capacityMarkup.indexOf('className="intro-label"') < capacityMarkup.indexOf('className="intro-content"') && capacityMarkup.indexOf('className="home-support-image"') < capacityMarkup.indexOf('className="intro-copy"') && capacityMarkup.includes('Capacity that stays visible, reviewable, and accountable.') && capacityMarkup.includes('alt="Two finance colleagues review billing documents together in a modern office"'), 'Homepage billing capacity must keep the label and existing caption/alt, with the image before the copy.');
requireMatch(css.includes('grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr)') && css.includes('width: min(100%, 72rem)') && css.includes('align-items: center') && css.includes('@media (max-width: 700px)'), 'Homepage billing capacity must use a centered desktop split and a mobile stack.');
requireMatch(css.includes('.home .intro {') && css.includes('padding-block: clamp(4rem, 5vw, 5.5rem)') && css.includes('max-width: 72rem'), 'Homepage billing capacity must use the main content width with reduced section padding.');
const servicesIndex = read('app/services/page.tsx');
const servicesIndexNormalized = servicesIndex.replace(/\s+/g, ' ');
const serviceCollectionIntro = "Start with the part of billing that slows your team down, whether that’s preparing invoice drafts, tracking billing dates, or gathering supporting documents. Use the ‘Best for’ and ‘Decision boundary’ notes below to see what each specialist handles and where your finance team takes over.";
requireMatch(!servicesIndex.includes('index-intro') && !servicesIndex.includes('Choose by operating need') && !servicesIndex.includes('Six connected services, each with a different job.') && servicesIndex.includes('Complete service collection') && servicesIndex.includes('Select the lane that matches the bottleneck.') && servicesIndexNormalized.includes(serviceCollectionIntro) && servicesIndex.includes('site.services.map') && servicesIndex.includes('context.bestFor') && servicesIndex.includes('service.short') && servicesIndex.includes('service.tasks.map') && servicesIndex.includes('context.boundary') && servicesIndex.includes('href={`/services/${service.slug}`}') && css.includes('.service-collection-intro') && css.includes('max-width: 68ch'), 'The collection must include its intro copy while preserving the complete service entries, and the removed overview intro must stay absent.');
requireMatch(marketing.includes('How invoice support works') && marketing.includes('Where to start') && marketing.includes('homeSupportSteps') && marketing.includes('homeStartingPoints'), 'Homepage must explain the invoice handoff and provide concrete starting situations.');
for (const slug of ['invoice-draft-preparation', 'billing-schedule-support', 'supporting-documentation']) {
  requireMatch(marketing.includes(`/services/${slug}`), `Homepage starting point must link to ${slug}.`);
}
for (const slug of ['invoice-draft-preparation', 'billing-schedule-support', 'supporting-documentation', 'invoice-quality-review', 'customer-billing-records', 'billing-status-reporting']) {
  requireMatch(marketing.includes(`'${slug}':`), `Homepage service card must have a concrete ${slug} deliverable.`);
}
requireMatch(marketing.includes('cta-home-closing-schedulecall') && marketing.includes('Schedule a free call'), 'Homepage must close with its existing consultation CTA.');
requireMatch(css.includes('.home .service-card .service-card-detail') && css.includes('.home .service-grid') && css.includes('.home .invoice-support-steps') && css.includes('.home .invoice-starting-grid'), 'Homepage role cards and added workflow sections must have homepage-scoped responsive styles.');
requireMatch(read('app/services/page.tsx').includes('className="services-final-visual"') && read('app/services/page.tsx').includes('/editorial/services/role-handoff.webp'), 'The recurring invoicing handoff call to action must include a responsive supporting photograph.');
requireMatch(service.includes('workflow-step-icon') && service.includes('SourceRecordsIcon') && service.includes('PreparationIcon') && service.includes('HandoffIcon') && service.includes('AccountableReviewIcon') && !css.includes('content: "0" counter(workflow)'), 'Individual service workflows must use meaningful icons instead of decorative numbers.');
requireMatch(css.includes('service-onboarding-list') && css.includes('service-workflow-example') && css.includes('service-responsibility-grid') && css.includes('grid-template-columns: repeat(4, minmax(0, 1fr))'), 'Service detail content sections and four-step workflows must have dedicated responsive styles.');
requireMatch(css.includes('width: min(100%, 1360px)') && css.includes('minmax(0, 800px) minmax(260px, 300px)') && css.includes('justify-content: center'), 'Individual service and article reading layouts must be centered and use the available desktop width.');
requireMatch(css.includes('grid-template-columns: minmax(0, 1fr);\n    padding-inline: 5vw;'), 'Article layouts must collapse cleanly at tablet and mobile sizes.');
const photographicPaths = [
  '/editorial/invoicing-specialists-hero.webp',
  '/editorial/home/billing-capacity.webp',
  '/editorial/home/delegation-workflow.webp',
  '/editorial/home/invoicing-support-planning.webp',
  '/editorial/services-invoicing-workflow-hero.webp',
  '/editorial/services/role-handoff.webp',
  '/editorial/invoicing-contact-support.webp',
  '/editorial/services/invoice-draft-preparation.webp',
  '/editorial/services/billing-schedule-support.webp',
  '/editorial/services/supporting-documentation.webp',
  '/editorial/services/invoice-quality-review.webp',
  '/editorial/services/customer-billing-records.webp',
  '/editorial/services/billing-status-reporting.webp',
];
const photographicEntries = photographicPaths.map((assetPath) => imageManifest.assets.find((asset) => asset.path === assetPath));
requireMatch(photographicEntries.every((asset, index) => asset?.license === 'Pexels License' && asset?.sourcePage?.includes('pexels.com/photo/') && fs.existsSync(path.join(root, `public${photographicPaths[index]}`))), 'Every replaced or added professional photo must exist locally with its Pexels source and license recorded.');
requireMatch(new Set(photographicEntries.map((asset) => asset?.sourcePage)).size === photographicEntries.length, 'Each new site visual must use a distinct photo.');
requireMatch(contactCss.includes('width: min(100%, 560px)') && contactCss.includes('width: min(90vw, 560px)') && contactCss.includes('aspect-ratio: 953 / 540') && contactCss.includes('object-fit: contain') && contact.includes('sizes="(max-width: 900px) min(90vw, 560px), 560px"') && css.includes('width: 72px') && contactCss.includes('width: 104px'), 'The Bacolod photo must scale to a 560px cap within page gutters, preserve its original ratio without cropping, and keep the StealthAgents logo size fixed.');
requireMatch(contactCss.includes('grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr)') && contactCss.includes('.contact-page .parent-proof > *'), 'The official team and proof panel must remain shrinkable within the desktop grid.');
requireMatch(proxy.includes("const APEX_HOST = 'invoicingspecialists.com'") && proxy.includes("const WWW_HOST = 'www.invoicingspecialists.com'") && proxy.includes("request.headers.get('host')") && !proxy.includes("request.headers.get('x-forwarded-host')"), 'Canonical redirects must use the direct Host header and an exact production-host allowlist.');
requireMatch(proxy.includes("request.headers.get('cf-visitor')") && proxy.includes("request.headers.get('x-forwarded-proto')"), 'Canonical redirects must prefer Cloudflare visitor scheme with a forwarded-protocol fallback.');
requireMatch(proxy.includes('destination.pathname = request.nextUrl.pathname') && proxy.includes('destination.search = request.nextUrl.search') && proxy.includes('NextResponse.redirect(destination, 308)'), 'Canonical redirects must preserve path and query with a permanent fixed-origin redirect.');

if (failures.length) {
  console.error(`V3 contract failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('V3 source contract passed.');
