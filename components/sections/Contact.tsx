"use client"

import { Button } from "@/components/ui/Button"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { motion } from "framer-motion"
import { Mail, Phone, Wifi } from "lucide-react"

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl mx-auto p-8 border border-primary/30 bg-black/40 backdrop-blur-md rounded-lg overflow-hidden group"
      >
        {/* Scanning Line Animation */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_15px_var(--primary)] animate-scanline opacity-20" />

        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-2 text-destructive font-rajdhani uppercase tracking-widest text-sm animate-pulse">
            <Wifi className="h-4 w-4" />
            <span>Secure Channel Available</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter font-orbitron text-white">
              INITIATE <span className="text-primary">UPLINK</span>
            </h2>
            <p className="text-cyan-100/60 font-rajdhani mx-auto max-w-[600px]">
              Ready to deploy on new projects. Establish communication channel below.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 pt-4">
            <Button size="lg" variant="default" className="w-full gap-2 h-14 text-base tracking-widest" asChild>
              <a href="mailto:charuhasen@gmail.com">
                <Mail className="h-5 w-5" />
                TRANSMIT MAIL
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full gap-2 h-14 text-base tracking-widest border-primary/30 text-primary hover:bg-primary/20" asChild>
              <a href="tel:+447359630469">
                <Phone className="h-5 w-5" />
                VOICE LINK
              </a>
            </Button>
          </div>
          
          <div className="pt-4 text-xs font-rajdhani text-primary/40 uppercase tracking-[0.3em]">
            // End of Line
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}

