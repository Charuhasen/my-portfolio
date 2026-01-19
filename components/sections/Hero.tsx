"use client"

import { Button } from "@/components/ui/Button"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, FileText, Cpu, Activity } from "lucide-react"

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <SectionWrapper id="hero" className="min-h-screen items-center justify-center flex flex-col py-0 relative overflow-hidden">
      {/* Background Reactor Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-[-1]" />
      
      {/* HUD Circular Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/20 rounded-full animate-spin-slow pointer-events-none z-[-1] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/30 rounded-full animate-reverse-spin pointer-events-none z-[-1] opacity-60 border-dashed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border-2 border-primary/10 rounded-full pointer-events-none z-[-1]" />

      <motion.div
        style={{ opacity, scale }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-8 max-w-4xl relative z-10 p-8 glass-panel rounded-lg"
      >
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

        <div className="flex items-center justify-center gap-2 text-primary font-rajdhani tracking-[0.2em] text-sm uppercase">
          <Activity className="h-4 w-4 animate-pulse" />
          <span>System Online</span>
          <span className="w-16 h-[1px] bg-primary/50 mx-2" />
          <span>V.2025.1</span>
        </div>

        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-cyan-200/80 font-orbitron tracking-widest uppercase"
          >
            Identity Confirmed
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] font-orbitron"
          >
            CHARUHASEN
            <span className="block text-xl md:text-3xl text-primary/80 mt-2 font-rajdhani font-normal tracking-[0.5em] border-t border-primary/30 pt-4">KUMARASWAMY</span>
          </motion.h1>
         
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto max-w-[700px] text-cyan-100/70 md:text-lg font-rajdhani leading-relaxed"
        >
          <p className="border-l-2 border-primary/50 pl-4 text-left">
            <span className="text-primary font-bold">Role:</span> Junior Software Developer<br/>
            <span className="text-primary font-bold">Mission:</span> Building efficient, user-centric software solutions.<br/>
            <span className="text-primary font-bold">Stack:</span> React / Node.js / API Integration
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center pt-8"
        >
          <Button size="lg" variant="tech-solid" className="rounded-sm" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            <Cpu className="mr-2 h-4 w-4" /> Initialize
          </Button>
          <Button size="lg" variant="outline" className="rounded-sm border-primary/50 text-cyan-200 hover:bg-primary/10" asChild>
            <a href="/mycv/Charuhasen-Kumaraswamy-CV.pdf" target="_blank" rel="noopener noreferrer">
              Download Credentials <FileText className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}

