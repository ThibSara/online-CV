import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const sorted = posts.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? 1 : -1
  );

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mb-10">
          <h1 className="font-medium text-2xl tracking-tighter mb-2">blog</h1>
          <p className="text-muted-foreground text-sm">
            Notes, courses, and ideas I wanted to share.
          </p>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-3">
        {sorted.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="rounded-xl border border-border/50 px-5 py-4 transition-all duration-200 hover:border-pink-200 hover:bg-pink-50/40 dark:hover:border-pink-900/50 dark:hover:bg-pink-950/20">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">
                    {formatDate(post.metadata.publishedAt)}
                  </span>
                  <p className="font-medium tracking-tight text-foreground group-hover:text-pink-700 dark:group-hover:text-pink-300 transition-colors">
                    {post.metadata.title}
                  </p>
                  {post.metadata.summary && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-0.5">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
