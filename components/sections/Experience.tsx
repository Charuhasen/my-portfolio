"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { SectionWrapper } from "@/components/ui/SectionWrapper"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Activity } from "lucide-react"

const experiences = [
  {
    role: "Junior Software Developer",
    company: "MailPallet Ltd",
    location: "Coventry, UK",
    period: "July 2024 – Dec 2025",
    description: [
      "Improved product search load times by 30% by refactoring back-end logic and implementing efficient database queries.",
      "Reduced checkout errors by 25% by implementing robust form validation and error handling across customer-facing platforms.",
      "Accelerated page load performance by 40% through Next.js server-side rendering and code-splitting, improving user engagement.",
      "Assisted in improving site accessibility and cross-browser compatibility, ensuring a seamless user experience.",
      "Collaborated with cross-functional teams to plan and maintain features, ensuring timely delivery and high stability.",
      "Developed and maintained technical documentation for APIs and components, reducing onboarding time for new developers."
    ]
  },
  {
    role: "Software Developer",
    company: "Tasty Veggie Ltd",
    location: "Accra, Ghana",
    period: "Jan 2021 – August 2022",
    description: [
      "Built internal web tools to digitise production and inventory workflows, reducing manual data entry by 30%.",
      "Developed role-based dashboards for operators and management, enabling real-time monitoring of key performance indicators.",
      "Improved operational efficiency by 25% through the automation of spreadsheet-based processes with web-based functional tools.",
      "Collaborated directly with factory staff and management to translate operational needs into scalable digital tools.",
      "Reduced operational errors by 20% through rigorous data validation, standardised workflows, and centralised data access.",
      "Configured and maintained webhooks integrations with third-party services like Stripe and Mailchimp."
    ]
  }
]

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
           <div className="flex items-center gap-2 text-primary/70 font-rajdhani uppercase tracking-widest text-sm mb-2">
            <Activity className="h-4 w-4" />
            <span>Operational History</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            MISSIONS & <span className="text-primary">DEPLOYMENTS</span>
          </h2>
        </motion.div>

        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-[1.2rem] md:before:ml-[50%] before:h-full before:w-[1px] before:bg-gradient-to-b before:from-primary/50 before:via-primary/20 before:to-transparent before:z-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0.5 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center z-10 bg-background rounded-full border border-primary/50 shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
              </div>

              {/* Spacer for Desktop Layout */}
              <div className="hidden md:block w-1/2" />

              {/* Card */}
              <Card className="w-full md:w-1/2 ml-12 md:ml-0 group bg-card/10 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <div className="flex flex-col gap-1">
                    <CardTitle className="text-xl text-primary tracking-wide">{exp.role}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm font-rajdhani text-cyan-100/60 gap-2 sm:gap-4 uppercase tracking-wider">
                      <span className="font-semibold text-white">{exp.company}</span>
                      <span className="hidden sm:inline text-primary/40">|</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {exp.location}</span>
                      <span className="hidden sm:inline text-primary/40">|</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {exp.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-cyan-100/70 font-rajdhani">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3">
                         <span className="text-primary/50 mt-1">›</span>
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

