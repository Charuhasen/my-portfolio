"use client"

import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Education } from "@/components/sections/Education"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Contact />
        
        <footer className="py-6 text-center text-sm text-muted-foreground border-t">
          <p>© {new Date().getFullYear()} Charuhasen Kumaraswamy. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
