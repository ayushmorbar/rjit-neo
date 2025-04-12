"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Trophy, Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Student achievements data
const studentAchievements = [
  {
    id: "a1",
    name: "Harsh Shrivastava",
    image: "https://ext.same-assets.com/56103054.jpeg",
    achievement: "Selected for internship at National University of Singapore. Presently working as Data Analyst in Flipkart.",
    year: "2024",
    department: "Computer Science",
  },
  {
    id: "a2",
    name: "Nikhil Pathak",
    image: "https://ext.same-assets.com/3606292076.jpeg",
    achievement: "Created a Start-up by the name KetchupHub, a food pre-ordering service provider App.",
    year: "2023",
    department: "Computer Science",
  },
  {
    id: "a3",
    name: "Kamna Chaudhary",
    image: "https://ext.same-assets.com/230778154.jpeg",
    achievement: "First ever female Microsoft Student Partner from RJIT.",
    year: "2023",
    department: "Information Technology",
  },
  {
    id: "a4",
    name: "Amit Shukla",
    image: "https://ext.same-assets.com/626099136.jpeg",
    achievement: "Selected as Power Programmer by Infosys on a package of 9.8 LPA.",
    year: "2024",
    department: "Computer Science",
  },
  {
    id: "a5",
    name: "Abhishek Jain",
    image: "https://ext.same-assets.com/2196422711.jpeg",
    achievement: "Selected by TCS on a package of 7.8 LPA. Certified Cloud Developer by Microsoft and Oracle.",
    year: "2023",
    department: "Computer Science",
  },
  {
    id: "a6",
    name: "Rohan Dhupar",
    image: "https://ext.same-assets.com/2007738979.jpeg",
    achievement: "Achieved 132nd rank among 81000 data Scientists around the world at Kaggle.",
    year: "2024",
    department: "Computer Science",
  },
  {
    id: "a7",
    name: "Ayush Sharma",
    image: "https://ext.same-assets.com/3329683769.jpeg",
    achievement: "Selected as Dean of School of AI for Gwalior Chapter.",
    year: "2022",
    department: "Computer Science",
  },
  {
    id: "a8",
    name: "Nikita Singh",
    image: "https://ext.same-assets.com/2677013426.jpeg",
    achievement: "Won the Silver Medal in Badminton in 2nd Student Olympic Asian Games 2019-20.",
    year: "2020",
    department: "Electrical Engineering",
  },
]

// Testimonial data
const testimonials = [
  {
    id: "t1",
    name: "Rahul Sharma",
    image: "https://ext.same-assets.com/56103054.jpeg",
    role: "Software Engineer, Google",
    quote: "The knowledge and experience I gained at RJIT has been invaluable in my career. The faculty members are experts in their fields and always ready to help students grow.",
    batch: "CSE, 2018",
  },
  {
    id: "t2",
    name: "Priya Gupta",
    image: "https://ext.same-assets.com/230778154.jpeg",
    role: "Product Manager, Microsoft",
    quote: "RJIT provided me with a strong foundation in both technical and soft skills. The industry exposure through internships and guest lectures played a crucial role in shaping my career.",
    batch: "IT, 2020",
  },
  {
    id: "t3",
    name: "Arjun Singh",
    image: "https://ext.same-assets.com/2196422711.jpeg",
    role: "Founder, TechWave",
    quote: "The entrepreneurial mindset fostered at RJIT encouraged me to start my own venture. The mentorship and guidance from the faculty members were instrumental in my journey.",
    batch: "ECE, 2019",
  },
  {
    id: "t4",
    name: "Sneha Patel",
    image: "https://ext.same-assets.com/2677013426.jpeg",
    role: "Research Scientist, ISRO",
    quote: "The research opportunities at RJIT helped me explore my passion for space technology. The rigorous academic curriculum prepared me well for the challenges in the research field.",
    batch: "ME, 2017",
  },
]

export function AchievementsSection() {
  const [activeTab, setActiveTab] = useState("achievements")
  const [autoplay, setAutoplay] = useState(true)

  // Autoplay for testimonials
  useEffect(() => {
    if (!autoplay || activeTab !== "testimonials") return

    const interval = setInterval(() => {
      const nextBtn = document.querySelector("[data-carousel-next]") as HTMLButtonElement
      if (nextBtn) nextBtn.click()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, activeTab])

  return (
    <section className="py-12 bg-muted/40">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-8">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our students have achieved remarkable success in various fields
          </motion.p>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveTab("achievements")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "achievements"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <Trophy className="h-4 w-4" />
              Student Achievements
            </button>
            <button
              onClick={() => {
                setActiveTab("testimonials")
                setAutoplay(true)
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "testimonials"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <Quote className="h-4 w-4" />
              Alumni Testimonials
            </button>
          </div>
        </div>

        {activeTab === "achievements" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentAchievements.slice(0, 8).map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-20 w-20 mb-4">
                        <AvatarImage src={student.image} alt={student.name} />
                        <AvatarFallback>{student.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-medium text-lg">{student.name}</h3>
                      <div className="flex gap-2 mt-1 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {student.department}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {student.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{student.achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col p-6">
                          <Quote className="h-8 w-8 text-muted-foreground/50 mb-4" />
                          <p className="text-sm text-muted-foreground mb-6 flex-grow">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={testimonial.image} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{testimonial.name}</h4>
                              <div className="flex flex-col xs:flex-row xs:gap-2 text-xs text-muted-foreground">
                                <span>{testimonial.role}</span>
                                <span className="hidden xs:block">•</span>
                                <span>{testimonial.batch}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4 gap-2">
                <CarouselPrevious className="static relative translate-x-0 translate-y-0" />
                <CarouselNext className="static relative translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </motion.div>
        )}
      </div>
    </section>
  )
}
