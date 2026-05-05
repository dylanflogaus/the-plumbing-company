import type { BlogBlock } from "@/lib/blog-posts";

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6 text-base leading-relaxed text-slate-700">
      {blocks.map((b, i) => {
        if (b.type === "p") {
          return <p key={i}>{b.text}</p>;
        }
        if (b.type === "h2") {
          return (
            <h2
              key={i}
              className="font-display mt-10 scroll-mt-24 border-b border-navy/10 pb-2 text-2xl font-bold text-navy first:mt-0"
            >
              {b.text}
            </h2>
          );
        }
        if (b.type === "h3") {
          return (
            <h3 key={i} className="font-display mt-8 text-xl font-bold text-navy">
              {b.text}
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul key={i} className="list-inside list-disc space-y-2 pl-1">
              {b.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}
