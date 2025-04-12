"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BellRing, FileText, AlertTriangle, ChevronRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Sample notice data
const notices = [
  {
    id: 1,
    title: "CORRIGENDUM",
    description: "Extension of last date for opening of tender (Technical & price bid)",
    link: "#",
    date: "2025-04-11",
    isNew: true,
    category: "tender",
  },
  {
    id: 2,
    title: "NOTICE INVITING TENDER",
    description: "Repair and Maintenance of Kalpana Chawla Girl's Hostel (Last date 09-Apr-2025 at 1100hrs)",
    link: "#",
    date: "2025-04-05",
    isNew: true,
    category: "tender",
  },
  {
    id: 3,
    title: "NOTICE INVITING TENDER",
    description: "Repair and Maintenance of C V Raman Boy's Hostel (Last date 09-Apr-2025 at 1100hrs)",
    link: "#",
    date: "2025-04-05",
    isNew: false,
    category: "tender",
  },
  {
    id: 4,
    title: "Employment Notice 03/2025",
    description: "Faculty recruitment for various departments",
    link: "#",
    date: "2025-03-20",
    isNew: false,
    category: "recruitment",
  },
  {
    id: 5,
    title: "Major Recruiters for the 2024 Batch",
    description: "List of companies and placement statistics",
    link: "#",
    date: "2025-03-15",
    isNew: false,
    category: "placement",
  },
]

// Sample news data
const news = [
  {
    id: 1,
    title: "Silver Jubilee Celebration of RJIT",
    description: "RJIT celebrates 25 glorious years of excellence",
    image: "https://ext.same-assets.com/759682827.jpeg",
    date: "2025-03-10",
    isNew: true,
  },
  {
    id: 2,
    title: "Campus Drive by Siemens",
    description: "Siemens conducted a placement drive for 2025 batch students",
    image: "https://ext.same-assets.com/2584800624.jpeg",
    date: "2025-03-05",
    isNew: true,
  },
  {
    id: 3,
    title: "A Session by Prof. H.C. Verma",
    description: "Renowned physicist Prof. H.C. Verma conducted a special session for RJIT students",
    image: "https://ext.same-assets.com/113380487.jpeg",
    date: "2025-02-28",
    isNew: false,
  },
]

export function NoticesSection() {
  const [tab, setTab] = useState("notices")

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

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column with notices */}
          <div className="flex-1">
            <Tabs defaultValue="notices" className="w-full" onValueChange={setTab}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Latest Updates</h2>
                <TabsList>
                  <TabsTrigger value="notices" className="flex items-center gap-1">
                    <BellRing className="h-4 w-4" />
                    <span className="hidden sm:inline">Notices</span>
                  </TabsTrigger>
                  <TabsTrigger value="news" className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span className="hidden sm:inline">News</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="notices">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Important Notices</CardTitle>
                    <CardDescription>
                      Stay updated with the latest announcements from RJIT
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="space-y-2"
                    >
                      {notices.slice(0, 5).map((notice) => (
                        <motion.div key={notice.id} variants={item}>
                          <Link href={notice.link}>
                            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                              <div className={cn(
                                "mt-0.5 rounded-full p-1",
                                notice.category === "tender"
                                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                  : notice.category === "recruitment"
                                  ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                                  : "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
                              )}>
                                {notice.category === "tender" ? (
                                  <AlertTriangle className="h-4 w-4" />
                                ) : notice.category === "recruitment" ? (
                                  <FileText className="h-4 w-4" />
                                ) : (
                                  <BellRing className="h-4 w-4" />
                                )}
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <p className="font-semibold">{notice.title}</p>
                                  {notice.isNew && (
                                    <Badge variant="outline" className="text-xs bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/30">
                                      New
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{notice.description}</p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(notice.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/notices" className="flex items-center justify-center gap-1">
                        <span>View all notices</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="news">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Latest News</CardTitle>
                    <CardDescription>
                      Recent events and happenings at RJIT
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="space-y-4"
                    >
                      {news.map((item) => (
                        <motion.div key={item.id} variants={item}>
                          <Link href={`/news/${item.id}`}>
                            <div className="flex gap-4 hover:bg-muted p-2 rounded-lg transition-colors">
                              <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex flex-col justify-between py-1">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-medium line-clamp-1">{item.title}</h3>
                                    {item.isNew && (
                                      <Badge variant="outline" className="text-xs bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800/30">
                                        New
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(item.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/news" className="flex items-center justify-center gap-1">
                        <span>View all news</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column with quick links */}
          <div className="w-full md:w-80">
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>
                  Important resources and links
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/admissions/procedure">
                    <FileText className="h-4 w-4 mr-2" /> Admission Procedure
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/admissions/fee-structure">
                    <FileText className="h-4 w-4 mr-2" /> Fee Structure
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/academics/departments">
                    <FileText className="h-4 w-4 mr-2" /> Departments
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/placements">
                    <FileText className="h-4 w-4 mr-2" /> Placements
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full justify-start">
                  <Link href="/about">
                    <FileText className="h-4 w-4 mr-2" /> About RJIT
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
