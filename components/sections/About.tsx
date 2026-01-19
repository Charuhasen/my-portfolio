"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { motion } from "framer-motion"
import { Code2, Database, Layout, Terminal, Cpu } from "lucide-react"

const skills = [
  {
    category: "Languages & Frameworks",
    icon: <Code2 className="h-5 w-5 text-primary" />,
    items: ["JavaScript (ES6+)", "Node.js", "Express", "React", "Next.js"]
  },
  {
    category: "Frontend Architecture",
    icon: <Layout className="h-5 w-5 text-primary" />,
    items: ["HTML5", "CSS3", "Sass", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Database Systems",
    icon: <Database className="h-5 w-5 text-primary" />,
    items: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools & Deployment",
    icon: <Terminal className="h-5 w-5 text-primary" />,
    items: ["Git", "Jest", "Cypress", "Vercel", "Netlify", "IC/CD"]
  }
]

export function About() {
  return (
    <SectionWrapper id="about" className="">
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 text-primary/70 font-rajdhani uppercase tracking-widest text-sm mb-2">
            <Cpu className="h-4 w-4" />
            <span>Profile Diagnostics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            OPERATIVE <span className="text-primary">PROFILE</span>
          </h2>
          <p className="max-w-[800px] text-cyan-100/70 md:text-lg/relaxed font-rajdhani border-l-2 border-primary/30 pl-6">
            Motivated Junior Software Developer with a First Class BSc Hons and MSc in Computer Science. 
            Deployed to build practical applications across web development, automation, and data-driven solutions.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="h-full bg-card/20 border-primary/20 hover:border-primary/50">
                <CardHeader className="flex flex-row items-center gap-3 pb-2 border-b border-primary/10">
                  <div className="p-2 bg-primary/10 rounded-sm ring-1 ring-primary/20">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-base tracking-wide">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2 text-sm text-cyan-100/60 font-rajdhani">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

