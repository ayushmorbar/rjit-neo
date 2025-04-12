"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Building2, Coffee, FlaskRound, Laptop, MapPin, Trees, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const campusImages = [
  {
    src: "https://ext.same-assets.com/907708951.jpeg",
    alt: "Main Building",
    caption: "Main Academic Block",
  },
  {
    src: "https://ext.same-assets.com/230778154.jpeg",
    alt: "Computer Lab",
    caption: "State-of-the-art Computer Labs",
  },
  {
    src: "https://ext.same-assets.com/3606292076.jpeg",
    alt: "Network Lab",
    caption: "Advanced Networking Laboratory",
  },
  {
    src: "https://ext.same-assets.com/626099136.jpeg",
    alt: "Student Activities",
    caption: "Vibrant Student Activities",
  },
]

const campusFacilities = [
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art buildings with well-equipped classrooms and auditoriums",
    link: "/facilities",
  },
  {
    icon: BookOpen,
    title: "Central Library",
    description: "Extensive collection of books, journals, and digital resources",
    link: "/facilities/library",
  },
  {
    icon: Laptop,
    title: "Computer Labs",
    description: "Multiple computer labs with the latest hardware and software",
    link: "/facilities/labs",
  },
  {
    icon: FlaskRound,
    title: "Research Labs",
    description: "Specialized labs for research and practical learning",
    link: "/facilities/labs",
  },
  {
    icon: Coffee,
    title: "Canteen",
    description: "Spacious canteen offering nutritious and affordable meals",
    link: "/facilities/canteen",
  },
  {
    icon: MapPin,
    title: "Transportation",
    description: "Bus services for students and staff from various points in the city",
    link: "/facilities/transport",
  },
  {
    icon: Building2,
    title: "Hostels",
    description: "Separate hostels for boys and girls with modern amenities",
    link: "/facilities/hostels",
  },
  {
    icon: Trees,
    title: "Green Campus",
    description: "Environment-friendly campus with lush green surroundings",
    link: "/facilities",
  },
]

const campusGalleryImages = [
  {
    src: "https://ext.same-assets.com/759682827.jpeg",
    alt: "Silver Jubilee Celebration",
  },
  {
    src: "https://ext.same-assets.com/2677013426.jpeg",
    alt: "Student Achievement",
  },
  {
    src: "https://ext.same-assets.com/2196422711.jpeg",
    alt: "Student Project",
  },
  {
    src: "https://ext.same-assets.com/1834003835.jpeg",
    alt: "Campus View",
  },
  {
    src: "https://ext.same-assets.com/2007738979.jpeg",
    alt: "Student Activities",
  },
  {
    src: "https://ext.same-assets.com/3329683769.jpeg",
    alt: "Award Ceremony",
  },
]

export function CampusSection() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-10">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Campus & Facilities
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Experience the RJIT campus with modern facilities, peaceful environment, and vibrant student life
          </motion.p>
        </div>

        <Tabs defaultValue="campus" className="mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="campus" className="text-xs md:text-sm">Campus Tour</TabsTrigger>
            <TabsTrigger value="facilities" className="text-xs md:text-sm">Facilities</TabsTrigger>
            <TabsTrigger value="gallery" className="text-xs md:text-sm">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="campus">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold">About Our Campus</h3>
                <p className="text-muted-foreground">
                  RJIT campus is located in the BSF Academy, Tekanpur - a serene and secure environment perfect for academic pursuits. The campus spans across a large area with modern infrastructure, including academic buildings, laboratories, library, hostels, and recreational facilities.
                </p>
                <p className="text-muted-foreground">
                  The campus provides an ideal blend of academic rigor and extracurricular activities, situated away from the hustle and bustle of the city, allowing students to focus on their studies while enjoying a vibrant campus life.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/about/campus" className="flex items-center gap-2">
                    Take a virtual tour
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {campusImages.map((image, i) => (
                  <div key={image.alt} className="relative">
                    <div className="overflow-hidden rounded-lg aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <p className="mt-1 text-xs text-center text-muted-foreground">{image.caption}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="facilities">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {campusFacilities.map((facility) => (
                <Link key={facility.title} href={facility.link}>
                  <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <facility.icon className="h-10 w-10 mb-4 text-primary" />
                      <h3 className="font-medium mb-1">{facility.title}</h3>
                      <p className="text-sm text-muted-foreground">{facility.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="gallery">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {campusGalleryImages.map((image, i) => (
                <div
                  key={image.alt}
                  className="relative overflow-hidden rounded-lg aspect-square group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transition-transform group-hover:scale-110 duration-700"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="mt-6 text-center">
              <Button asChild variant="outline">
                <Link href="/gallery" className="flex items-center gap-2">
                  View Full Gallery
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
