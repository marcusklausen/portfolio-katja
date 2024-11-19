import Link from "next/link";
import MobileMenuButton from "./mobile-menu-button";

const navItems = [
  { href: "/", label: "Portfolio" },
  { href: "/#about", label: "Om mig" },
  { href: "/#contact", label: "Kontakt" },
];

export default function Navigation() {
  return (
    <nav className="flex justify-between container items-center px-4 md:px-0 py-4 pt-8 md:pt-12">
      <div className="logo">
        <Link href="/" className="text-[40px] hover:italic hover:font-semibold">
          KATJA KURZ
        </Link>
      </div>

      <div className="hidden md:flex gap-12 antialiased">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-2xl hover:italic hover:font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <MobileMenuButton navItems={navItems} />
    </nav>
  );
}
