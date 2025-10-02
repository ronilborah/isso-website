import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, ArrowLeft, Mail, Linkedin, Github, Users, Crown, Star, Award } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
    const founders = [
        {
            name: "Qurban Ali Hussaini",
            role: "Founder & President",
            university: "Abdul Rahim Shaheed Boys High School",
            location: "Afghanistan",
            image: "/team/qurban.jpg",
            bio: "As an accomplished English Instructor, Co-founder of Youth Voice Network, Doha Debates Ambassador and a National Debate Champion, I have had the privilege of speaking at the Global Education Network. My passion lies in addressing global issues and finding solutions through the International Students STEM Organization (ISSO).",
            linkedin: "#",
            email: "qurban@istudentsstemo.org"
        },
        {
            name: "Justin Park",
            role: "Founder & Head of International Outreach",
            university: "UWCSEA Dover",
            location: "Singapore",
            image: "/team/justinpark.jpg",
            bio: "With my experiences founding many international organizations and startups such as Kuratek, United World College Math Tournament, and UWCHacks, along with taking part in math competitions since 3rd grade, I'm eager to strengthen the connection between student STEM communities internationally and locally.",
            linkedin: "#",
            email: "justin@istudentsstemo.org"
        },
        {
            name: "Sejoon Park",
            role: "Founder & President",
            university: "UWCSEA Dover",
            location: "Singapore",
            image: "/placeholder.svg",
            bio: "Passionate about uniting international STEM students and creating global opportunities for collaboration and innovation in science and technology.",
            linkedin: "#",
            email: "sejoon@istudentsstemo.org"
        },
        {
            name: "Abigail Lom",
            role: "Founder & President",
            university: "UWCSEA Dover",
            location: "Singapore",
            image: "/team/abigail.jpg",
            bio: "Through the leadership skills gained through many responsibilities such as Tigerwatch GC, Math Ambassadors, Korean Drumming, and my academic passion from many math competitions such as UKMT, BMO, AMC, AIME, I aspire to unite STEM students through this organization and share my passion globally.",
            linkedin: "https://www.linkedin.com/in/abigail-eom-8118372aa/",
            email: "abigail@istudentsstemo.org"
        }
    ]

    const advisors = [
        {
            name: "Woo Chul Chung",
            role: "Faculty Advisor",
            university: "Korea Maritime & Ocean University",
            department: "Assistant Professor",
            image: "/team/woochulchung.jpg",
            bio: "Assistant Professor providing academic guidance and mentorship to ISSO's international initiatives and STEM education programs.",
            linkedin: "https://www.linkedin.com/in/woo-chul-chung-808a245a/",
            email: "wchung@kmou.ac.kr"
        }
    ]

    const leaders = [
        {
            name: "Claire Lee",
            role: "Chair",
            university: "International School",
            major: "STEM Studies",
            image: "/placeholder.svg",
            bio: "Leading ISSO's strategic direction and coordinating organizational initiatives across all regions.",
            linkedin: "#"
        },
        {
            name: "Seokho Kang",
            role: "Co-Chair",
            university: "International School",
            major: "STEM Studies",
            image: "/placeholder.svg",
            bio: "Supporting organizational leadership and managing key strategic partnerships globally.",
            linkedin: "#"
        },
        {
            name: "Yubin Park",
            role: "Secretary",
            university: "International School",
            major: "STEM Studies",
            image: "/placeholder.svg",
            bio: "Managing organizational documentation, meeting coordination, and administrative operations.",
            linkedin: "#"
        },
        {
            name: "Subin Park",
            role: "Media Director",
            university: "International School",
            major: "STEM Studies",
            image: "/placeholder.svg",
            bio: "Managing social media presence, communications, and public outreach initiatives.",
            linkedin: "#"
        },
        {
            name: "Gina Hwang",
            role: "Finance Director",
            university: "International School",
            major: "STEM Studies",
            image: "/placeholder.svg",
            bio: "Overseeing financial operations, budget management, and funding initiatives for ISSO programs.",
            linkedin: "#"
        }
    ]

    const subjectLeaders = [
        {
            name: "Jonathan Bolos",
            role: "Biology Lead",
            university: "International School",
            major: "Biology & Life Sciences",
            image: "/team/jonathan.jpg",
            expertise: "Molecular Biology, Genetics, Biotechnology",
            linkedin: "#"
        },
        {
            name: "Noella Park",
            role: "Chemistry Lead",
            university: "International School",
            major: "Chemistry",
            image: "/placeholder.svg",
            expertise: "Organic Chemistry, Analytical Chemistry, Chemical Research",
            linkedin: "#"
        },
        {
            name: "Seokho Kang",
            role: "Physics Lead",
            university: "International School",
            major: "Physics",
            image: "/placeholder.svg",
            expertise: "Theoretical Physics, Applied Physics, Research Methods",
            linkedin: "#"
        },
        {
            name: "Claire Lee",
            role: "Mathematics Lead",
            university: "International School",
            major: "Mathematics",
            image: "/placeholder.svg",
            expertise: "Advanced Mathematics, Statistics, Mathematical Modeling",
            linkedin: "#"
        },
        {
            name: "Claire Lee",
            role: "Economics Lead",
            university: "International School",
            major: "Economics",
            image: "/placeholder.svg",
            expertise: "Economic Theory, Data Analysis, Financial Modeling",
            linkedin: "#"
        }
    ]

    const getRoleIcon = (role: string) => {
        if (role.includes("Founder")) return Crown
        if (role.includes("Advisor")) return Star
        if (role.includes("Director") || role.includes("Head")) return Users
        return Award
    }

    const getRoleBadgeColor = (role: string) => {
        if (role.includes("Founder")) return "bg-yellow-100 text-yellow-800 border-yellow-200"
        if (role.includes("Advisor")) return "bg-purple-100 text-purple-800 border-purple-200"
        if (role.includes("Director") || role.includes("Head")) return "bg-blue-100 text-blue-800 border-blue-200"
        return "bg-green-100 text-green-800 border-green-200"
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
                            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Home
                            </Link>
                            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                About
                            </Link>
                            <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Projects
                            </Link>
                            <Link href="/regions" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Regions
                            </Link>
                            <a href="/team" className="text-foreground font-medium hover-underline-slide">
                                Our Team
                            </a>
                            <Link href="/competitions" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
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
                        <Badge className="mb-6 bg-primary text-primary-foreground">Our Team</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance hover-lift">
                            Meet The Team
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 text-pretty leading-relaxed">
                            Our diverse team of passionate STEM students and professionals from around the world, working together to create opportunities and drive innovation in international education.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-scale">Founders</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The visionaries who started ISSO with a dream to unite international STEM students globally.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {founders.map((founder, index) => (
                            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="relative mb-6">
                                            <img
                                                src={founder.image}
                                                alt={founder.name}
                                                className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                                            />
                                            <div className="absolute -bottom-2 -right-2">
                                                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-background">
                                                    <Crown className="w-4 h-4 text-yellow-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 hover-color-shift">{founder.name}</h3>
                                        <Badge className={`border mb-3 ${getRoleBadgeColor(founder.role)}`}>
                                            {founder.role}
                                        </Badge>
                                        <div className="text-xs text-muted-foreground mb-3">
                                            <p className="font-medium">{founder.university}</p>
                                            <p>{founder.location}</p>
                                        </div>
                                        <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                                            {founder.bio}
                                        </p>
                                        <div className="flex flex-col gap-2">
                                            <Button size="sm" variant="outline" className="flex items-center gap-2 w-full">
                                                <Mail className="w-3 h-3" />
                                                Contact
                                            </Button>
                                            {founder.linkedin && founder.linkedin !== "#" && (
                                                <Button size="sm" variant="outline" className="flex items-center gap-2 w-full" asChild>
                                                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                                                        <Linkedin className="w-3 h-3" />
                                                        LinkedIn
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisor Section */}
            <section className="py-16 px-6 bg-secondary/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-scale">Advisor</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Experienced faculty member providing guidance and mentorship to our organization.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        {advisors.map((advisor, index) => (
                            <Card key={index} className="overflow-hidden">
                                <CardContent className="p-8">
                                    <div className="flex flex-col md:flex-row items-center gap-6">
                                        <div className="relative">
                                            <img
                                                src={advisor.image}
                                                alt={advisor.name}
                                                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                                            />
                                            <div className="absolute -bottom-2 -right-2">
                                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center border-2 border-background">
                                                    <Star className="w-4 h-4 text-purple-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-2xl font-bold mb-2 hover-color-shift">{advisor.name}</h3>
                                            <Badge className={`border mb-3 ${getRoleBadgeColor(advisor.role)}`}>
                                                {advisor.role}
                                            </Badge>
                                            <div className="text-sm text-muted-foreground mb-4">
                                                <p className="font-medium">{advisor.university}</p>
                                                <p>{advisor.department}</p>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed mb-6">
                                                {advisor.bio}
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <Button size="sm" variant="outline" className="flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    Contact
                                                </Button>
                                                {advisor.linkedin && advisor.linkedin !== "#" && (
                                                    <Button size="sm" variant="outline" className="flex items-center gap-2" asChild>
                                                        <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
                                                            <Linkedin className="w-4 h-4" />
                                                            LinkedIn
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leaders Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-scale">Leaders</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Executive team members driving strategic initiatives and managing regional operations.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leaders.map((leader, index) => (
                            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="text-center">
                                        <div className="relative mb-4">
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-24 h-24 rounded-full object-cover mx-auto border-3 border-primary/20"
                                            />
                                            <div className="absolute -bottom-1 -right-1">
                                                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center border-2 border-background">
                                                    <Users className="w-3 h-3 text-blue-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 hover-color-shift">{leader.name}</h3>
                                        <Badge className={`border mb-3 text-xs ${getRoleBadgeColor(leader.role)}`}>
                                            {leader.role}
                                        </Badge>
                                        <div className="text-xs text-muted-foreground mb-3">
                                            <p className="font-medium">{leader.university}</p>
                                            <p>{leader.major}</p>
                                        </div>
                                        <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                                            {leader.bio}
                                        </p>
                                        <Button size="sm" variant="outline" className="w-full">
                                            Contact
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subject Leaders Section */}
            <section className="py-16 px-6 bg-secondary/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-scale">Subject Leaders</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Domain experts leading specialized STEM initiatives and research projects across various fields.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subjectLeaders.map((leader, index) => (
                            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="text-center">
                                        <div className="relative mb-4">
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-20 h-20 rounded-full object-cover mx-auto border-3 border-primary/20"
                                            />
                                            <div className="absolute -bottom-1 -right-1">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center border-2 border-background">
                                                    <Award className="w-3 h-3 text-green-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 hover-color-shift">{leader.name}</h3>
                                        <Badge className={`border mb-3 text-xs ${getRoleBadgeColor(leader.role)}`}>
                                            {leader.role}
                                        </Badge>
                                        <div className="text-xs text-muted-foreground mb-3">
                                            <p className="font-medium">{leader.university}</p>
                                            <p>{leader.major}</p>
                                        </div>
                                        <div className="text-xs text-muted-foreground mb-4">
                                            <p className="font-semibold text-primary mb-1">Expertise:</p>
                                            <p className="leading-relaxed">{leader.expertise}</p>
                                        </div>
                                        <Button size="sm" variant="outline" className="w-full">
                                            Contact
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Apply Today Call to Action */}
            <section className="py-20 px-6 bg-primary/5">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Apply Today</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We are eager to have new leaders onboard for ISSO! Feel free to send an email if interested in joining our team and making a global impact.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                            <Mail className="w-5 h-5" />
                            Apply Now
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a href="mailto:istudentsstemo@gmail.com" className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                istudentsstemo@gmail.com
                            </a>
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
                    <p className="text-muted-foreground mb-2">
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