import { getPost } from "@/lib/posts";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.description}</p>

      <article>
        {post.content}
      </article>
    </main>
  );
}