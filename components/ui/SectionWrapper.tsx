import React, { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({ children, className, id, delay = 0 }: SectionWrapperProps) {
  return (
    <section 
      id={id}
      className={cn("w-full py-16 md:py-24 lg:py-32 flex justify-center px-4 md:px-6", className)}
    >
      <div className="w-full max-w-5xl">
        {children}
      </div>
    </section>
  )
}
