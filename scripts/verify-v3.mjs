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

requireMatch(/export const nav\s*=\s*\[\s*\{ href: '\/', label: 'Home' \},\s*\{ href: '\/services', label: 'Services' \},\s*\{ href: '\/contact-us', label: 'Contact Us' \}\s*\]/s.test(content), 'Primary navigation must contain exactly Home, Services, and Contact Us.');
requireMatch(!chrome.includes('TimedLeadModal'), 'Timed promotional modal must be removed.');
requireMatch((chrome.match(/Powered by StealthAgents/g) || []).length >= 1 && /<ParentBrand[^>]*inverse/.test(chrome), 'Header and footer must both render Powered by StealthAgents.');
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
requireMatch(contact.includes('<ReviewMarquee reviews={proof.reviews} />') && reviewMarquee.includes('aria-pressed={paused}') && reviewMarquee.includes('aria-controls="review-marquee"') && reviewMarquee.includes("paused ? 'Play reviews' : 'Pause reviews'") && contactCss.includes('.review-marquee.is-paused .review-track{animation-play-state:paused}'), 'Review marquee must provide an explicit keyboard-operable Pause/Play control with exposed state.');
requireMatch(thankYou.includes('https://go.oncehub.com/StealthAgentsTeam') && thankYou.includes('/thanks-whats-next') && !thankYou.includes('data-booking-success-destination') && thankYou.includes('OnceHub controls the post-booking experience'), 'Thank-you page must host OnceHub, provide explicit booking next steps, and avoid claiming that local markup configures the external provider.');
requireMatch(confirmation.includes('If OnceHub accepted your selected time') && confirmation.includes('booking confirmation'), 'Booking next-steps page must condition its confirmation guidance on OnceHub acceptance.');
for (const heading of ['Who this service is for', 'Inputs the workflow needs', 'What the specialist delivers', 'Quality controls', 'What remains a human decision', 'Common starting scenarios', 'Frequently asked questions', 'Related services']) {
  requireMatch(service.includes(heading), `Every service detail needs a ${heading} section.`);
}
requireMatch(service.includes('service-hero-image'), 'Every service detail must include a relevant hero image.');
requireMatch(blog.includes('ArticleSidebar') && research.includes('ArticleSidebar'), 'Every blog and research article must use the shared populated article sidebar and TOC.');
requireMatch(research.includes('post.faq?.length') && research.includes('id="frequently-asked-questions"') && research.includes("label: 'Frequently asked questions'"), 'Research articles must preserve FAQ content and include it in the active TOC when present.');
requireMatch(!/service-number|method-art/.test(read('components/Marketing.tsx')), 'Decorative numbered commercial labels must be removed.');
requireMatch(!/0\{index\s*\+\s*1\}/.test(contact), 'Decorative zero-padded process labels must be removed from Contact Us.');
requireMatch(proxy.includes("const APEX_HOST = 'invoicingspecialists.com'") && proxy.includes("const WWW_HOST = 'www.invoicingspecialists.com'") && proxy.includes("request.headers.get('host')") && !proxy.includes("request.headers.get('x-forwarded-host')"), 'Canonical redirects must use the direct Host header and an exact production-host allowlist.');
requireMatch(proxy.includes("request.headers.get('cf-visitor')") && proxy.includes("request.headers.get('x-forwarded-proto')"), 'Canonical redirects must prefer Cloudflare visitor scheme with a forwarded-protocol fallback.');
requireMatch(proxy.includes('destination.pathname = request.nextUrl.pathname') && proxy.includes('destination.search = request.nextUrl.search') && proxy.includes('NextResponse.redirect(destination, 308)'), 'Canonical redirects must preserve path and query with a permanent fixed-origin redirect.');

if (failures.length) {
  console.error(`V3 contract failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('V3 source contract passed.');
