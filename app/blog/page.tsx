import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Plumbing Tips & Guides",
  description:
    "Expert plumbing advice from licensed Wilmington plumbers covering emergencies, drains, heaters, and more.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#f8fafc] pb-20 pt-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h1 className="font-display text-4xl font-bold text-navy md:text-5xl">
          Plumbing Tips &amp; Guides
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Expert advice from licensed Delaware plumbers on heaters, drains,
          emergencies, and home maintenance—updated regularly.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-navy/10 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative h-44 w-full shrink-0 overflow-hidden bg-navy/5">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-orange">
                  {post.category}
                </span>
                <h2 className="font-display mt-3 text-xl font-bold text-navy">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-orange hover:text-orange-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                >
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
