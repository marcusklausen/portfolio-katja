import Link from "next/link";

import PortfolioCard from "./portfolio-card";
import { PortfolioGridItem } from "src/types";

interface MasonryGridProps {
  projects: PortfolioGridItem[];
}

export default function MasonryGrid({ projects }: MasonryGridProps) {
  const columns = projects.reduce<PortfolioGridItem[][]>(
    (acc, project, i) => {
      acc[i % 3].push(project);
      return acc;
    },
    [[], [], []]
  );

  return (
    <div className="flex gap-10 ">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-11 flex-1">
          {column.map((project, index) =>
            project.isEmpty ? (
              <div key={"empty_" + index} className=" w-full"></div>
            ) : (
              <Link key={project.slug} href={`/work/${project.slug}`}>
                <PortfolioCard
                  title={project.title}
                  description={project.description as string}
                  delay={index * 0.1}
                  className={project.className}
                  slug={project.slug as string}
                  height={project.height}
                  style={project.style}
                  imageSrc={project.imageSrc}
                />
              </Link>
            )
          )}
        </div>
      ))}
    </div>
  );
}
