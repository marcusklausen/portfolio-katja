import React from "react";
import ClientLink from "./client-link";

export default async function ObscuredLink({
  value,
  href,
}: {
  value: string;
  href?: string;
}) {
  const reveal = async () => {
    "use server";
    return { value, href };
  };

  return <ClientLink value={value} onClick={reveal} />;
}
