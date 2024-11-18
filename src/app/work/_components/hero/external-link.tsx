"use client";
import React from "react";

import LinkWithArrow from "src/app/components/link-with-arrow";
import { usePathname } from "next/navigation";
import { getCaseLink } from "src/utils";

export default function ExternalLink() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const url = slug ? getCaseLink(slug) : "";
  return (
    <LinkWithArrow href={url} target="_blank" rel="noopener noreferrer">
      Besøg website
    </LinkWithArrow>
  );
}
