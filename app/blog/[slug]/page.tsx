import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogContent } from "@/components/blog/BlogContent";
import { Button } from "@/components/ui/Button";
import {
  BLOG_POSTS,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }
  const base = SITE_URL.replace(/\/$/, "");
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: `${post.publishedAt}T12:00:00.000Z`,
      url: `${base}/blog/${post.slug}`,
      images: [post.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  return (
    <div className="bg-[#f8fafc] pb-20 pt-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="text-sm text-slate-600">
          <Link href="/blog" className="font-medium text-brand hover:text-brand-dark">
            Blog
          </Link>
          <span className="mx-2 text-slate-400" aria-hidden>
            /
          </span>
          <span className="text-slate-900">{post.category}</span>
        </nav>

        <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:items-start">
          <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card sm:p-10 lg:p-12">
            <span className="text-xs font-bold uppercase tracking-widest text-orange">
              {post.category}
            </span>
            <h1 className="font-display mt-3 text-3xl font-bold text-navy md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-slate-600">{post.excerpt}</p>
            <div className="relative mt-8 aspect-[21/9] min-h-[200px] max-h-72 w-full overflow-hidden rounded-xl bg-navy/5">
              <Image
                src={post.coverImage}
                alt={post.coverImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, min(896px, 75vw)"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden className="text-slate-300">
                ·
              </span>
              <span>{post.readingMinutes} min read</span>
            </div>
            <div className="mt-10">
              <BlogContent blocks={post.blocks} />
            </div>
          </article>

          <aside className="mt-10 space-y-8 lg:mt-0">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-xl border border-orange/30 bg-gradient-to-br from-brand/10 via-white to-orange/10 p-6 shadow-card">
                <p className="font-display text-lg font-bold text-navy">
                  Need a plumber now?
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Emergency and scheduled service across northern Delaware.
                </p>
                <Button href="/contact" variant="primary" size="lg" className="mt-5 w-full">
                  Contact us
                </Button>
              </div>

              <div className="rounded-xl border border-navy/10 bg-white p-6 shadow-card">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                  Related posts
                </p>
                <ul className="mt-4 space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="group block text-sm font-semibold text-brand hover:text-brand-dark"
                      >
                        <span className="group-hover:underline">{r.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/blog"
                  className="mt-5 inline-block text-sm font-semibold text-orange hover:text-orange-dark"
                >
                  All posts →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
