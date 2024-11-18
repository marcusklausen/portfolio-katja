"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "src/utils/constants";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const currentSlug = pathname.split("/").pop();

  const currentProject = projects
    .filter((p) => !p.isEmpty)
    .find((project) => project.slug === currentSlug);

  return (
    <nav className="container mx-auto py-4 px-4 md:px-0">
      <div className="flex items-center gap-2 text-sm">
        <Link href="/" className="hover:underline">
          Forside
        </Link>
        <span>/</span>
        <Link href="/" className="hover:underline">
          Portfolio
        </Link>
        {currentProject && (
          <>
            <span>/</span>
            <span className="text-black underline">{currentProject.title}</span>
          </>
        )}
      </div>
    </nav>
  );
}
