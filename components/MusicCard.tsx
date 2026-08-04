import Image from "next/image";

type MusicCardProps = {
  title: string;
  type: string;
  year: number;
  description: string;
  image: string;
  href: string;
};

export default function MusicCard({
  title,
  type,
  year,
  description,
  image,
  href,
}: MusicCardProps) {
  return (
    <article className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900 transition hover:scale-[1.02] hover:border-neutral-600">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square object-cover"
      />

      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-neutral-400">
            {type} • {year}
          </p>
        </div>

        <p className="text-sm text-neutral-300">
          {description}
        </p>

        <a
          href={href}
          className="inline-block text-sm font-medium hover:underline"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}