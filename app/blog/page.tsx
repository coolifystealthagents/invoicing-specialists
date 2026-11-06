import type { Metadata } from "next";
import Image from "next/image";
import { blogPosts } from "@/lib/content";
import { BlogIndex } from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides for designing, delegating, and reviewing specialist invoicing support.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <header className="index-hero editorial-index-hero blog-index-hero">
        <div>
          <p className="eyebrow">Practical field notes</p>
          <h1>Clearer invoice operations.</h1>
          <p>
            Guides for finance leaders who want to delegate recurring
            preparation without losing source evidence, approval control, or a
            visible exception path.
          </p>
        </div>
        <div className="index-hero-image">
          <Image
            src="/editorial/invoicing-workflow-hero.jpg"
            alt="Organized invoice draft, supporting papers, calculator, and review folders on a finance operations desk"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </header>
      <section className="content-wrap index-intro">
        <p className="eyebrow">Use the library</p>
        <div>
          <h2>Turn recurring billing friction into a defined workflow.</h2>
          <p>
            Each guide examines a practical control, queue, handoff, or
            exception. Use the articles to identify what a specialist can
            prepare, what evidence a reviewer needs, and what must remain a
            human decision.
          </p>
        </div>
      </section>
      <BlogIndex
        posts={blogPosts.map(
          ({ slug, title, description, category, publishedAt, thumbnail }) => ({
            slug,
            title,
            description,
            category,
            publishedAt,
            thumbnail,
          }),
        )}
      />
    </main>
  );
}
