import { MainLayout } from "@/components/layout/main-layout"
import { HeroSection } from "@/components/home/hero-section"
import { NoticesSection } from "@/components/home/notices-section"
import { CoursesSection } from "@/components/home/courses-section"
import { CampusSection } from "@/components/home/campus-section"
import { PlacementSection } from "@/components/home/placement-section"
import { AchievementsSection } from "@/components/home/achievements-section"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <NoticesSection />
      <CoursesSection />
      <CampusSection />
      <PlacementSection />
      <AchievementsSection />
    </MainLayout>
  )
}
