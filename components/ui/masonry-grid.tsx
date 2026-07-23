import type { ReactNode } from "react";

/**
 * Pinterest-style staggered grid used both on the homepage Work section
 * and on individual project pages, so the two feel like the same system.
 */
export function MasonryGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  return (
    <div
      className={`columns-1 gap-4 sm:columns-2 sm:gap-5 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function MasonryItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}): ReactNode {
  return (
    <div className={`mb-4 break-inside-avoid sm:mb-5 ${className}`.trim()}>
      {children}
    </div>
  );
}
