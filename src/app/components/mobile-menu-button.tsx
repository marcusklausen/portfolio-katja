"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./icons";

type NavItem = {
  href: string;
  label: string;
};

export default function MobileMenuButton({
  navItems,
}: {
  navItems: NavItem[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className="w-9 h-9 flex items-center justify-center bg-[#4B3124] rounded-full"
        onClick={() => setIsMenuOpen(true)}
      >
        <MenuIcon />
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 p-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl hover:italic hover:font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
