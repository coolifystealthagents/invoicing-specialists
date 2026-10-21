'use client';

import { useState } from 'react';

type Review = { name: string; quote: string };

export function ReviewMarquee({ reviews }: { reviews: Review[] }) {
  const [paused, setPaused] = useState(false);

  return <div className="review-marquee-wrap">
    <div className="review-controls">
      <button
        className="review-toggle"
        type="button"
        aria-pressed={paused}
        aria-label="Pause automatic review movement"
        aria-controls="review-marquee"
        onClick={() => setPaused(value => !value)}
      >
        <span aria-hidden="true">{paused ? 'Play reviews' : 'Pause reviews'}</span>
      </button>
    </div>
    <div id="review-marquee" className={`review-marquee${paused ? ' is-paused' : ''}`} aria-label="StealthAgents reviews">
      <div className="review-track">
        {[...reviews, ...reviews].map((review, index) => <article
          className="review-card"
          key={`${review.name}-${index}`}
          aria-hidden={index >= reviews.length || undefined}
        >
          <blockquote>“{review.quote}”</blockquote>
          <cite>{review.name}</cite>
        </article>)}
      </div>
    </div>
  </div>;
}
