"use client";

import { useState } from "react";

export default function ClientLink({
  value,
  onClick,
}: {
  value: string;

  onClick: () => Promise<{ value: string; href?: string }>;
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [revealedHref, setRevealedHref] = useState("");
  const [revealedValue, setRevealedValue] = useState(
    value.slice(0, value.length - 2) + "**"
  );

  const handleClick = async () => {
    if (isRevealed) return;
    const newValue = await onClick();
    setRevealedValue(newValue.value);
    setRevealedHref(newValue.href || "");
    setIsRevealed(true);
  };

  const PolymorphicLink = isRevealed ? "a" : "button";

  return (
    <PolymorphicLink
      onClick={handleClick}
      href={isRevealed ? revealedHref : undefined}
      className="cursor-pointer"
    >
      {revealedValue}
    </PolymorphicLink>
  );
}
