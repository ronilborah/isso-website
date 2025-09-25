import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Award, BookOpen, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { ProjectCarousel } from "@/components/project-carousel"
import Link from "next/link"

export default function HomePage() {
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
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">
              International Students
              <span className="block text-primary">STEM Organization</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-pretty leading-relaxed">
              Empowering international students in STEM fields through community, mentorship, and opportunities for
              academic and professional excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Get Involved <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About ISSO Section */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-accent text-accent-foreground">About ISSO</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Our Mission</h2>
            <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-12 text-balance leading-relaxed">
              "To unite students in STEM internationally and locally to tackle issues around the world"
            </blockquote>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The International Students STEM Organization was founded with the desire to create a more unified STEM
              community for students locally while also creating a global network of students in STEM who will work
              together to solve problems that exist around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary text-primary-foreground">Featured Projects</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Innovation in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              ISSO works on a variety of technical, fundraising, educational, and event projects with participation from chapters and divisions all around the world. Additionally, each region, division, and chapter may independently work on their own projects for propose ideas for international projects.

              Each division will also be able to independently work on their own projects for their own area
            </p>
          </div>

          <ProjectCarousel
            projects={[
              {
                title: "Teaching Girls In Afghanistan",
                longDescription: "Providing STEM education to the Afghanistan girls as they were banned from secondary education through online classes with supporting their internet costs through gofundme.",
                image: "/placeholder-dxfef.png",

              },
              {
                title: "ISSO Scholarship",
                longDescription: "Plans on providing funding to various causes including:\n\n• Funding for materials/equipment/etc for students working on STEM projects with positive community/global impact\n\n• Talented, low-income students wanting to take part in overseas academic competition events\n\n• Resources for STEM education\n\nTo make sure that everyone has great opportunities and education in STEM.",
                image: "/placeholder.jpg",
              },
              {
                title: "Virtual Global STEM Celebration",

                longDescription: "An international online event where students in STEM can celebrate different cultures, take part in fun debate in STEM topics, friendly academic competitions, among other fun events.",
                image: "/placeholder.svg",

              },
              {
                title: "Engaging STEM Education",
                longDescription: "Providing STEM education to the underprivileged, but in creative ways to provide quality and engaging education such as through fun skits and drama.",

                image: "/diverse-group-of-international-students-working-to.jpg",

              },
              {
                title: "Improving electricity and internet in Afghanistan",

                longDescription: "This is a technical/engineering project thinking of solutions to improve electricity and internet access in Afghanistan. Girls in Afghanistan rely on online education due to being banned from schools and universities. However, power cuts due to the suspension of connections with countries that provide Afghanistan with electricity have created difficulties accessing online education.",
                image: "/professional-headshot-of-young-african-woman-in-en.jpg",

              }
            ]}
            autoplay={false}
          />
        </div>
      </section>





      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent text-accent-foreground">Our Impact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Achievements that matter</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Measuring success through the accomplishments of our community and the lasting impact we create together.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-card border-border text-center p-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-2">2,500+</h3>
              <p className="text-muted-foreground">Students Supported</p>
            </Card>

            <Card className="bg-card border-border text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-2">150+</h3>
              <p className="text-muted-foreground">Research Publications</p>
            </Card>

            <Card className="bg-card border-border text-center p-8">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-muted-foreground">Job Placement Rate</p>
            </Card>

            <Card className="bg-card border-border text-center p-8">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-2">75+</h3>
              <p className="text-muted-foreground">Countries Represented</p>
            </Card>
          </div>

          {/* Achievement Highlights */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Recent Milestones</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">National Science Foundation Grant</h4>
                    <p className="text-muted-foreground">
                      Awarded $2.5M to expand our mentorship programs and research initiatives across 20 universities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Global Partnership Network</h4>
                    <p className="text-muted-foreground">
                      Established partnerships with 50+ universities and 200+ industry leaders worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Innovation Challenge Winner</h4>
                    <p className="text-muted-foreground">
                      Our student teams won 15 national competitions in engineering, AI, and biotechnology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder-dxfef.png" alt="ISSO Achievement Ceremony" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
