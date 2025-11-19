"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter, Github, Award, Briefcase, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import ReliableImage from "@/components/reliable-image"

// Team data organized by departments
const teamData = {
  leadership: [
    {
      id: 1,
      name: "Alexandra Thompson",
      role: "Chief Executive Officer & Founder",
      department: "Leadership",
      bio: "With over 18 years in technology leadership, Alexandra founded NEXUS TECHNOLOGIES with a vision to bridge the gap between innovation and practical business solutions. She holds an MBA from Stanford and has led digital transformations for Fortune 500 companies.",
      expertise: ["Digital Transformation", "Strategic Planning", "Technology Leadership"],
      certifications: ["MBA", "PMP", "ITIL Master"],
      education: "MBA, Stanford University",
      experience: "18+ years",
      location: "London, UK",
      joined: "2014 (Founder)",
      avatar: "https://source.unsplash.com/random/400x400?woman,executive",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "alexandra@nexustechnologies.org",
      featured: true,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Chief Technology Officer",
      department: "Leadership",
      bio: "Michael brings 15+ years of experience in enterprise architecture and emerging technologies. He holds a PhD in Computer Science from MIT and has published over 30 research papers on cloud computing and AI. He leads our technical innovation and R&D initiatives.",
      expertise: ["Cloud Architecture", "AI/ML", "Enterprise Systems"],
      certifications: ["PhD Computer Science", "AWS Solutions Architect", "Google Cloud Professional"],
      education: "PhD Computer Science, MIT",
      experience: "15+ years",
      location: "London, UK",
      joined: "2015",
      avatar: "https://source.unsplash.com/random/400x400?man,technology",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "michael@nexustechnologies.org",
      featured: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Chief Operations Officer",
      department: "Leadership",
      bio: "Emily oversees global operations and client success with 12 years of experience in project management and business operations. She's a certified PMP and Six Sigma Black Belt, ensuring our projects are delivered on time and exceed client expectations.",
      expertise: ["Operations Management", "Project Delivery", "Process Optimization"],
      certifications: ["PMP", "Six Sigma Black Belt", "ITIL Expert"],
      education: "MSc Business Administration, London Business School",
      experience: "12+ years",
      location: "London, UK",
      joined: "2016",
      avatar: "https://source.unsplash.com/random/400x400?woman,business",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "emily@nexustechnologies.org",
      featured: true,
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Chief Security Officer",
      department: "Leadership",
      bio: "James leads our cybersecurity initiatives with 14 years of experience in information security. He's a CISSP and CISM certified professional who previously worked with government agencies and has expertise in threat intelligence and risk management.",
      expertise: ["Cybersecurity", "Risk Management", "Compliance"],
      certifications: ["CISSP", "CISM", "CEH"],
      education: "MSc Cybersecurity, University of Oxford",
      experience: "14+ years",
      location: "London, UK",
      joined: "2017",
      avatar: "https://source.unsplash.com/random/400x400?man,security",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "james@nexustechnologies.org",
      featured: true,
    },
  ],
  engineering: [
    {
      id: 5,
      name: "Sarah Kim",
      role: "Senior Full-Stack Developer",
      department: "Engineering",
      bio: "Sarah is an expert in modern web technologies with 8 years of experience building scalable applications. She specializes in React, Node.js, and AWS cloud architecture, having delivered enterprise solutions for financial and healthcare sectors.",
      expertise: ["React", "Node.js", "AWS", "TypeScript", "GraphQL"],
      certifications: ["AWS Certified Developer", "MongoDB Professional"],
      education: "MSc Computer Science, Imperial College London",
      experience: "8 years",
      location: "London, UK",
      joined: "2018",
      avatar: "https://source.unsplash.com/random/400x400?woman,developer",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "sarah@nexustechnologies.org",
      featured: true,
    },
    {
      id: 6,
      name: "David Martinez",
      role: "DevOps Engineer",
      department: "Engineering",
      bio: "David specializes in building and maintaining robust CI/CD pipelines and infrastructure as code. With 7 years of experience, he's an expert in containerization, orchestration, and cloud infrastructure automation.",
      expertise: ["Kubernetes", "Docker", "CI/CD", "Terraform", "AWS/Azure"],
      certifications: ["Kubernetes Administrator (CKA)", "AWS DevOps Professional"],
      education: "BSc Computer Engineering, University of Manchester",
      experience: "7 years",
      location: "Manchester, UK",
      joined: "2019",
      avatar: "https://source.unsplash.com/random/400x400?man,devops",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "david@nexustechnologies.org",
      featured: false,
    },
    {
      id: 7,
      name: "Kevin Park",
      role: "Mobile Developer",
      department: "Engineering",
      bio: "Kevin is our mobile development expert with 6 years of experience creating cross-platform and native applications. He has delivered over 20 successful mobile applications across various industries.",
      expertise: ["React Native", "iOS (Swift)", "Android (Kotlin)", "Flutter"],
      certifications: ["Apple Certified iOS Developer", "Google Associate Android Developer"],
      education: "MSc Mobile Computing, University of Edinburgh",
      experience: "6 years",
      location: "Edinburgh, UK",
      joined: "2020",
      avatar: "https://source.unsplash.com/random/400x400?man,mobile",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "kevin@nexustechnologies.org",
      featured: false,
    },
    {
      id: 8,
      name: "Olivia Taylor",
      role: "Backend Developer",
      department: "Engineering",
      bio: "Olivia specializes in building high-performance, scalable backend systems. With expertise in microservices architecture and database optimization, she ensures our solutions can handle enterprise-level demands.",
      expertise: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Kafka"],
      certifications: ["Oracle Certified Professional Java", "Spring Professional"],
      education: "BSc Computer Science, University of Bristol",
      experience: "5 years",
      location: "Bristol, UK",
      joined: "2021",
      avatar: "https://source.unsplash.com/random/400x400?woman,coding",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "olivia@nexustechnologies.org",
      featured: false,
    },
    {
      id: 9,
      name: "Thomas Wright",
      role: "Frontend Developer",
      department: "Engineering",
      bio: "Thomas creates beautiful, responsive, and accessible user interfaces. He's passionate about user experience and performance optimization, ensuring our applications are both visually appealing and highly functional.",
      expertise: ["React", "Vue.js", "CSS/SASS", "Accessibility", "Performance"],
      certifications: ["Frontend Masters Certified", "Accessibility Specialist"],
      education: "BA Digital Design, University of the Arts London",
      experience: "4 years",
      location: "London, UK",
      joined: "2021",
      avatar: "https://source.unsplash.com/random/400x400?man,frontend",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "thomas@nexustechnologies.org",
      featured: false,
    },
  ],
  design: [
    {
      id: 10,
      name: "Lisa Zhang",
      role: "UI/UX Designer",
      department: "Design",
      bio: "Lisa creates intuitive and engaging user experiences through research-driven design. With 7 years of experience, she specializes in design systems, user research, and creating accessible interfaces that delight users.",
      expertise: ["Design Systems", "User Research", "Figma", "Accessibility", "Interaction Design"],
      certifications: ["Certified UX Professional", "Accessibility for Web Design"],
      education: "MA User Experience Design, Royal College of Art",
      experience: "7 years",
      location: "London, UK",
      joined: "2019",
      avatar: "https://source.unsplash.com/random/400x400?woman,designer",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "lisa@nexustechnologies.org",
      featured: true,
    },
    {
      id: 11,
      name: "Daniel Brown",
      role: "Product Designer",
      department: "Design",
      bio: "Daniel translates business requirements into user-centered design solutions. He specializes in product strategy, wireframing, and prototyping, ensuring our products meet both user needs and business objectives.",
      expertise: ["Product Strategy", "Wireframing", "Prototyping", "User Testing"],
      certifications: ["Certified Product Designer", "Agile UX Professional"],
      education: "BSc Product Design, Loughborough University",
      experience: "6 years",
      location: "Birmingham, UK",
      joined: "2020",
      avatar: "https://source.unsplash.com/random/400x400?man,design",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "daniel@nexustechnologies.org",
      featured: false,
    },
  ],
  data: [
    {
      id: 12,
      name: "Robert Johnson",
      role: "Data Scientist",
      department: "Data",
      bio: "Robert transforms complex data into actionable insights. With expertise in machine learning and statistical analysis, he helps our clients make data-driven decisions that drive business growth.",
      expertise: ["Machine Learning", "Python", "Analytics", "Big Data", "Statistical Analysis"],
      certifications: ["Microsoft Certified: Azure Data Scientist", "TensorFlow Developer"],
      education: "PhD Statistics, University of Cambridge",
      experience: "8 years",
      location: "Cambridge, UK",
      joined: "2018",
      avatar: "https://source.unsplash.com/random/400x400?man,data",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "robert@nexustechnologies.org",
      featured: true,
    },
    {
      id: 13,
      name: "Sophia Lee",
      role: "Data Engineer",
      department: "Data",
      bio: "Sophia designs and builds data pipelines and infrastructure that enable efficient data processing and analysis. She specializes in big data technologies and cloud-based data solutions.",
      expertise: ["Apache Spark", "Hadoop", "ETL", "Data Warehousing", "AWS/GCP"],
      certifications: ["Google Professional Data Engineer", "Databricks Certified Engineer"],
      education: "MSc Data Engineering, University College London",
      experience: "5 years",
      location: "London, UK",
      joined: "2020",
      avatar: "https://source.unsplash.com/random/400x400?woman,engineer",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "sophia@nexustechnologies.org",
      featured: false,
    },
  ],
  project: [
    {
      id: 14,
      name: "Maria Gonzalez",
      role: "Project Manager",
      department: "Project Management",
      bio: "Maria ensures our projects are delivered on time, within scope, and within budget. With 9 years of experience in Agile methodologies, she excels at stakeholder management and team coordination.",
      expertise: ["Agile", "Scrum", "Client Relations", "Risk Management", "Resource Planning"],
      certifications: ["PMP", "Scrum Master", "PRINCE2 Practitioner"],
      education: "MBA Project Management, University of Warwick",
      experience: "9 years",
      location: "London, UK",
      joined: "2017",
      avatar: "https://source.unsplash.com/random/400x400?woman,manager",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "maria@nexustechnologies.org",
      featured: true,
    },
    {
      id: 15,
      name: "Andrew Wilson",
      role: "Technical Project Manager",
      department: "Project Management",
      bio: "Andrew bridges the gap between technical teams and business stakeholders. With a background in software development and project management, he ensures technical projects are delivered successfully.",
      expertise: ["Technical Leadership", "Agile", "Software Development Lifecycle", "Risk Management"],
      certifications: ["PMP", "Certified Scrum Master", "ITIL Foundation"],
      education: "MSc Computer Science, University of Glasgow",
      experience: "7 years",
      location: "Glasgow, UK",
      joined: "2019",
      avatar: "https://source.unsplash.com/random/400x400?man,project",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "andrew@nexustechnologies.org",
      featured: false,
    },
  ],
  security: [
    {
      id: 16,
      name: "Emma Clarke",
      role: "Security Analyst",
      department: "Security",
      bio: "Emma identifies and mitigates security vulnerabilities in our systems and client applications. She specializes in penetration testing and security assessments, ensuring our solutions meet the highest security standards.",
      expertise: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing", "OWASP"],
      certifications: ["Certified Ethical Hacker (CEH)", "OSCP", "CompTIA Security+"],
      education: "MSc Cybersecurity, University of Southampton",
      experience: "6 years",
      location: "Southampton, UK",
      joined: "2020",
      avatar: "https://source.unsplash.com/random/400x400?woman,security",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "emma@nexustechnologies.org",
      featured: false,
    },
    {
      id: 17,
      name: "Richard Thompson",
      role: "Security Engineer",
      department: "Security",
      bio: "Richard designs and implements security controls and infrastructure to protect our systems and data. He specializes in cloud security and identity management, ensuring our cloud environments are secure by design.",
      expertise: ["Cloud Security", "Identity Management", "Security Architecture", "Compliance"],
      certifications: ["CISSP", "AWS Security Specialty", "Azure Security Engineer"],
      education: "BSc Computer Security, University of York",
      experience: "8 years",
      location: "York, UK",
      joined: "2018",
      avatar: "https://source.unsplash.com/random/400x400?man,cybersecurity",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "richard@nexustechnologies.org",
      featured: false,
    },
  ],
  support: [
    {
      id: 18,
      name: "William Davis",
      role: "Technical Support Lead",
      department: "Support",
      bio: "William leads our technical support team, ensuring our clients receive timely and effective assistance. With extensive knowledge of our solutions and technologies, he ensures client satisfaction through excellent support.",
      expertise: ["Technical Troubleshooting", "Customer Service", "Knowledge Management", "Support Operations"],
      certifications: ["ITIL Expert", "CompTIA A+", "Microsoft Certified Professional"],
      education: "BSc Information Technology, University of Leeds",
      experience: "10 years",
      location: "Leeds, UK",
      joined: "2016",
      avatar: "https://source.unsplash.com/random/400x400?man,support",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "william@nexustechnologies.org",
      featured: false,
    },
    {
      id: 19,
      name: "Charlotte Evans",
      role: "Client Success Manager",
      department: "Support",
      bio: "Charlotte ensures our clients achieve their desired outcomes with our solutions. She builds strong relationships with clients, understands their needs, and works closely with our teams to ensure client success.",
      expertise: ["Client Relationship Management", "Solution Consulting", "Onboarding", "Training"],
      certifications: ["Certified Customer Success Manager", "ITIL Foundation"],
      education: "BA Business Management, University of Nottingham",
      experience: "7 years",
      location: "Nottingham, UK",
      joined: "2019",
      avatar: "https://source.unsplash.com/random/400x400?woman,customer",
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "charlotte@nexustechnologies.org",
      featured: false,
    },
  ],
}

