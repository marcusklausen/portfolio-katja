import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between container items-center py-4 pt-12">
      <div className="logo">
        <Link href="/" className="text-[40px]">
          KATJA KURZ
        </Link>
      </div>

      <div className="flex gap-12 antialiased">
        <Link href="/" className="text-2xl hover:italic hover:font-semibold">
          Work
        </Link>
        <Link
          href="#about"
          className="text-2xl hover:italic hover:font-semibold"
        >
          About
        </Link>
        <Link
          href="mailto:katjakl@msn.com"
          className="text-2xl hover:italic hover:font-semibold"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
