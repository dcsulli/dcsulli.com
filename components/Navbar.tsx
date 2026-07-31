import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <Link
          href="/"
          className="text-xl font-bold:"
          >
            DC Sulli
          </Link>
          
 <div className="flex gap-6 text-sm">
       <Link href="/about" className="hover:opacity-70">
            About
          </Link>
        <Link href="/music" className="hover:opacity-70">
            Music
          </Link>
        <Link href="/blog" className="hover:opacity-70">
            Blog
          </Link>
        <Link href="/projects" className="hover:opacity-70">
            Projects
          </Link>
        <Link href="/archive" className="hover:opacity-70">
            Archive
          </Link>
       <Link href="/contact" className="hover:opacity-70">
            Contact
          </Link>
      </div>
      
      
      </div>
    </nav>
  );
}