// Flatten the team data for search functionality
const allTeamMembers = Object.values(teamData).flat()

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              The talented professionals behind NEXUS TECHNOLOGIES' success
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            <ReliableImage
              src="https://source.unsplash.com/random/1200x500?team,office"
              alt="NEXUS TECHNOLOGIES team"
              width={1200}
              height={500}
              className="rounded-lg shadow-xl w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-sm font-medium text-purple-600">Our London headquarters team</div>
              <div className="text-xs text-gray-500">Annual company gathering, 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Tabs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="project">Project</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
            </div>

            {/* All Team Members */}
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allTeamMembers.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Leadership Team */}
            <TabsContent value="leadership">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.leadership.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Engineering Team */}
            <TabsContent value="engineering">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.engineering.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Design Team */}
            <TabsContent value="design">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.design.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Data Team */}
            <TabsContent value="data">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.data.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Project Management Team */}
            <TabsContent value="project">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.project.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Security Team */}
            <TabsContent value="security">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.security.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>

            {/* Support Team */}
            <TabsContent value="support">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamData.support.map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Team in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A diverse group of professionals dedicated to delivering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">19+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">Team Members</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">7</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">Departments</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">Certifications</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">8+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">Years Average Experience</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8">
              We're always looking for talented individuals to join our growing team. Check out our current openings and
              become part of something great.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Team Member Card Component
function TeamMemberCard({ member }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <ReliableImage
          src={member.avatar}
          alt={`${member.name}, ${member.role}`}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
        />
        {member.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-purple-600 text-white hover:bg-purple-700">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-slate-900">{member.name}</CardTitle>
        <CardDescription className="text-purple-600 font-medium">{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-3">{member.bio}</p>

        <div className="flex flex-wrap gap-2">
          {member.expertise.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100">
              {skill}
            </Badge>
          ))}
          {member.expertise.length > 3 && (
            <Badge variant="outline" className="bg-gray-100">
              +{member.expertise.length - 3} more
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{member.certifications[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{member.experience}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Joined {member.joined}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{member.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="p-2">
            <Mail className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="p-2">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" className="p-2">
            <Twitter className="h-4 w-4" />
          </Button>
          {member.github && (
            <Button size="sm" variant="outline" className="p-2">
              <Github className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button size="sm" variant="default">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  )
}
