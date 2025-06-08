"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Target, Lightbulb, Heart, Users, Brain, Eye, Rocket, Star, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 rounded-full bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <Link href="/">
              <Button variant="outline" className="mb-6 border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-5xl font-bold mb-6">
              About Team <span className="text-yellow-300">bleulegs</span> 🚀
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our journey, values, and what drives us to excel in FIRST LEGO League competition!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Story
                </span>{" "}
                📖
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2022, Team bleulegs began as a group of passionate students who shared a love for robotics,
                problem-solving, and making a positive impact in our community. What started as after-school curiosity
                has evolved into an internationally competitive team.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our name "bleulegs" represents our Australian roots (blue for our beautiful skies and seas) and our
                determination to "leg it" towards our goals with speed and purpose! 🏃‍♂️💨
              </p>
              <div className="space-y-4">
                {[
                  { year: "2022", event: "Team Formation", desc: "Four students unite with a shared vision" },
                  { year: "2023", event: "First Competition", desc: "Rookie season brings unexpected success" },
                  { year: "2024", event: "International Level", desc: "Competing at the highest levels" },
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{milestone.event}</h4>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Team bleulegs working together"
                  width={500}
                  height={400}
                  className="rounded-lg w-full"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-gray-600">Years of Innovation</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIRST Core Values */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              FIRST{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Core Values
              </span>{" "}
              ⭐
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do, from robot design to community outreach!
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: "Discovery",
                description: "We explore new skills and ideas with curiosity and wonder",
                color: "from-red-500 to-pink-500",
                emoji: "🔍",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We use creativity and persistence to solve problems",
                color: "from-yellow-500 to-orange-500",
                emoji: "💡",
              },
              {
                icon: Eye,
                title: "Impact",
                description: "We apply what we learn to improve our world",
                color: "from-green-500 to-emerald-500",
                emoji: "🌍",
              },
              {
                icon: Heart,
                title: "Inclusion",
                description: "We respect each other and embrace our differences",
                color: "from-purple-500 to-pink-500",
                emoji: "❤️",
              },
              {
                icon: Users,
                title: "Teamwork",
                description: "We are stronger when we work together",
                color: "from-blue-500 to-cyan-500",
                emoji: "🤝",
              },
              {
                icon: Brain,
                title: "Fun",
                description: "We enjoy and celebrate what we do!",
                color: "from-indigo-500 to-purple-500",
                emoji: "🎉",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeIn}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${value.color}`} />
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2">
                        {value.title} <span className="text-2xl">{value.emoji}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-center leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Do</span> 🛠️
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FIRST LEGO League challenges us in multiple areas - and we love every bit of it!
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Robot Game 🤖",
                description:
                  "Design, build, and program an autonomous robot to complete missions on a themed game table",
                features: [
                  "Autonomous programming",
                  "Mechanical design",
                  "Strategic planning",
                  "Precision engineering",
                ],
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Innovation Project 💡",
                description: "Identify a real-world problem and develop an innovative solution to help solve it",
                features: [
                  "Research & analysis",
                  "Solution development",
                  "Community engagement",
                  "Presentation skills",
                ],
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Robot Design 🔧",
                description: "Document our engineering process and explain our robot's design decisions",
                features: [
                  "Engineering documentation",
                  "Design iteration",
                  "Problem-solving",
                  "Technical communication",
                ],
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Core Values 🌟",
                description: "Demonstrate FIRST's core values through our teamwork and collaboration",
                features: [
                  "Team collaboration",
                  "Gracious professionalism",
                  "Inclusion & respect",
                  "Fun & celebration",
                ],
                color: "from-yellow-500 to-orange-500",
              },
            ].map((area, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${area.color}`} />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">{area.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${area.color} rounded-full`} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Our Mission 🎯</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl font-light mb-8 leading-relaxed">
                "To inspire young minds through robotics, foster innovation through collaboration, and make a positive
                impact in our community while having an absolute blast doing it!"
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Rocket, title: "Inspire", desc: "Spark curiosity and passion for STEM" },
                  { icon: Star, title: "Innovate", desc: "Push boundaries with creative solutions" },
                  { icon: Heart, title: "Impact", desc: "Make a difference in our community" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Learn More? 🚀</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our team members, check out our robot, or see our competition achievements!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                </Button>
              </Link>
              <Link href="/robot">
                <Button variant="outline" size="lg">
                  <Award className="w-5 h-5 mr-2" />
                  See Our Robot
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
