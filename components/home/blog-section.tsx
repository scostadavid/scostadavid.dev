"use server";
import { BlogPostList } from "@/components/blog-post-list";
import { BlogSectionClient } from "@/components/home/blog-section-client";

export default async function BlogSection() {
  return (
    <section id="blog" className="py-32 relative bg-black">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="container relative z-10">
        <BlogSectionClient >
            <BlogPostList limit={3} />
        </BlogSectionClient>
      </div>
    </section>
  );
}