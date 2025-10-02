import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin, Building2, GraduationCap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="min-h-screen text-foreground">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <Globe className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold">ISSO</span>
                        </div>
                        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
                            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Home
                            </Link>
                            <Link href="/about" className="text-foreground font-medium hover-underline-slide">
                                About
                            </Link>
                            <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Projects
                            </Link>
                            <a href="/#regions" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Regions
                            </a>
                            <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Our Team
                            </Link>
                            <Link href="/competitions" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Competitions
                            </Link>
                        </div>
                        <div className="w-20"></div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance hover-lift">
                            About ISSO
                        </h1>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 px-6 bg-muted/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-8 hover-scale">Mission</h2>
                        <p className="text-2xl text-muted-foreground mb-12 italic hover-gradient">
                            "To unite students in STEM internationally and locally to tackle issues around the world"
                        </p>
                        <p className="text-lg text-muted-foreground">
                            The International Students STEM Organization was founded with the desire to create a more unified STEM
                            community for students locally while also creating a global network of students in STEM who will work together to
                            solve problems that exist around the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Structure */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6 hover-scale">Structure</h2>
                        <p className="text-xl text-muted-foreground">Our organization</p>
                    </div>

                    {/* International Level */}
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                                    <Image
                                        src="/placeholder.jpg"
                                        alt="Global network visualization"
                                        width={500}
                                        height={300}
                                        className="rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Globe className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold hover-letter-space">International</h3>
                                </div>
                                <p className="text-muted-foreground text-lg">
                                    Our organization is an international organization with members all around the world. On an
                                    international level, the organization will decide what fundraising and technical projects that will be
                                    worked on globally. It will also organize international events.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Region Level */}
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                                    <Image
                                        src="/placeholder.jpg"
                                        alt="Regional map showing Southeast Asia"
                                        width={500}
                                        height={300}
                                        className="rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold hover-letter-space">Region</h3>
                                </div>
                                <p className="text-muted-foreground text-lg">
                                    A region is an area consisting of divisions in a geographical area such as South East Asia.
                                    Regions will communicate with the organization on an international level to receive and propose
                                    projects. It may also hold various regional events such as conferences.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Division Level */}
                    <div className="mb-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                                    <Image
                                        src="/placeholder.jpg"
                                        alt="City/local area visualization"
                                        width={500}
                                        height={300}
                                        className="rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold hover-letter-space">Division</h3>
                                </div>
                                <p className="text-muted-foreground text-lg">
                                    It is an area consisting of a collection of nearby chapters. It may consist of a single city or a
                                    collection of nearby towns and villages for more rural areas. It will act as a local STEM circle that will
                                    host various events as make improvements to the STEM community for in the division.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Chapter Level */}
                    <div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
                                    <Image
                                        src="/placeholder.jpg"
                                        alt="School/university building"
                                        width={500}
                                        height={300}
                                        className="rounded-xl object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold hover-letter-space">Chapter</h3>
                                </div>
                                <p className="text-muted-foreground text-lg">
                                    The smallest unit that our organization consist of is a chapter. It consists of a single school. It
                                    communicates with other chapters in the division to help organize local division events and
                                    communicates with the division for regional and international projects and contributes to them.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="border-t border-border py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <Globe className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="text-lg font-bold">ISSO</span>
                        </div>
                        <p className="text-muted-foreground text-center">
                            © 2024 International Students STEM Organization. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                                Home
                            </Link>
                            <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                                Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}