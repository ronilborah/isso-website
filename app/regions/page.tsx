import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, ArrowLeft, MapPin, Users, Building2, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function RegionsPage() {
    const regions = [
        {
            name: "South East Asia",
            description: "Includes countries such as Brunei, Burma (Myanmar), Cambodia, Timor-Leste, Indonesia, Laos, Malaysia, the Philippines, Singapore, Thailand and Vietnam",

            color: "bg-blue-100 text-blue-800 border-blue-200",
            icon: "🌏",
            mapImage: "/southeastasia.jpg"
        },
        {
            name: "Central Asia",
            description: "Includes countries such as Afghanistan, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan",

            color: "bg-green-100 text-green-800 border-green-200",
            icon: "�️",
            mapImage: "/centralasia.jpg"
        }
    ]

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <Globe className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold">ISSO</span>
                        </div>
                        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
                            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                                Home
                            </Link>
                            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                                About
                            </Link>
                            <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                                Projects
                            </Link>
                            <a href="/regions" className="text-foreground font-medium">
                                Regions
                            </a>
                            <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors">
                                Our Team
                            </Link>
                            <Link href="/competitions" className="text-muted-foreground hover:text-foreground transition-colors">
                                Competitions
                            </Link>
                        </div>
                        <div className="w-20"></div>
                    </div>
                </div>
            </nav>

            {/* Back to Home */}
            <div className="pt-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge className="mb-6 bg-primary text-primary-foreground">Global Network</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
                            Our Regions
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 text-pretty leading-relaxed">
                            Regions are geographical areas consisting of nearby divisions. These are the list of regions with their divisions and chapters that form our global STEM community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Regions Overview Stats */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">{regions.length}</h3>
                                <p className="text-muted-foreground">Global Regions</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building2 className="w-6 h-6 text-accent-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                                <p className="text-muted-foreground">Countries Covered</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                                <p className="text-muted-foreground">Universities</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="pt-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-6 h-6 text-green-700" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                                <p className="text-muted-foreground">Active Members</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Regions List */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-16">
                        {regions.map((region, regionIndex) => (
                            <Card key={regionIndex} className="overflow-hidden">
                                <CardHeader className="bg-secondary/5">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        <div className="lg:w-1/3">
                                            <div className="aspect-square bg-secondary/10 rounded-lg overflow-hidden">
                                                <img 
                                                    src={region.mapImage} 
                                                    alt={`${region.name} map`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="lg:w-2/3">
                                            <div className="mb-6">
                                                <CardTitle className="text-2xl md:text-3xl mb-4">
                                                    {region.name}
                                                </CardTitle>
                                            </div>
                                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                                                {region.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 bg-secondary/10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Want to Start a Chapter in Your Area?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We're expanding globally and looking for passionate students and professionals to establish new chapters and divisions in their regions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            Start a Chapter
                        </Button>
                        <Button size="lg" variant="outline">
                            Join Existing Chapter
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-border">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Globe className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold">ISSO</span>
                    </div>
                    <p className="text-muted-foreground">
                        International Students STEM Organization
                    </p>
                    <div className="mt-4">
                        <a href="mailto:istudentsstemo@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                            istudentsstemo@gmail.com
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}