import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';

function ParentBrand() {
  return <a className="parent-brand" href="https://stealthagents.com/" rel="noopener noreferrer">
    <span>Powered by StealthAgents</span>
    <Image src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width={72} height={24} sizes="72px" />
  </a>;
}

export function Header() {
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header data-site-header="sticky" className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}><Image src="/logo.svg" alt="" width={38} height={38} priority /><span>{site.name}</span></Link>
      <nav aria-label="Primary navigation">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <ParentBrand />
    </header>
  </>;
}

export function Footer() {
  const exploreLinks = [
    { href: '/', label: 'Home' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/research', label: 'Research' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ];

  return (
    <footer data-site-footer="true" className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link
              className="site-footer-brand-link"
              href="/"
              aria-label={`${site.name} home`}
            >
              <Image src="/logo.svg" alt="" width={44} height={44} />
              <span>{site.name}</span>
            </Link>
            <p className="site-footer-powered">Powered by StealthAgents</p>
            <p className="site-footer-description">{site.heroBody}</p>
          </div>

          <nav data-footer-menu="true"
            className="site-footer-nav site-footer-services"
            aria-labelledby="site-footer-services-title"
          >
            <h2 className="site-footer-heading" id="site-footer-services-title">
              Services
            </h2>
            <Link className="site-footer-link" href="/services">
              All services
            </Link>
            {site.services.map((service) => (
              <Link
                className="site-footer-link"
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                {service.name}
              </Link>
            ))}
          </nav>

          <nav data-footer-menu="true"
            className="site-footer-nav site-footer-explore"
            aria-labelledby="site-footer-explore-title"
          >
            <h2 className="site-footer-heading" id="site-footer-explore-title">
              Explore
            </h2>
            {exploreLinks.map((item) => (
              <Link
                className="site-footer-link"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <section
          className="site-footer-parent"
          aria-labelledby="site-footer-parent-title"
        >
          <div className="site-footer-logo-panel">
            <Image
              src="/brand/stealth-agents-logo-black.png"
              alt="Stealth Agents"
              width={120}
              height={40}
              sizes="120px"
            />
          </div>
          <div className="site-footer-parent-copy">
            <h2
              className="site-footer-parent-label"
              id="site-footer-parent-title"
            >
              Parent Company
            </h2>
            <p className="site-footer-parent-description">
              Stealth Agents recruits and supports remote professionals around documented workflows, clear ownership, accountable handoffs, and practical quality review. Invoicing Specialists brings that managed-service discipline to billing operations while your finance leaders retain authority.
            </p>
            <a
              className="site-footer-parent-link"
              href="https://stealthagents.com/"
              rel="noopener noreferrer"
            >
              Powered by StealthAgents <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a className="site-footer-domain" href={`https://${site.domain}/`}>
            {site.domain}
          </a>
        </div>
      </div>
    </footer>
  );
}
