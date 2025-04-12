"use client"

import { motion } from "framer-motion"
import { GraduationCap, Cpu, Radio, Car, Zap, Wrench } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Course data
const courses = [
  {
    id: "cs",
    title: "Computer Science & Engineering",
    description: "Learn software development, algorithms, data structures, and other computing fundamentals.",
    icon: Cpu,
    color: "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20",
    intake: 171,
    link: "/academics/departments/cse",
  },
  {
    id: "ec",
    title: "Electronics & Communications Engineering",
    description: "Study electronic devices, communication systems, signal processing, and embedded systems.",
    icon: Radio,
    color: "bg-purple-500/10 text-purple-500 dark:bg-purple-500/20",
    intake: 60,
    link: "/academics/departments/ece",
  },
  {
    id: "it",
    title: "Information Technology",
    description: "Focus on information systems, networking, cybersecurity, and data management technologies.",
    icon: GraduationCap,
    color: "bg-green-500/10 text-green-500 dark:bg-green-500/20",
    intake: 60,
    link: "/academics/departments/it",
  },
  {
    id: "au",
    title: "Automobile Engineering",
    description: "Study design, manufacturing, and operation of automobiles and automotive systems.",
    icon: Car,
    color: "bg-red-500/10 text-red-500 dark:bg-red-500/20",
    intake: 60,
    link: "/academics/departments/automobile",
  },
  {
    id: "ee",
    title: "Electrical Engineering",
    description: "Learn about electrical systems, power generation, motors, transformers, and control systems.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-500 dark:bg-amber-500/20",
    intake: 60,
    link: "/academics/departments/electrical",
  },
  {
    id: "me",
    title: "Mechanical Engineering",
    description: "Study mechanics, thermodynamics, materials science, and manufacturing processes.",
    icon: Wrench,
    color: "bg-indigo-500/10 text-indigo-500 dark:bg-indigo-500/20",
    intake: 60,
    link: "/academics/departments/mechanical",
  },
]

// Upcoming courses
const upcomingCourses = [
  {
    id: "ai-ml",
    title: "B.Tech. CSE - Artificial Intelligence & Machine Learning",
    description: "Launching in Academic Session 2025-26",
    icon: Cpu,
    color: "bg-violet-500/10 text-violet-500 dark:bg-violet-500/20",
  },
  {
    id: "data-science",
    title: "B.Tech. CSE - Data Science",
    description: "Launching in Academic Session 2025-26",
    icon: Cpu,
    color: "bg-cyan-500/10 text-cyan-500 dark:bg-cyan-500/20",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function CoursesSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-10">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Academic Programs
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            RJIT offers various undergraduate engineering programs with a focus on practical learning, research, and industry relevance.
          </motion.p>
        </div>

        <div className="space-y-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <motion.div key={course.id} variants={item}>
                  <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className={`p-2 rounded-md w-fit ${course.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="mt-2">{course.title}</CardTitle>
                      <CardDescription>Intake: {course.intake} students</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">
                        {course.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full mt-2 group-hover:bg-primary/90">
                        <Link href={course.link}>Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="mx-auto max-w-4xl text-center mt-16 mb-8">
            <motion.h3
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Upcoming Programs
            </motion.h3>
            <motion.p
              className="mt-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              New specialized B.Tech. courses to be offered from Academic Session 2025-26
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {upcomingCourses.map((course) => {
              const Icon = course.icon
              return (
                <motion.div key={course.id} variants={item}>
                  <Card className="h-full flex flex-col bg-muted/30 border-dashed overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className={`p-2 rounded-md w-fit ${course.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="mt-2 text-base md:text-lg">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {course.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
