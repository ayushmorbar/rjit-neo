"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight, BarChart3, Building, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Company logos - using placeholders
const recruiters = [
  { id: 1, name: "Capgemini", logo: "https://ext.same-assets.com/2180494310.png" },
  { id: 2, name: "Infosys", logo: "https://ext.same-assets.com/1195651423.png" },
  { id: 3, name: "TCS", logo: "https://ext.same-assets.com/2459645964.png" },
  { id: 4, name: "Evive", logo: "https://ext.same-assets.com/2663522833.png" },
  { id: 5, name: "Wipro", logo: "https://ext.same-assets.com/3732093414.png" },
  { id: 6, name: "Tech Mahindra", logo: "https://ext.same-assets.com/901146549.png" },
  { id: 7, name: "Cognizant", logo: "https://ext.same-assets.com/918736317.png" },
  { id: 8, name: "IBM", logo: "https://ext.same-assets.com/3732093414.png" },
]

// Placement statistics
const placementStats = [
  {
    title: "Placement Rate",
    value: "95%",
    description: "Students placed through campus recruitment",
    icon: BarChart3,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    title: "Highest Package",
    value: "₹12 LPA",
    description: "Offered by top recruiting companies",
    icon: Building,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  {
    title: "Average Package",
    value: "₹7.5 LPA",
    description: "Average salary offered to students",
    icon: Briefcase,
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-900/20",
  },
]

// Placement glimpses
const placementGlimpses = [
  {
    title: "Campus Drive by Siemens",
    image: "https://ext.same-assets.com/1680938595.jpeg",
    date: "March 2025",
  },
  {
    title: "Pre-placement Talk by Infosys",
    image: "https://ext.same-assets.com/3965635885.jpeg",
    date: "February 2025",
  },
  {
    title: "Placement Orientation Program",
    image: "https://ext.same-assets.com/1939360035.jpeg",
    date: "January 2025",
  },
]

export function PlacementSection() {
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
            Placements & Recruiters
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            RJIT has a strong record of placements with top companies visiting the campus for recruitment
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column - Placement stats and glimpses */}
          <div className="space-y-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {placementStats.map((stat) => (
                <Card key={stat.title} className="border-none shadow-sm">
                  <CardHeader className={`rounded-t-lg ${stat.bgColor}`}>
                    <div className="flex justify-between">
                      <CardTitle className="text-xl">{stat.title}</CardTitle>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Placement Glimpses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {placementGlimpses.map((item) => (
                  <div key={item.title} className="relative overflow-hidden rounded-lg group">
                    <div className="aspect-video">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
                      <h4 className="text-white text-sm font-medium">{item.title}</h4>
                      <p className="text-white/80 text-xs">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/placements/gallery" className="flex items-center gap-1">
                    <span>View More</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right column - Recruiters and CTA */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Our Top Recruiters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {recruiters.map((company) => (
                    <div
                      key={company.id}
                      className="aspect-square flex items-center justify-center p-2 bg-muted/40 rounded-md hover:bg-muted/60 transition-colors"
                    >
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="max-h-12 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  These companies and many more visit RJIT campus for recruitment drives every year.
                </p>
              </CardFooter>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Training & Placement Cell</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Training & Placement cell at RJIT is dedicated to preparing students for the corporate world and facilitating their placement in top companies.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Pre-placement training programs</li>
                  <li>Mock interviews and group discussions</li>
                  <li>Resume building workshops</li>
                  <li>Industry-academia interface</li>
                  <li>Career counseling</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" asChild>
                  <Link href="/placements" className="flex items-center gap-2">
                    Learn more about placements
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
