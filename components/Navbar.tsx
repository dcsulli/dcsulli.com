import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-6">

        <Link
          href="/"
          className="text-xl font-bold"
          >
            DC Sulli
          </Link>

 <div className="flex gap-6 text-sm">
       <Link href="/about" className="hover:opacity-70 transition">
            About
          </Link>
        <Link href="/music" className="hover:opacity-70 transition">
            Music
          </Link>
        <Link href="/blog" className="hover:opacity-70 transition">
            Blog
          </Link>
        <Link href="/projects" className="hover:opacity-70 transition">
            Projects
          </Link>
        <Link href="/archive" className="hover:opacity-70 transition">
            Archive
          </Link>
       <Link href="/contact" className="hover:opacity-70 transition">
            Contact
          </Link>
      </div>
      
      
      </div>
    </nav>
  );
}