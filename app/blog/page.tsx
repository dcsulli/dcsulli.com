import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main>
      <h1>Blog</h1>

      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.date}</p>
        </article>
      ))}
    </main>
  );
}