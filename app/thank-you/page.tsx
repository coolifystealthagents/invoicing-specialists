import type { Metadata } from 'next';
import Link from 'next/link';

const schedulerUrl = 'https://go.oncehub.com/StealthAgentsTeam';
const bookingNextSteps = '/thanks-whats-next';

export const metadata: Metadata = {
  title: 'Choose a consultation time',
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return <main>
    <header className="page-hero">
      <p className="eyebrow">Request received</p>
      <h1>Thanks. Choose a time that works for you.</h1>
      <p>Your consultation can turn one recurring invoicing workflow into a clear support brief.</p>
    </header>
    <section className="content-wrap">
      <div className="prose">
        <h2>Schedule with the Stealth Agents team</h2>
        <p>Complete your booking in the OnceHub scheduler below. OnceHub controls the post-booking experience.</p>
        <p>If your confirmed booking does not automatically continue, use the booking next-steps link after OnceHub accepts your time.</p>
        <p><a href={schedulerUrl} rel="noopener noreferrer">Open the Stealth Agents scheduling page</a> or review <Link href={bookingNextSteps}>booking next steps</Link>.</p>
        <iframe className="booking-frame" title="Book your invoicing consultation" src={schedulerUrl} loading="eager" />
      </div>
    </section>
  </main>;
}
