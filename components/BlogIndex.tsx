"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type BlogIndexPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  thumbnail?: string;
};

const displayDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));

export function BlogIndex({ posts }: { posts: BlogIndexPost[] }) {
  const categories = useMemo(
    () => ["All", ...new Set(posts.map((post) => post.category))],
    [posts],
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const visiblePosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section
      className="content-wrap blog-library"
      aria-labelledby="blog-library-title"
    >
      <div className="blog-filter-heading">
        <h2 id="blog-library-title" className="sr-only">
          Article library
        </h2>
        <p className="filter-instruction">Filter articles by topic</p>
        <p className="filter-status" aria-live="polite">
          Showing {visiblePosts.length}{" "}
          {visiblePosts.length === 1 ? "article" : "articles"}
        </p>
      </div>
      <div
        className="blog-filters"
        role="group"
        aria-label="Filter articles by topic"
      >
        {categories.map((category) => {
          const count =
            category === "All"
              ? posts.length
              : posts.filter((post) => post.category === category).length;
          const selected = activeCategory === category;
          return (
            <button
              className="blog-filter"
              type="button"
              aria-pressed={selected}
              aria-controls="blog-results"
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category} <span>({count})</span>
            </button>
          );
        })}
      </div>
      <label className="blog-filter-select-label">
        <span className="sr-only">Filter articles by topic</span>
        <select
          className="blog-filter-select"
          value={activeCategory}
          onChange={(event) => setActiveCategory(event.target.value)}
        >
          {categories.map((category) => {
            const count =
              category === "All"
                ? posts.length
                : posts.filter((post) => post.category === category).length;
            return (
              <option value={category} key={category}>
                {category} ({count})
              </option>
            );
          })}
        </select>
      </label>
      <div id="blog-results" className="article-grid" tabIndex={-1}>
        {visiblePosts.map((post) => (
          <Link
            className="article-card"
            href={`/blog/${post.slug}`}
            key={post.slug}
          >
            {post.thumbnail && (
              <Image
                className="content-thumbnail"
                src={post.thumbnail}
                alt={`${post.title} editorial thumbnail`}
                width={1200}
                height={630}
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            )}
            <span className="pill">{post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p className="meta">
              <time
                dateTime={post.publishedAt}
              >{`Published ${displayDate(post.publishedAt)}`}</time>
            </p>
            <span className="text-link">Read article</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
