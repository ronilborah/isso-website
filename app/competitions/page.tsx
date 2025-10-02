import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, ArrowLeft, Trophy, Award, Calendar, Users, DollarSign, Video, Calculator } from "lucide-react"
import Link from "next/link"

export default function CompetitionsPage() {
    const competitions = [
        {
            title: "ISSO Math/Science Competition",
            type: "Math & Science",
            description: "This is the second competition we have hosted, another international competition. Participants compete by solving questions in 2 hours.",
            status: "Completed",
            icon: Calculator,
            prizes: [
                { place: "1st place", amount: "$60" },
                { place: "2nd place", amount: "$30" },
                { place: "3rd place", amount: "$20" }
            ],
            winners: [
                {
                    place: "1st place",
                    name: "Rafia Ikhtiari",
                    image: "/placeholder.svg"
                },
                {
                    place: "2nd place",
                    name: "Fahima Jafari",
                    image: "/placeholder.svg"
                },
                {
                    place: "3rd place",
                    name: "Shohra Azami",
                    image: "/placeholder.svg"
                }
            ]
        },
        {
            title: "ISSO STEM Video Competition 2023",
            type: "Video Competition",
            description: "We are hosting our first student organized video competition! The competition is open to all students globally aged 11-19. Simply choose one of the 3 prompts below and make a video of length 1-3 minutes.",
            status: "Completed",
            icon: Video,
            details: [
                "Open to students aged 11-19 globally",
                "Video length: 1-3 minutes",
                "Format: Documentary, animation, etc.",
                "Judged on: Creativity, Engagement, Aesthetics"
            ],
            prizes: [
                { place: "1st place", amount: "$200 gift card (Amazon, Apple, Steam, Google Play, Visa), certificate and video featured on website" },
                { place: "2nd place", amount: "$100 gift card (Amazon, Apple, Steam, Google Play, Visa), certificate and video featured on website" },
                { place: "3rd place", amount: "$50 gift card (Amazon, Apple, Steam, Google Play, Visa), certificate and video featured on website" }
            ],
            prompts: [
                {
                    title: "Prompt 1",
                    description: "Create a video on an important topic or discovery in Physics and your thoughts on how it has affected the present or how it may affect the future"
                },
                {
                    title: "Prompt 2",
                    description: "Create a video on a topic or phenomena in Biology that you think has had the greatest impact in the past decade, justifying your claim"
                },
                {
                    title: "Prompt 3",
                    description: "Create a video on a way in which chemical sciences have been used to solve sustainability challenges on earth"
                }
            ],
            winners: [
                {
                    place: "1st place",
                    name: "Meneka Menon",
                    image: "/placeholder.svg",
                    video: "Satellite dish animation"
                },
                {
                    place: "2nd place",
                    name: "Iravati Joshi",
                    image: "/placeholder.svg",
                    video: "Space and marine life themed"
                },
                {
                    place: "3rd place",
                    name: "Shazia Akrabi",
                    image: "/placeholder.svg",
                    video: "Renewable energy presentation"
                }
            ]
        }
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-800 border-green-200"
            case "Ongoing":
                return "bg-blue-100 text-blue-800 border-blue-200"
            case "Upcoming":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
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
                            <Link href="/team" className="text-muted-foreground hover:text-foreground transition-colors hover-underline-slide">
                                Our Team
                            </Link>
                            <a href="/competitions" className="text-foreground font-medium hover-underline-slide">
                                Competitions
                            </a>
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
                        <Badge className="mb-6 bg-primary text-primary-foreground">Competitions</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance hover-lift">
                            ISSO Competitions
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 text-pretty leading-relaxed">
                            Showcasing talent and innovation through international STEM competitions that bring together students from around the world to compete, learn, and excel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Competitions List */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-20">
                        {competitions.map((competition, index) => {
                            const IconComponent = competition.icon
                            return (
                                <div key={index} className="space-y-8">
                                    {/* Competition Header */}
                                    <Card className="overflow-hidden">
                                        <CardHeader className="bg-secondary/5">
                                            <div className="flex flex-col lg:flex-row gap-6 items-start">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                                        <IconComponent className="w-8 h-8 text-primary" />
                                                    </div>
                                                    <div>
                                                        <Badge className={`border mb-2 ${getStatusColor(competition.status)}`}>
                                                            {competition.status}
                                                        </Badge>
                                                        <CardTitle className="text-2xl md:text-3xl mb-2">
                                                            {competition.title}
                                                        </CardTitle>
                                                        <p className="text-muted-foreground">
                                                            {competition.type}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {competition.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                    </Card>

                                    {/* Competition Details */}
                                    <div className="grid lg:grid-cols-3 gap-8">
                                        {/* Prizes */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2">
                                                    <DollarSign className="w-5 h-5 text-primary" />
                                                    Prizes
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-3">
                                                    {competition.prizes.map((prize, prizeIndex) => (
                                                        <div key={prizeIndex} className="flex items-start gap-3 p-3 bg-secondary/10 rounded-lg">
                                                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                                <span className="text-xs font-bold text-primary">
                                                                    {prizeIndex + 1}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p className="font-semibold text-sm">{prize.place}</p>
                                                                <p className="text-xs text-muted-foreground">{prize.amount}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Additional Details */}
                                        {competition.details && (
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2">
                                                        <Users className="w-5 h-5 text-primary" />
                                                        Competition Details
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-2">
                                                        {competition.details.map((detail, detailIndex) => (
                                                            <div key={detailIndex} className="flex items-center gap-2">
                                                                <div className="w-2 h-2 bg-primary/40 rounded-full flex-shrink-0" />
                                                                <p className="text-sm text-muted-foreground">{detail}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Prompts for Video Competition */}
                                        {competition.prompts && (
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2">
                                                        <Video className="w-5 h-5 text-primary" />
                                                        Competition Prompts
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-4">
                                                        {competition.prompts.map((prompt, promptIndex) => (
                                                            <div key={promptIndex} className="p-3 bg-secondary/10 rounded-lg">
                                                                <h4 className="font-semibold text-sm mb-2">{prompt.title}</h4>
                                                                <p className="text-xs text-muted-foreground leading-relaxed">
                                                                    {prompt.description}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}

                                        {/* Winners placeholder for Math competition */}
                                        {!competition.prompts && (
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="flex items-center gap-2">
                                                        <Calendar className="w-5 h-5 text-primary" />
                                                        Competition Format
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-primary/40 rounded-full flex-shrink-0" />
                                                            <p className="text-sm text-muted-foreground">Duration: 2 hours</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-primary/40 rounded-full flex-shrink-0" />
                                                            <p className="text-sm text-muted-foreground">Format: Problem solving</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-primary/40 rounded-full flex-shrink-0" />
                                                            <p className="text-sm text-muted-foreground">International participants</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}
                                    </div>

                                    {/* Winners Section */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Trophy className="w-5 h-5 text-primary" />
                                                Competition Winners
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {competition.winners.map((winner, winnerIndex) => (
                                                    <Card key={winnerIndex} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                                                        <CardContent className="p-6">
                                                            <div className="text-center">
                                                                <div className="relative mb-4">
                                                                    <img
                                                                        src={winner.image}
                                                                        alt={winner.name}
                                                                        className="w-20 h-20 rounded-full object-cover mx-auto border-3 border-primary/20"
                                                                    />
                                                                    <div className="absolute -bottom-1 -right-1">
                                                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-background ${winnerIndex === 0 ? 'bg-yellow-100' :
                                                                                winnerIndex === 1 ? 'bg-gray-100' : 'bg-orange-100'
                                                                            }`}>
                                                                            <Award className={`w-4 h-4 ${winnerIndex === 0 ? 'text-yellow-600' :
                                                                                    winnerIndex === 1 ? 'text-gray-600' : 'text-orange-600'
                                                                                }`} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <Badge className={`border mb-3 text-xs ${winnerIndex === 0 ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                                                                        winnerIndex === 1 ? 'bg-gray-100 text-gray-800 border-gray-200' :
                                                                            'bg-orange-100 text-orange-800 border-orange-200'
                                                                    }`}>
                                                                    {winner.place}
                                                                </Badge>
                                                                <h3 className="text-lg font-bold mb-2">{winner.name}</h3>
                                                                {winner.video && (
                                                                    <p className="text-xs text-muted-foreground mb-4">
                                                                        {winner.video}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 bg-secondary/10">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Stay Updated on Future Competitions
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Be the first to know about upcoming ISSO competitions and opportunities to showcase your STEM talents on an international stage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            Join Our Newsletter
                        </Button>
                        <Button size="lg" variant="outline">
                            Follow Our Updates
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