import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
    const projects = [
        {
            title: "Teaching Girls In Afghanistan",
            longDescription: "Providing STEM education to the Afghanistan girls as they were banned from secondary education through online classes with supporting their internet costs through gofundme.",
            image: "/placeholder-dxfef.png",
            category: "Education",
            status: "Active"
        },
        {
            title: "ISSO Scholarship",
            longDescription: "Plans on providing funding to various causes including:\n\n• Funding for materials/equipment/etc for students working on STEM projects with positive community/global impact\n\n• Talented, low-income students wanting to take part in overseas academic competition events\n\n• Resources for STEM education\n\nTo make sure that everyone has great opportunities and education in STEM.",
            image: "/placeholder.jpg",
            category: "Funding",
            status: "Planning"
        },
        {
            title: "Virtual Global STEM Celebration",
            longDescription: "An international online event where students in STEM can celebrate different cultures, take part in fun debate in STEM topics, friendly academic competitions, among other fun events.",
            image: "/placeholder.svg",
            category: "Events",
            status: "Upcoming"
        },
        {
            title: "Engaging STEM Education",
            longDescription: "Providing STEM education to the underprivileged, but in creative ways to provide quality and engaging education such as through fun skits and drama.",
            image: "/diverse-group-of-international-students-working-to.jpg",
            category: "Education",
            status: "Active"
        },
        {
            title: "Improving electricity and internet in Afghanistan",
            longDescription: "This is a technical/engineering project thinking of solutions to improve electricity and internet access in Afghanistan. Girls in Afghanistan rely on online education due to being banned from schools and universities. However, power cuts due to the suspension of connections with countries that provide Afghanistan with electricity have created difficulties accessing online education.",
            image: "/professional-headshot-of-young-african-woman-in-en.jpg",
            category: "Technology",
            status: "Research"
        }
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-800 border-green-200"
            case "Planning":
                return "bg-blue-100 text-blue-800 border-blue-200"
            case "Upcoming":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
            case "Research":
                return "bg-purple-100 text-purple-800 border-purple-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Education":
                return "bg-primary/10 text-primary border-primary/20"
            case "Funding":
                return "bg-accent/10 text-accent-foreground border-accent/20"
            case "Events":
                return "bg-secondary text-secondary-foreground border-secondary/20"
            case "Technology":
                return "bg-orange-100 text-orange-800 border-orange-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

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
                            <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                                About
                            </a>
                            <a href="/projects" className="text-foreground font-medium">
                                Projects
                            </a>
                            <Link href="/regions" className="text-muted-foreground hover:text-foreground transition-colors">
                                Regions
                            </Link>
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
                        <Badge className="mb-6 bg-primary text-primary-foreground">Our Projects</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
                            Innovation in Action
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 text-pretty leading-relaxed">
                            ISSO works on a variety of technical, fundraising, educational, and event projects with participation from chapters and divisions all around the world. Each project aims to create positive impact and advance STEM education globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects List */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-16">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                            >
                                {/* Project Image */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl" />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <Badge className={`border ${getCategoryColor(project.category)}`}>
                                                {project.category}
                                            </Badge>
                                            <Badge className={`border ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div>
                                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance leading-tight">
                                            {project.title}
                                        </h2>
                                        <div className="text-muted-foreground text-lg leading-relaxed">
                                            {project.longDescription.split('\n').map((line, lineIndex) => (
                                                <span key={lineIndex}>
                                                    {line}
                                                    {lineIndex < project.longDescription.split('\n').length - 1 && <br />}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            variant="default"
                                            size="lg"
                                            className="group/btn"
                                        >
                                            Learn More
                                            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                        >
                                            Get Involved
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 bg-secondary/10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Have an Idea for a Project?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We're always looking for innovative projects that can make a positive impact. Each region, division, and chapter can independently work on their own projects or propose ideas for international projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            Propose a Project
                        </Button>
                        <Button size="lg" variant="outline">
                            Join a Project
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
                </div>
            </footer>
        </div>
    )
}
