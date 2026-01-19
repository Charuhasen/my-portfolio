"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { motion } from "framer-motion"
import { Award, BookOpen, GraduationCap, FileCode } from "lucide-react"

const education = [
  {
    degree: "MSc Computer Science",
    institution: "Nottingham Trent University",
    year: "2022 – 2023",
    icon: <GraduationCap className="h-5 w-5" />,
    details: "Modules: Advanced Software Engineering, System Analysis and Design, Service Oriented Cloud Technologies, Applied Artificial Intelligence, Research Methods"
  },
  {
    degree: "BSc (Hons) Computer Science, 1st",
    institution: "Lancaster University",
    year: "2019 – 2022",
    icon: <GraduationCap className="h-5 w-5" />,
    details: "Modules: Digital Systems, Computer Networking and Systems, Data Engineering, Software Design, Human Computer Interaction, Cyber Security"
  },
  {
    degree: "IT Skills Bootcamp",
    institution: "8 Weeks Intensive",
    year: "2025",
    icon: <Award className="h-5 w-5" />,
    details: "Focus: Windows Server, Active Directory, ITIL, Networking (TCP/IP), Microsoft 365, Azure AD, Intune"
  },
  {
    degree: "Full Stack Developer Traineeship",
    institution: "IT Career Switch",
    year: "2024",
    icon: <BookOpen className="h-5 w-5" />,
    details: "Completed two full stack projects from scratch to specification, gaining hands-on experience with frontend and backend technologies."
  }
]

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-secondary/30">
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 text-primary/70 font-rajdhani uppercase tracking-widest text-sm mb-2">
            <FileCode className="h-4 w-4" />
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            ACADEMIC <span className="text-primary">DATA</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-card/20 hover:bg-card/40 border-primary/20 hover:border-primary/50 group">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 border-b border-primary/10">
                  <div className="rounded-sm bg-primary/10 p-2 text-primary ring-1 ring-primary/30 group-hover:ring-primary/60 transition-all">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg tracking-wide">{edu.degree}</CardTitle>
                    <CardDescription className="font-rajdhani text-cyan-200/50 uppercase tracking-widest text-xs mt-1">
                      {edu.institution} <span className="text-primary/50">|</span> {edu.year}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-cyan-100/70 leading-relaxed font-rajdhani">
                    {edu.details}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

