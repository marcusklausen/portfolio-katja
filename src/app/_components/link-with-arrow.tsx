import { AnchorHTMLAttributes } from "react";
import { ArrowRightIcon } from "./icons";

interface LinkWithArrowProps {
  href?: string;
  children: React.ReactNode;
}

type HTMLAnchorTagLinkWithArrowProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkWithArrowProps;

export default function LinkWithArrow({
  href,
  children,
  ...rest
}: HTMLAnchorTagLinkWithArrowProps) {
  return (
    <div
      data-arrow-hover
      className="flex items-center gap-4 text-2xl group/arrow"
    >
      <ArrowRightIcon />
      <a
        href={href}
        {...rest}
        target="_blank"
        className="block text-xl md:text-2xl"
      >
        {children}
      </a>
    </div>
  );
}
