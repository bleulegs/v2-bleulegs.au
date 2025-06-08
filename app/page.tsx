"use client"

import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Target,
  Mail,
  Settings,
  Lightbulb,
  Heart,
  UserCheck,
  Brain,
  Eye,
  Play,
  Camera,
  ArrowRight,
  Trophy,
  Cog,
} from "lucide-react"
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

const brickAnimation = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-100">
      {/* LEGO Brick Pattern Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white shadow-lg z-50 border-b-4 border-red-500"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/">
              <motion.div className="flex items-center space-x-3 cursor-pointer" whileHover={{ scale: 1.05 }}>
                {/* LEGO Brick Logo */}
                <div className="relative">
                  <div className="w-12 h-8 bg-red-500 rounded-sm shadow-lg relative">
                    <div className="absolute -top-1 left-1 w-2 h-2 bg-red-600 rounded-full"></div>
                    <div className="absolute -top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <span className="text-2xl font-black text-red-600">Bleulegs</span>
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">Calamvale Community College</div>
                </div>
              </motion.div>
            </Link>

            <div className="hidden md:flex space-x-6">
              {[
                { name: "Our Team", href: "/team" },
                { name: "Awards", href: "/awards" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className="text-gray-700 hover:text-red-600 font-bold transition-colors uppercase tracking-wide text-sm cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-red-400 to-yellow-400">
        {/* LEGO Bricks Floating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-16 h-10 rounded-sm shadow-lg ${
              ["bg-red-500", "bg-blue-500", "bg-yellow-500", "bg-green-500"][i % 4]
            }`}
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="absolute -top-1 left-2 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute -top-1 right-2 w-3 h-3 bg-white/30 rounded-full"></div>
          </motion.div>
        ))}

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            {/* Robot Icon */}
            <div className="w-32 h-32 mx-auto bg-white rounded-lg shadow-2xl flex items-center justify-center mb-6 border-4 border-gray-800">
              <Settings className="w-16 h-16 text-red-600" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-4 text-white drop-shadow-lg"
          >
            Team Bleulegs
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block"
          >
            <p className="text-xl font-bold text-gray-800">FIRST LEGO League Team</p>
            <p className="text-lg text-red-600 font-bold">Brisbane, Australia • Est. 2024</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white font-bold mb-8 max-w-3xl mx-auto drop-shadow-md"
          >
            Building robots, solving problems, and having fun with LEGO bricks! 🤖🧱
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/robot">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold shadow-lg border-2 border-red-800"
              >
                <Play className="w-5 h-5 mr-2" />
                View LIVE Stream
              </Button>
            </Link>
            <Link href="/team">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold shadow-lg border-2 border-blue-800"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet the Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FLL Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-4">FIRST Core Values 🌟</h2>
            <p className="text-lg text-gray-600 font-medium">The foundation of everything we do in FIRST LEGO League</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Target,
                title: "Discovery",
                color: "bg-red-500",
                description: "We explore new skills and ideas",
                emoji: "🔍",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                color: "bg-blue-500",
                description: "We use creativity to solve problems",
                emoji: "💡",
              },
              {
                icon: Eye,
                title: "Impact",
                color: "bg-green-500",
                description: "We apply what we learn to improve our world",
                emoji: "🌍",
              },
              {
                icon: Heart,
                title: "Inclusion",
                color: "bg-yellow-500",
                description: "We respect each other and embrace differences",
                emoji: "❤️",
              },
              {
                icon: UserCheck,
                title: "Teamwork",
                color: "bg-purple-500",
                description: "We are stronger when we work together",
                emoji: "🤝",
              },
              {
                icon: Brain,
                title: "Fun",
                color: "bg-pink-500",
                description: "We enjoy and celebrate what we do!",
                emoji: "🎉",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-400">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto ${value.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-black text-gray-800 flex items-center justify-center gap-2">
                      {value.title} <span className="text-2xl">{value.emoji}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center font-medium">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-red-50 via-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-4">Our FLL Journey 🚀</h2>
            <p className="text-lg text-gray-600 font-medium">Our amazing achievements in FLL competitions!</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { number: "465", label: "Best Robot Score", color: "bg-red-500", emoji: "🎯" },
              { number: "6", label: "Awards Won", color: "bg-blue-500", emoji: "🏆" },
              { number: "3", label: "Competitions", color: "bg-green-500", emoji: "🤖" },
              { number: "2024", label: "Team Founded", color: "bg-yellow-500", emoji: "⭐" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-400 bg-white">
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

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-4">What We Do in FLL 🛠️</h2>
            <p className="text-lg text-gray-600 font-medium">
              Four exciting challenges that make up FIRST LEGO League!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Robot Game 🤖",
                description: "Design, build, and program an autonomous LEGO robot to complete missions",
                features: ["Autonomous programming", "LEGO Mindstorms", "Strategic planning", "Mission challenges"],
                color: "bg-red-500",
                borderColor: "border-red-200",
                bgColor: "bg-red-50",
              },
              {
                title: "Innovation Project 💡",
                description: "Identify a real-world problem and develop an innovative solution",
                features: ["Research & analysis", "Creative solutions", "Community impact", "Presentation skills"],
                color: "bg-blue-500",
                borderColor: "border-blue-200",
                bgColor: "bg-blue-50",
              },
              {
                title: "Robot Design 🔧",
                description: "Document our engineering process and explain our robot's design",
                features: ["Engineering notebook", "Design iterations", "Problem solving", "Technical documentation"],
                color: "bg-green-500",
                borderColor: "border-green-200",
                bgColor: "bg-green-50",
              },
              {
                title: "Core Values 🌟",
                description: "Demonstrate FIRST's core values through teamwork and collaboration",
                features: [
                  "Team collaboration",
                  "Gracious professionalism",
                  "Inclusion & respect",
                  "Fun & celebration",
                ],
                color: "bg-yellow-500",
                borderColor: "border-yellow-200",
                bgColor: "bg-yellow-50",
              },
            ].map((area, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 border-2 ${area.borderColor} ${area.bgColor}`}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-black text-gray-800 mb-2">{area.title}</CardTitle>
                    <CardDescription className="text-gray-600 font-medium leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 ${area.color} rounded-full`} />
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
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

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-gray-800 mb-4">Explore Our Team 🔍</h2>
            <p className="text-lg text-gray-600 font-medium">Dive deeper into our FLL journey!</p>
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
                title: "Meet Our Team",
                description: "Get to know the amazing people behind Bleulegs",
                icon: Users,
                href: "/team",
                color: "bg-red-500",
                emoji: "👥",
              },
              {
                title: "Photo Gallery",
                description: "See photos of our competitions",
                icon: Cog,
                href: "/robot",
                color: "bg-blue-500",
                emoji: "🤖",
              },
              {
                title: "Competition Awards",
                description: "Check out our FLL competition achievements",
                icon: Trophy,
                href: "/awards",
                color: "bg-green-500",
                emoji: "🏆",
              },
              {
                title: "Innovation Project",
                description: "Learn about our latest problem solution",
                icon: Lightbulb,
                href: "/innovation",
                color: "bg-yellow-500",
                emoji: "💡",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={item.href}>
                  <motion.div whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="cursor-pointer">
                    <Card className="h-full border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 bg-white group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{item.emoji}</div>
                        <h4 className="font-black text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 font-medium">{item.description}</p>
                        <div className="flex items-center justify-center text-red-600 group-hover:text-blue-600 transition-colors">
                          <span className="text-sm font-bold">Explore</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-red-500 via-blue-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black mb-4">Let's Connect! 🤝</h2>
            <p className="text-xl font-medium opacity-90 max-w-2xl mx-auto">
              Want to collaborate, sponsor us, learn about FLL, or just say hi? We'd love to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                size="lg"
                className="bg-white/20 border-2 border-white text-white hover:bg-white/30 px-8 py-4 text-lg font-bold"
              >
                <Camera className="w-5 h-5 mr-2" />
                Photo Gallery
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <div className="w-8 h-6 bg-red-500 rounded-sm relative">
              <div className="absolute -top-0.5 left-1 w-1.5 h-1.5 bg-red-600 rounded-full"></div>
              <div className="absolute -top-0.5 right-1 w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            </div>
            <span className="text-xl font-black">Bleulegs</span>
            <span className="text-sm text-gray-400">Calamvale Community College</span>
          </motion.div>
          <p className="text-gray-400 font-medium">© 2024-2025 Bleulegs. Site created by Linus Kang.</p>
        </div>
      </footer>
    </div>
  )
}
