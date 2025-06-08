"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Star, Heart, Zap, Target, Brain } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Ben Harvey",
      role: "Teacher & Lead Coordinator",
      bio: "Mr Harvey helps lead us on our FLL journey!",
      skills: ["Being cool 😎"],
      color: "bg-blue-500",
      emoji: "🍵",
    },
    {
      name: "Samantha Reader",
      role: "Teacher & Lead Coordinator",
      bio: "Miss Reader helps lead us on our FLL journey!",
      skills: ["Being cool 😎"],
      color: "bg-purple-500",
      emoji: "👩‍💻",
    },
    {
      name: "Rylan Gabriel",
      role: "Team Captain & Robot Game",
      bio: "Rylan leads our robotic game efforts and planning for the Robotics Game sector of First Lego League.",
      skills: ["LEGO EV3", "Python", "Team Leadership", "Strategic Robot Designs", "LEGO Spike Scratch"],
      color: "bg-red-500",
      emoji: "👑",
    },
    {
      name: "Linus Kang",
      role: "Innovation Programming Lead & Robot Game",
      bio: "Linus does all the programming for our innovation project, his primary skill in this area being AI Development and Web Development!",
      skills: ["Python", "Web & App Development", "Node.js + Express", "LEGO Spike Scratch"],
      color: "bg-blue-500",
      emoji: "💻",
    },
    {
      name: "Charles Yu",
      role: "Robot Game, Robot Design & Team Planner",
      bio: "Charles participates in mostly the robotics game aspect of FLL as well as planning for the game! He also covers the Robotics Design sector of FLL.",
      skills: ["Python", "LEGO Spike Scratch", "Video Editing"],
      color: "bg-yellow-500",
      emoji: "🤖",
    },
    {
      name: "Arjav Rabari",
      role: "Robot Game & Innovation Design",
      bio: "Arjav creates robot runs with Rylan in the robotics sector as well as designing our innovation project 3D model.",
      skills: ["Solidworks", "LEGO Spike Scratch", "Fusion 360"],
      color: "bg-green-500",
      emoji: "👻",
    },
    {
      name: "Aiden Tir",
      role: "Lead Innovation Design",
      bio: "Aiden is responsible for everything regarding 3D design of our innovation project.",
      skills: ["Solidworks", "3D printing & modeling", "Fusion 360"],
      color: "bg-purple-500",
      emoji: "👾",
    },
    {
      name: "Ethan Ding",
      role: "Innovation Design",
      bio: "Ethan helps design the innovation project with Aiden.",
      skills: ["Solidworks", "3D printing & modeling", "Fusion 360"],
      color: "bg-orange-500",
      emoji: "👾",
    },
    {
      name: "Narman Garimella",
      role: "Robot Game",
      bio: "Narman helps Rylan and Arjav on their robot runs, as well as designing some of his own.",
      skills: ["LEGO Spike Scratch", "Robot Run Creations"],
      color: "bg-amber-500",
      emoji: "🎈",
    },
    {
      name: "Xavier Ashton",
      role: "Robot Game",
      bio: "Xavier helps Linus and Charles on their robot runs, as well as designing some of his own.",
      skills: ["LEGO Spike Scratch", "Robot Run Creations"],
      color: "bg-cyan-500",
      emoji: "🕹️",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <section className="py-16 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 text-white relative overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-12 h-8 rounded-sm shadow-lg ${
              ["bg-red-600", "bg-blue-600", "bg-yellow-600", "bg-green-600"][i % 4]
            }`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="absolute -top-1 left-1 w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="absolute -top-1 right-1 w-2 h-2 bg-white/30 rounded-full"></div>
          </motion.div>
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <Link href="/">
              <Button className="mb-6 bg-white/20 border-2 border-white text-white hover:bg-white/30 font-bold">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl font-black mb-6">
              Meet Team <span className="text-yellow-300">Bleulegs</span> 👥
            </h1>
            <p className="text-xl font-medium opacity-90 max-w-3xl mx-auto">
              Get to know the amazing FLL competitors who make our team special - each bringing unique skills,
              perspectives, and lots of LEGO enthusiasm!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, number: "10", label: "Team Members", color: "bg-red-500", emoji: "👥" },
              { icon: Star, number: "15+", label: "Combined Skills", color: "bg-blue-500", emoji: "⭐" },
              { icon: Heart, number: "100%", label: "Team Spirit", color: "bg-green-500", emoji: "❤️" },
              { icon: Zap, number: "∞", label: "LEGO Energy", color: "bg-yellow-500", emoji: "⚡" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-2">{stat.emoji}</div>
                    <div className="text-3xl font-black text-gray-800 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-bold text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Our <span className="text-red-600">Amazing</span> Team 🌟
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              10 unique individuals united by a shared passion for robotics and innovation!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="h-full border-2 border-gray-200 hover:border-gray-400 hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-2 ${member.color}`} />

                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          className={`w-20 h-20 ${member.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {member.emoji}
                        </motion.div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-black text-gray-900 mb-1">{member.name}</CardTitle>
                          <CardDescription className="text-black-600 font-bold mb-2">{member.role}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-600 leading-relaxed font-medium">{member.bio}</p>

                      <div>
                        <h4 className="font-black text-gray-900 mb-3 flex items-center">
                          <Star className="w-4 h-4 mr-2 text-blue-600" />
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs font-medium">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Dynamics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              How We <span className="text-blue-600">Work Together</span> 🤝
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Our diverse FLL skills and personalities create the perfect blend for tackling any challenge!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Collaborative Building",
                description: "We brainstorm LEGO solutions together, combining different perspectives",
                icon: Users,
                color: "bg-red-500",
                emoji: "🧱",
              },
              {
                title: "Skill Sharing",
                description: "Everyone teaches and learns from each other, growing our FLL knowledge",
                icon: Star,
                color: "bg-blue-500",
                emoji: "📚",
              },
              {
                title: "Core Values",
                description: "We celebrate successes together and support each other through challenges",
                icon: Heart,
                color: "bg-green-500",
                emoji: "❤️",
              },
              {
                title: "Continuous Learning",
                description: "We're always exploring new LEGO techniques and FLL strategies",
                icon: Brain,
                color: "bg-yellow-500",
                emoji: "🚀",
              },
            ].map((dynamic, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{dynamic.emoji}</div>
                    <h3 className="font-black text-gray-900 mb-3">{dynamic.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{dynamic.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-6">Want to See What We've Built? 🤖</h2>
            <p className="text-lg font-medium opacity-90 mb-8 max-w-2xl mx-auto">
              Now that you know our team, check out our amazing LEGO robot and see our FLL competition achievements!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/robot">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                >
                  <Target className="w-5 h-5 mr-2" />
                  See Our Robot
                </Button>
              </Link>
              <Link href="/awards">
                <Button className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-bold" size="lg">
                  <Star className="w-5 h-5 mr-2" />
                  View Awards
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
