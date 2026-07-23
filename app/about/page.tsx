import { redirect } from "next/navigation";
import type { ReactNode } from "react";

/**
 * The site is now a single scrolling page — About content lives at /#about.
 * This route stays around only to catch old links and bookmarks.
 */
export default function AboutRedirect(): ReactNode {
  redirect("/#about");
}
