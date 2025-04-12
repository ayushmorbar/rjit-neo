"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"

import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted/40 py-6 md:py-10">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Important Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/admissions/procedure" className="text-muted-foreground hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link href="/academics/departments" className="text-muted-foreground hover:text-primary transition-colors">Departments</Link></li>
              <li><Link href="/facilities/library" className="text-muted-foreground hover:text-primary transition-colors">Library</Link></li>
              <li><Link href="https://rgpv.ac.in" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">RGPV Login</Link></li>
              <li><Link href="https://erp.eshiksa.net/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Fee Portal</Link></li>
              <li><Link href="https://workspace.google.com/intl/en-US/gmail/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Google Workspace</Link></li>
              <li><Link href="https://www.office.com/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">MS365 Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic space-y-2 text-muted-foreground">
              <div className="flex flex-col">
                <span className="font-medium">Phone:</span>
                <span>+91-(07524)-274320</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Email:</span>
                <span>rjit_bsft@yahoo.com</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Address:</span>
                <span>BSF Academy, Tekanpur,</span>
                <span>Gwalior, Madhya Pradesh</span>
                <span>Pincode: 475005</span>
              </div>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex flex-col">
                <span className="font-medium">Monday-Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Sunday & Holidays</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">View on Map</h3>
            <div className="h-52 w-full overflow-hidden rounded-md bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6251416247813!2d78.28175591535009!3d26.040899599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c2b2d8738ceb%3A0xd36461d58c3b3829!2sRustamji%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1649929240548!5m2!1sen!2sin"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                aria-hidden="false"
                tabIndex={0}
                title="RJIT Location Map"
              />
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://ext.same-assets.com/3072099643.jpeg"
              alt="RJIT Logo"
              className="h-10 w-auto"
            />
            <span className="text-xs md:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Rustamji Institute of Technology. All rights reserved.
            </span>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <span className="text-xs text-muted-foreground">
              Developed by Ayush Morbar ✍️ | Crafted with ❤️ by Offbeats
            </span>
            <Link
              href="https://www.instagram.com/rjit_bsf/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">RJIT Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
