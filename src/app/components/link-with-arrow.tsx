interface LinkWithArrowProps {
  href?: string;
  children: React.ReactNode;
}

export default function LinkWithArrow({ href, children }: LinkWithArrowProps) {
  return (
    <div className="flex items-center gap-4 text-2xl group">
      <svg
        width="32"
        height="16"
        viewBox="0 0 49 16"
        fill="none"
        className="group-hover:w-11 transition-all duration-300"
      >
        <path
          d="M48.7071 8.70711C49.0976 8.31658 49.0976 7.68342 48.7071 7.29289L42.3431 0.928932C41.9526 0.538408 41.3195 0.538408 40.9289 0.928932C40.5384 1.31946 40.5384 1.95262 40.9289 2.34315L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.70711ZM0 9H48V7H0V9Z"
          fill="#4B3124"
        />
      </svg>
      <a href={href} className="block">
        {children}
      </a>
    </div>
  );
}
