"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { openLeadModal } from "@/components/lead-modal"

type Props = ButtonProps & {
  source?: string
  title?: string
  subtitle?: string
  guide?: string
  modalCta?: string
}

export function LeadButton({
  source,
  title,
  subtitle,
  guide,
  modalCta,
  children,
  ...props
}: Props) {
  return (
    <Button
      {...props}
      onClick={() => openLeadModal({ source, title, subtitle, guide, cta: modalCta })}
    >
      {children}
    </Button>
  )
}
