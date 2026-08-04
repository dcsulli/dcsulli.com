import Link from "next/link";

type BlogCardProps = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
};

export default function BlogCard({
  title,
  date,
  excerpt,
  href,
}: BlogCardProps) {
  return (
    <article className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-600 hover:scale-[1.01]">
      <p className="text-sm text-neutral-400">{date}</p>

      <h3 className="mt-2 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-neutral-300">
        {excerpt}
      </p>

      <Link
        href={href}
        className="mt-6 inline-block font-medium hover:underline"
      >
        Read Article →
      </Link>
    </article>
  );
}