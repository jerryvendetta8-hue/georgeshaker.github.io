import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Badge({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("inline-flex rounded-full border border-gold/30 bg-cream/10 px-3 py-1 text-xs leading-6 text-cream", className)} {...props} />
}
