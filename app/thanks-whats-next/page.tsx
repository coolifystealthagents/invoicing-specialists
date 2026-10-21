import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Consultation booking next steps',
  robots: { index: false, follow: false }
};

export default function NextPage() {
  return <main>
    <section className="not-found">
      <div>
        <p className="eyebrow">After scheduling</p>
        <h1>Prepare for your consultation.</h1>
        <p>If OnceHub accepted your selected time, your booking confirmation and calendar details come from OnceHub. Bring one recurring invoicing workflow that needs a clearer source, owner, output, review point, or exception path.</p>
        <h2>What to prepare</h2>
        <ul>
          <li>A representative workflow without customer, payment, or confidential data</li>
          <li>The systems and source records involved</li>
          <li>The current owner and approval boundary</li>
          <li>The exceptions that consume the most time</li>
        </ul>
        <Link className="button primary" href="/services">Review invoicing services</Link>
      </div>
    </section>
  </main>;
}
