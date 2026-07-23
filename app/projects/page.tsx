import { redirect } from "next/navigation";
import type { ReactNode } from "react";

/**
 * The site is now a single scrolling page — Work content lives at /#work.
 * This route stays around only to catch old links and bookmarks.
 */
export default function ProjectsRedirect(): ReactNode {
  redirect("/#work");
}
